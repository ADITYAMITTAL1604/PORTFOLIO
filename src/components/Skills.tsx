import { useState } from "react";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState<string>("all");

  const visibleGroups =
    activeGroup === "all"
      ? skillGroups
      : skillGroups.filter(group => group.id === activeGroup);

  return (
    <section
      id="skills"
      className="bg-[#F6F6F4] border-y border-[#241C15]/10 py-20 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#554D46] mb-3">
              Technical Toolkit
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-tight tracking-[-0.02em] text-[#241C15]">
              Skills &amp; technologies
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveGroup("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                activeGroup === "all"
                  ? "bg-[#241C15] text-white border-[#241C15]"
                  : "bg-white text-[#241C15] border-[#241C15]/15 hover:border-[#241C15]"
              }`}
            >
              All
            </button>
            {skillGroups.map(group => (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveGroup(group.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                  activeGroup === group.id
                    ? "bg-[#241C15] text-white border-[#241C15]"
                    : "bg-white text-[#241C15] border-[#241C15]/15 hover:border-[#241C15]"
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleGroups.map(group => (
            <div
              key={group.id}
              className="bg-white border border-[#241C15]/15 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif-display text-xl font-medium text-[#241C15]">
                  {group.label}
                </h3>
                <span className="text-xs font-medium text-[#554D46]">
                  {group.items.length} tools
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-[#F6F6F4] hover:bg-[#FFE01B] border border-[#241C15]/10 text-sm text-[#241C15] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
