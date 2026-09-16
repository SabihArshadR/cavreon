import { mailtoLink, whatsappLink } from "@/data/site";
import { MailIcon, WhatsAppIcon } from "@/components/Icons";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  /** Name of the thing being asked about, e.g. "Apex 95" or "a catalogue". */
  subject: string;
  size?: "sm" | "md" | "lg";
  /** Stack full width on the card, or sit inline. */
  stretch?: boolean;
  tone?: "on-light" | "on-dark";
};

function message(subject: string) {
  return `Hello Cavreon, I'd like a quote for ${subject}. My company is , based in , and I'm looking at around  pcs. Please send pricing and lead time.`;
}

export default function EnquiryButtons({
  subject,
  size = "md",
  stretch = false,
  tone = "on-light",
}: Props) {
  const pad =
    size === "sm"
      ? "px-3.5 py-2 text-[0.82rem]"
      : size === "lg"
        ? "px-6 py-3.5 text-[0.98rem]"
        : "px-5 py-3 text-[0.9rem]";

  const icon = size === "sm" ? "h-4 w-4" : "h-[1.15rem] w-[1.15rem]";

  const secondary =
    tone === "on-dark"
      ? "border-bone/25 text-bone hover:border-aramid hover:text-aramid"
      : "border-turf/20 text-turf hover:border-turf hover:bg-turf hover:text-bone";

  return (
    <div className={`flex flex-wrap gap-2.5 ${stretch ? "w-full" : ""}`}>
      <a
        href={whatsappLink(message(subject))}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-aramid font-semibold text-turf-deep transition-colors hover:bg-aramid-dim ${pad}`}
      >
        <FaWhatsapp className={icon} />
        Ask on WhatsApp
      </a>
      <a
        href={mailtoLink(`Enquiry: ${subject}`, message(subject))}
        className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border font-semibold transition-colors ${secondary} ${pad}`}
      >
        <MailIcon className={icon} />
        Email us
      </a>
    </div>
  );
}
