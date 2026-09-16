"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, products, type CategorySlug } from "@/data/products";

type Filter = "all" | CategorySlug;

export default function Catalogue() {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = filter === "all" ? products : products.filter((p) => p.category === filter);

  const chips: { value: Filter; label: string; count: number }[] = [
    { value: "all", label: "Everything", count: products.length },
    ...categories.map((c) => ({
      value: c.slug as Filter,
      label: c.name,
      count: products.filter((p) => p.category === c.slug).length,
    })),
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products">
        {chips.map((chip) => {
          const active = filter === chip.value;
          return (
            <button
              key={chip.value}
              type="button"
              onClick={() => setFilter(chip.value)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-[0.88rem] font-medium transition-colors ${
                active
                  ? "border-turf bg-turf text-bone"
                  : "border-turf/25 text-turf hover:border-turf"
              }`}
            >
              {chip.label}
              <span
                className={`ml-2 font-mono text-[0.74rem] ${
                  active ? "text-aramid" : "text-slate2"
                }`}
              >
                {chip.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid border-l border-t border-turf/15 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
