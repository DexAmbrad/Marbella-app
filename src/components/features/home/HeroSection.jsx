import { ArrowRight, Download, Sparkles } from "lucide-react";

import Button from "@/components/ui/Button";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            <Sparkles size={16} className="text-blue-400" />
            Available for opportunities
          </div>

          <p className="mb-3 text-lg font-medium text-blue-400">
            Hello, I'm Mark
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            I build
            <span className="text-blue-500"> digital experiences </span>
            that feel simple.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I'm a developer who enjoys turning ideas into clean,
            responsive, and user-friendly web applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/projects">
              View My Work
              <ArrowRight size={17} className="ml-2" />
            </Button>

            <Button variant="secondary" to="/contact">
              Contact Me
              <Download size={17} className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <div className="mb-8 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4 font-mono text-sm">
                <p className="text-slate-500">
                  // portfolio.js
                </p>

                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  = {"{"}
                </p>

                <p className="pl-5">
                  name: <span className="text-green-400">"Pogi"</span>,
                </p>

                <p className="pl-5">
                  role: <span className="text-green-400">"Developer"</span>,
                </p>

                <p className="pl-5">
                  passion: <span className="text-green-400">"Building"</span>
                </p>

                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;