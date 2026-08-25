# Yardscape — corrected package

## 1. Website files
Upload the ENTIRE package to the same GitHub Pages repository. Do not upload only the HTML files. The `assets` folder is required for the logo, hero image, and service images.

Required structure:

- index.html
- booking.html
- admin.html
- style.css
- script.js
- assets/yardscape-logo.png
- assets/hero.jpg
- assets/lawncare.jpg
- assets/plant-bed.jpg
- assets/flowers.jpg
- assets/hedging.jpg
- assets/sprinkler.jpg

If GitHub asks whether to replace files, replace them and keep the whole `assets` folder.

## 2. Apps Script
Replace the entire `Code.gs` with `apps-script/Code.gs`.

At the top, keep your private admin key. Current package key:

Yardscape-maxAdmin

Then: Save -> Deploy -> Manage deployments -> Edit -> New version -> Deploy.

Use the same /exec URL already used by the website.

## 3. Admin
Open `/admin.html`, enter `Yardscape-maxAdmin` (unless you changed it), and click Load bookings. The admin page now uses JSONP, so it does not depend on cross-origin fetch permissions. It groups the returned booking list by date and shows customer details.

## 4. Double booking
The server checks the Google Sheet while holding a Script Lock. The second request for the same normalized date + time is rejected on the server even if the browser's availability check was stale.

Expected second attempt message:
"That date and time is already booked. Please choose another time."

## 5. Important
After replacing Code.gs, you MUST deploy a new version. Editing/saving Code.gs alone does not update the live /exec deployment.
