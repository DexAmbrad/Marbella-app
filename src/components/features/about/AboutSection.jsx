import { Code2, Lightbulb, Rocket } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/ui/Card";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I like writing organized code that is easy to understand and maintain.",
  },
  {
    icon: Lightbulb,
    title: "Creative Ideas",
    description:
      "I enjoy experimenting with designs and turning simple ideas into useful experiences.",
  },
  {
    icon: Rocket,
    title: "Always Learning",
    description:
      "Technology changes quickly, so I continuously improve my development skills.",
  },
];

function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle
        eyebrow="About Me"
        title="A developer who enjoys learning by building."
        description="I'm interested in web development, UI design, and creating applications that solve real problems."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <Card key={value.title}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Icon size={22} />
              </div>

              <h3 className="text-lg font-bold text-white">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {value.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default AboutSection;