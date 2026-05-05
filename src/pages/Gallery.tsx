import SEO from "@/components/SEO";
import bride from "@/assets/bride.jpeg";
import interior from "@/assets/salon-interior.jpeg";
import work from "@/assets/salon-work.jpeg";
import clients from "@/assets/clients.jpeg";

const items = [
  { src: bride, alt: "Bridal makeup in Indirapuram", cat: "Bridal" },
  { src: clients, alt: "Party styling at KOKA Beauty Lounge", cat: "Styling" },
  { src: interior, alt: "Luxury salon interior", cat: "Salon" },
  { src: work, alt: "Hair services in Ghaziabad", cat: "Hair" },
  { src: bride, alt: "Bridal hair and makeup", cat: "Bridal" },
  { src: interior, alt: "Beauty lounge reception", cat: "Salon" },
  { src: clients, alt: "Lehenga styling for events", cat: "Styling" },
  { src: work, alt: "Hair color and treatment", cat: "Hair" },
];

const cats = ["All", "Bridal", "Hair", "Styling", "Salon"];

import { useState } from "react";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter(i => i.cat === active);
  return (
    <>
      <SEO
        title="Gallery - KOKA Beauty Lounge, Indirapuram"
        description="Browse our gallery of bridal makeup, hair styling and salon work at KOKA Beauty Lounge, Indirapuram, Ghaziabad."
        canonical="https://kokabeautylounge.com/gallery"
      />
      <section className="bg-gradient-luxury py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Gallery</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Beautiful Transformations</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">A glimpse of the brides, looks and moments crafted at KOKA Beauty Lounge.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm transition-smooth border ${active === c ? "bg-gradient-rose text-primary-foreground border-transparent shadow-soft" : "bg-card border-border hover:border-primary"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((it, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-smooth group">
                <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-64 object-cover group-hover:scale-105 transition-smooth" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
