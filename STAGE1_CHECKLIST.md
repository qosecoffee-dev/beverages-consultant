# Stage 1 completion checklist — Beverage Intelligence 0.4.0

## Implemented in source

- [x] Mobile-first application shell and navigation for all Stage 1 modules.
- [x] Dexie IndexedDB schema migration v1 → v2 → v3 → v4.
- [x] Ingredients CRUD, search, unit-cost calculation, CSV import/export, and protection against deleting ingredients used in recipes.
- [x] Recipe CRUD, formula lines, serving specs, preparation steps, HPP/food-cost/gross-profit calculations, duplication, and immutable recipe version snapshots.
- [x] Recipe SOP PDF generation, approval gate, document revision, archive snapshots, preview, download, and Share Sheet fallback.
- [x] R&D experiment/project log with recipe link, objective, variables, observations, status, rating, and notes.
- [x] Batch scaling calculator, ingredient requirements, estimated batch/per-serving cost, and production history.
- [x] Sales entry with date, quantity, price and cost snapshots.
- [x] Menu Engineering popularity/contribution-margin classification, sales CSV export, monthly PDF, management insights, previous-month comparison, immutable report snapshots, revision archive, download and share.
- [x] Reports & Analytics dashboard with sales chart, monthly totals, recipe cost/profit overview, and operational counts.
- [x] JSON backup/restore for all current data tables and archived PDF blobs; supports legacy schemaVersion 1 backups.
- [x] Workspace settings and backup reminder on app opening.
- [x] PWA manifest, install metadata, service worker caching, and offline app-shell fallback.
- [x] Vercel and Netlify static deployment configuration.

## Checks completed

- [x] TypeScript/TSX syntax transpilation: all 7 source files pass with no syntax diagnostics.
- [x] Isolated TypeScript structural check using temporary dependency declarations: passes with strict=false.
- [x] Unit-cost calculation checks: kg→gram, liter→ml, identical count unit, and invalid mass→volume conversion.
- [x] JSON validation: package.json, vercel.json, manifest.webmanifest.
- [x] Service-worker JavaScript syntax check.
- [x] ZIP archive integrity check.

## Required before calling Stage 1 production-ready

- [ ] Install real npm dependencies and run `npm run build` successfully.
- [ ] Run the built application in a browser and test every module end-to-end.
- [ ] Verify IndexedDB v1/v2/v3 migration with actual Dexie runtime and restore legacy backups.
- [ ] Generate and inspect SOP and monthly report PDFs with actual jsPDF runtime.
- [ ] Test backup/restore round-trip including large PDF archives.
- [ ] Test offline reload after first online visit.
- [ ] Test responsive layout, file import/export, PDF download, and Share Sheet in iPhone Safari.
- [ ] Deploy to HTTPS and verify PWA installation and local persistence on the deployed origin.

**Current blocker:** dependency installation could not reach `registry.npmjs.org` (`EAI_AGAIN` DNS resolution). The application source and deploy configuration are prepared, but a dependency-based production build and real-device verification have not yet passed. Do not treat this checklist as a production sign-off until all unchecked tests pass.
