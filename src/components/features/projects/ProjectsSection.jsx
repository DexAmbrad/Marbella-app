import { ExternalLink, GitBranch } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const projects = [
  {
    title: "Product Management System",
    description:
      "A CRUD application for managing products, quantities, and prices.",
    technologies: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website designed to showcase my skills and projects.",
    technologies: ["React", "Vite", "Tailwind"],
  },
  {
    title: "Enrollment System",
    description:
      "A student-focused system concept designed to organize enrollment information.",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

function ProjectsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle
        eyebrow="Projects"
        title="A few things I've built."
        description="These projects represent my experience experimenting with different technologies and development concepts."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={project.title} className="group">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-400">
                0{index + 1}
              </span>

              <div className="flex gap-3 text-slate-500">
                <GitBranch
                  size={18}
                  className="transition hover:text-white"
                />

                <ExternalLink
                  size={18}
                  className="transition hover:text-blue-400"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white transition group-hover:text-blue-400">
              {project.title}
            </h3>

            <p className="mt-4 min-h-20 text-sm leading-7 text-slate-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;