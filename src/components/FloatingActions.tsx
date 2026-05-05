import { MessageCircle, Phone } from "lucide-react";
import { PHONE_LINK, WHATSAPP_LINK } from "@/lib/contact";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-smooth animate-shimmer">
        <MessageCircle size={26} />
      </a>
      <a href={PHONE_LINK} aria-label="Call"
        className="w-14 h-14 rounded-full bg-gradient-rose text-primary-foreground flex items-center justify-center shadow-elegant hover:scale-110 transition-smooth">
        <Phone size={22} />
      </a>
    </div>
  );
}
