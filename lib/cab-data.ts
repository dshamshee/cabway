export const serviceCities = [
  "patna",
  "siwan",
  "gopalganj",
  "muzaffarpur",
  "darbhanga",
  "gaya",
  "motihari",
  "hajipur",
] as const;

export type ServiceCity = (typeof serviceCities)[number];

export const cityNames: Record<ServiceCity, string> = {
  patna: "Patna",
  siwan: "Siwan",
  gopalganj: "Gopalganj",
  muzaffarpur: "Muzaffarpur",
  darbhanga: "Darbhanga",
  gaya: "Gaya",
  motihari: "Motihari",
  hajipur: "Hajipur",
};

export const cabTypes = [
  {
    slug: "mini",
    title: "Mini / Hatchback",
    image: "/cars/mini.png",
    passengers: "Up to 4 passengers",
    luggage: "2 small bags",
    bestFor: "Daily city rides and short-distance travel",
    fuelType: "Petrol / CNG",
    startingFare: "Starts from Rs 12/km",
  },
  {
    slug: "sedan",
    title: "Sedan",
    image: "/cars/sadan.png",
    passengers: "Up to 4 passengers",
    luggage: "3 medium bags",
    bestFor: "Comfortable city and airport transfers",
    fuelType: "Petrol / Diesel",
    startingFare: "Starts from Rs 15/km",
  },
  {
    slug: "suv",
    title: "SUV",
    image: "/cars/suv.jpeg",
    passengers: "Up to 6 passengers",
    luggage: "4 large bags",
    bestFor: "Family travel and outstation trips",
    fuelType: "Diesel",
    startingFare: "Starts from Rs 19/km",
  },
] as const;

export const sampleBookings = [
  {
    id: "BK-3001",
    customerName: "Nadeem Khan",
    vehicleType: "Sedan",
    route: "Patna to Muzaffarpur",
    distance: "74 km",
    estimatedFare: "Rs 1,799",
    travelDate: "28 Apr 2026, 09:30 AM",
    image: "/cars/sadan.png",
    rating: 5,
    review: "Very smooth ride and polite driver. Pickup was on time and fare was exactly as shared.",
  },
  {
    id: "BK-3002",
    customerName: "Rohit Verma",
    vehicleType: "SUV",
    route: "Siwan to Patna",
    distance: "154 km",
    estimatedFare: "Rs 2,599",
    travelDate: "28 Apr 2026, 06:00 AM",
    image: "/cars/suv.jpeg",
    rating: 5,
    review: "Cab was clean and comfortable for family travel. Booking support was quick and helpful.",
  },
  {
    id: "BK-3003",
    customerName: "Priya Mehta",
    vehicleType: "Mini / Hatchback",
    route: "Patna to Darbhanga",
    distance: "140 km",
    estimatedFare: "Rs 2,699",
    travelDate: "29 Apr 2026, 05:20 PM",
    image: "/cars/mini.png",
    rating: 4,
    review: "Driver reached before time and drive quality was great. I will book again.",
  },
  {
    id: "BK-3004",
    customerName: "Shahnawaz Alam",
    vehicleType: "SUV",
    route: "Patna to Gaya",
    distance: "102 km",
    estimatedFare: "Rs 3,899",
    travelDate: "29 Apr 2026, 07:10 AM",
    image: "/cars/suv.jpeg",
    rating: 5,
    review: "Outstation trip was hassle-free with safe driving throughout the route.",
  },
  {
    id: "BK-3005",
    customerName: "Neha Kumari",
    vehicleType: "Sedan",
    route: "Patna Airport to Hajipur",
    distance: "33 km",
    estimatedFare: "Rs 899",
    travelDate: "30 Apr 2026, 11:40 AM",
    image: "/cars/sadan.png",
    rating: 4,
    review: "Airport drop was timely and communication from the team was clear.",
  },
  {
    id: "BK-3006",
    customerName: "Amit Raj",
    vehicleType: "SUV",
    route: "Siwan to Gorakhpur",
    distance: "126 km",
    estimatedFare: "Rs 2,999",
    travelDate: "30 Apr 2026, 08:15 PM",
    image: "/cars/suv.jpeg",
    rating: 5,
    review: "Comfortable long-distance journey with transparent pricing and no surprises.",
  },
] as const;

export const faqs = [
  {
    question: "How can I book a cab with Cab Way?",
    answer:
      "You can book a cab in three ways: fill the booking form on this site, call us on 9430856366, or email cabwayservices@gmail.com. Our team confirms every booking by phone before pickup.",
  },
  {
    question: "Which cities and routes does Cab Way cover?",
    answer:
      "Cab Way operates across Bihar including Patna, Siwan, Gopalganj, Muzaffarpur, Darbhanga, Gaya, Motihari, and Hajipur, plus popular outstation routes such as Siwan to Patna, Patna to Gorakhpur, and Siwan to Delhi.",
  },
  {
    question: "What types of cabs are available?",
    answer:
      "We offer Mini / Hatchback, Sedan, and SUV cabs. Choose based on your group size, luggage, and comfort preference. Mini cabs are ideal for city rides, Sedans for airport transfers, and SUVs for family or outstation travel.",
  },
  {
    question: "Is the fare fixed or per kilometer?",
    answer:
      "Outstation trips are billed per kilometer with transparent starter fares (Mini from Rs 12/km, Sedan from Rs 15/km, SUV from Rs 19/km). Airport transfers and short city rides have fixed rates that we share before confirming the booking.",
  },
  {
    question: "Do you offer 24/7 cab booking support?",
    answer:
      "Yes. Our booking team is reachable 24x7 for urgent rides, late-night airport pickups, and outstation trip requests.",
  },
  {
    question: "How is payment collected for the ride?",
    answer:
      "Payment is collected after the ride. We accept cash, UPI, and bank transfer. There are no hidden charges beyond the fare confirmed during booking.",
  },
] as const;
