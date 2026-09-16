import { WhatsAppIcon } from "@/components/Icons";
import { whatsappLink } from "@/data/site";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hello Cavreon, I have a question about your products.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Cavreon on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-aramid text-turf-deep shadow-lg shadow-turf-deep/25 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
