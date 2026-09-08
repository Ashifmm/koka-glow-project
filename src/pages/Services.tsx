import SEO from "@/components/SEO";
import { services } from "@/data/services";
import { WHATSAPP_LINK, WHATSAPP_BRIDAL_LINK } from "@/lib/contact";
import { MessageCircle, Crown, Sparkles, MapPin, ArrowRight, Home as HomeIcon, Building2, Palmtree } from "lucide-react";
import WeddingAvailabilityForm from "@/components/WeddingAvailabilityForm";

const weddingServicesHighlight = [
  {
    name: "Bridal Makeup",
    badge: "Signature Look",
    desc: "HD & Airbrush bridal makeup, hairstyling, dupatta draping & jewelry setting. Complete on-location team travel.",
  },
  {
    name: "Engagement Makeup",
    badge: "Radiant Glow",
    desc: "Ring ceremony and cocktail night makeup designed for high-definition photography and celebrations.",
  },
  {
    name: "Reception Makeup",
    badge: "Evening Glam",
    desc: "Long-wear, transfer-resistant glam tailored for late-night stage lighting and wedding festivities.",
  },
  {
    name: "Wedding Guest Makeup",
    badge: "Group Packages",
    desc: "Coordinated makeup and hairstyling for bridesmaids, mothers, sisters, and wedding party entourage.",
  },
  {
    name: "Destination Wedding Makeup",
    badge: "Travel Across India",
    desc: "Dedicated senior artist travel for multi-day destination wedding rituals: Haldi, Mehndi, Sangeet & Pheras.",
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Bridal & Salon Services - KOKA Beauty Lounge, Indirapuram"
        description="Professional bridal & wedding makeup with on-location travel to your home, hotel or venue. Plus hair, skin & spa services at KOKA Beauty Lounge, Indirapuram."
        canonical="https://kokabeautylounge.com/services"
      />

      {/* Header */}
      <section className="bg-gradient-luxury py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
            Services &amp; Pricing
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 font-semibold text-foreground">
            Bridal &amp; Salon Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Professional bridal makeup artists who travel directly to your location, plus luxury hair, skin, and spa
            care at our Indirapuram lounge.
          </p>
        </div>
      </section>

      {/* FEATURED: Bridal & Wedding Makeup Services - "We Come To You" */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-card rounded-3xl p-6 sm:p-10 shadow-elegant border border-gold/40 mb-16">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-border pb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-gradient-gold text-accent-foreground px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                  <Crown size={14} /> Main Specialty • We Come To You
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Bridal &amp; Wedding Makeup Services
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-2xl">
                  Available at your <strong>Home, Hotel, Wedding Venue, or Destination Location</strong> across India.
                  No need to travel to the salon on your big day.
                </p>
              </div>

              <a
                href="#wedding-enquiry"
                className="inline-flex items-center gap-2 bg-gradient-rose text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold shadow-elegant hover:scale-105 transition-smooth"
              >
                Check Wedding Date Availability <ArrowRight size={16} />
              </a>
            </div>

            {/* Travel icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 bg-secondary/50 p-4 rounded-2xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                <HomeIcon size={16} className="text-primary shrink-0" />
                <span>At Your Home</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                <Building2 size={16} className="text-primary shrink-0" />
                <span>At Your Hotel</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                <Crown size={16} className="text-primary shrink-0" />
                <span>At Your Venue</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                <Palmtree size={16} className="text-primary shrink-0" />
                <span>Destination Weddings</span>
              </div>
            </div>

            {/* Bridal services list */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {weddingServicesHighlight.map((ws) => (
                <div key={ws.name} className="p-5 rounded-2xl bg-secondary/40 border border-border/80 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">{ws.name}</h3>
                      <span className="text-[10px] uppercase font-semibold text-gold bg-card px-2 py-0.5 rounded border border-gold/20">
                        {ws.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{ws.desc}</p>
                  </div>
                  <div className="text-[11px] text-primary font-medium flex items-center gap-1 pt-2 border-t border-border/60">
                    <MapPin size={12} /> On-Location Travel Available
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Anchor */}
          <div id="wedding-enquiry" className="mb-16">
            <WeddingAvailabilityForm id="services-availability" />
          </div>

          {/* Regular Lounge Menu */}
          <div className="mb-10 text-center">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
              Indirapuram Studio Menu
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-3">
              Salon &amp; Spa Treatments
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Walk-in and advance bookings available at our Shakti Khand I, Indirapuram lounge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((cat) => (
              <div key={cat.title} className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
                <div className="bg-gradient-gold px-6 py-4">
                  <h3 className="font-serif text-2xl text-accent-foreground font-semibold">{cat.title}</h3>
                </div>
                <ul className="divide-y divide-border">
                  {cat.items.map((it) => (
                    <li key={it.name} className="flex justify-between gap-4 px-6 py-3 hover:bg-secondary/30 transition-smooth text-sm">
                      <span className="text-foreground/90">{it.name}</span>
                      <span className="text-primary font-medium whitespace-nowrap">{it.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-rose text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-elegant hover:scale-105 transition-smooth text-base"
            >
              <MessageCircle size={20} /> Book Salon Appointment on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
