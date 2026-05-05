import SEO from "@/components/SEO";
import { services } from "@/data/services";
import { WHATSAPP_LINK } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

export default function Services() {
  return (
    <>
      <SEO
        title="Services & Price List - KOKA Beauty Lounge, Indirapuram"
        description="Full menu of hair, skin, bridal makeup, spa & body services at KOKA Beauty Lounge, Indirapuram. Transparent pricing for Ghaziabad's best salon."
        canonical="https://kokabeautylounge.com/services"
      />
      <section className="bg-gradient-luxury py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Menu</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete beauty experience — hair, skin, bridal & spa — with transparent pricing at our Indirapuram lounge.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          {services.map(cat => (
            <div key={cat.title} className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
              <div className="bg-gradient-gold px-6 py-4">
                <h2 className="font-serif text-2xl text-accent-foreground">{cat.title}</h2>
              </div>
              <ul className="divide-y divide-border">
                {cat.items.map(it => (
                  <li key={it.name} className="flex justify-between gap-4 px-6 py-3 hover:bg-secondary/30 transition-smooth">
                    <span className="text-foreground/90">{it.name}</span>
                    <span className="text-primary font-medium whitespace-nowrap">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-rose text-primary-foreground px-8 py-4 rounded-full font-medium shadow-elegant hover:scale-105 transition-smooth">
            <MessageCircle size={20} /> Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
