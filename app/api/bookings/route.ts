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
      subject: `New Booking Request | ${validated.name}`,
      html: `
        <div style="margin:0;padding:24px;background:#f3f4f6;font-family:Arial,sans-serif;color:#111827;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
            <tr>
              <td style="padding:20px 24px;background:#111827;color:#ffffff;">
                <p style="margin:0;font-size:12px;letter-spacing:1px;text-transform:uppercase;opacity:0.9;">Cab Way Services</p>
                <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;">New Booking Request Received</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px;">
                <p style="margin:0 0 14px;font-size:14px;color:#4b5563;">A customer has submitted a new booking request from the website.</p>
                <p style="margin:0;display:inline-block;padding:6px 10px;border-radius:999px;background:#ecfdf5;color:#047857;font-size:12px;font-weight:700;text-transform:uppercase;">
                  Action Needed: Confirm by Call
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 16px;">
                <h2 style="margin:0 0 10px;font-size:16px;color:#111827;">Trip Details</h2>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
                  <tr><td style="padding:10px 12px;background:#f9fafb;font-size:13px;color:#6b7280;width:38%;">Booking ID</td><td style="padding:10px 12px;font-size:13px;color:#111827;font-weight:600;">${booking._id}</td></tr>
                  <tr><td style="padding:10px 12px;background:#f9fafb;font-size:13px;color:#6b7280;">Booking Type</td><td style="padding:10px 12px;font-size:13px;color:#111827;">${validated.bookingType}</td></tr>
                  <tr><td style="padding:10px 12px;background:#f9fafb;font-size:13px;color:#6b7280;">Vehicle Type</td><td style="padding:10px 12px;font-size:13px;color:#111827;">${validated.vehicleType}</td></tr>
                  <tr><td style="padding:10px 12px;background:#f9fafb;font-size:13px;color:#6b7280;">Pickup Location</td><td style="padding:10px 12px;font-size:13px;color:#111827;">${validated.pickupLocation}</td></tr>
                  <tr><td style="padding:10px 12px;background:#f9fafb;font-size:13px;color:#6b7280;">Drop Location</td><td style="padding:10px 12px;font-size:13px;color:#111827;">${validated.dropLocation}</td></tr>
                  <tr><td style="padding:10px 12px;background:#f9fafb;font-size:13px;color:#6b7280;">Travel Date</td><td style="padding:10px 12px;font-size:13px;color:#111827;">${validated.travelDate}</td></tr>
                  <tr><td style="padding:10px 12px;background:#f9fafb;font-size:13px;color:#6b7280;">Pickup Time</td><td style="padding:10px 12px;font-size:13px;color:#111827;">${validated.pickupTime}</td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 24px;">
                <h2 style="margin:0 0 10px;font-size:16px;color:#111827;">Customer Details</h2>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
                  <tr><td style="padding:10px 12px;background:#f9fafb;font-size:13px;color:#6b7280;width:38%;">Customer Name</td><td style="padding:10px 12px;font-size:13px;color:#111827;font-weight:600;">${validated.name}</td></tr>
                  <tr><td style="padding:10px 12px;background:#f9fafb;font-size:13px;color:#6b7280;">Phone Number</td><td style="padding:10px 12px;font-size:13px;color:#111827;">${validated.phoneNumber}</td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 24px;background:#f9fafb;border-top:1px solid #e5e7eb;">
                <p style="margin:0;font-size:12px;color:#6b7280;">This email was generated automatically from the Cab Way booking system.</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ message: "Booking received successfully." }, { status: 201 });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json({ message: "Failed to create booking request." }, { status: 400 });
  }
}
