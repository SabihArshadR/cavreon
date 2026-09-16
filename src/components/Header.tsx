"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/Icons";
import { nav, site, whatsappLink } from "@/data/site";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-turf-deep/95 backdrop-blur-md" : "bg-turf-deep"
      }`}
    >
      <div className="wrap flex h-[68px] items-center justify-between">
        <Link href="/" aria-label="Cavreon home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.92rem] font-medium transition-colors ${
                  active ? "text-aramid" : "text-bone/75 hover:text-bone"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(
              "Hello Cavreon, I found your website and would like to discuss an order.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-aramid px-4 py-2.5 text-[0.88rem] font-semibold text-turf-deep transition-colors hover:bg-aramid-dim sm:inline-flex"
          >
            <FaWhatsapp className="h-[1.1rem] w-[1.1rem]" />
            {site.whatsappDisplay}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-bone/20 text-bone lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-bone/10 bg-turf-deep lg:hidden">
          <nav className="wrap flex flex-col py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-bone/10 py-3.5 font-display text-[1.35rem] font-bold tracking-[-0.02em] text-bone last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Hello Cavreon, I would like to discuss an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-aramid px-5 py-3 font-semibold text-turf-deep"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Message us on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
