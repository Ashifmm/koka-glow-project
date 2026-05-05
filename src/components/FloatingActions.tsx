import { MessageCircle, Phone, MapPin } from "lucide-react";
import { PHONE_LINK, WHATSAPP_LINK, DIRECTIONS_LINK } from "@/lib/contact";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={DIRECTIONS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Directions"
        className="group w-14 h-14 rounded-full bg-gradient-gold text-accent-foreground flex items-center justify-center shadow-elegant hover:scale-110 hover:shadow-gold transition-smooth"
      >
        <MapPin size={24} />
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-smooth"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href={PHONE_LINK}
        aria-label="Call Now"
        className="w-14 h-14 rounded-full bg-gradient-rose text-primary-foreground flex items-center justify-center shadow-elegant hover:scale-110 transition-smooth"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
