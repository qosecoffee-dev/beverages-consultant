# BEVERAGE INTELLIGENCE — Stage 1 build (0.4.0)

Mobile-first local-first application for beverage development and management.

## Implemented modules

- **Overview:** live counts for ingredients, recipes, R&D projects, and production batches.
- **Ingredients Database:** create, edit, delete (protected when used by recipes), search, unit-cost calculation, CSV import/export. Mass and volume conversion is limited to valid same-dimension units; count units are not converted to mass/volume.
- **Recipe Library:** recipe CRUD, ingredient composition, serving specifications, preparation steps, cost/food-cost/gross-profit calculations, duplicate, immutable recipe version snapshots, restore-as-new-version.
- **Recipe SOP:** A4 PDF generation for Approved/Active recipes, revision sequence, document control, immutable snapshots, local archive, preview/download/share.
- **R&D Workspace:** experiment/project log with objective, variables, result, status, rating, linked recipe, and notes.
- **Batch Production:** recipe scaling, ingredient requirement breakdown, estimated batch cost and per-serving cost, production history.
- **Menu Engineering:** date-scoped sales entry, historical price/cost snapshots, popularity and contribution-margin classification (Star/Plowhorse/Puzzle/Dog), CSV export, monthly PDF report, management insights, previous-month comparison, immutable monthly snapshots, report revision archive, PDF download/share.
- **Reports & Analytics:** recorded sales by month, profitability overview, current recipe cost overview, R&D and production counts.
- **Data Management:** JSON backup/restore for all tables and archived PDFs; legacy schemaVersion 1 backup compatibility.
- **Settings:** workspace identity, currency display preference (IDR), backup reminder interval.
- **PWA:** manifest, install metadata, service worker app-shell/runtime caching, offline app-shell fallback, iOS Share Sheet when browser supports file sharing.

## Data and privacy

All business data is stored locally in the browser using IndexedDB (Dexie). No account, backend, cloud database, or cross-device synchronization is configured. Clearing Safari website data may permanently remove local records. Export backups regularly and store them in Files/iCloud Drive. A new deployment origin/domain has a separate browser database; export data before changing domains and restore it on the deployed app.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static HTTPS host. HTTPS is required for service workers/PWA outside localhost.

## Important validation status

Source-level TS/TSX syntax transpilation has been checked. A dependency-based TypeScript build, browser integration test, PDF rendering test, IndexedDB migration test, offline test, and real iPhone Safari/PWA test are **not yet verified** in this environment because npm dependency installation timed out. Do not treat this package as production-verified until those tests pass.

## Calculation notes

- Ingredient unit cost is purchase price divided by normalized package quantity.
- Only mass-to-mass (kg/g), volume-to-volume (L/ml), or identical/count-equivalent units are accepted. Bottle-to-ml, grams-to-ml, and other cross-dimension conversions require explicit content size/density data and are intentionally not inferred.
- Recipe food cost = ingredient cost / selling price. Gross profit = selling price − ingredient cost − variable cost.
- Menu classification compares each menu's units sold and gross profit per unit with the selected-period averages. With no sales data, popularity classification is not meaningful.
- Menu report insight flag for food cost above 35% is a default review signal, not a universal industry target.
