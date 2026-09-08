import SEO from "@/components/SEO";
import { ADDRESS, MAPS_EMBED, PHONE, PHONE_LINK, WHATSAPP_LINK, WHATSAPP_BRIDAL_LINK } from "@/lib/contact";
import { MapPin, Phone, MessageCircle, Clock, Sparkles, Crown } from "lucide-react";
import WeddingAvailabilityForm from "@/components/WeddingAvailabilityForm";

export default function Contact() {
  return (
    <>
      <SEO
        title="Check Availability & Contact - KOKA Beauty Lounge"
        description="Book your bridal makeup team or salon appointment. We travel to your home, hotel, or wedding venue in Indirapuram, Ghaziabad, and destination locations."
        canonical="https://kokabeautylounge.com/contact"
      />

      <section className="bg-gradient-luxury py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
            We Come To You
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 text-foreground">
            Contact &amp; Wedding Bookings
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Check wedding date availability for on-location bridal makeup or connect with our Indirapuram lounge.
          </p>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Quick Contact Buttons */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <a
              href="#wedding-enquiry"
              className="bg-card p-5 rounded-2xl border border-gold/40 shadow-soft hover:shadow-elegant transition-smooth flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-rose text-primary-foreground flex items-center justify-center shrink-0 shadow-soft group-hover:scale-105 transition-smooth">
                <Crown size={22} />
              </div>
              <div>
                <div className="font-serif text-lg font-semibold text-foreground">Check Availability</div>
                <div className="text-xs text-muted-foreground">For Wedding &amp; Bridal Dates</div>
              </div>
            </a>

            <a
              href={WHATSAPP_BRIDAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-5 rounded-2xl border border-border shadow-soft hover:shadow-elegant transition-smooth flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-soft group-hover:scale-105 transition-smooth">
                <MessageCircle size={22} />
              </div>
              <div>
                <div className="font-serif text-lg font-semibold text-foreground">WhatsApp Us</div>
                <div className="text-xs text-muted-foreground">Instant Direct Chat</div>
              </div>
            </a>

            <a
              href={PHONE_LINK}
              className="bg-card p-5 rounded-2xl border border-border shadow-soft hover:shadow-elegant transition-smooth flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-gold text-accent-foreground flex items-center justify-center shrink-0 shadow-soft group-hover:scale-105 transition-smooth">
                <Phone size={20} />
              </div>
              <div>
                <div className="font-serif text-lg font-semibold text-foreground">Call Now</div>
                <div className="text-xs text-muted-foreground">{PHONE}</div>
              </div>
            </a>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Wedding Availability Form */}
            <div id="wedding-enquiry" className="lg:col-span-7">
              <WeddingAvailabilityForm id="contact-form" />
            </div>

            {/* Studio / Salon Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-card rounded-3xl shadow-soft border border-border p-6 sm:p-8 space-y-5">
                <div className="border-b border-border pb-4">
                  <div className="inline-flex items-center gap-1.5 text-gold text-xs uppercase tracking-wider font-semibold mb-1">
                    <Sparkles size={13} /> Studio Consultation Base
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">KOKA Beauty Lounge</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Indirapuram, Ghaziabad • For Pre-Bridal Care, Trials &amp; Salon Services
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 text-accent-foreground shadow-gold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold mb-0.5">Address</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{ADDRESS}</p>
                  </div>
                </div>

                <a href={PHONE_LINK} className="flex gap-4 hover:text-primary transition-smooth">
                  <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 text-accent-foreground shadow-gold">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold mb-0.5">Phone &amp; WhatsApp</h4>
                    <p className="text-xs sm:text-sm">{PHONE}</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 text-accent-foreground shadow-gold">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold mb-0.5">Studio Hours</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Monday – Sunday: 10:00 AM – 8:00 PM</p>
                    <p className="text-[11px] text-primary mt-0.5">
                      *Bridal on-location teams available 24/7 as per your ceremony call time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-3xl overflow-hidden shadow-soft border border-border h-[260px]">
                <iframe
                  title="KOKA Beauty Lounge location"
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
