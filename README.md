# Cab Way

Cab Way is an SEO-focused cab booking website built with Next.js App Router.
Customers can browse services, view cab categories, and submit a booking request.
Each booking is saved to MongoDB and emailed to the company inbox using Resend.

## Features

- Landing page with service and fleet sections.
- Booking form with required details and validation.
- API endpoint to save bookings and send email notifications.
- City-specific SEO pages under `/services/[city]`.
- Technical SEO support with metadata, `sitemap.xml`, and `robots.txt`.

## Required Environment Variables

Create a `.env` file using `.env.example`:

```bash
cp .env.example .env
```

Set the following values:

- `MONGODB_URI` - MongoDB connection string.
- `RESEND_API_KEY` - API key from Resend.
- `COMPANY_BOOKING_EMAIL` - Email address that receives booking requests.
- `MAIL_FROM` - Verified sender email/domain for Resend.
- `NEXT_PUBLIC_APP_URL` - Public base URL (for metadata and sitemap).

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and Quality

```bash
npm run lint
npm run build
```

## Adding More SEO City Pages

City pages are generated from `serviceCities` in `lib/cab-data.ts`.

To add a city:
1. Add the city slug to `serviceCities`.
2. Add display name in `cityNames`.
3. Rebuild/deploy to include the new static city route in sitemap.
