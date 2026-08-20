import { Mail, MapPin, Send } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function ContactSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle
        eyebrow="Contact"
        title="Let's build something together."
        description="Have an idea, project, or opportunity? Feel free to reach out."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  johnmarkmarbella71@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Philippines
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-white">
            Send a message
          </h3>

          <div className="mt-5 space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-500"
            />

            <Button>
              Send Message
              <Send size={16} className="ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default ContactSection;