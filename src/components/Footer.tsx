import Link from "next/link";
import Logo from "@/components/Logo";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { FaWhatsapp } from "react-icons/fa";
import { categories } from "@/data/products";
import { nav, site, whatsappLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-turf-deep text-bone">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-bone/65">
            {site.legalName} presses, stitches and finishes composite sports equipment in
            Sialkot, and ships it to distributors and brands in more than twenty countries.
          </p>

          <div className="mt-7 space-y-3 text-[0.92rem]">
            <a
              href={whatsappLink("Hello Cavreon, I would like to discuss an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-bone/80 transition-colors hover:text-aramid"
            >
              <FaWhatsapp className="h-[1.15rem] w-[1.15rem] shrink-0 text-aramid" />
              {site.whatsappDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-bone/80 transition-colors hover:text-aramid"
            >
              <MailIcon className="h-[1.15rem] w-[1.15rem] shrink-0 text-aramid" />
              {site.email}
            </a>
            <p className="flex items-center gap-3 text-bone/80">
              <PhoneIcon className="h-[1.15rem] w-[1.15rem] shrink-0 text-aramid" />
              {site.phone}
            </p>
            <p className="flex items-start gap-3 text-bone/80">
              <PinIcon className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-aramid" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}, {site.address.country}
              </span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-[1.05rem] font-bold tracking-[-0.01em]">
            What we make
          </h2>
          <ul className="mt-5 space-y-3 text-[0.92rem]">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products/${c.slug}`}
                  className="text-bone/65 transition-colors hover:text-aramid"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-[1.05rem] font-bold tracking-[-0.01em]">Company</h2>
          <ul className="mt-5 space-y-3 text-[0.92rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-bone/65 transition-colors hover:text-aramid"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-7 space-y-3 text-[0.92rem]">
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/65 transition-colors hover:text-aramid"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/65 transition-colors hover:text-aramid"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="wrap flex flex-col gap-2 py-6 text-[0.84rem] text-bone/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Manufactured in Sialkot, Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
