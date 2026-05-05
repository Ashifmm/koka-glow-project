import { useState } from "react";
import SEO from "@/components/SEO";
import { ADDRESS, MAPS_EMBED, PHONE, PHONE_LINK, WHATSAPP_NUMBER } from "@/lib/contact";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hi, I want to book an appointment at KOKA Beauty Lounge.\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      <SEO
        title="Contact Us - KOKA Beauty Lounge, Indirapuram, Ghaziabad"
        description="Visit KOKA Beauty Lounge in Shakti Khand I, Indirapuram. Call +91 92896 56555 or book on WhatsApp."
        canonical="https://kokabeautylounge.com/contact"
      />
      <section className="bg-gradient-luxury py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Visit Our Lounge</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">We'd love to pamper you. Book online or drop by our Indirapuram studio.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div className="bg-card rounded-3xl shadow-soft border border-border p-8">
            <h2 className="font-serif text-3xl mb-6">Book an Appointment</h2>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Your Name</label>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label className="text-sm font-medium">Service Interested In</label>
                <input value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  placeholder="e.g. Bridal Makeup, Keratin, Facial"
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <button type="submit" className="w-full bg-gradient-rose text-primary-foreground py-3.5 rounded-full font-medium shadow-elegant hover:scale-[1.02] transition-smooth inline-flex items-center justify-center gap-2">
                <MessageCircle size={18} /> Send via WhatsApp
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-3xl shadow-soft border border-border p-8 space-y-5">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0"><MapPin className="text-accent-foreground" size={20} /></div>
                <div>
                  <h3 className="font-serif text-xl mb-1">Address</h3>
                  <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                </div>
              </div>
              <a href={PHONE_LINK} className="flex gap-4 hover:text-primary transition-smooth">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0"><Phone className="text-accent-foreground" size={20} /></div>
                <div>
                  <h3 className="font-serif text-xl mb-1">Call Us</h3>
                  <p className="text-sm">{PHONE}</p>
                </div>
              </a>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0"><Clock className="text-accent-foreground" size={20} /></div>
                <div>
                  <h3 className="font-serif text-xl mb-1">Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon – Sun: 10:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft border border-border h-[300px]">
              <iframe
                title="KOKA Beauty Lounge location"
                src={MAPS_EMBED}
                width="100%" height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
