# Zbawienie.pl - landing pages

Landing pages for [Zbawienie.pl](https://zbawienie.pl) that allow visitors to order free materials (e-books and books) through a contact form.

## Features

- Lead capture form with validation (name, e-mail, newsletter consent)
- Confirmation e-mail sent to the user with the requested file as an attachment
- Internal order log e-mail sent to an administrative address
- HTML e-mail templates with light and dark mode support
- Independent landing pages:
  - `/boski-plan-wiekow` — book "Boski Plan Wieków"
  - `/dlaczego-warto` — e-book "Dlaczego warto czytać Biblię?"

## Requirements

- Node.js v24
- pnpm v11

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
