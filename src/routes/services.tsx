import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowRight, Utensils, CalendarCheck, Sparkles, Wine, Cake, Briefcase, Heart, PartyPopper, Music } from "lucide-react";
import sCater from "@/assets/service-catering.jpg";
import sEvent from "@/assets/service-event.jpg";
import sIntegrated from "@/assets/service-integrated.jpg";

export const Route = createFileRoute("/services")({ component: ServicesPage });

const catering = [
  "Bespoke multi-course menus",
  "Live counters & interactive stations",
  "Cocktail & canapé receptions",
  "Plated fine-dining service",
  "Premium bar & beverage programmes",
  "Patisserie & celebration cakes",
];

const planning = [
  "Creative direction & theming",
  "Venue sourcing & site management",
  "Décor, florals & tablescape design",
  "Production, lighting & sound",
  "Guest experience & hospitality",
  "On-the-day coordination",
];

const timeline = [
  { k: "01", t: "Discovery", d: "We listen — your story, your guests, your vision, the small details that matter." },
  { k: "02", t: "Curation", d: "A tailored proposal: menus, design direction, production plan, transparent pricing." },
  { k: "03", t: "Tasting", d: "A private tasting with our chefs to refine flavours and finalise the menu." },
  { k: "04", t: "Production", d: "Logistics, vendors, rehearsals — everything composed behind the scenes." },
  { k: "05", t: "Celebration", d: "On the day, our brigade takes the floor while you enjoy every moment." },
];

const events = [
  { icon: Heart, t: "Weddings & Receptions" },
  { icon: Briefcase, t: "Corporate Galas" },
  { icon: Cake, t: "Birthdays & Anniversaries" },
  { icon: Wine, t: "Private Dinners" },
  { icon: PartyPopper, t: "Engagements & Sangeets" },
  { icon: Music, t: "Brand Launches" },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Services"
        title="Three disciplines. One signature."
        subtitle="Catering, event management and integrated solutions — delivered by one trusted team, end to end."
      />

      <section id="catering" className="py-24 lg:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <img src={sCater} alt="Luxury catering plating" className="w-full h-[620px] object-cover" loading="lazy" />
          </Reveal>
          <div className="lg:col-span-6">
            <Reveal><p className="eyebrow"><Utensils size={14} className="inline mr-2 -mt-0.5" />Catering</p></Reveal>
            <Reveal delay={100}><h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.1]">Catering Services</h2></Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-cocoa/80 leading-relaxed font-light">
                Menus are authored with you — seasonal, sourced with care, and plated with cinematic
                attention. From an intimate eight-seat dinner to a thousand-guest reception, our kitchens
                deliver the same standard, every time.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {catering.map((c) => (
                  <li key={c} className="text-sm text-cocoa/85 flex gap-3"><span className="mt-2 w-3 h-px bg-gold shrink-0" />{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="management" className="py-24 lg:py-32 bg-noir text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal><p className="eyebrow"><CalendarCheck size={14} className="inline mr-2 -mt-0.5" />Event Management</p></Reveal>
            <Reveal delay={100}><h2 className="mt-5 font-display text-4xl md:text-5xl text-ivory leading-[1.1]">Designed, planned and produced.</h2></Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-ivory/70 leading-relaxed font-light">
                Our planners take care of everything that turns a beautiful idea into a beautiful evening —
                from venue and décor to production, vendors and the choreography of the day itself.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {planning.map((c) => (
                  <li key={c} className="text-sm text-ivory/80 flex gap-3"><span className="mt-2 w-3 h-px bg-gold shrink-0" />{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={120}>
            <img src={sEvent} alt="Event planning flatlay" className="w-full h-[620px] object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section id="integrated" className="py-24 lg:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <img src={sIntegrated} alt="Luxury banquet hall" className="w-full h-[620px] object-cover" loading="lazy" />
          </Reveal>
          <div className="lg:col-span-6">
            <Reveal><p className="eyebrow"><Sparkles size={14} className="inline mr-2 -mt-0.5" />Integrated Solutions</p></Reveal>
            <Reveal delay={100}><h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.1]">One partner. Every detail.</h2></Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-cocoa/80 leading-relaxed font-light">
                When you choose our integrated package, catering and event management live under one roof.
                A single point of contact, a unified creative direction, and a team that has rehearsed
                every handover.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-noir text-ivory text-[11px] tracking-[0.3em] uppercase hover:bg-cocoa transition-colors">
                Request a Proposal <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <Reveal><p className="eyebrow"><span className="gold-rule mr-3" />Our Process</p></Reveal>
            <Reveal delay={100}><h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">From first conversation to final toast.</h2></Reveal>
          </div>
          <ol className="mt-16 relative border-l border-gold/40 pl-8 md:pl-12 space-y-12">
            {timeline.map((s, i) => (
              <Reveal as="li" key={s.k} delay={i * 80} className="relative">
                <span className="absolute -left-[42px] md:-left-[54px] top-1 w-3 h-3 rounded-full bg-gold ring-4 ring-[color:var(--secondary)]" />
                <p className="font-display text-5xl text-gold/80">{s.k}</p>
                <h3 className="mt-2 font-display text-2xl">{s.t}</h3>
                <p className="mt-2 text-cocoa/75 max-w-2xl leading-relaxed">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal><p className="eyebrow"><span className="gold-rule mr-3" />Types of Events<span className="gold-rule ml-3" /></p></Reveal>
            <Reveal delay={100}><h2 className="mt-5 font-display text-4xl md:text-5xl">Every occasion, beautifully held.</h2></Reveal>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--border)]">
            {events.map((e, i) => (
              <Reveal key={e.t} delay={i * 60} className="bg-ivory p-10 group hover:bg-white transition-colors">
                <e.icon className="text-gold" size={28} strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-2xl">{e.t}</h3>
                <span className="mt-6 inline-block w-10 h-px bg-gold group-hover:w-16 transition-all" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}