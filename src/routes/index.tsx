import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Utensils, CalendarCheck, Sparkles, ChefHat, ShieldCheck, Quote } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import sCater from "@/assets/service-catering.jpg";
import sEvent from "@/assets/service-event.jpg";
import sIntegrated from "@/assets/service-integrated.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const strengths = [
  { icon: Sparkles, title: "End-to-end Event Solutions", text: "From concept to curtain-call — design, planning, production and service." },
  { icon: Utensils, title: "Customised Menus", text: "Bespoke menus authored with you, sourced seasonally and tasted to perfection." },
  { icon: CalendarCheck, title: "Professional Planning", text: "Dedicated planners and timelines so every minute of your celebration is composed." },
  { icon: ChefHat, title: "High-Quality Presentation", text: "Cinematic plating, considered tablescapes and visuals worth photographing." },
  { icon: ShieldCheck, title: "Reliable Execution", text: "A trained service brigade delivering with precision, warmth and discretion." },
];

const services = [
  { img: sCater, title: "Catering Services", text: "Cinematic, multi-course menus across cuisines — plated, family-style or grazing.", to: "/services" },
  { img: sEvent, title: "Event Management", text: "Design, logistics, décor, entertainment and on-the-day production.", to: "/services" },
  { img: sIntegrated, title: "Integrated Solutions", text: "One trusted partner — catering and event management under a single roof.", to: "/services" },
];

const testimonials = [
  { name: "Aanya & Rohan", role: "Wedding · 480 guests", quote: "Feast & Fest didn't host our wedding — they composed it. Every plate, every cue, every moment felt intentional." },
  { name: "Devika Mehra", role: "Mehra Group · Annual Gala", quote: "The most polished hospitality partner we've worked with. They simply make hosting feel effortless." },
  { name: "Imran Sheikh", role: "Private 50th Birthday", quote: "Cinematic food, immaculate service, and a team that anticipated everything before we asked." },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Luxury candle-lit banquet by Feast & Fest"
          className="absolute inset-0 w-full h-full object-cover kenburns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 luxury-gradient" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 pb-20 lg:pb-28 text-ivory">
            <Reveal>
              <p className="eyebrow !text-gold">
                <span className="gold-rule mr-3" /> Luxury Catering · Event Management
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[5.5rem] max-w-5xl">
                Crafting Memorable Feasts.
                <br />
                <span className="italic text-gold/95">Managing Exceptional Events.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-2xl text-ivory/80 text-base lg:text-lg leading-relaxed font-light">
                From intimate gatherings to grand celebrations, Feast &amp; Fest delivers premium
                catering and complete event management — so you can enjoy every moment without worry.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-noir text-[11px] tracking-[0.3em] uppercase hover:bg-ivory transition-colors"
                >
                  Get a Quote
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-ivory/40 text-ivory text-[11px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 lg:py-36 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <img
                src={about}
                alt="Chef plating a luxury dish for Feast & Fest"
                className="w-full h-[560px] object-cover"
                loading="lazy"
                width={1200}
                height={1500}
              />
              <div className="hidden md:block absolute -bottom-10 -right-10 w-48 h-48 border border-gold p-6">
                <p className="font-display text-5xl text-noir">10<span className="text-gold">+</span></p>
                <p className="mt-2 text-xs tracking-[0.25em] uppercase text-cocoa">Years of curated hospitality</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow"><span className="gold-rule mr-3" />Who We Are</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                A studio of <span className="italic text-gold">culinary craft</span> and quiet precision.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-cocoa/80 text-lg leading-relaxed font-light max-w-xl">
                At Feast &amp; Fest, we combine culinary excellence with professional event
                management to create seamless and memorable experiences — from a twelve-seat
                private dinner to a thousand-guest celebration.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-noir hover:text-gold transition-colors"
              >
                Our Story <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE STRENGTHS */}
      <section className="py-24 lg:py-32 bg-noir text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <Reveal><p className="eyebrow"><span className="gold-rule mr-3" />Core Strengths</p></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-ivory">
                Hospitality, composed with intention.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="bg-noir p-10 group hover:bg-cocoa/40 transition-colors">
                <s.icon className="text-gold" size={28} strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-2xl text-ivory">{s.title}</h3>
                <p className="mt-3 text-ivory/60 text-sm leading-relaxed font-light">{s.text}</p>
                <span className="mt-8 inline-block w-10 h-px bg-gold group-hover:w-16 transition-all" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-36 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <Reveal><p className="eyebrow"><span className="gold-rule mr-3" />Services</p></Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                  Three disciplines. <span className="italic text-gold">One signature.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <Link to="/services" className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase hover:text-gold transition-colors">
                All Services <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <Link to={s.to} className="group block bg-white border border-[color:var(--border)] overflow-hidden hover:border-gold transition-colors">
                  <div className="relative h-72 overflow-hidden">
                    <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-noir/10 group-hover:bg-noir/30 transition-colors" />
                  </div>
                  <div className="p-8">
                    <p className="eyebrow !text-gold">0{i + 1}</p>
                    <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
                    <p className="mt-3 text-sm text-cocoa/75 leading-relaxed">{s.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-noir group-hover:text-gold transition-colors">
                      Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 lg:py-32 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-xl">
              <Reveal><p className="eyebrow"><span className="gold-rule mr-3" />Selected Moments</p></Reveal>
              <Reveal delay={100}><h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">A taste of our world.</h2></Reveal>
            </div>
            <Reveal delay={200}>
              <Link to="/gallery" className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase hover:text-gold transition-colors">
                Full Gallery <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {[g1, g2, g3, g4, g5, g6].map((src, i) => (
              <Reveal key={i} delay={i * 60} className="mb-5 break-inside-avoid overflow-hidden group relative">
                <img src={src} alt="Feast & Fest event" loading="lazy" className="w-full h-auto object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-ivory translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <p className="eyebrow !text-gold">Curated</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal><p className="eyebrow"><span className="gold-rule mr-3" />Voices<span className="gold-rule ml-3" /></p></Reveal>
            <Reveal delay={100}><h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl">In their words.</h2></Reveal>
          </div>
          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <article className="glass-light p-10 h-full flex flex-col">
                  <Quote className="text-gold" size={28} strokeWidth={1} />
                  <p className="mt-5 font-display text-xl leading-relaxed text-noir/90">“{t.quote}”</p>
                  <div className="mt-auto pt-8">
                    <p className="font-display text-base">{t.name}</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-cocoa/60 mt-1">{t.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section id="inquire" className="relative py-24 lg:py-36 bg-noir text-ivory overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${g4})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-noir/80" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <Reveal><p className="eyebrow"><span className="gold-rule mr-3" />Begin</p></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.05]">
                Planning an event? <span className="italic text-gold">Let's make it exceptional.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-ivory/70 font-light leading-relaxed">
                Share a few details and our concierge will craft a tailored proposal within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase hover:opacity-90 transition-opacity"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 border border-gold text-gold text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-noir transition-colors"
                >
                  Call Concierge
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-7">
            <div className="bg-ivory text-noir p-8 md:p-12">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
