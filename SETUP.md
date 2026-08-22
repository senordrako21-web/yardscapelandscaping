# Yardscape upgraded free booking system

Your logo and contact details are included:
- Email: Yardscapelandscaping@gmail.com
- Phone: +1 876 342-7405
- Instagram: @yardscapelandscapingservices

## Features
- Booking calendar with live booked-time blocking
- Double-booking protection using Google Apps Script LockService
- Google Sheet booking database
- Business and customer email notifications
- Private admin calendar at `admin.html`
- Logo in header/contact/footer

## Google Apps Script
1. Create a Google Sheet in the Google account used for Yardscape.
2. Extensions → Apps Script. Paste `apps-script/Code.gs`.
3. Change `ADMIN_KEY` from `CHANGE_THIS_TO_A_PRIVATE_KEY` to a private key you choose.
4. Deploy → New deployment → Web app. Execute as **Me**. Who has access: **Anyone**.
5. Authorize and copy the `/exec` URL.
6. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` in both `booking.html` and `admin.html` with that URL.

## Publish free
Upload `index.html`, `booking.html`, `admin.html`, `style.css`, `script.js`, and the `assets` folder to a GitHub Pages repository.

## Admin
Open your GitHub Pages site plus `/admin.html`, enter your private admin key, and load the calendar. Bookmark it on your Android phone.

## Current schedule
8 AM through 4 PM, hourly. Sundays are disabled.

## Prices
General Lawncare — JMD 8,000
Hedging — JMD 5,000
Sprinkler Installation — JMD 12,000
Plant Bed Maintenance — Custom quote
Flowers — Custom quote


## Logo
The logo file is stored at the website root as `yardscape-logo.jpg`. Upload it in the same folder as `index.html` so the logo works reliably on GitHub Pages, including mobile uploads.
