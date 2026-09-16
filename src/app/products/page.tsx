import type { Metadata } from "next";
import Catalogue from "@/components/Catalogue";
import EnquiryButtons from "@/components/EnquiryButtons";
import { products } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The full Cavreon range: field hockey sticks, padel rackets, pickleball paddles, shin guards and sports bags, with specs, minimums and lead times.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-turf text-bone">
        <div className="absolute inset-0 blueprint" aria-hidden="true" />
        <div className="wrap relative py-16 lg:py-20">
          <h1 className="max-w-[20ch] text-display-lg font-display font-extrabold">
            {products.length} products, all pressed and finished here
          </h1>
          <p className="mt-5 max-w-prose2 text-[1.05rem] leading-relaxed text-bone/70">
            Everything below is in current production. Specs are the ones we build to, not
            rounded marketing figures — and any of them can be changed for your order.
          </p>
          <p className="mt-6 font-mono text-[0.8rem] text-bone/50">
            Minimum {site.trade.moq} · Samples {site.trade.sample} · Bulk {site.trade.leadTime}
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="wrap">
          <Catalogue />
        </div>
      </section>

      <section className="bg-bone-dim py-16">
        <div className="wrap flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-display-md font-extrabold text-turf-deep">
              Want the price list?
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-slate2">
              Send us your country and rough volumes and we will send an FOB price list for
              the categories you sell.
            </p>
          </div>
          <div className="w-full max-w-sm shrink-0">
            <EnquiryButtons subject="the Cavreon price list" size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
