import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX, Sparkles } from "lucide-react";

export interface LazyVideoProps {
  id: string;
  label?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  aspectRatio?: string;
}

export default function LazyVideo({
  id,
  label = "KOKA Beauty Lounge transformation video",
  title,
  subtitle,
  className = "",
  aspectRatio = "aspect-[9/16]",
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          videoRef.current?.play().then(() => setIsPlaying(true)).catch(() => {
            // Autoplay with sound might be blocked, ensure muted
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().catch(() => {});
            }
          });
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { rootMargin: "200px", threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div
      ref={containerRef}
      onClick={togglePlay}
      className={`relative rounded-2xl overflow-hidden bg-card/60 shadow-soft hover:shadow-elegant transition-smooth group cursor-pointer ${aspectRatio} ${className}`}
    >
      <video
        ref={videoRef}
        src={shouldLoad ? `/videos/${id}.mp4` : undefined}
        poster={`/videos/${id}-poster.webp`}
        preload="none"
        muted={isMuted}
        loop
        autoPlay
        playsInline
        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
        aria-label={label}
      />

      {/* Top Badge: Video indicator */}
      <div className="absolute top-3 left-3 z-10">
        <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur text-white text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/20">
          <Sparkles size={11} className="text-gold" /> Video Reel
        </span>
      </div>

      {/* Audio toggle button */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center border border-white/20 hover:scale-110 transition-smooth opacity-90 hover:opacity-100"
      >
        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </button>

      {/* Play/pause state overlay indicator (shown when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-10">
          <div className="w-12 h-12 rounded-full bg-gradient-rose text-primary-foreground flex items-center justify-center shadow-elegant">
            <Play size={22} className="ml-0.5" />
          </div>
        </div>
      )}

      {/* Bottom text overlay if title provided */}
      {title && (
        <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white z-10">
          <p className="font-serif text-base font-semibold leading-tight">{title}</p>
          {subtitle && (
            <p className="text-[11px] text-white/80 line-clamp-1 mt-0.5">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}
