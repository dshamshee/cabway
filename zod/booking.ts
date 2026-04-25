import { z } from "zod";

export const zodBooking = z.object({
    bookingType: z.enum(['city', 'outstation', 'airport']),
    vehicleType: z.enum(['mini', 'sedan', 'suv', 'any']),
    pickupLocation: z.string().min(1, {message:"Enter a valid pickup location"}),
    dropLocation: z.string().min(1, {message:"Enter a valid drop location"}),
    travelDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid travel date"),
    pickupTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Enter a valid time in HH:MM format"),
    name: z.string().min(3, {message:"Name must be at least 3 characters long"}).max(50, {message:"Name cannot be longer than 50 characters"}),
    phoneNumber: z
      .string()
      .trim()
      .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
}).strict();

export type zodBookingType = z.infer<typeof zodBooking>;