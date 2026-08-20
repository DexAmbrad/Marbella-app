import { Code2, Database, Palette, Server } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "Vite", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["PHP", "Laravel", "REST API", "Node.js"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL", "SQL", "Database Design"],
  },
  {
    icon: Palette,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle
        eyebrow="Skills"
        title="Tools I use to bring ideas to life."
        description="A growing toolkit built through school projects, experiments, and personal development."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <Card key={group.title}>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Icon size={20} />
                </div>

                <h3 className="font-bold text-white">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;