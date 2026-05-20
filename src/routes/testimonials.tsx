import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { Quote, Star, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/testimonials")({ component: TestimonialsPage });

const testimonials = [
  { name: "Aanya & Rohan", role: "Wedding · 480 guests", quote: "Feast & Fest didn't host our wedding — they composed it. Every plate, every cue, every moment felt intentional. Our families are still talking about the food." },
  { name: "Devika Mehra", role: "Mehra Group · Annual Gala", quote: "The most polished hospitality partner we've worked with in a decade. They make hosting feel effortless and our guests feel genuinely cared for." },
  { name: "Imran Sheikh", role: "Private 50th Birthday", quote: "Cinematic food, immaculate service, and a team that anticipated everything before we asked. A masterclass in hospitality." },
  { name: "Naina Kapoor", role: "Engagement · Garden Setup", quote: "Truly stunning. The styling, the menu and the service brigade were flawless. Worth every rupee." },
  { name: "Vikram & Priya", role: "Destination Wedding", quote: "From the tasting to the send-off, Feast & Fest were unflappable. They turned an enormous celebration into something deeply personal." },
  { name: "Studio Lumen", role: "Brand Launch · 300 guests", quote: "Bold creative direction backed by faultless production. Our clients arrived guests and left ambassadors." },
];

function TestimonialsPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Testimonials" title="In their words." subtitle="A few notes from the families and brands we've had the privilege of hosting." />
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <article className="glass-light p-10 h-full flex flex-col border border-[color:var(--border)]">
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <Quote className="text-gold mt-5" size={28} strokeWidth={1} />
                <p className="mt-5 font-display text-lg leading-relaxed text-noir/90">“{t.quote}”</p>
                <div className="mt-auto pt-8 border-t border-[color:var(--border)]">
                  <p className="font-display text-base">{t.name}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-cocoa/60 mt-1">{t.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-24 bg-noir text-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal><h2 className="font-display text-4xl md:text-5xl text-ivory">Become our next story.</h2></Reveal>
          <Reveal delay={120}>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gold text-noir text-[11px] tracking-[0.3em] uppercase hover:bg-ivory transition-colors">
              Begin an Inquiry <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}