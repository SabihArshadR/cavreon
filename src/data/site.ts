/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Every phone number, email and address on the site comes from
 *  here. Change it once and it updates everywhere.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Cavreon",
  legalName: "Cavreon Sports (Pvt) Ltd",
  tagline: "Composite sports equipment, built in Sialkot",
  description:
    "Cavreon manufactures field hockey sticks, padel rackets, pickleball paddles, shin guards and sports bags in Sialkot, Pakistan. OEM and private label for distributors and brands worldwide.",
  url: "https://cavreon.com",

  // ── Contact ────────────────────────────────────────────────
  // WhatsApp number in full international format, digits only.
  // Example for Pakistan: 92 + 3001234567 = "923001234567"
  whatsapp: "923001234567",
  whatsappDisplay: "+92 300 123 4567",
  phone: "+92 52 123 4567",
  email: "sales@cavreon.com",

  address: {
    line1: "Small Industrial Estate",
    line2: "Sialkot 51310, Punjab",
    country: "Pakistan",
  },

  social: {
    instagram: "https://instagram.com/cavreon",
    linkedin: "https://linkedin.com/company/cavreon",
    facebook: "https://facebook.com/cavreon",
  },

  // ── Trade terms shown on product pages ─────────────────────
  trade: {
    moq: "50 pcs per model",
    sample: "1–2 pcs, 7 days",
    leadTime: "25–35 days",
    incoterms: "FOB Karachi / CIF / DDP",
    payment: "30% advance, 70% against B/L",
    capacity: "180,000 units per year",
  },
} as const;

export const nav = [
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Private label", href: "/private-label" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Markets where these five categories actually have volume. */
export const markets = [
  { country: "Netherlands", note: "Field hockey", flag: "🇳🇱" },
  { country: "Germany", note: "Field hockey, padel", flag: "🇩🇪" },
  { country: "Spain", note: "Padel", flag: "🇪🇸" },
  { country: "United States", note: "Pickleball", flag: "🇺🇸" },
  { country: "Belgium", note: "Field hockey", flag: "🇧🇪" },
  { country: "Australia", note: "Field hockey", flag: "🇦🇺" },
  { country: "Argentina", note: "Padel, hockey", flag: "🇦🇷" },
  { country: "United Kingdom", note: "Field hockey", flag: "🇬🇧" },
  { country: "Sweden", note: "Padel", flag: "🇸🇪" },
  { country: "Italy", note: "Padel", flag: "🇮🇹" },
  { country: "India", note: "Field hockey", flag: "🇮🇳" },
  { country: "Canada", note: "Pickleball", flag: "🇨🇦" },
];

/**
 * Builds a wa.me link with the message pre-typed for the buyer,
 * so the enquiry arrives with the product name already in it.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${site.email}?${params.toString()}`;
}
