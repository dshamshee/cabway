
export interface Booking {
    bookingType: 'city' | 'outstation' | 'airport';
    vehicleType: 'mini' | 'sedan' | 'suv' | 'any';
    pickupLocation: string;
    dropLocation: string;
    travelDate: Date;
    pickupTime: Date;
    name: string;
    phoneNumber: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
    _id: string;
    __v: number;
}




