import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { FaWhatsapp } from "react-icons/fa";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Cavreon in Sialkot about hockey sticks, padel rackets, pickleball paddles, shin guards and sports bags. WhatsApp or email, same-day replies.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-turf text-bone">
        <div className="absolute inset-0 blueprint" aria-hidden="true" />
        <div className="wrap relative py-16 lg:py-20">
          <h1 className="max-w-[20ch] text-display-lg font-display font-extrabold">
            WhatsApp is the fastest way to reach us
          </h1>
          <p className="mt-5 max-w-prose2 text-[1.05rem] leading-relaxed text-bone/70">
            Our sales desk runs 09:00 to 18:00 Pakistan Standard Time, Monday to Saturday.
            Messages sent overnight from Europe or the Americas are usually answered before
            you wake up.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-start">
          <div>
            <div className="space-y-6">
              <a
                href={whatsappLink("Hello Cavreon, I'd like to discuss an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 border border-turf/15 p-6 transition-colors hover:border-turf hover:bg-bone-dim"
              >
                <FaWhatsapp className="mt-0.5 h-6 w-6 shrink-0 text-aramid-dim" />
                <span>
                  <span className="block font-display text-[1.2rem] font-bold tracking-[-0.02em] text-turf-deep">
                    WhatsApp
                  </span>
                  <span className="mt-1 block font-mono text-[0.9rem] text-slate2">
                    {site.whatsappDisplay}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-4 border border-turf/15 p-6 transition-colors hover:border-turf hover:bg-bone-dim"
              >
                <MailIcon className="mt-0.5 h-6 w-6 shrink-0 text-aramid-dim" />
                <span>
                  <span className="block font-display text-[1.2rem] font-bold tracking-[-0.02em] text-turf-deep">
                    Email
                  </span>
                  <span className="mt-1 block font-mono text-[0.9rem] text-slate2">
                    {site.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 border border-turf/15 p-6">
                <PhoneIcon className="mt-0.5 h-6 w-6 shrink-0 text-aramid-dim" />
                <span>
                  <span className="block font-display text-[1.2rem] font-bold tracking-[-0.02em] text-turf-deep">
                    Landline
                  </span>
                  <span className="mt-1 block font-mono text-[0.9rem] text-slate2">
                    {site.phone}
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-4 border border-turf/15 p-6">
                <PinIcon className="mt-0.5 h-6 w-6 shrink-0 text-aramid-dim" />
                <span>
                  <span className="block font-display text-[1.2rem] font-bold tracking-[-0.02em] text-turf-deep">
                    Factory
                  </span>
                  <span className="mt-1 block text-[0.94rem] leading-relaxed text-slate2">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.country}
                  </span>
                </span>
              </div>
            </div>

            <p className="mt-8 text-[0.94rem] leading-relaxed text-slate2">
              Buyers are welcome at the factory. Tell us your dates and we will arrange a
              pickup from Sialkot or Lahore airport.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
