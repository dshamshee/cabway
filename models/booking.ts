import mongoose from "mongoose";
import type { Booking } from "../types/booking";


const bookingSchema = new mongoose.Schema<Booking>({
    bookingType: {
        type: String,
        required: true,
    },
    vehicleType: {
        type: String,
        required: true,
    },
    pickupLocation: {
        type: String,
        required: true,
    },
    dropLocation: {
        type: String,
        required: true,
    },
    travelDate: {
        type: Date,
        required: true,
    },
    pickupTime: {
        type: Date,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });


const BookingModel = mongoose.models.Booking || mongoose.model<Booking>("Booking", bookingSchema);

export default BookingModel;