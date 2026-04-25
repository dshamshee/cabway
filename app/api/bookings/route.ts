import { NextResponse } from "next/server";
import { Resend } from "resend";

import dbConnect from "@/config/dbConnection";
import BookingModel from "@/models/booking";
import { zodBooking } from "@/zod/booking";

function parsePickupDateTime(travelDate: string, pickupTime: string): Date {
  const [hours, minutes] = pickupTime.split(":").map(Number);
  const date = new Date(`${travelDate}T00:00:00`);
  date.setHours(hours, minutes, 0, 0);
  return date;
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const validated = zodBooking.parse(payload);
    const travelDate = new Date(`${validated.travelDate}T00:00:00`);

    if (Number.isNaN(travelDate.getTime())) {
      return NextResponse.json({ message: "Invalid travel date." }, { status: 400 });
    }

    await dbConnect();

    const booking = await BookingModel.create({
      ...validated,
      travelDate,
      pickupTime: parsePickupDateTime(validated.travelDate, validated.pickupTime),
    });

    if (!process.env.RESEND_API_KEY || !process.env.COMPANY_BOOKING_EMAIL || !process.env.MAIL_FROM) {
      return NextResponse.json(
        {
          message: "Booking saved, but email setup is missing. Please configure mail environment values.",
        },
        { status: 201 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: process.env.COMPANY_BOOKING_EMAIL,
      subject: `New Cab Booking - ${validated.name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Booking Type:</strong> ${validated.bookingType}</p>
        <p><strong>Vehicle Type:</strong> ${validated.vehicleType}</p>
        <p><strong>Pickup Location:</strong> ${validated.pickupLocation}</p>
        <p><strong>Drop Location:</strong> ${validated.dropLocation}</p>
        <p><strong>Travel Date:</strong> ${validated.travelDate}</p>
        <p><strong>Pickup Time:</strong> ${validated.pickupTime}</p>
        <p><strong>Name:</strong> ${validated.name}</p>
        <p><strong>Phone Number:</strong> ${validated.phoneNumber}</p>
        <p><strong>Booking ID:</strong> ${booking._id}</p>
      `,
    });

    return NextResponse.json({ message: "Booking received successfully." }, { status: 201 });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json({ message: "Failed to create booking request." }, { status: 400 });
  }
}
