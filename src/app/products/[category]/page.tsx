import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductDrawing from "@/components/ProductDrawing";
import EnquiryButtons from "@/components/EnquiryButtons";
import { ArrowIcon } from "@/components/Icons";
import { categories, getCategory, productsByCategory, type CategorySlug } from "@/data/products";
import { site } from "@/data/site";

type Params = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return {};
  return {
    title: c.name,
    description: c.blurb,
  };
}

export default async function CategoryPage({ params }: Params) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();

  const items = productsByCategory(c.slug as CategorySlug);
  const others = categories.filter((x) => x.slug !== c.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-turf text-bone">
        <div className="absolute inset-0 blueprint" aria-hidden="true" />
        <div className="wrap relative grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:py-20">
          <div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[0.88rem] text-bone/60 transition-colors hover:text-aramid"
            >
              <ArrowIcon className="h-4 w-4 rotate-180" />
              All products
            </Link>
            <h1 className="mt-5 text-display-lg font-display font-extrabold">{c.name}</h1>
            <p className="mt-5 max-w-prose2 text-[1.05rem] leading-relaxed text-bone/70">
              {c.detail}
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {c.highlights.map((h) => (
                <div key={h.label}>
                  <dt className="font-mono text-[0.76rem] text-bone/50">{h.label}</dt>
                  <dd className="mt-1 font-display text-[1.24rem] font-bold text-aramid">
                    {h.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex items-center justify-center">
            <ProductDrawing
              category={c.slug}
              className="h-56 w-56 text-bone/70 lg:h-72 lg:w-72"
            />
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="wrap">
          <div className="grid border-l border-t border-turf/15 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <div className="mt-14 border-t border-turf/15 pt-10">
            <h2 className="font-display text-[1.3rem] font-bold tracking-[-0.02em] text-turf-deep">
              Also made here
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/products/${o.slug}`}
                  className="rounded-full border border-turf/25 px-4 py-2 text-[0.88rem] font-medium text-turf transition-colors hover:border-turf hover:bg-turf hover:text-bone"
                >
                  {o.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-turf-deep py-16 text-bone">
        <div className="wrap flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-display-md font-extrabold">
              Need a {c.unit.slice(0, -1)} we do not list?
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-bone/65">
              Send a photo or a sample. Sampling takes {site.trade.sample.toLowerCase()} and the
              cost comes off your first bulk order.
            </p>
          </div>
          <div className="w-full max-w-sm shrink-0">
            <EnquiryButtons subject={`custom ${c.name.toLowerCase()}`} size="lg" tone="on-dark" />
          </div>
        </div>
      </section>
    </>
  );
}
