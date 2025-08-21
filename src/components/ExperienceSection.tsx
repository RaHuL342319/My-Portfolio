import type { Experience } from "../types/types";
import ExperienceItem from "./ExperienceItem";
import { ExternalLink } from "lucide-react";
// Experience Section Component
type ExperienceSectionProps = {
  experience: Experience[];
};
const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="mb-20">
      <h2 className="text-2xl font-bold text-slate-200 mb-8">Experience</h2>
      <div className="space-y-12">
        {experience.map((job, index) => (
          <ExperienceItem key={index} job={job} />
        ))}
      </div>
      <div className="mt-12">
        <a
          className="inline-flex items-center md:font-medium leading-tight font-semibold text-slate-200 group"
          href="#"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-emerald-300 motion-reduce:transition-none">
            View Full Resume
          </span>
          <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
};

export default ExperienceSection;
