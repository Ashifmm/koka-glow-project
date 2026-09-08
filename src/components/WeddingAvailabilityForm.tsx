import { useState } from "react";
import { Calendar, MapPin, Sparkles, Send, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/contact";

const functionTypes = [
  "Bridal Makeup",
  "Engagement Makeup",
  "Reception Makeup",
  "Wedding Guest Makeup",
  "Destination Wedding Makeup",
  "Multiple Functions / Other",
];

type Props = {
  id?: string;
  className?: string;
  defaultFunction?: string;
};

export default function WeddingAvailabilityForm({ id = "check-availability", className = "", defaultFunction }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    weddingDate: "",
    venue: "",
    functionType: defaultFunction || "Bridal Makeup",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage =
      `💍 *Wedding Date Availability Enquiry - KOKA Beauty Lounge*\n\n` +
      `• *Name:* ${formData.name.trim()}\n` +
      `• *Phone / WhatsApp:* ${formData.phone.trim()}\n` +
      `• *Wedding / Event Date:* ${formData.weddingDate}\n` +
      `• *Venue / Location (We Come To You):* ${formData.venue.trim()}\n` +
      `• *Function Type:* ${formData.functionType}\n` +
      (formData.message.trim() ? `• *Notes / Details:* ${formData.message.trim()}\n\n` : `\n`) +
      `Please let me know if your team is available for on-location makeup on this date. Thank you!`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div id={id} className={`scroll-mt-24 ${className}`}>
      <div className="bg-card rounded-3xl shadow-elegant border border-border overflow-hidden">
        <div className="bg-gradient-rose p-6 sm:p-8 text-primary-foreground text-center">
          <span className="inline-flex items-center gap-1.5 bg-background/20 backdrop-blur text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-primary-foreground/30 font-medium mb-3">
            <Sparkles size={14} className="text-gold" /> We Travel To You • Home / Hotel / Venue
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-semibold mb-2">
            Check Wedding Date Availability
          </h3>
          <p className="text-sm sm:text-base text-primary-foreground/90 max-w-lg mx-auto">
            Tell us your date and venue. Our bridal team will confirm availability and share customized packages promptly.
          </p>
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-8 space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                  Enquiry Opened in WhatsApp!
                </h4>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  If WhatsApp did not open automatically, tap below to send your details directly to our bridal desk or call us.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium shadow-soft hover:scale-105 transition-smooth"
                >
                  <MessageCircle size={18} /> Send via WhatsApp
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-6 py-3 rounded-full font-medium shadow-soft hover:scale-105 transition-smooth"
                >
                  <Phone size={18} /> Call {PHONE}
                </a>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-muted-foreground underline block mx-auto pt-2 hover:text-foreground"
              >
                Submit another date or update details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="avail-name" className="block text-xs uppercase tracking-wider font-medium text-foreground/80 mb-1.5">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="avail-name"
                    required
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm transition-smooth"
                  />
                </div>

                <div>
                  <label htmlFor="avail-phone" className="block text-xs uppercase tracking-wider font-medium text-foreground/80 mb-1.5">
                    WhatsApp / Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    id="avail-phone"
                    required
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm transition-smooth"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="avail-date" className="block text-xs uppercase tracking-wider font-medium text-foreground/80 mb-1.5">
                    Wedding / Event Date <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="avail-date"
                      required
                      type="date"
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm transition-smooth"
                    />
                    <Calendar size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="avail-venue" className="block text-xs uppercase tracking-wider font-medium text-foreground/80 mb-1.5">
                    Wedding Venue / Location <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="avail-venue"
                      required
                      type="text"
                      placeholder="Home / Hotel / Banquet / City"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm transition-smooth"
                    />
                    <MapPin size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="avail-function" className="block text-xs uppercase tracking-wider font-medium text-foreground/80 mb-1.5">
                  Function Type <span className="text-primary">*</span>
                </label>
                <select
                  id="avail-function"
                  value={formData.functionType}
                  onChange={(e) => setFormData({ ...formData, functionType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm transition-smooth"
                >
                  {functionTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="avail-message" className="block text-xs uppercase tracking-wider font-medium text-foreground/80 mb-1.5">
                  Optional Message / Additional Details
                </label>
                <textarea
                  id="avail-message"
                  rows={2}
                  placeholder="Number of people requiring makeup, preferred ready-by time, or specific bridal styling requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm transition-smooth"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[50px] bg-gradient-rose text-primary-foreground font-semibold rounded-full shadow-elegant hover:scale-[1.01] active:scale-[0.99] transition-smooth inline-flex items-center justify-center gap-2 text-base px-6"
                >
                  <Send size={18} /> Check Wedding Date Availability
                </button>
                <p className="text-[11px] text-center text-muted-foreground mt-2.5">
                  ⚡ Instant direct connection to KOKA bridal coordinator • No spam • Confidential
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
