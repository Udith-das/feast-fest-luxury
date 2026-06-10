import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import about from "@/assets/about.jpg";
import g3 from "@/assets/g3.jpg";
import g6 from "@/assets/g6.jpg";
import { ArrowRight } from "lucide-react";

const values = [
  { n: "01", t: "Craft", d: "We treat hospitality as a craft — every dish, every detail, every gesture composed with intention." },
  { n: "02", t: "Discretion", d: "A quiet, professional brigade that lets your guests stay the centre of attention." },
  { n: "03", t: "Consistency", d: "From the first tasting to the last toast, the standard never wavers." },
  { n: "04", t: "Partnership", d: "We work with you — not just for you — to author celebrations that feel personal." },
];

export default function AboutPage() {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
        <PageHeader
          eyebrow="About"
          title="A studio of culinary craft and quiet precision."
          subtitle="Feast & Fest was founded on a simple belief — that hospitality, done beautifully, is one of the most generous things you can offer."
        />

        <section className="py-24 lg:py-32 bg-ivory">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
            <Reveal className="lg:col-span-6">
              <img src={about} alt="Chef at work" className="w-full h-[620px] object-cover" loading="lazy" />
            </Reveal>
            <div className="lg:col-span-6">
              <Reveal><p className="eyebrow"><span className="gold-rule mr-3" />Our Story</p></Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.1]">
                  Ten years of <span className="italic text-gold">composed celebrations.</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-cocoa/80 leading-relaxed font-light">
                  What began as a small private-dining practice has grown into a full-service catering and
                  event management studio — trusted by families, brands and venues to author moments that
                  feel both grand and intimate.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p className="mt-4 text-cocoa/80 leading-relaxed font-light">
                  Our chefs source seasonally. Our planners obsess over timelines. Our service team is trained
                  in the small, almost invisible gestures that make a celebration feel effortless.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {[["10+", "Years"], ["600+", "Events"], ["50k+", "Guests"]].map(([n, l]) => (
                    <div key={l} className="border-l border-gold pl-4">
                      <p className="font-display text-3xl text-noir">{n}</p>
                      <p className="text-xs tracking-[0.25em] uppercase text-cocoa/60 mt-1">{l}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-noir text-ivory">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl">
              <Reveal><p className="eyebrow"><span className="gold-rule mr-3" />Our Values</p></Reveal>
              <Reveal delay={100}><h2 className="mt-5 font-display text-4xl md:text-5xl text-ivory">What we believe.</h2></Reveal>
            </div>
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/10">
              {values.map((v, i) => (
                <Reveal key={v.t} delay={i * 80} className="bg-noir p-10">
                  <p className="font-display text-5xl text-gold">{v.n}</p>
                  <h3 className="mt-6 font-display text-2xl">{v.t}</h3>
                  <p className="mt-3 text-ivory/60 text-sm leading-relaxed">{v.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-ivory">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-6">
            <Reveal>
              <img src={g3} alt="Outdoor luxury event" className="w-full h-[460px] object-cover" loading="lazy" />
            </Reveal>
            <Reveal delay={100}>
              <img src={g6} alt="Service team at gala" className="w-full h-[460px] object-cover" loading="lazy" />
            </Reveal>
          </div>
        </section>

        <section className="py-24 bg-[color:var(--secondary)]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal><h2 className="font-display text-4xl md:text-5xl">Let's compose your next celebration.</h2></Reveal>
            <Reveal delay={120}>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-noir text-ivory text-[11px] tracking-[0.3em] uppercase hover:bg-cocoa transition-colors">
                Begin an Inquiry <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
