# THEKKADY FERN Website

Static six-page website draft for THEKKADY FERN, a premium homestay in Kumily, Thekkady.

## Pages

- `index.html` - Home
- `stay.html` - Rooms and accommodation
- `spa.html` - In-house spa and massage
- `facilities.html` - Facilities, dining and activities
- `explore.html` - Explore Thekkady and location
- `contact.html` - Rates, contact and booking enquiry

## Preview

Open `index.html` directly in a browser, or serve the folder with a simple static server.

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080/`.

## Image Replacement

Drop genuine property photos into:

- `assets/images/gallery/exterior/`
- `assets/images/gallery/single-rooms/`
- `assets/images/gallery/double-rooms/`
- `assets/images/gallery/kitchen-restaurant/`
- `assets/images/gallery/balconies/`
- `assets/images/gallery/spa-massage/`
- `assets/images/gallery/activities/`

The current pages use clearly marked placeholders from `assets/images/placeholders/`.

## Editable Content

Core contact details, room reference rates, spa draft menu and translations are in `assets/js/site.js`.

The existing supplied logo was copied to `assets/images/brand/thekkady-fern-logo.png`. Replace that file later when the final brand asset is ready.

## Deployment

This site is static and can be deployed to GitHub Pages, Netlify, Vercel or any standard web host. Upload the full folder while preserving relative paths.

## Owner Approval Needed

- Final logo and favicon.
- Actual property photographs.
- Pricing basis for room rates.
- Final room rate terms, taxes, inclusions and cancellation policy if needed.
- Actual in-house spa treatment menu and tariffs.
- Any confirmed operational timings, dining details, campfire details or safari arrangement terms.
