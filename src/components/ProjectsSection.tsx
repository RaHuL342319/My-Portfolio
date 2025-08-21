import ProjectItem from "./ProjectItem";
import type { Project } from "../types/types";
// Projects Section Component

type ProjectsSectionProps = {
  projects: Project[];
};
const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="mb-20">
      <h2 className="text-2xl font-bold text-slate-200 mb-8">Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
