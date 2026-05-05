import { Link } from "react-router-dom";
import { Sparkles, Scissors, Crown, Heart, Star, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { WHATSAPP_LINK, PHONE_LINK, DIRECTIONS_LINK } from "@/lib/contact";
import bride from "@/assets/bride.jpeg";
import interior from "@/assets/salon-interior.jpeg";
import work from "@/assets/salon-work.jpeg";
import clients from "@/assets/clients.jpeg";

const highlights = [
  { icon: Crown, title: "Bridal Makeup", desc: "Signature bridal looks for your big day in Indirapuram." },
  { icon: Scissors, title: "Hair Studio", desc: "Cuts, color, keratin, smoothing & advanced texture services." },
  { icon: Sparkles, title: "Skin & Facials", desc: "O3+, Casmara, VLCC, Lotus & anti-pigmentation experts." },
  { icon: Heart, title: "Spa & Wellness", desc: "Relaxing massages, body polishing & ritual treatments." },
];

const testimonials = [
  { name: "Priya Sharma", text: "Hands down the best salon in Indirapuram! My bridal makeup was flawless. Got endless compliments.", role: "Bride" },
  { name: "Anjali Verma", text: "Finally found a beauty parlour in Ghaziabad I trust. Hygienic, premium products, super skilled team.", role: "Regular Client" },
  { name: "Neha Gupta", text: "The keratin treatment transformed my hair. KOKA is now my forever salon.", role: "Hair Client" },
];

export default function Home() {
  return (
    <>
      <SEO
        title="KOKA Beauty Lounge - Best Salon in Indirapuram, Ghaziabad"
        description="Premium beauty salon & bridal makeup studio in Indirapuram, Ghaziabad. Hair, skin, facials, spa, bridal — book your appointment today."
        canonical="https://kokabeautylounge.com/"
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img src={interior} alt="KOKA Beauty Lounge salon interior in Indirapuram" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-hero" style={{ background: "linear-gradient(135deg, hsl(340 30% 15% / 0.75), hsl(340 50% 25% / 0.55))" }} />
        <div className="relative container mx-auto px-4 py-20 text-primary-foreground">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-background/15 backdrop-blur border border-primary-foreground/30 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest mb-6">
              <Star size={14} className="text-gold" /> Indirapuram's Premium Beauty Lounge
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
              Enhancing Your <span className="text-gradient-gold italic">Natural Beauty</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
              From everyday glow to unforgettable bridal moments — experience luxury salon care at KOKA Beauty Lounge, Indirapuram.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-rose px-6 py-3 rounded-full font-medium shadow-elegant hover:scale-105 transition-smooth">
                Book Appointment <ArrowRight size={18} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 rounded-full font-medium shadow-elegant hover:scale-105 transition-smooth">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href={PHONE_LINK} className="inline-flex items-center gap-2 bg-background/15 backdrop-blur border border-primary-foreground/40 px-6 py-3 rounded-full font-medium shadow-elegant hover:bg-background/25 hover:scale-105 transition-smooth">
                <Phone size={18} /> Call Now
              </a>
              <a href={DIRECTIONS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-6 py-3 rounded-full font-medium shadow-gold hover:scale-105 transition-smooth">
                <MapPin size={18} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Our Specialties</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">A Sanctuary of Beauty</h2>
            <p className="text-muted-foreground">Curated services, premium brands, and a team that treats every client like royalty.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-1 border border-border">
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                  <Icon className="text-accent-foreground" size={26} />
                </div>
                <h3 className="font-serif text-2xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Step Inside</p>
            <h2 className="font-serif text-4xl md:text-5xl">Inside KOKA Beauty Lounge</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {["v1", "v2", "v3"].map(v => (
              <video key={v} src={`/videos/${v}.mp4`} muted loop autoPlay playsInline
                className="rounded-2xl w-full aspect-[9/16] object-cover shadow-elegant"
                aria-label="KOKA Beauty Lounge salon video" />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Gallery</p>
              <h2 className="font-serif text-4xl md:text-5xl">Moments of Beauty</h2>
            </div>
            <Link to="/gallery" className="text-primary font-medium inline-flex items-center gap-2">View Gallery <ArrowRight size={18} /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={bride} alt="Bridal makeup in Indirapuram by KOKA" className="rounded-2xl w-full h-72 object-cover hover:scale-[1.02] transition-smooth shadow-soft" loading="lazy" />
            <img src={interior} alt="Luxury salon interior" className="rounded-2xl w-full h-72 object-cover hover:scale-[1.02] transition-smooth shadow-soft" loading="lazy" />
            <img src={work} alt="Hair styling at KOKA Beauty Lounge" className="rounded-2xl w-full h-72 object-cover hover:scale-[1.02] transition-smooth shadow-soft" loading="lazy" />
            <img src={clients} alt="Happy clients styled at KOKA" className="rounded-2xl w-full h-72 object-cover hover:scale-[1.02] transition-smooth shadow-soft" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Love Notes</p>
            <h2 className="font-serif text-4xl md:text-5xl">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-card rounded-2xl p-7 shadow-soft border border-border">
                <div className="flex gap-1 text-gold mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-foreground/80 italic mb-5">"{t.text}"</p>
                <div className="font-serif text-lg">{t.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant bg-gradient-rose p-10 md:p-16 text-center text-primary-foreground">
            <Sparkles className="absolute top-6 left-6 text-gold opacity-60" />
            <Sparkles className="absolute bottom-6 right-6 text-gold opacity-60" />
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Your Glow-Up Awaits</h2>
            <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8">
              Book your appointment today and experience the most loved salon in Indirapuram, Ghaziabad.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-background text-foreground px-7 py-3.5 rounded-full font-medium shadow-elegant hover:scale-105 transition-smooth inline-flex items-center gap-2">
                <MessageCircle size={18} /> Book on WhatsApp
              </a>
              <Link to="/contact" className="bg-foreground/20 backdrop-blur border border-primary-foreground/40 px-7 py-3.5 rounded-full font-medium hover:bg-foreground/30 transition-smooth inline-flex items-center gap-2">
                <MapPin size={18} /> Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
