import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { INSTAGRAM, FACEBOOK, WHATSAPP_LINK } from "@/lib/contact";
import logo from "@/assets/logo.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "bg-background/95 backdrop-blur shadow-soft" : "bg-background/70 backdrop-blur-sm"}`}>
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="KOKA Beauty Lounge logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-gold" />
          <div className="leading-tight">
            <div className="font-serif text-xl font-semibold text-gradient-gold">KOKA</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Beauty Lounge</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => `text-sm font-medium transition-smooth hover:text-primary ${isActive ? "text-primary" : "text-foreground"}`}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground hover:text-primary transition-smooth">
            <Instagram size={20} />
          </a>
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground hover:text-primary transition-smooth">
            <Facebook size={20} />
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-gradient-rose text-primary-foreground px-5 py-2 rounded-full text-sm font-medium shadow-soft hover:shadow-elegant transition-smooth">
            Book Now
          </a>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="flex flex-col p-4 gap-3">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className={({ isActive }) => `block py-2 text-base ${isActive ? "text-primary font-medium" : "text-foreground"}`}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="flex gap-4 pt-2 border-t border-border">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block text-center bg-gradient-rose text-primary-foreground px-5 py-3 rounded-full font-medium">
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
