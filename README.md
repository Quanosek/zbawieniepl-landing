# Zbawienie.pl - landing pages

Landing pages for [Zbawienie.pl](https://zbawienie.pl) that allow visitors to order free materials (e-books and books) through a contact form.

## Features

- Lead capture form with validation (name, e-mail, newsletter consent)
- Requested file delivered by e-mail
- Internal order log e-mail sent to an administrative address
- Newsletter opt-ins from `/boski-plan-wiekow` and `/narodziny-jezusa` are added to Ecomail lists
- HTML e-mail templates with light and dark mode support
- Independent landing pages:
  - `/boski-plan-wiekow` — book "Boski Plan Wieków"
  - `/dlaczego-warto` — e-book "Dlaczego warto czytać Biblię?"
  - `/narodziny-jezusa` — e-book "Kiedy naprawdę narodził się Pan Jezus?"

## Requirements

- Node.js v24
- pnpm v11

## Ecomail

Set `ECOMAIL_API_KEY` in the deployment environment. Ecomail list IDs are defined per landing page in `utils/leads.ts`. The form can be submitted without newsletter consent. When consent is checked, the contact is added to the landing page's Ecomail list and configured autoresponders are triggered. The site's confirmation e-mail with the requested file is sent in both cases; without consent, the contact is not added to Ecomail.

## Commands

**Install dependencies:**

```bash
pnpm install
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

**Format all files:**

```bash
pnpm format
```

**Check formatting without writing:**

```bash
pnpm format:check
```

**Run TypeScript/ESLint linter:**

```bash
pnpm lint
```
