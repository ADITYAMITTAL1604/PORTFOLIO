import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

interface NavbarProps {
  onOpenContact: () => void;
}

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "About", href: "#about" },
];

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-[#FFE01B] transition-all duration-200 ${
        isScrolled
          ? "border-b border-[#241C15]/20 shadow-xs"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[#241C15] hover:opacity-80 transition-opacity"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#241C15] text-[#FFE01B] text-xs font-bold tracking-tight">
            AM
          </span>
          <span className="font-serif-display text-xl font-semibold tracking-tight">
            {profile.name}
          </span>
        </a>

        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Primary navigation"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#241C15]/85 hover:text-[#241C15] underline-offset-4 hover:underline transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={profile.resumePath}
            download={profile.resumeFileName}
            className="pill-btn-outline !py-1.5 !px-4 !text-sm"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={onOpenContact}
            className="pill-btn-dark !py-1.5 !px-4 !text-sm"
          >
            Contact
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded-lg text-[#241C15] hover:bg-[#241C15]/10 transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#241C15]/15 bg-[#FFE01B] px-5 py-4 flex flex-col gap-3">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-1.5 text-base font-medium text-[#241C15]"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-[#241C15]/15">
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              onClick={() => setMenuOpen(false)}
              className="pill-btn-outline flex-1 !py-2 !text-sm"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onOpenContact();
              }}
              className="pill-btn-dark flex-1 !py-2 !text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
