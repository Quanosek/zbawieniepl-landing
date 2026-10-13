# Zbawienie.pl - landing pages

Landing pages for [Zbawienie.pl](https://zbawienie.pl) that allow visitors to order free materials (e-books and books) through a contact form.

## Features

- Lead capture form with validation (name, e-mail, newsletter consent)
- Requested file delivered by e-mail; newsletter opt-ins from `/boski-plan-wiekow` are handled by Ecomail
- Internal order log e-mail sent to an administrative address
- Newsletter opt-ins from `/boski-plan-wiekow` are added to the configured Ecomail list
- HTML e-mail templates with light and dark mode support
- Independent landing pages:
  - `/boski-plan-wiekow` — book "Boski Plan Wieków"
  - `/dlaczego-warto` — e-book "Dlaczego warto czytać Biblię?"

## Requirements

- Node.js v24
- pnpm v11

## Ecomail

Set `ECOMAIL_API_KEY` and `ECOMAIL_BOSKI_PLAN_LIST_ID` in the deployment environment. The LP
allows submitting the form without newsletter consent. When consent is checked, the contact is
added to Ecomail and configured autoresponders are triggered. The site's confirmation e-mail
with the requested file is sent in both cases; without consent, the contact is not added to
Ecomail.

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
