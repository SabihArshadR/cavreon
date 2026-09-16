import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import EnquiryButtons from "@/components/EnquiryButtons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cavreon is a sports equipment factory in Sialkot, Pakistan, making composite rackets, sticks, guards and bags for brands and distributors worldwide.",
};

const values = [
  {
    title: "Quote honestly",
    body: "If a target price is not achievable at the quality you described, we say so rather than cutting the layup and hoping you do not notice.",
  },
  {
    title: "One sample, then commit",
    body: "We would rather spend a week getting a sample right than ship a container you end up arguing about.",
  },
  {
    title: "Stay invisible",
    body: "Our name is not on most of what we make, and we never show one customer's work to another.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-turf text-bone">
        <div className="absolute inset-0 blueprint" aria-hidden="true" />
        <div className="wrap relative py-16 lg:py-24">
          <h1 className="max-w-[20ch] text-display-lg font-display font-extrabold">
            A Sialkot factory that makes things, not a trading desk
          </h1>
          <p className="mt-6 max-w-prose2 text-[1.05rem] leading-relaxed text-bone/70">
            Sialkot has been making sports goods for over a century, and the city still
            supplies a large share of the world&rsquo;s hand-stitched footballs, gloves and
            hockey sticks. Cavreon is part of that, but built around composites rather than
            leather — carbon, aramid, fibreglass and EVA, pressed under our own roof.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading title="Why we started" />
            <div className="mt-6 max-w-prose2 space-y-5 text-[1rem] leading-relaxed text-slate2">
              <p>
                Buyers kept arriving in Sialkot with the same complaint: the first order was
                excellent, the second was different, and nobody could explain why. The reason
                was almost always that the order had been split across three workshops with
                three different presses.
              </p>
              <p>
                Cavreon was set up to remove that variable. We took five categories that share
                materials and processes — hockey sticks, padel rackets, pickleball paddles,
                shin guards and bags — and built the lines for all five in one building.
              </p>
              <p>
                It means we say no to a lot of enquiries that fall outside those five. It also
                means that when you reorder in eighteen months, you get the same product.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading title="How we work" />
            <div className="mt-6 divide-y divide-turf/15 border-y border-turf/15">
              {values.map((v) => (
                <div key={v.title} className="py-5">
                  <h3 className="font-display text-[1.24rem] font-bold tracking-[-0.02em] text-turf-deep">
                    {v.title}
                  </h3>
                  <p className="mt-2 max-w-prose2 text-[0.96rem] leading-relaxed text-slate2">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-turf-deep py-16 text-bone">
        <div className="wrap flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-display-md font-extrabold">
              Talk to a person, not a form
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-bone/65">
              {site.whatsappDisplay} reaches our sales desk directly, six days a week.
            </p>
          </div>
          <div className="w-full max-w-sm shrink-0">
            <EnquiryButtons subject="working with Cavreon" size="lg" tone="on-dark" />
          </div>
        </div>
      </section>
    </>
  );
}
