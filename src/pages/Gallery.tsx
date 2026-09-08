import { useState } from "react";
import SEO from "@/components/SEO";
import LazyVideo from "@/components/LazyVideo";
import { homeVideos } from "@/data/galleryVideos";
import bride from "@/assets/bride.webp";
import interior from "@/assets/salon-interior.webp";
import work from "@/assets/salon-work.webp";
import clients from "@/assets/clients.webp";
import { Sparkles, Video, Camera, ArrowRight } from "lucide-react";

type PhotoItem = {
  type: "image";
  src: string;
  alt: string;
  cat: "Bridal" | "Hair" | "Styling" | "Salon";
  title: string;
};

type VideoItem = {
  type: "video";
  id: string;
  alt: string;
  cat: "Bridal" | "Styling" | "Hair";
  title: string;
  subtitle: string;
  label: string;
};

type GalleryItem = PhotoItem | VideoItem;

// Seamless collection of photos and the exact home page videos
const galleryItems: GalleryItem[] = [
  {
    type: "video",
    id: homeVideos[0].id, // v3 - Signature Bridal Glam
    alt: homeVideos[0].label,
    cat: homeVideos[0].category,
    title: homeVideos[0].title,
    subtitle: homeVideos[0].subtitle,
    label: homeVideos[0].label,
  },
  {
    type: "image",
    src: bride,
    alt: "Signature bridal makeup by KOKA Beauty Lounge",
    cat: "Bridal",
    title: "Signature Bridal Look",
  },
  {
    type: "video",
    id: homeVideos[1].id, // v1 - Wedding Day Transformation
    alt: homeVideos[1].label,
    cat: homeVideos[1].category,
    title: homeVideos[1].title,
    subtitle: homeVideos[1].subtitle,
    label: homeVideos[1].label,
  },
  {
    type: "image",
    src: clients,
    alt: "Party styling & saree draping at KOKA Beauty Lounge",
    cat: "Styling",
    title: "Party Styling",
  },
  {
    type: "video",
    id: homeVideos[2].id, // v2 - Luxury Event & Hair Artistry
    alt: homeVideos[2].label,
    cat: homeVideos[2].category,
    title: homeVideos[2].title,
    subtitle: homeVideos[2].subtitle,
    label: homeVideos[2].label,
  },
  {
    type: "image",
    src: interior,
    alt: "Luxury salon interior & consultation lounge in Indirapuram",
    cat: "Salon",
    title: "Indirapuram Studio",
  },
  {
    type: "image",
    src: work,
    alt: "Hair coloring, texture and bridal hairstyling",
    cat: "Hair",
    title: "Hair Artistry",
  },
  {
    type: "image",
    src: bride,
    alt: "Bridal hair and HD wedding makeup",
    cat: "Bridal",
    title: "Wedding Day Glow",
  },
  {
    type: "image",
    src: interior,
    alt: "Beauty lounge reception and treatment rooms",
    cat: "Salon",
    title: "Lounge Reception",
  },
  {
    type: "image",
    src: clients,
    alt: "Lehenga styling and bridal entourage preparation",
    cat: "Styling",
    title: "Entourage Styling",
  },
  {
    type: "image",
    src: work,
    alt: "Keratin and premium hair smoothing treatment",
    cat: "Hair",
    title: "Hair Smoothing",
  },
];

const categories = ["All", "Videos", "Bridal", "Styling", "Hair", "Salon"] as const;
type Category = (typeof categories)[number];

export default function Gallery() {
  const [active, setActive] = useState<Category>("All");

  const filteredItems = galleryItems.filter((item) => {
    if (active === "All") return true;
    if (active === "Videos") return item.type === "video";
    return item.cat === active;
  });

  return (
    <>
      <SEO
        title="Gallery & Video Transformations | KOKA Beauty Lounge"
        description="Browse real bridal makeup looks, hairstyles, salon transformations, and live video reels at KOKA Beauty Lounge, Indirapuram, Ghaziabad."
        canonical="https://kokabeautylounge.com/gallery"
      />

      {/* Header */}
      <section className="bg-gradient-luxury py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
            Portfolio &amp; Live Reels
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 font-semibold text-foreground">
            Beautiful Transformations
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            A showcase of real brides, high-definition makeup, event styling, and behind-the-scenes transformations crafted by KOKA Beauty Lounge.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-smooth border inline-flex items-center gap-1.5 ${
                  active === c
                    ? "bg-gradient-rose text-primary-foreground border-transparent shadow-soft scale-105"
                    : "bg-card border-border hover:border-primary text-foreground/80 hover:text-foreground"
                }`}
              >
                {c === "Videos" && <Video size={14} className={active === c ? "text-white" : "text-gold"} />}
                {c === "All" && <Sparkles size={14} className={active === c ? "text-white" : "text-gold"} />}
                {c}
              </button>
            ))}
          </div>

          {/* Unified Responsive Grid for Photos & Videos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {filteredItems.map((item, idx) => {
              if (item.type === "video") {
                return (
                  <div
                    key={`video-${item.id}-${idx}`}
                    className="rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-smooth aspect-[9/14] border border-border/80 bg-card"
                  >
                    <LazyVideo
                      id={item.id}
                      label={item.label}
                      title={item.title}
                      subtitle={item.subtitle}
                      aspectRatio="aspect-[9/14]"
                      className="w-full h-full"
                    />
                  </div>
                );
              }

              return (
                <div
                  key={`photo-${idx}`}
                  className="rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-smooth group relative aspect-[9/14] bg-muted/30 border border-border/80"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={622}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-between p-3 sm:p-4 text-white">
                    <div className="self-end">
                      <span className="text-[10px] uppercase font-semibold text-white bg-black/60 backdrop-blur px-2.5 py-1 rounded-full border border-white/20 inline-flex items-center gap-1">
                        <Camera size={11} className="text-gold" /> {item.cat}
                      </span>
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold leading-tight drop-shadow-sm">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-white/80 line-clamp-1 mt-0.5">{item.alt}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dedicated Live Transformations Section in Gallery */}
          <div className="mt-16 pt-12 border-t border-border max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
                Live Video Reels
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                Behind The Scenes at KOKA
              </h2>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto mt-2">
                Watch our certified bridal artists and hairstylists in action during real wedding and party preparations.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {homeVideos.map((v) => (
                <div key={`reel-${v.id}`} className="flex flex-col">
                  <LazyVideo
                    id={v.id}
                    label={v.label}
                    title={v.title}
                    subtitle={v.subtitle}
                    aspectRatio="aspect-[9/16]"
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Wedding Availability Call-to-Action */}
          <div className="text-center mt-16 p-8 sm:p-10 rounded-3xl bg-secondary/50 border border-gold/30 max-w-3xl mx-auto shadow-soft">
            <span className="inline-flex items-center gap-1.5 text-gold text-xs uppercase tracking-wider font-semibold mb-2">
              <Sparkles size={14} /> We Travel To You • Home / Hotel / Venue
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-2 text-foreground">
              Planning Your Wedding or Special Event?
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-lg mx-auto leading-relaxed">
              Our professional bridal makeup team travels to your home, hotel, or wedding venue. Reserve your wedding date before slots fill up.
            </p>
            <a
              href="/#check-availability"
              className="inline-flex items-center gap-2 bg-gradient-rose text-primary-foreground px-8 py-3.5 rounded-full font-semibold shadow-elegant hover:scale-105 transition-smooth text-sm"
            >
              Check Wedding Date Availability <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
