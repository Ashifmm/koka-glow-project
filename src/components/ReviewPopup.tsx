import { useEffect, useState } from "react";
import { X, Star } from "lucide-react";
import { GOOGLE_REVIEW } from "@/lib/contact";

export default function ReviewPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || sessionStorage.getItem("koka_review_shown")) return;
    const t = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem("koka_review_shown", "1");
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed bottom-24 right-5 z-50 max-w-xs bg-card border border-gold rounded-2xl shadow-elegant p-5 animate-fade-up">
      <button onClick={() => setShow(false)} aria-label="Close" className="absolute top-2 right-2 text-muted-foreground hover:text-foreground">
        <X size={16} />
      </button>
      <div className="flex items-center gap-1 text-gold mb-2">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <h4 className="font-serif text-lg mb-1">Enjoying your experience?</h4>
      <p className="text-sm text-muted-foreground mb-3">Leave us a review on Google — it means the world! 💖</p>
      <a href={GOOGLE_REVIEW} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-gradient-gold text-accent-foreground py-2 rounded-full text-sm font-medium">
        Leave a Review
      </a>
    </div>
  );
}
