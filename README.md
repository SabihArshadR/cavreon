# Cavreon

Marketing and catalogue website for Cavreon, a composite sports equipment factory in
Sialkot. Next.js 15 (App Router), TypeScript, Tailwind CSS. No database, no backend —
every enquiry goes straight to WhatsApp or email.

---

## Run it

You need Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

To build for production:

```bash
npm run build
npm run start
```

---

## The three things to change first

### 1. Your WhatsApp number and email

Open `src/data/site.ts`. This one file feeds every phone number, email address and
address on the site.

```ts
whatsapp: "923001234567",       // digits only, country code first, no + and no spaces
whatsappDisplay: "+92 300 123 4567",
email: "sales@cavreon.com",
```

The number format matters. For Pakistan, drop the leading 0 from your mobile number and
put 92 in front of it: `0300 1234567` becomes `923001234567`.

### 2. Your products

`src/data/products.ts` holds the whole catalogue. I have written 22 products across your
five categories with realistic specifications, but you should go through them and correct
anything that does not match what you actually build — weights, carbon percentages, bow
sizes, core thicknesses, dimensions.

To add a product, copy any existing block and change the fields. The `slug` must be unique
and lowercase with hyphens, because it becomes the page URL.

### 3. Real photographs

Right now every product shows a hand-drawn technical illustration. They look intentional
rather than like missing images, so you can launch without photos — but real photos will
sell better.

When you have them, put the files in `public/products/` and add the path to the product:

```ts
{ slug: "apex-95", name: "Apex 95", image: "/products/apex-95.jpg", ... }
```

Shoot them square, around 1200 × 1200 px, product centred on a plain background.

---

## Logo

The logo is in two places, and both are editable:

- `src/components/Logo.tsx` — the version used in the header and footer
- `public/logo.svg` and `public/favicon.svg` — standalone files for email signatures,
  invoices, social profiles

If you have a logo designed already, replace the SVG path in `Logo.tsx` or swap in an
image file.

---

## Pages

| Route | What it is |
|---|---|
| `/` | Home |
| `/products` | Full catalogue with category filter |
| `/products/[category]` | One category, e.g. `/products/padel-rackets` |
| `/products/[category]/[slug]` | One product with full specs |
| `/manufacturing` | Factory lines, capacity, quality tolerances |
| `/private-label` | OEM and branding offer |
| `/about` | Company |
| `/contact` | Contact details and an enquiry form |

The contact form does not send email itself. It builds the message and opens WhatsApp or
the visitor's mail app with everything already typed in. That means no server, no spam
filtering, and no monthly cost.

---

## Putting it online

Easiest route is Vercel, who make Next.js:

1. Push this folder to a GitHub repository.
2. Go to vercel.com, sign in with GitHub, click Add New → Project, pick the repo.
3. Accept the defaults and deploy. It takes about a minute.
4. Add your domain under Settings → Domains, and point your DNS at Vercel.

Before you deploy, set `url` in `src/data/site.ts` to your real domain, because the
sitemap and social previews are built from it.

---

## Design notes

In case you or another developer works on this later:

- **Colours** come from the materials themselves. Deep teal (`turf`) is the colour of a
  water-based hockey pitch, gold (`aramid`) is the colour of kevlar weave. They are defined
  in `tailwind.config.ts` — change them there and the whole site follows.
- **Type** is Archivo for headings and IBM Plex Sans for body. Monospace is used only for
  actual technical data, where the aligned figures help a buyer scan.
- **The grid lines** between product cards are deliberate. The site is meant to read like a
  factory spec sheet, because the audience is a buyer checking whether you can hit their
  specification, not a consumer browsing.
# cavreon
