export const serviceCities = [
  "jaipur",
  "delhi",
  "gurgaon",
  "noida",
] as const;

export type ServiceCity = (typeof serviceCities)[number];

export const cityNames: Record<ServiceCity, string> = {
  jaipur: "Jaipur",
  delhi: "Delhi",
  gurgaon: "Gurgaon",
  noida: "Noida",
};

export const cabTypes = [
  {
    slug: "mini",
    title: "Mini",
    image:
      "/cars/mini.png",
    passengers: "Up to 4 passengers",
    luggage: "2 small bags",
    bestFor: "Daily city rides and short-distance travel",
    fuelType: "Petrol / CNG",
    startingFare: "Starts from Rs 13/km",
  },
  {
    slug: "sedan",
    title: "Sedan",
    image:
      "/cars/sadan.png",
    passengers: "Up to 4 passengers",
    luggage: "3 medium bags",
    bestFor: "Comfortable city and airport transfers",
    fuelType: "Petrol / Diesel",
    startingFare: "Starts from Rs 15/km",
  },
  {
    slug: "suv",
    title: "SUV",
    image:
      "/cars/suv.jpeg",
    passengers: "Up to 6 passengers",
    luggage: "4 large bags",
    bestFor: "Family travel and outstation trips",
    fuelType: "Diesel",
    startingFare: "Starts from Rs 19/km",
  },
] as const;

export const sampleBookings = [
  {
    id: "BK-1021",
    customerName: "Ankit Sharma",
    vehicleType: "Sedan",
    route: "Jaipur Airport to Malviya Nagar",
    distance: "12 km",
    estimatedFare: "Rs 480",
    travelDate: "27 Apr 2026, 09:30 AM",
    image:
      "/cars/sadan.png",
  },
  {
    id: "BK-1028",
    customerName: "Rohit Verma",
    vehicleType: "SUV",
    route: "Jaipur to Ajmer",
    distance: "135 km",
    estimatedFare: "Rs 2,950",
    travelDate: "27 Apr 2026, 06:00 AM",
    image:
      "/cars/suv.jpeg",
  },
  {
    id: "BK-1035",
    customerName: "Priya Mehta",
    vehicleType: "Mini",
    route: "Vaishali Nagar to Railway Station",
    distance: "8 km",
    estimatedFare: "Rs 290",
    travelDate: "28 Apr 2026, 05:20 PM",
    image:
        "/cars/mini.png",
  },
] as const;
