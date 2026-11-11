import { Award, Trophy, Users, Code2 } from "lucide-react";
import { achievements } from "@/data/portfolio";

const achievementIcons = [Trophy, Award, Users, Code2];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#554D46] mb-3">
            Milestones
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-tight tracking-[-0.02em] text-[#241C15]">
            Achievements, leadership &amp; certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => {
            const Icon = achievementIcons[index % achievementIcons.length];

            return (
              <div
                key={item.title}
                className="border border-[#241C15]/15 hover:border-[#241C15] rounded-2xl p-6 sm:p-7 bg-[#F6F6F4] transition-colors flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#241C15]/15 text-[#241C15]">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#FFE01B] border border-[#241C15]/20 text-xs font-semibold text-[#241C15]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl font-medium text-[#241C15]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-[#554D46] mt-1">
                    {item.organization} · {item.year}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#241C15]/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
