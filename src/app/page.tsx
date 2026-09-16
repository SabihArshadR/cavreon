import Link from "next/link";
import HeroDrawing from "@/components/HeroDrawing";
import ProductDrawing from "@/components/ProductDrawing";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import EnquiryButtons from "@/components/EnquiryButtons";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "@/components/Icons";
import { FaWhatsapp } from "react-icons/fa";
import { categories, products } from "@/data/products";
import { markets, site, whatsappLink } from "@/data/site";

const tradeFacts = [
  { label: "Minimum order", value: site.trade.moq },
  { label: "Sampling", value: site.trade.sample },
  { label: "Production lead time", value: site.trade.leadTime },
  { label: "Annual capacity", value: site.trade.capacity },
];

const steps = [
  {
    title: "Send us the spec",
    body: "A drawing, a competitor's product, or just a description. We tell you within a day whether we can build it and what it will cost.",
  },
  {
    title: "Sample round",
    body: "One or two pieces in seven days. You play with it, mark it up, send it back. Most buyers settle in two rounds.",
  },
  {
    title: "Tooling and layup",
    body: "If your shape needs a new mould we cut it here. Carbon is laid by hand over the core, then pressed under heat.",
  },
  {
    title: "Finish and brand",
    body: "Paint, sublimation, grip wrap, edge guard, woven labels. Your artwork goes on at this stage, not as a sticker afterwards.",
  },
  {
    title: "Check and ship",
    body: "Every unit is weighed and balance-checked against your approved sample before it is cartoned. FOB Karachi, or door to door.",
  },
];

const faqs = [
  {
    q: "What is the smallest order you will take?",
    a: "Fifty pieces per model. Mixed colours inside that fifty are fine. For a first order we would rather you start small and reorder than commit to a container of something you have not sold yet.",
  },
  {
    q: "Can you copy a racket or stick I already sell?",
    a: "We can match construction, weight, balance and feel from a physical sample. We will not copy another brand's artwork, logo or patented shape — that is your risk and ours, and it is not worth it.",
  },
  {
    q: "Do you supply unbranded stock?",
    a: "Yes. Every model in the catalogue ships blank if you want to apply your own branding, or we apply it here from your artwork files.",
  },
  {
    q: "How do you handle certification?",
    a: "Pickleball paddles can be submitted for USA Pickleball approval, and we hold test reports for EN 71-3 and REACH on materials. Tell us the market and we will tell you what applies.",
  },
  {
    q: "What are your payment terms?",
    a: `${site.trade.payment}. Samples are paid up front and the cost is credited against your first bulk order.`,
  },
];

const featured = ["apex-95", "strike-pro-12k", "volt-t700-16"]
  .map((slug) => products.find((p) => p.slug === slug))
  .filter(Boolean) as typeof products;

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-turf text-bone">
        <div className="absolute inset-0 blueprint" aria-hidden="true" />
        <div className="wrap relative grid gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8 lg:py-24">
          <div>
            <h1 className="text-display-xl font-display font-extrabold text-bone">
              We press carbon in Sialkot. You put your name on it.
            </h1>
            <p className="mt-6 max-w-prose2 text-[1.08rem] leading-relaxed text-bone/70">
              Cavreon builds field hockey sticks, padel rackets, pickleball paddles, shin
              guards and sports bags under one roof — from fifty pieces for a club to a full
              container for a distributor.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsappLink(
                  "Hello Cavreon, I'd like to talk about an order. My company is , based in .",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-aramid px-6 py-3.5 font-semibold text-turf-deep transition-colors hover:bg-aramid-dim"
              >
                <FaWhatsapp className="h-5 w-5" />
                Start a conversation
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 rounded-full border border-bone/25 px-6 py-3.5 font-semibold text-bone transition-colors hover:border-aramid hover:text-aramid"
              >
                See the range
                <ArrowIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-sm border border-bone/15 bg-turf-deep/40 p-4 sm:p-6">
              <HeroDrawing className="h-auto w-full" />
              <p className="mt-2 border-t border-bone/10 pt-3 font-mono text-[0.74rem] text-bone/45">
                Apex 95 — drawing 1 of 5 mould sets
              </p>
            </div>
          </div>
        </div>

        {/* trade facts */}
        <div className="relative border-t border-bone/12">
          <div className="wrap grid grid-cols-2 divide-bone/12 lg:grid-cols-4 lg:divide-x">
            {tradeFacts.map((f) => (
              <div key={f.label} className="border-b border-bone/12 px-1 py-6 lg:border-0 lg:px-6">
                <p className="font-display text-[1.28rem] font-bold text-aramid">{f.value}</p>
                <p className="mt-1 text-[0.86rem] text-bone/55">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="wrap">
          <SectionHeading
            title="Five things, made properly"
            lede="We deliberately stopped at five categories. Everything here shares a press, a finishing line and a QC bench, which is why the quality is consistent and the pricing is not padded with outsourcing."
          />

          <div className="mt-12 grid border-l border-t border-turf/15 sm:grid-cols-2 lg:grid-cols-6">
            {categories.map((c, i) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className={`group flex flex-col border-b border-r border-turf/15 p-7 transition-colors hover:bg-turf hover:text-bone ${
                  i < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[16ch] font-display text-[1.55rem] font-extrabold leading-[1.05] tracking-[-0.025em] text-turf-deep group-hover:text-bone">
                    {c.name}
                  </h3>
                  <ProductDrawing
                    category={c.slug}
                    className="h-16 w-16 shrink-0 text-turf/45 group-hover:text-aramid"
                  />
                </div>
                <p className="mt-4 text-[0.94rem] leading-relaxed text-slate2 group-hover:text-bone/70">
                  {c.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-turf/12 pt-4 font-mono text-[0.76rem] text-slate2 group-hover:border-bone/15 group-hover:text-bone/60">
                  {c.highlights.map((h) => (
                    <span key={h.label}>
                      {h.label} {h.value}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────── */}
      <section className="bg-turf text-bone">
        <div className="wrap py-20 lg:py-28">
          <SectionHeading
            tone="dark"
            title="From your spec to your warehouse"
            lede="Five stages, all of them ours. Nothing in this list is subcontracted to another workshop, which is the usual reason a Sialkot order comes back inconsistent."
          />

          <ol className="mt-12 grid gap-px bg-bone/15 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-turf p-6">
                <span className="font-mono text-[0.8rem] text-aramid">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-[1.18rem] font-bold leading-tight tracking-[-0.015em]">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-bone/65">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Featured products ──────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title="A few we get asked about most"
              lede="Full specs, minimums and lead times sit on every product page."
            />
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-semibold text-turf underline decoration-aramid decoration-2 underline-offset-[6px] transition-colors hover:text-aramid-dim"
            >
              All {products.length} products
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 grid border-l border-t border-turf/15 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Private label ──────────────────────────────────── */}
      <section className="bg-bone-dim py-20 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              title="Your brand, not ours"
              lede="Most of what leaves this factory carries somebody else's logo. That is the business we are in, and we are comfortable being invisible."
            />
            <ul className="mt-8 space-y-3.5">
              {[
                "Sublimated artwork across the full racket or stick face",
                "Woven labels, hang tags and printed retail boxes",
                "Your own colourways from our stock material range",
                "Barcodes and marketplace-ready packaging",
                "We do not sell your design to another buyer",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[0.98rem] leading-relaxed text-turf">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-aramid-dim" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 max-w-md">
              <EnquiryButtons subject="private label production" size="lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-turf/15">
            {categories.slice(0, 4).map((c) => (
              <div key={c.slug} className="flex aspect-square items-center justify-center bg-turf twill">
                <ProductDrawing category={c.slug} className="h-3/5 w-3/5 text-bone/80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Markets ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="wrap">
          <SectionHeading
            title="Where our containers go"
            lede="We ship where these five sports actually have volume, and we know the paperwork for each of these markets."
          />
          <ul className="mt-12 grid grid-cols-2 gap-px border border-turf/15 bg-turf/15 sm:grid-cols-3 lg:grid-cols-4">
            {markets.map((m) => (
              <li key={m.country} className="bg-bone px-5 py-5">
                <span className="text-[1.4rem] leading-none" aria-hidden="true">
                  {m.flag}
                </span>
                <p className="mt-2.5 font-display text-[1.02rem] font-bold tracking-[-0.01em] text-turf-deep">
                  {m.country}
                </p>
                <p className="mt-0.5 font-mono text-[0.74rem] text-slate2">{m.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.95rem] text-slate2">
            Not on the list? We have shipped one-off orders to eleven other countries. Ask.
          </p>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="bg-bone-dim py-20 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading title="Questions buyers ask first" />
          <div className="divide-y divide-turf/15 border-y border-turf/15">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[1.12rem] font-bold tracking-[-0.015em] text-turf-deep [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    className="mt-1 h-4 w-4 shrink-0 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 16 16" className="h-full w-full">
                      <path
                        d="M8 1v14M1 8h14"
                        stroke="#B98F2E"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-prose2 text-[0.96rem] leading-relaxed text-slate2">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-turf-deep text-bone">
        <div className="absolute inset-0 blueprint" aria-hidden="true" />
        <div className="wrap relative py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-[18ch] text-display-lg font-display font-extrabold">
            Tell us what you need built.
          </h2>
          <p className="mx-auto mt-5 max-w-prose2 text-[1.05rem] leading-relaxed text-bone/65">
            Send a photo, a sketch or a sample. You will get a straight answer on price,
            minimum and lead time — usually the same working day.
          </p>
          <div className="mx-auto mt-9 max-w-md">
            <EnquiryButtons subject="a new enquiry" size="lg" tone="on-dark" />
          </div>
          <p className="mt-6 font-mono text-[0.8rem] text-bone/45">
            {site.whatsappDisplay} · {site.email}
          </p>
        </div>
      </section>
    </>
  );
}
