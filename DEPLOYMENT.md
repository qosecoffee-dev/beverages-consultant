# Deployment plan

The application is a static Vite + React PWA. It does not require a backend because all records live in the browser's IndexedDB.

## Recommended route: GitHub + Vercel

1. Connect the GitHub and Vercel integrations to ChatGPT when prompted.
2. Publish this project as a new private GitHub repository.
3. Import that repository into Vercel.
4. Confirm build command `npm run build` and output directory `dist` (already configured in `vercel.json`).
5. Deploy and open the HTTPS URL on iPhone Safari.
6. Verify the PWA, local database, PDF generation, and offline behavior before relying on it for business records.

## Important data note

IndexedDB data is tied to the exact browser origin. Before moving from a local preview or an earlier domain to a new deployment URL, export a JSON backup from the old origin. After opening the deployed site, restore that backup there. The app intentionally does not synchronize records between devices.
