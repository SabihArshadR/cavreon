import Link from "next/link";
import ProductDrawing from "@/components/ProductDrawing";
import EnquiryButtons from "@/components/EnquiryButtons";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const keySpecs = product.specs.slice(0, 3);

  return (
    <article className="flex flex-col border-b border-r border-turf/15 bg-bone p-6 transition-colors hover:bg-bone-dim">
      <Link
        href={`/products/${product.category}/${product.slug}`}
        className="group block"
        aria-label={`${product.name} details`}
      >
        <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-sm bg-turf twill">
          {product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <ProductDrawing
              category={product.category}
              className="h-[82%] w-[82%] text-bone/85 transition-transform duration-500 group-hover:scale-[1.04]"
            />
          )}
          <span className="absolute left-3 top-3 rounded-full bg-aramid px-2.5 py-1 font-mono text-[0.68rem] font-medium text-turf-deep">
            {product.level}
          </span>
        </div>

        <h3 className="mt-5 font-display text-[1.5rem] font-extrabold leading-none tracking-[-0.025em] text-turf-deep">
          {product.name}
        </h3>
        <p className="mt-2.5 text-[0.92rem] leading-relaxed text-slate2">{product.summary}</p>
      </Link>

      <dl className="mt-5 space-y-1.5 border-t border-turf/12 pt-4 font-mono text-[0.78rem]">
        {keySpecs.map((s) => (
          <div key={s.label} className="flex justify-between gap-4">
            <dt className="text-slate2">{s.label}</dt>
            <dd className="text-right text-turf-deep">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto pt-5">
        <EnquiryButtons subject={`the ${product.name}`} size="sm" stretch />
      </div>
    </article>
  );
}
