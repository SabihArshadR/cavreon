import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import EnquiryButtons from "@/components/EnquiryButtons";
import ProductDrawing from "@/components/ProductDrawing";
import { CheckIcon } from "@/components/Icons";
import { categories } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Private label",
  description:
    "Cavreon builds private label and OEM sports equipment: your artwork, your colourways, your packaging, made in Sialkot from 50 pieces per model.",
};

const stages = [
  {
    title: "Pick a base or start blank",
    body: "Most buyers start from a model in our catalogue and change the weight, balance and finish. If you want a shape nobody else has, we cut a new mould — that takes about three weeks and a tooling fee.",
  },
  {
    title: "Send artwork",
    body: "Vector files if you have them, a JPEG if you do not. Our studio lays it out on the product template and sends a digital proof before anything is printed.",
  },
  {
    title: "Approve a sample",
    body: "A real, finished piece with your branding on it, in your hands in about a week. Nothing goes into bulk until you sign off on that sample.",
  },
  {
    title: "Bulk and packaging",
    body: "Hang tags, woven labels, polybags, printed cartons, barcodes. We can pack to Amazon FBA requirements or to your retailer's spec.",
  },
];

const branding = [
  "Full-face sublimation on rackets, paddles and sticks",
  "Pad printing and spray masking on shells and shafts",
  "Woven and heat-transfer labels on bags",
  "Embroidery up to 12 thread colours",
  "Printed retail boxes, hang tags and barcodes",
  "Your own grip tape colour and end-cap logo",
];

export default function PrivateLabelPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-turf text-bone">
        <div className="absolute inset-0 blueprint" aria-hidden="true" />
        <div className="wrap relative grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-24">
          <div>
            <h1 className="max-w-[18ch] text-display-lg font-display font-extrabold">
              Build your own brand, starting at fifty pieces
            </h1>
            <p className="mt-5 max-w-prose2 text-[1.05rem] leading-relaxed text-bone/70">
              You do not need a container and a six-figure budget to launch a sports brand.
              Start with one model in one colourway, see how it sells, then scale. We will
              still be here at fifty pieces and at fifty thousand.
            </p>
            <div className="mt-9 max-w-md">
              <EnquiryButtons subject="private label production" size="lg" tone="on-dark" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-bone/15">
            {categories.slice(0, 4).map((c) => (
              <div
                key={c.slug}
                className="flex aspect-square items-center justify-center bg-turf-deep twill"
              >
                <ProductDrawing category={c.slug} className="h-3/5 w-3/5 text-aramid/80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="wrap">
          <SectionHeading
            title="How a private label order runs"
            lede="Four stages between your first message and a pallet with your logo on it."
          />
          <ol className="mt-12 grid gap-px bg-turf/15 sm:grid-cols-2">
            {stages.map((s, i) => (
              <li key={s.title} className="bg-bone p-7">
                <span className="font-mono text-[0.8rem] text-aramid-dim">
                  Stage {i + 1}
                </span>
                <h3 className="mt-3 font-display text-[1.34rem] font-extrabold tracking-[-0.02em] text-turf-deep">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-slate2">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bone-dim py-20 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Ways we can put your name on it" />
            <ul className="mt-8 space-y-3.5">
              {branding.map((b) => (
                <li key={b} className="flex gap-3 text-[0.98rem] leading-relaxed text-turf">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-aramid-dim" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-fit border border-turf/15 bg-bone p-7">
            <h2 className="font-display text-[1.3rem] font-bold tracking-[-0.02em] text-turf-deep">
              The commercial detail
            </h2>
            <dl className="mt-5 space-y-3.5 font-mono text-[0.85rem]">
              {[
                ["Minimum per model", site.trade.moq],
                ["Branded sample", "7 days, cost credited"],
                ["New mould tooling", "About 3 weeks"],
                ["Bulk lead time", site.trade.leadTime],
                ["Terms", site.trade.payment],
                ["Exclusivity", "Your design stays yours"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6">
                  <dt className="text-slate2">{k}</dt>
                  <dd className="text-right text-turf-deep">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7">
              <EnquiryButtons subject="a private label quote" stretch />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
