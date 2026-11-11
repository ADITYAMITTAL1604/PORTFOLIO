import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F6F6F4] border-t border-[#241C15]/10 py-20 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-start">
        <div className="min-w-0 w-full bg-white border border-[#241C15] rounded-2xl p-6 sm:p-8 shadow-[0_6px_0_#241C15]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#554D46] mb-4">
            Education &amp; Details
          </p>

          <div className="space-y-5">
            <div className="pb-5 border-b border-[#241C15]/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#554D46]">
                {profile.graduation}
              </p>
              <h3 className="font-serif-display text-xl font-medium text-[#241C15] mt-1">
                {profile.university}
              </h3>
              <p className="text-sm text-[#554D46] mt-1">{profile.degree}</p>
              <span className="inline-block mt-2.5 px-3 py-1 rounded-full bg-[#FFE01B] border border-[#241C15]/20 text-xs font-semibold text-[#241C15]">
                CGPA: {profile.cgpa}
              </span>
            </div>

            <div className="pb-5 border-b border-[#241C15]/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#554D46]">
                2025
              </p>
              <h3 className="font-serif-display text-xl font-medium text-[#241C15] mt-1">
                Shanti Gyan Niketan School
              </h3>
              <p className="text-sm text-[#554D46] mt-1">
                Senior Secondary (Class XII) · Head Boy (2024–2025)
              </p>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-[#554D46]">Location</span>
              <span className="font-medium text-[#241C15]">
                {profile.location}
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#554D46] mb-3">
              About Me
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-medium leading-tight tracking-[-0.02em] text-[#241C15]">
              Learning by shipping real software
            </h2>
          </div>

          <div className="space-y-4 text-base text-[#241C15]/85 leading-relaxed">
            <p>
              I&apos;m Aditya, a 2nd-year Computer Science undergraduate at
              GGSIPU in New Delhi. I got hooked on programming by building small
              tools to solve everyday problems and kept pushing into full-stack
              web engineering and machine learning.
            </p>
            <p>
              Across projects like Decodex, NoBroke, FlowPulse, and Solar AI,
              I&apos;ve worked on React + TypeScript interfaces, FastAPI and
              Express backends, PostgreSQL schemas, and practical AI
              integrations with proper error fallbacks.
            </p>
            <p>
              Outside code, serving as Head Boy in school taught me how to lead
              a team of 30+ people, manage tight budgets, and keep events
              running smoothly, which are habits I bring into group projects and
              hackathons today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
