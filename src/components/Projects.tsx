import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, Github } from "lucide-react";
import { projects, type ProjectCategory } from "@/data/portfolio";

type FilterOption = "All" | ProjectCategory;

const filterOptions: FilterOption[] = ["All", "Full-Stack", "AI / ML"];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter(project => project.categories.includes(selectedFilter));

  const toggleDetails = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#554D46] mb-3">
              Selected Work
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-tight tracking-[-0.02em] text-[#241C15]">
              Projects built end to end
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {filterOptions.map(option => {
              const count =
                option === "All"
                  ? projects.length
                  : projects.filter(p => p.categories.includes(option)).length;
              const isActive = selectedFilter === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedFilter(option)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#241C15] text-white border-[#241C15]"
                      : "bg-[#F6F6F4] text-[#241C15] border-[#241C15]/15 hover:border-[#241C15]"
                  }`}
                >
                  {option} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => {
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                className="bg-[#F6F6F4] border border-[#241C15]/15 hover:border-[#241C15] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-serif-display text-2xl sm:text-[1.75rem] font-medium text-[#241C15]">
                        {project.name}
                      </h3>
                      <p className="text-sm font-medium text-[#554D46] mt-0.5">
                        {project.tagline}
                      </p>
                    </div>
                    <span className="shrink-0 px-3 py-1 rounded-full bg-[#FFE01B] border border-[#241C15]/20 text-xs font-semibold text-[#241C15]">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#241C15]/85 leading-relaxed mt-4">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => toggleDetails(project.id)}
                      aria-expanded={isExpanded}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#241C15] hover:underline cursor-pointer"
                    >
                      {isExpanded
                        ? "Hide architecture notes"
                        : "How I built it"}
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {isExpanded && (
                      <ul className="mt-3 space-y-2 p-4 rounded-xl bg-white border border-[#241C15]/15 text-sm text-[#554D46] leading-relaxed">
                        {project.architecture.map((point, index) => (
                          <li key={index} className="flex gap-2">
                            <span className="text-[#241C15] font-semibold">
                              •
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#241C15]/10">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white border border-[#241C15]/12 text-xs font-medium text-[#241C15]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-btn-dark !py-2 !px-4 !text-xs"
                      >
                        Live Demo
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-btn-outline !py-2 !px-4 !text-xs bg-white"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
