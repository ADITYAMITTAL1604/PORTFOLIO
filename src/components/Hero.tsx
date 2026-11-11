import { useState } from "react";
import { ArrowDownRight, Check, Copy, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

interface HeroProps {
  onOpenContact: () => void;
}

type CardTab = "overview" | "stack" | "currently";

export default function Hero({ onOpenContact }: HeroProps) {
  const [activeTab, setActiveTab] = useState<CardTab>("overview");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section
      id="top"
      className="bg-[#FFE01B] border-b border-[#241C15]/15 py-12 sm:py-24 lg:py-28 overflow-x-clip"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
        <div className="min-w-0 flex flex-col items-start gap-5 sm:gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#241C15]/80">
            B.Tech CSE · {profile.shortUniversity}
          </p>

          <h1 className="font-serif-display text-[2.15rem] sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.08] tracking-[-0.02em] text-[#241C15]">
            I build practical web apps and applied AI tools.
          </h1>

          <p className="text-base sm:text-lg text-[#241C15]/85 max-w-xl leading-relaxed">
            I&apos;m {profile.name}, a 2nd-year Computer Science student with a{" "}
            <strong className="font-semibold text-[#241C15]">
              {profile.cgpa} CGPA
            </strong>
            . I like turning messy real-world problems into working software
            using React, TypeScript, Python, and clean system design.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#projects" className="pill-btn-dark">
              View Projects
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="pill-btn-outline bg-[#FFE01B]"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="min-w-0 w-full bg-white border border-[#241C15] rounded-2xl p-5 sm:p-7 shadow-[0_6px_0_#241C15]">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#241C15]/10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#554D46]">
                Developer Snapshot
              </p>
              <p className="font-serif-display text-xl font-medium text-[#241C15]">
                {profile.name}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#FFE01B] border border-[#241C15]/25 text-xs font-semibold text-[#241C15]">
              {profile.graduation}
            </span>
          </div>

          <div className="flex gap-1.5 p-1 bg-[#F6F6F4] rounded-lg my-4 border border-[#241C15]/10">
            {(
              [
                { id: "overview", label: "Overview" },
                { id: "stack", label: "Core Stack" },
                { id: "currently", label: "Currently" },
              ] as const
            ).map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-1.5 px-2.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#241C15] text-white"
                    : "text-[#554D46] hover:text-[#241C15]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "overview" && (
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#F6F6F4] border border-[#241C15]/10">
                <p className="text-xs text-[#554D46]">Current CGPA</p>
                <p className="font-serif-display text-2xl font-semibold text-[#241C15] mt-0.5">
                  9.45
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6F6F4] border border-[#241C15]/10">
                <p className="text-xs text-[#554D46]">Projects Built</p>
                <p className="font-serif-display text-2xl font-semibold text-[#241C15] mt-0.5">
                  4+
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6F6F4] border border-[#241C15]/10">
                <p className="text-xs text-[#554D46]">Hack VSIT 7.0</p>
                <p className="font-serif-display text-xl font-semibold text-[#241C15] mt-0.5">
                  Top 10
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F6F6F4] border border-[#241C15]/10">
                <p className="text-xs text-[#554D46]">Hack 4 Delhi</p>
                <p className="font-serif-display text-xl font-semibold text-[#241C15] mt-0.5">
                  Top 50
                </p>
              </div>
            </div>
          )}

          {activeTab === "stack" && (
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#F6F6F4]">
                <span className="font-medium text-[#241C15]">Frontend</span>
                <span className="text-[#554D46]">
                  React, TypeScript, Tailwind
                </span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#F6F6F4]">
                <span className="font-medium text-[#241C15]">Backend</span>
                <span className="text-[#554D46]">
                  FastAPI, Express, PostgreSQL
                </span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#F6F6F4]">
                <span className="font-medium text-[#241C15]">AI & ML</span>
                <span className="text-[#554D46]">Scikit-learn, LLM APIs</span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#F6F6F4]">
                <span className="font-medium text-[#241C15]">DSA</span>
                <span className="text-[#554D46]">Java (Trees, Graphs, DP)</span>
              </div>
            </div>
          )}

          {activeTab === "currently" && (
            <ul className="space-y-2.5 text-sm text-[#554D46] leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[#241C15] font-bold">01.</span>
                <span>Pursuing B.Tech CSE at GGSIPU (2nd year).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#241C15] font-bold">02.</span>
                <span>
                  Practicing Data Structures &amp; Algorithms in Java.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#241C15] font-bold">03.</span>
                <span>
                  Building full-stack web tools and collaborating in campus dev
                  teams.
                </span>
              </li>
            </ul>
          )}

          <div className="mt-5 pt-4 border-t border-[#241C15]/10 flex flex-wrap items-center justify-between gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#241C15] hover:underline cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-700" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              {copied ? "Email copied!" : profile.email}
            </button>

            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full border border-[#241C15]/20 text-[#241C15] hover:bg-[#FFE01B] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full border border-[#241C15]/20 text-[#241C15] hover:bg-[#FFE01B] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onOpenContact}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FFE01B] border border-[#241C15]/25 text-[#241C15] hover:bg-[#f2d210] transition-colors cursor-pointer"
              >
                Say hi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
