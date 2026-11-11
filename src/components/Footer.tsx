import { ArrowUp, Github, Linkedin, Mail, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="bg-[#241C15] text-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-start pb-12 border-b border-white/15">
          <div className="min-w-0 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FFE01B]">
              Open to Opportunities
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-medium leading-tight max-w-md">
              Want to collaborate on a project or team?
            </h2>
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 rounded-full bg-[#FFE01B] text-[#241C15] px-6 py-2.5 text-sm font-semibold hover:bg-[#f2d210] transition-colors cursor-pointer"
              >
                Get in Touch
              </button>
              <a
                href={profile.resumePath}
                download={profile.resumeFileName}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-5 py-2.5 text-sm font-medium hover:border-[#FFE01B] hover:text-[#FFE01B] transition-colors"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Sections
              </p>
              <ul className="space-y-2.5 text-white/85">
                <li>
                  <a
                    href="#projects"
                    className="hover:text-[#FFE01B] transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-[#FFE01B] transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#achievements"
                    className="hover:text-[#FFE01B] transition-colors"
                  >
                    Achievements
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#FFE01B] transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Connect
              </p>
              <ul className="space-y-2.5 text-white/85">
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#FFE01B] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#FFE01B] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 hover:text-[#FFE01B] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/65">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-[#FFE01B] transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
