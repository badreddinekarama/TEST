# StatementPro

A private, browser-based statement designer for budgeting, documentation templates, and UI prototypes. All documents are visibly marked as samples. No bank affiliation, AI API, backend, account registration, or API key is required.

## Run locally

Use Node.js 22.12+ or Node.js 24.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run preview
```

## Deploy to Netlify

Push this project to your GitHub repository, then choose **Add new project → Import an existing project** in Netlify and select the repository.

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 24 (pinned in `.nvmrc`)
- Environment variables/API keys: none

`netlify.toml` includes the build settings. Alternatively run `npm run build` and upload the `dist` folder using Netlify's manual deploy interface. Production hosting serves only static assets.

## Use and customize

Change the account holder, street address, dates, currency, and opening balance in Account details. The date range redistributes the existing transactions across the selected period. Presets select GBP, EUR, or USD; additional currencies are in the dropdown. Currency selection changes the display currency and does not perform exchange-rate conversion.

The Transactions tab lets you edit, add, remove, or restore entries. Sequential balances and summaries update from the sorted transactions. Presets are stored in `src/transactions.json`; edit this file to replace the stock entries. No transaction generation service is used.

Use **Download PDF** for an A4 PDF, or **Print** for browser printing. Long PDF exports paginate automatically. The PDF's built-in font supports Latin text; use browser Print for names or addresses requiring other scripts.

Edits live in browser memory and reset on reload. The app does not upload personal information or store it on a server. Export your document before leaving the page.

This project uses original StatementPro branding and sample account references. Exports are not official bank statements or proof of funds.
