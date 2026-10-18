# Zbawienie.pl - landing pages

Landing pages for [Zbawienie.pl](https://zbawienie.pl) that allow visitors to order free materials (e-books and books) through a simple form. The requested files are delivered by e-mail.

## Features

- Lead capture form requiring a name, valid e-mail and newsletter consent; incomplete fields are highlighted in red with an inline error message
- Requested file delivered by e-mail
- Internal order log e-mail sent to an administrative address
- HTML e-mail templates with light and dark mode support
- Independent landing pages:
  - `/boski-plan-wiekow` — book "Boski Plan Wieków"
  - `/dlaczego-warto` — e-book "Dlaczego warto czytać Biblię?"
  - `/narodziny-jezusa` — e-book "Kiedy naprawdę narodził się Pan Jezus?"

## Ecomail

- Newsletter sign-ups from `/boski-plan-wiekow` and `/narodziny-jezusa` are added to Ecomail lists, triggering their configured autoresponders
- List IDs are defined per landing page in `utils/leads.ts`
- Set `ECOMAIL_API_KEY` in the deployment environment; if it is missing, the subscription is skipped with a console warning
- The e-mail with the requested file is always sent, even if the Ecomail subscription fails

## Requirements

- Node.js v24 or newer
- pnpm v11 or newer

## Commands

**Install dependencies:**

```bash
pnpm install
```

**Run TypeScript/ESLint linter:**

```bash
pnpm lint
```

**Check formatting without writing:**

```bash
pnpm format:check
```

**Format all files:**

```bash
pnpm format
```

**Start development server:**

```bash
pnpm dev
```

**Build for production:**

```bash
pnpm build
```

**Start production server:**

```bash
pnpm start
```
