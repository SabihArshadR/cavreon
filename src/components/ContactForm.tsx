"use client";

import { useState } from "react";
import { MailIcon, WhatsAppIcon } from "@/components/Icons";
import { categories } from "@/data/products";
import { mailtoLink, whatsappLink } from "@/data/site";
import { FaWhatsapp } from "react-icons/fa";

const field =
  "w-full rounded-sm border border-turf/20 bg-bone px-4 py-3 text-[0.95rem] text-turf-deep placeholder:text-slate2/70 focus:border-turf focus:outline-none";

const label = "mb-1.5 block text-[0.88rem] font-medium text-turf";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [interest, setInterest] = useState(categories[0].name);
  const [quantity, setQuantity] = useState("");
  const [detail, setDetail] = useState("");

  const ready = name.trim().length > 1 && country.trim().length > 1;

  const message = [
    `Hello Cavreon,`,
    ``,
    `Name: ${name || "—"}`,
    `Company: ${company || "—"}`,
    `Country: ${country || "—"}`,
    `Interested in: ${interest}`,
    `Approximate quantity: ${quantity || "—"}`,
    ``,
    detail || "Please send pricing and lead times.",
  ].join("\n");

  return (
    <div className="border border-turf/15 bg-bone-dim p-6 sm:p-8">
      <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.025em] text-turf-deep">
        Tell us about your order
      </h2>
      <p className="mt-2 text-[0.94rem] leading-relaxed text-slate2">
        Fill this in and it opens WhatsApp or your email with the message already written.
        Nothing is stored on this site.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jan de Vries"
            autoComplete="name"
          />
        </div>
        <div>
          <label className={label} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            className={field}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Optional"
            autoComplete="organization"
          />
        </div>
        <div>
          <label className={label} htmlFor="country">
            Country
          </label>
          <input
            id="country"
            className={field}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Netherlands"
            autoComplete="country-name"
          />
        </div>
        <div>
          <label className={label} htmlFor="quantity">
            Approximate quantity
          </label>
          <input
            id="quantity"
            className={field}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="500 pcs"
            inputMode="numeric"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="interest">
            What are you looking for
          </label>
          <select
            id="interest"
            className={field}
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c.slug}>{c.name}</option>
            ))}
            <option>Private label across several categories</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="detail">
            Anything else we should know
          </label>
          <textarea
            id="detail"
            rows={4}
            className={field}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Weight, bow, core, artwork, target price, delivery date…"
          />
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={ready ? whatsappLink(message) : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!ready}
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-colors ${
            ready
              ? "bg-aramid text-turf-deep hover:bg-aramid-dim"
              : "pointer-events-none bg-turf/15 text-turf/40"
          }`}
        >
          <FaWhatsapp className="h-5 w-5" />
          Send on WhatsApp
        </a>
        <a
          href={ready ? mailtoLink(`Enquiry from ${company || name}`, message) : undefined}
          aria-disabled={!ready}
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border px-6 py-3.5 font-semibold transition-colors ${
            ready
              ? "border-turf/25 text-turf hover:border-turf hover:bg-turf hover:text-bone"
              : "pointer-events-none border-turf/10 text-turf/40"
          }`}
        >
          <MailIcon className="h-5 w-5" />
          Send by email
        </a>
      </div>

      {!ready && (
        <p className="mt-3 text-[0.85rem] text-slate2">
          Add your name and country to continue.
        </p>
      )}
    </div>
  );
}
