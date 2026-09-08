import { Link } from "react-router-dom";
import {
  Sparkles,
  Crown,
  Heart,
  Star,
  MapPin,
  ArrowRight,
  MessageCircle,
  Phone,
  Home as HomeIcon,
  Building2,
  Palmtree,
  CheckCircle2,
  Calendar,
  Users,
} from "lucide-react";
import SEO from "@/components/SEO";
import WeddingAvailabilityForm from "@/components/WeddingAvailabilityForm";
import LazyVideo from "@/components/LazyVideo";
import { homeVideos } from "@/data/galleryVideos";
import { WHATSAPP_BRIDAL_LINK, PHONE_LINK, DIRECTIONS_LINK, ADDRESS, PHONE } from "@/lib/contact";
import bride from "@/assets/bride.webp";
import interior from "@/assets/salon-interior.webp";
import work from "@/assets/salon-work.webp";
import clients from "@/assets/clients.webp";

// Bridal & Wedding Services requested
const bridalServices = [
  {
    title: "Bridal Makeup",
    subtitle: "Signature Wedding Day Look",
    desc: "HD & luxury bridal makeup tailored to your skin tone, outfit, and wedding lighting. Includes complete hairstyling, dupatta draping, jewelry setting & long-lasting finish.",
    locations: "Home • Hotel • Wedding Venue",
    badge: "Most Popular",
  },
  {
    title: "Engagement Makeup",
    subtitle: "Ring Ceremony & Roka",
    desc: "Radiant, camera-ready glow crafted for your ring ceremony, sagai, or cocktail night. Elegant soft glam or bold couture makeup tailored to your styling.",
    locations: "Home • Hotel • Venue",
    badge: "Radiant Glam",
  },
  {
    title: "Reception Makeup",
    subtitle: "Evening Wedding Celebration",
    desc: "Sophisticated, high-impact evening glam built to endure celebration lights, dining, and late-night stage photography without fading or creasing.",
    locations: "Hotel • Banquet • Venue",
    badge: "High Impact",
  },
  {
    title: "Wedding Guest Makeup",
    subtitle: "Family, Bridesmaids & Entourage",
    desc: "Flawless party makeup and hairstyling for mothers of the bride/groom, sisters, bridesmaids, and close family members so everyone looks coordinated and polished.",
    locations: "At Your Getting-Ready Suite",
    badge: "Group Available",
  },
  {
    title: "Destination Wedding Makeup",
    subtitle: "Full Ceremony Multi-Day Travel",
    desc: "Our senior makeup artists and hairstyling team travel to your destination wedding across India. Complete coverage for Haldi, Mehndi, Sangeet, Wedding & Reception.",
    locations: "Across India & Outstation Venues",
    badge: "Travel Across India",
  },
];

// Venue travel locations
const travelLocations = [
  {
    icon: HomeIcon,
    title: "At Your Home",
    desc: "Get ready in total peace and comfort with your family, without traveling through traffic or rushing in salon waiting rooms.",
  },
  {
    icon: Building2,
    title: "At Your Hotel",
    desc: "We set up directly in your hotel room or bridal suite, ensuring you and your bridal party are prepped on time.",
  },
  {
    icon: Crown,
    title: "At Your Wedding Venue",
    desc: "On-site bridal room preparation right before your grand entry, with touch-up support right up to your ceremony.",
  },
  {
    icon: Palmtree,
    title: "Destination Weddings",
    desc: "Dedicated senior artists who travel to your destination resort to handle all multi-day rituals seamlessly.",
  },
];

// Genuine testimonials from existing codebase
const testimonials = [
  {
    name: "Priya Sharma",
    text: "Hands down the best salon in Indirapuram! My bridal makeup was flawless. Got endless compliments.",
    role: "Bride",
  },
  {
    name: "Anjali Verma",
    text: "Finally found a beauty parlour in Ghaziabad I trust. Hygienic, premium products, super skilled team.",
    role: "Regular Client",
  },
  {
    name: "Neha Gupta",
    text: "The keratin treatment transformed my hair. KOKA is now my forever salon.",
    role: "Hair Client",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Bridal Makeup Artist | KOKA Beauty Lounge"
        description="Professional bridal, wedding and destination makeup. KOKA Beauty Lounge comes to your home, hotel or wedding venue. Check wedding date availability."
        canonical="https://kokabeautylounge.com/"
      />

      {/* 1. HERO SECTION — Bridal & Wedding Makeup Focus with Restored Salon Interior Background */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Restored original luxury salon interior background */}
        <picture className="absolute inset-0 w-full h-full">
          <img
            src={interior}
            alt="KOKA Beauty Lounge luxury salon interior in Indirapuram"
            className="w-full h-full object-cover object-center filter brightness-[0.92]"
            loading="eager"
            {...{ fetchpriority: "high" }}
            decoding="async"
            width={1169}
            height={1424}
          />
        </picture>

        {/* Original luxury rose overlay for high readability and premium atmosphere */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(340 30% 15% / 0.82) 0%, hsl(340 50% 25% / 0.65) 60%, hsl(340 35% 15% / 0.85) 100%)",
          }}
        />

        <div className="relative container mx-auto px-4 py-20 sm:py-24 text-primary-foreground">
          <div className="max-w-3xl animate-fade-up">
            {/* Badges: Bridal Makeup Artist + We Come To You */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 bg-gradient-gold text-accent-foreground font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-gold">
                <Crown size={14} /> Bridal Makeup Artist
              </span>
              <span className="inline-flex items-center gap-1.5 bg-background/20 backdrop-blur border border-primary-foreground/30 text-white font-medium px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider">
                <Sparkles size={13} className="text-gold" /> We Come To You
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-primary-foreground/80">
                <MapPin size={13} className="text-gold" /> Indirapuram, Ghaziabad & Destinations
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] font-normal mb-5">
              Professional Bridal &amp; Wedding Makeup{" "}
              <span className="text-gradient-gold italic block mt-1 font-semibold">
                At Your Home, Hotel or Wedding Venue
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              No need to travel to a salon on your big day. KOKA Beauty Lounge's certified bridal artists bring luxury
              makeup, hairstyling &amp; draping directly to your location.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4 mb-8">
              <a
                href="#check-availability"
                className="inline-flex items-center justify-center gap-2 bg-gradient-rose px-7 py-3.5 rounded-full text-base font-semibold shadow-elegant hover:scale-105 active:scale-95 transition-smooth min-h-[48px]"
              >
                Check Wedding Date Availability <ArrowRight size={18} />
              </a>

              <a
                href={WHATSAPP_BRIDAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full text-base font-medium shadow-elegant hover:scale-105 transition-smooth min-h-[48px]"
              >
                <MessageCircle size={19} /> WhatsApp Us
              </a>

              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 bg-background/15 backdrop-blur border border-primary-foreground/40 px-6 py-3.5 rounded-full text-base font-medium shadow-elegant hover:bg-background/25 hover:scale-105 transition-smooth min-h-[48px]"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>

            {/* Highlights bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-primary-foreground/20 text-xs sm:text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span>Travel to Your Venue</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span>HD &amp; Premium Products</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span>Trials &amp; Consultations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "WE COME TO YOU" SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
              On-Location Bridal Service
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-foreground">
              Your Wedding. Your Venue. We Come To You.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Our professional makeup team travels to your home, hotel, wedding venue or destination wedding location,
              so you can get ready comfortably wherever your wedding celebrations are taking place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {travelLocations.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card rounded-2xl p-6 sm:p-7 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-1 border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-4 shadow-gold text-accent-foreground">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-2 text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 text-xs font-medium text-primary flex items-center gap-1.5">
                  <Sparkles size={13} className="text-gold" /> On-Location Makeup &amp; Hair
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#check-availability"
              className="inline-flex items-center gap-2 bg-gradient-rose text-primary-foreground px-8 py-3.5 rounded-full font-semibold shadow-elegant hover:scale-105 transition-smooth"
            >
              Check Wedding Date Availability <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 3. BRIDAL & WEDDING SERVICES SECTION */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
              Specialized Wedding Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-foreground">
              Bridal &amp; Wedding Makeup Services
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Professional makeup services for your special occasions, available at your home, hotel, wedding venue or
              destination wedding location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bridalServices.map((srv) => (
              <div
                key={srv.title}
                className="bg-card rounded-2xl p-6 sm:p-7 shadow-soft hover:shadow-elegant transition-smooth border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-gold bg-secondary/80 px-3 py-1 rounded-full border border-gold/20">
                      {srv.badge}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin size={12} className="text-primary" /> We Travel
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-1 text-foreground">{srv.title}</h3>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-3">
                    {srv.subtitle}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{srv.desc}</p>
                </div>

                <div className="pt-4 border-t border-border/80">
                  <div className="text-xs text-foreground/80 mb-3 flex items-center gap-1.5">
                    <span className="font-medium text-foreground">Location:</span> {srv.locations}
                  </div>
                  <a
                    href="#check-availability"
                    className="w-full text-center text-xs font-semibold uppercase tracking-wider bg-secondary hover:bg-secondary/70 text-foreground py-2.5 px-4 rounded-xl border border-border inline-flex items-center justify-center gap-1.5 transition-smooth"
                  >
                    Check Availability <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}

            {/* Additional Info Box */}
            <div className="bg-gradient-to-br from-secondary/70 via-card to-secondary/30 rounded-2xl p-6 sm:p-7 shadow-soft border border-gold/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center mb-4 text-accent-foreground">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
                  Custom Wedding Packages
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Need hair, makeup, draping, and touch-up services for your entire family or multiple functions? We curate
                  all-inclusive bridal packages customized to your event schedule.
                </p>
              </div>
              <div className="pt-4 border-t border-border/80">
                <a
                  href={WHATSAPP_BRIDAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center gap-2 shadow-soft hover:scale-[1.02] transition-smooth"
                >
                  <MessageCircle size={15} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#check-availability"
              className="inline-flex items-center gap-2 bg-gradient-rose text-primary-foreground px-8 py-3.5 rounded-full font-semibold shadow-elegant hover:scale-105 transition-smooth"
            >
              Check Wedding Date Availability <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 4. REAL BRIDAL PORTFOLIO (Keeping real images & videos) */}
      <section className="py-16 sm:py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between mb-10 gap-4 max-w-6xl mx-auto">
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
                Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
                Real Bridal Makeup Looks
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
                Real brides, authentic transformations, and genuine moments styled by KOKA.
              </p>
            </div>
            <Link to="/gallery" className="text-primary font-medium inline-flex items-center gap-2 hover:underline">
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </div>

          {/* Real images grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">
            <div className="relative rounded-2xl overflow-hidden shadow-soft group">
              <img
                src={bride}
                alt="Signature bridal makeup by KOKA Beauty Lounge"
                className="w-full h-72 object-cover group-hover:scale-[1.03] transition-smooth"
                loading="lazy"
                decoding="async"
                width={585}
                height={718}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                Bridal Glam • Signature Look
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-soft group">
              <img
                src={clients}
                alt="Happy bridal clients styled at KOKA"
                className="w-full h-72 object-cover group-hover:scale-[1.03] transition-smooth"
                loading="lazy"
                decoding="async"
                width={585}
                height={720}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                Bridal &amp; Wedding Glow
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-soft group">
              <img
                src={work}
                alt="Hair styling and bridal artistry at KOKA"
                className="w-full h-72 object-cover group-hover:scale-[1.03] transition-smooth"
                loading="lazy"
                decoding="async"
                width={585}
                height={458}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                Intricate Bridal Hairstyling
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-soft group">
              <img
                src={interior}
                alt="KOKA Beauty Lounge Indirapuram consultation studio"
                className="w-full h-72 object-cover group-hover:scale-[1.03] transition-smooth"
                loading="lazy"
                decoding="async"
                width={585}
                height={712}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                Indirapuram Bridal Studio
              </div>
            </div>
          </div>

          {/* Real Videos Section */}
          <div className="max-w-6xl mx-auto mt-12">
            <div className="text-center mb-8">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
                Live Transformations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold">Behind The Scenes</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {homeVideos.map((v) => (
                <LazyVideo
                  key={v.id}
                  id={v.id}
                  label={v.label}
                  title={v.title}
                  subtitle={v.subtitle}
                />
              ))}
            </div>
          </div>

          {/* CTA after portfolio */}
          <div className="text-center mt-12">
            <a
              href="#check-availability"
              className="inline-flex items-center gap-2 bg-gradient-rose text-primary-foreground px-8 py-3.5 rounded-full font-semibold shadow-elegant hover:scale-105 transition-smooth"
            >
              Check Wedding Date Availability <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. TRUST / REVIEWS SECTION (Genuine existing reviews only) */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
              Client Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Real experiences from brides and loyal patrons who trusted KOKA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-7 shadow-soft border border-border flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-gold mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-foreground/90 italic mb-5 leading-relaxed">"{t.text}"</p>
                </div>
                <div className="pt-3 border-t border-border/70">
                  <div className="font-serif text-lg font-semibold">{t.name}</div>
                  <div className="text-xs text-primary font-medium uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRIMARY CONVERSION FORM SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <WeddingAvailabilityForm id="check-availability" />
          </div>
        </div>
      </section>

      {/* 7. STUDIO LOCATION & CONSULTATION INFO (Preserving salon identity) */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
                Physical Studio &amp; Consultations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4 text-foreground">
                KOKA Beauty Lounge, Indirapuram
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                While our bridal team travels directly to your home, hotel, or venue for your wedding functions, you are
                always welcome at our Indirapuram studio for pre-wedding skincare, hair textures, trials, and consultation.
              </p>
              <div className="space-y-3 text-sm text-foreground/90 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>{ADDRESS}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a href={PHONE_LINK} className="hover:text-primary font-medium">
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={DIRECTIONS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-gold hover:scale-105 transition-smooth"
                >
                  <MapPin size={16} /> Get Directions
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-secondary text-foreground px-5 py-2.5 rounded-full text-sm font-semibold border border-border hover:bg-secondary/70 transition-smooth"
                >
                  View Salon Menu <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-elegant border border-border h-72 sm:h-80">
              <img
                src={interior}
                alt="KOKA Beauty Lounge luxury interior in Indirapuram"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={585}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
