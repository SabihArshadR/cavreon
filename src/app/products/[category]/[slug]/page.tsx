import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductDrawing from "@/components/ProductDrawing";
import ProductCard from "@/components/ProductCard";
import EnquiryButtons from "@/components/EnquiryButtons";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import {
  getCategory,
  getProduct,
  products,
  productsByCategory,
  type CategorySlug,
} from "@/data/products";
import { site } from "@/data/site";

type Params = { params: Promise<{ category: string; slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.summary,
    openGraph: { title: `${p.name} — ${site.name}`, description: p.summary },
  };
}

export default async function ProductPage({ params }: Params) {
  const { category, slug } = await params;
  const product = getProduct(slug);
  if (!product || product.category !== category) notFound();

  const cat = getCategory(product.category);
  const related = productsByCategory(product.category as CategorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${site.name} ${product.name}`,
    description: product.description,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.legalName },
    category: cat?.name,
  };

  return (
    <>
      <div className="bg-turf text-bone">
        <div className="wrap py-16 lg:py-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.86rem] text-bone/55"
          >
            <Link href="/products" className="transition-colors hover:text-aramid">
              Products
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`/products/${product.category}`}
              className="transition-colors hover:text-aramid"
            >
              {cat?.name}
            </Link>
          </nav>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            {/* drawing */}
            <div className="rounded-sm border border-bone/15 bg-turf-deep/40 twill p-8">
              {product.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto h-auto w-full max-w-sm rounded-sm object-cover"
                />
              ) : (
                <ProductDrawing
                  category={product.category}
                  className="mx-auto h-72 w-full max-w-xs text-bone/85 sm:h-96"
                />
              )}
              <p className="mt-6 border-t border-bone/10 pt-4 font-mono text-[0.74rem] text-bone/45">
                {product.name} — technical elevation
              </p>
            </div>

            {/* headline info */}
            <div>
              <span className="inline-block rounded-full bg-aramid px-3 py-1 font-mono text-[0.72rem] font-medium text-turf-deep">
                {product.level}
              </span>
              <h1 className="mt-4 text-display-lg font-display font-extrabold">{product.name}</h1>
              <p className="mt-5 max-w-prose2 text-[1.05rem] leading-relaxed text-bone/70">
                {product.description}
              </p>

              <ul className="mt-7 space-y-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[0.96rem] leading-relaxed text-bone/80">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-aramid" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <EnquiryButtons subject={`the ${product.name}`} size="lg" tone="on-dark" />
                <p className="mt-4 font-mono text-[0.78rem] text-bone/45">
                  Minimum {site.trade.moq} · Sample {site.trade.sample} · {site.trade.incoterms}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* spec table */}
      <section className="py-16 lg:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-display text-display-md font-extrabold text-turf-deep">
              Full specification
            </h2>
            <dl className="mt-7 border-t border-turf/15">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-wrap justify-between gap-x-8 gap-y-1 border-b border-turf/15 py-3.5"
                >
                  <dt className="text-[0.95rem] text-slate2">{s.label}</dt>
                  <dd className="font-mono text-[0.9rem] text-turf-deep">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[0.92rem] leading-relaxed text-slate2">
              Any line in this table can be changed for your order. Weight, balance, bow, core
              density and finish are all set at production, not chosen from a catalogue.
            </p>
          </div>

          <aside className="h-fit border border-turf/15 bg-bone-dim p-7">
            <h2 className="font-display text-[1.3rem] font-bold tracking-[-0.02em] text-turf-deep">
              Trade terms
            </h2>
            <dl className="mt-5 space-y-3.5 font-mono text-[0.84rem]">
              {[
                ["Minimum order", site.trade.moq],
                ["Sample", site.trade.sample],
                ["Lead time", site.trade.leadTime],
                ["Incoterms", site.trade.incoterms],
                ["Payment", site.trade.payment],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6">
                  <dt className="text-slate2">{k}</dt>
                  <dd className="text-right text-turf-deep">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7">
              <EnquiryButtons subject={`a quote for the ${product.name}`} stretch />
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-bone-dim py-16 lg:py-20">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-display text-display-md font-extrabold text-turf-deep">
                Others in {cat?.name.toLowerCase()}
              </h2>
              <Link
                href={`/products/${product.category}`}
                className="inline-flex items-center gap-2 font-semibold text-turf underline decoration-aramid decoration-2 underline-offset-[6px]"
              >
                See all
                <ArrowIcon className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-10 grid border-l border-t border-turf/15 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
