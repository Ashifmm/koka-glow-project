import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, MessageCircle, Star } from "lucide-react";
import { ADDRESS, FACEBOOK, GOOGLE_REVIEW, INSTAGRAM, PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-secondary to-muted mt-24 border-t border-border">
      <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-serif text-2xl text-gradient-gold mb-2">KOKA Beauty Lounge</h3>
          <p className="text-sm text-muted-foreground">Indirapuram's premium beauty destination since April 2024. Hair, skin, bridal & spa.</p>
          <div className="flex gap-3 mt-4">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground"><Instagram size={16} /></a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground"><Facebook size={16} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Visit Us</h4>
          <p className="text-sm text-muted-foreground flex gap-2"><MapPin size={16} className="shrink-0 mt-1 text-primary" /> {ADDRESS}</p>
          <a href={PHONE_LINK} className="text-sm flex gap-2 mt-2 hover:text-primary"><Phone size={16} className="text-primary" /> {PHONE}</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm flex gap-2 mt-2 hover:text-primary"><MessageCircle size={16} className="text-primary" /> WhatsApp</a>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Loved Our Service?</h4>
          <a href={GOOGLE_REVIEW} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-4 py-2 rounded-full text-sm shadow-gold">
            <Star size={16} /> Review us on Google 💖
          </a>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} KOKA Beauty Lounge, Indirapuram. All rights reserved.
      </div>
    </footer>
  );
}
