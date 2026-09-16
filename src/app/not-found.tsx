import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="bg-turf text-bone">
      <div className="wrap flex min-h-[60vh] flex-col justify-center py-20">
        <p className="font-mono text-[0.85rem] text-aramid">404</p>
        <h1 className="mt-4 max-w-[16ch] text-display-lg font-display font-extrabold">
          That page is not in the catalogue.
        </h1>
        <p className="mt-5 max-w-prose2 text-[1.02rem] leading-relaxed text-bone/65">
          The link may be old, or the product may have been renamed. Everything currently in
          production is on the products page.
        </p>
        <div className="mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 rounded-full bg-aramid px-6 py-3.5 font-semibold text-turf-deep transition-colors hover:bg-aramid-dim"
          >
            See the range
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
