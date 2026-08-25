# Yardscape Website — Updated Package

This package includes the Yardscape public homepage, booking page, admin calendar, service visuals, captured Yardscape logo, CSS/JavaScript, and Apps Script backend.

## Website files

- index.html — homepage with Services, About Us and Contact sections
- booking.html — booking form with date/time selection and server-side double-booking protection
- admin.html — private booking calendar
- style.css — site styling
- script.js — mobile navigation
- assets/yardscape-logo.png — captured Yardscape logo
- assets/hero.jpg — hero visual cropped from the supplied homepage image
- assets/lawncare.jpg
- assets/plant-bed.jpg
- assets/flowers.jpg
- assets/hedging.jpg
- assets/sprinkler.jpg
- apps-script/Code.gs — Google Apps Script backend

## Removed from the website

- Instagram
- Gallery section
- Why Choose Us section
- Quick Links footer column

## Business details

Yardscapelandscaping@gmail.com
+1 876 342-7405
St. Ann, Jamaica — Serving Any Area Islandwide

Business hours shown on the site:
Monday – Friday: 8:00 AM – 6:00 PM
Saturday: 8:00 AM – 2:00 PM
Sunday: Closed

## Services and pricing

- General Lawncare — JMD 8,000
- Plant Bed Maintenance — Quote Required
- Flowers Planting — Quote Required
- Flower Hedging — JMD 5,000
- Sprinkler Installation — JMD 12,000

## Apps Script URL

The booking and admin pages are connected to the existing deployment URL in the HTML files.

## Important after changing Code.gs

In Google Apps Script:

1. Paste the complete apps-script/Code.gs.
2. Save.
3. Deploy → Manage deployments.
4. Edit the existing web app deployment.
5. Select a new version.
6. Deploy.
7. Keep the existing /exec URL.

The ADMIN_KEY in Code.gs must match the key you enter at /admin.html.

## GitHub Pages

Upload the website files and the complete assets folder to the repository root. Then use GitHub Settings → Pages → Deploy from branch → main → /(root).

Open /admin.html on the live website for the private booking calendar.
