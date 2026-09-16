import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import EnquiryButtons from "@/components/EnquiryButtons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "Inside the Cavreon factory in Sialkot: composite pressing, thermoforming, vacuum forming, stitching and quality control for sports equipment.",
};

const lines = [
  {
    name: "Composite press",
    body: "Hand layup of pre-preg carbon, aramid and fibreglass over foam and EVA cores, cured under heat and pressure. This line makes the hockey sticks and padel rackets.",
    capacity: "420 units per day",
  },
  {
    name: "Thermoforming",
    body: "Unibody paddle pressing with foam-injected perimeter walls, plus peel-ply surface texturing for raw carbon faces.",
    capacity: "300 units per day",
  },
  {
    name: "Vacuum forming",
    body: "HDPE and fibreglass shells for shin guards, bonded to contoured EVA liners on a heated jig.",
    capacity: "1,100 pairs per day",
  },
  {
    name: "Cut and stitch",
    body: "Bag unit running 600D and 900D polyester, with bar-tack machines at every stress point and an in-line zip pull test.",
    capacity: "600 bags per day",
  },
  {
    name: "Finishing",
    body: "Spray booth, sublimation, pad printing, grip wrapping and edge guard fitting. All branding is applied here rather than bought in.",
    capacity: "Matched to output",
  },
  {
    name: "Quality control",
    body: "Every unit weighed and balance-checked against the approved sample. Composite batches are additionally deflection-tested and logged.",
    capacity: "100% inspection",
  },
];

const qc = [
  ["Weight tolerance", "± 8 g against approved sample"],
  ["Balance tolerance", "± 5 mm from nominal"],
  ["Deflection test", "Per batch, composite lines"],
  ["Zip cycle test", "500 cycles, bag unit"],
  ["Drop test", "Shin guard shells, per batch"],
  ["Material compliance", "REACH, EN 71-3 on request"],
];

export default function ManufacturingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-turf text-bone">
        <div className="absolute inset-0 blueprint" aria-hidden="true" />
        <div className="wrap relative py-16 lg:py-24">
          <h1 className="max-w-[22ch] text-display-lg font-display font-extrabold">
            One roof, six lines, nothing subcontracted
          </h1>
          <p className="mt-5 max-w-prose2 text-[1.05rem] leading-relaxed text-bone/70">
            Sialkot has thousands of small workshops, and most exporters here are traders who
            spread an order across several of them. That is why quality drifts between
            shipments. We press, form, stitch, finish and inspect in the same building, with
            the same people, every time.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              ["Annual capacity", site.trade.capacity],
              ["Floor area", "42,000 sq ft"],
              ["People", "180 staff"],
              ["Export markets", "23 countries"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.76rem] text-bone/50">{k}</dt>
                <dd className="mt-1.5 font-display text-[1.4rem] font-bold text-aramid">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="wrap">
          <SectionHeading
            title="What each line does"
            lede="Capacities below are sustained daily output at a single shift. We run a second shift in the European pre-season."
          />
          <div className="mt-12 grid border-l border-t border-turf/15 sm:grid-cols-2 lg:grid-cols-3">
            {lines.map((l) => (
              <div key={l.name} className="border-b border-r border-turf/15 p-7">
                <h3 className="font-display text-[1.3rem] font-extrabold tracking-[-0.02em] text-turf-deep">
                  {l.name}
                </h3>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-slate2">{l.body}</p>
                <p className="mt-5 border-t border-turf/12 pt-3.5 font-mono text-[0.8rem] text-aramid-dim">
                  {l.capacity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-turf py-20 text-bone lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeading
            tone="dark"
            title="What we actually check"
            lede="A quality claim means nothing without the tolerance attached to it, so here are ours. We will send the inspection log with your shipment if you want it."
          />
          <dl className="border-t border-bone/15">
            {qc.map(([k, v]) => (
              <div
                key={k}
                className="flex flex-wrap justify-between gap-x-8 gap-y-1 border-b border-bone/15 py-4"
              >
                <dt className="text-[0.96rem] text-bone/70">{k}</dt>
                <dd className="font-mono text-[0.88rem] text-aramid">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="wrap flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-display-md font-extrabold text-turf-deep">
              Come and see it
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-slate2">
              We will send a factory video walkthrough today, and you are welcome to visit
              or send a third-party inspector before you place an order.
            </p>
          </div>
          <div className="w-full max-w-sm shrink-0">
            <EnquiryButtons subject="a factory walkthrough" size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
