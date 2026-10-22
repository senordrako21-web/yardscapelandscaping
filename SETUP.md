# Yardscape Website + Booking System — Rebuild Package

This package keeps the existing Yardscape homepage markup, fonts, colours, spacing, service cards, images, and layout as its design baseline. The homepage `index.html`, original `style.css`, and `assets/` are retained; the booking and admin pages have been rebuilt to connect to the Apps Script backend.

## Package contents
- `index.html` — existing homepage design (unchanged)
- `style.css` — existing shared styles (unchanged)
- `booking.html` — customer booking form with date availability checks and duplicate-date prevention
- `admin.html` — private admin calendar, booking status management, and recent booking logs
- `apps-script/Code.gs` — Apps Script backend for Google Sheets, booking locking, emails, admin status changes, and audit logs
- `assets/` — existing Yardscape imagery and logo

## Important before publishing
The files are prepared, but they are not live until you deploy the Apps Script and upload the site files to your hosting provider. Do not delete your old Google Sheet. Confirm the correct target spreadsheet ID first so bookings do not go into a different file.

## 1. Configure the Google Sheet
1. Open the exact Google spreadsheet where you want bookings stored.
2. Copy only the spreadsheet ID from its URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`.
3. Open the Apps Script project attached to your booking service, or create a standalone Apps Script project.
4. Replace the contents of `Code.gs` with `apps-script/Code.gs` from this package.
5. In Apps Script, open **Project Settings → Script properties** and add:
   - `YARDSCAPE_SHEET_ID` = the spreadsheet ID from step 2
   - `YARDSCAPE_ADMIN_KEY` = a long, private key you choose (do not use the old `Yardscape-maxAdmin` key)
6. Save the project.
7. Select `initializeYardscape` in the function dropdown and click **Run**. Authorize access if prompted. This creates/repairs the `Bookings` and `Booking Logs` tabs **inside the spreadsheet ID you specified**. It does not silently create a second spreadsheet.
8. Check the execution result. If setup fails, resolve that error before deploying.

### Expected sheet tabs
`Bookings` has columns for timestamp, service, price/quote, date, time, customer name, email, phone, location, notes, status, and booking ID.

`Booking Logs` records booking creation, rejected attempts for already-booked dates, status changes, email failures, and API/system errors.

## 2. Deploy Apps Script
1. Click **Deploy → Manage deployments**.
2. Edit the existing Web App deployment if you want to keep its existing `/exec` URL. Choose **New version**.
3. Set **Execute as: Me** and **Who has access: Anyone**.
4. Deploy and copy the Web App URL ending in `/exec`.
5. If the URL changed, replace the `API` value at the top of both `booking.html` and `admin.html` with the new URL. Keep the URL inside quotes.
6. Test the URL by opening `YOUR_WEB_APP_URL?action=health` in a browser. A healthy service should return JSON with `ok: true` and the configured spreadsheet name. If it says the spreadsheet is not configured, recheck Script Properties.

## 3. Publish the website files
1. Upload `index.html`, `booking.html`, `admin.html`, `style.css`, and the entire `assets` folder to the same root folder in your existing website repository/hosting.
2. Keep filenames and folder names exactly as shown. The homepage links to `booking.html`, and the admin page is `admin.html`.
3. Commit/publish the files using the same hosting method you already use (for example, GitHub Pages).
4. Open the live homepage and test it on desktop and mobile. The homepage design assets and CSS are intentionally retained.

## 4. Verify booking end to end
1. Open the live `booking.html` page and submit a test booking using an email you can access.
2. Confirm a row appears in the intended spreadsheet's `Bookings` tab.
3. Confirm a `BOOKING_CREATED` entry appears in `Booking Logs`.
4. Confirm the business inbox and test customer inbox receive emails. Email delivery can depend on Google account permissions/quotas; the booking is still recorded if email sending fails, and a failure is logged.
5. Try booking another service on the same date. The site should mark that date unavailable, and the backend independently rejects any concurrent duplicate-date request under a script lock.
6. Open `admin.html`, enter your private `YARDSCAPE_ADMIN_KEY`, and click **Load bookings**. Change a booking status and click **Save status**. Confirm the `Bookings` status cell changes and a `STATUS_CHANGED` event appears in `Booking Logs`.
7. After tests, cancel test bookings in admin or set their status to `Cancelled`; cancelled bookings no longer block a date.

## Booking rules and service labels
- General Lawncare — JMD 8,000
- Plant Bed Maintenance — Quote Required
- Flowers Planting — Quote Required
- Flower Hedging — JMD 5,000
- Sprinkler Installation — Quote Required in the booking flow
- One active booking per date. Sunday is unavailable. Weekday appointments are offered between 8 AM and 6 PM; Saturday appointments between 9 AM and 4 PM.
- Requests start as `Pending Confirmation`. Admin can set `Confirmed`, `Completed`, or `Cancelled`.

## Security notes
- Never put your admin key in `Code.gs`, commit it to GitHub, or send it to customers. Keep it only in Apps Script Script Properties and enter it directly on the private admin page when needed.
- The admin page uses JSONP-compatible GET requests for Apps Script compatibility, so the key is transmitted in the request URL. Use a strong unique key, do not share the admin page URL with the key appended, and avoid using the admin page on a shared/public computer. For stronger authentication than a static key, use Google-authenticated admin hosting/backend rather than a public static page.
- Do not paste spreadsheet IDs or admin keys into public support posts.

## Troubleshooting
- **“Booking system is not configured”**: `YARDSCAPE_SHEET_ID` is missing or empty.
- **“Cannot open the configured Google Sheet”**: check the ID and ensure the Apps Script account has edit access to that sheet.
- **“Unauthorized” on admin**: ensure the entered key exactly matches `YARDSCAPE_ADMIN_KEY` in Script Properties.
- **“Could not connect” in the website**: confirm the API URL in both HTML files is the current deployed `/exec` URL, deployment access is set to Anyone, and a new version was deployed after code changes.
- **No execution logs available**: open Apps Script **Executions** to check status; also verify the actual spreadsheet tabs because missing log output alone does not prove the script failed.
- **Emails missing**: check Apps Script authorization, Gmail sent mail, quotas, and `Booking Logs` for `OWNER_EMAIL_FAILED` / `CUSTOMER_EMAIL_FAILED`.
