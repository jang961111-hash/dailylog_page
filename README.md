# Daily Log Landing Page

Public landing site for Daily Log.

This project is not the main product experience. It exists to introduce the service, build trust, guide Android installs, and provide support, privacy, and terms pages for public distribution.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- react-qr-code

## Pages

- `/` : product landing page
- `/download` : Android download hub with device-aware CTA priority
- `/roadmap` : product value and roadmap overview
- `/support` : install help, account support, and contact guide
- `/privacy` : privacy policy draft
- `/terms` : terms of service draft

## Project Structure

```text
src/
  app/          App Router routes and metadata
  components/   Shared landing UI
  lib/          Site config and content contracts
  assets/       Local fonts and branding assets
public/
  images/       App screenshots used in the landing site
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in the browser.

## APK Delivery

- The landing site is deployed on Vercel.
- The Android APK is delivered through GitHub Releases, not from the Vercel app or Git history.
- The local file `DailyLog.apk` is treated as a release source file only and must not be committed to the repository.
- When the APK changes, upload the new asset to GitHub Releases and update `src/lib/site-config.ts` if the tag or asset URL changes.

## Production Notes

- iOS remains `coming soon` until a real TestFlight or App Store link is available.
- Privacy policy and terms pages are still draft content and should be replaced before public launch.
- Play Store should become the primary Android distribution channel once the app is ready for official release.
