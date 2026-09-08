import { MessageCircle, Phone, MapPin } from "lucide-react";
import { PHONE_LINK, WHATSAPP_BRIDAL_LINK, DIRECTIONS_LINK } from "@/lib/contact";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2.5 sm:gap-3">
      <a
        href={DIRECTIONS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Directions to Indirapuram Studio"
        title="Studio Directions"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-gold text-accent-foreground flex items-center justify-center shadow-elegant hover:scale-110 hover:shadow-gold transition-smooth"
      >
        <MapPin size={22} className="sm:w-6 sm:h-6" />
      </a>
      <a
        href={WHATSAPP_BRIDAL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp for Bridal Dates"
        title="WhatsApp Us"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-smooth"
      >
        <MessageCircle size={24} className="sm:w-7 sm:h-7" />
      </a>
      <a
        href={PHONE_LINK}
        aria-label="Call Now"
        title="Call Now"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-rose text-primary-foreground flex items-center justify-center shadow-elegant hover:scale-110 transition-smooth"
      >
        <Phone size={20} className="sm:w-6 sm:h-6" />
      </a>
    </div>
  );
}
