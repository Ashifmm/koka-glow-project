import SEO from "@/components/SEO";
import { Award, Heart, Sparkles, Users } from "lucide-react";
import interior from "@/assets/salon-interior.jpeg";

const reasons = [
  { icon: Award, title: "Trained Experts", desc: "A passionate team of certified stylists & makeup artists." },
  { icon: Sparkles, title: "Premium Brands", desc: "L'Oréal, Matrix, O3+, Lotus, VLCC, Casmara & more." },
  { icon: Heart, title: "Hygiene First", desc: "Sanitized tools, single-use disposables, spotless space." },
  { icon: Users, title: "Loved by Many", desc: "Indirapuram's go-to salon for brides and beauty regulars." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us - KOKA Beauty Lounge, Indirapuram"
        description="Established 16 April 2024, KOKA Beauty Lounge is Indirapuram's premium destination for hair, skin, bridal and spa services."
        canonical="https://kokabeautylounge.com/about"
      />
      <section className="bg-gradient-luxury py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-4">About KOKA Beauty Lounge</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Where luxury meets warmth — Indirapuram's most loved beauty destination.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <img src={interior} alt="KOKA Beauty Lounge salon in Indirapuram" className="rounded-3xl shadow-elegant w-full object-cover h-[460px]" />
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Established 16 April 2024</p>
            <h2 className="font-serif text-4xl mb-5">Beauty crafted with love</h2>
            <p className="text-muted-foreground mb-4">
              KOKA Beauty Lounge was born from a simple dream — to create a beauty space in Indirapuram where every woman feels pampered, confident, and her most beautiful self.
            </p>
            <p className="text-muted-foreground mb-4">
              From quick touch-ups to grand bridal transformations, our team blends skill, top-tier products, and warm hospitality to deliver an experience that goes far beyond a regular beauty parlour in Ghaziabad.
            </p>
            <p className="text-muted-foreground">
              Our mission is simple: enhance your natural beauty with care, expertise and a touch of luxury — every single visit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Why Choose Us</p>
            <h2 className="font-serif text-4xl md:text-5xl">The KOKA Difference</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-2xl p-7 border border-border shadow-soft text-center">
                <div className="w-14 h-14 rounded-full mx-auto bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                  <Icon className="text-accent-foreground" size={26} />
                </div>
                <h3 className="font-serif text-2xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
