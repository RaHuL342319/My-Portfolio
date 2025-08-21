// Project Item Component
import { ExternalLink, Star } from "lucide-react";

import type { Project } from "../types/types";
type ProjectItemProps = {
  project: Project;
};

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-emerald-300 focus-visible:text-emerald-300 group/link text-base"
            href={project.live ? project.live : project.github}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>{project.title}</span>
            <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-2 group-focus-visible/link:translate-x-2 motion-reduce:transition-none" />
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal text-slate-400">
          {project.description}
        </p>
        <ul className="mt-2 flex flex-wrap">
          {project.technologies.map((tech, techIndex) => (
            <li key={techIndex} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-300">
                {tech}
              </div>
            </li>
          ))}
        </ul>
        {project.stars && (
          <div className="mt-2 flex items-center text-xs text-slate-500">
            <Star className="w-3 h-3 mr-1 fill-current" />
            {project.stars}
          </div>
        )}
      </div>
      <div className="z-10 sm:order-1 sm:col-span-2">
        <div className="w-full h-20 bg-slate-800 rounded border-2 border-slate-700 mb-4 flex items-center justify-center text-slate-500 text-xs">
          Project Image
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
