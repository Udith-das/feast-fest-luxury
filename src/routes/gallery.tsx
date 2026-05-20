import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

type Item = { src: string; cat: "Weddings" | "Catering" | "Corporate" | "Decor" };

const items: Item[] = [
  { src: g3, cat: "Weddings" },
  { src: hero, cat: "Decor" },
  { src: g5, cat: "Catering" },
  { src: g1, cat: "Decor" },
  { src: g4, cat: "Corporate" },
  { src: g2, cat: "Catering" },
  { src: g6, cat: "Corporate" },
  { src: about, cat: "Catering" },
  { src: g3, cat: "Weddings" },
  { src: g1, cat: "Weddings" },
  { src: g5, cat: "Catering" },
  { src: g4, cat: "Decor" },
];

const cats = ["All", "Weddings", "Catering", "Corporate", "Decor"] as const;

function GalleryPage() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = useMemo(() => (active === "All" ? items : items.filter((i) => i.cat === active)), [active]);

  return (
    <Layout>
      <PageHeader
        eyebrow="Gallery"
        title="A taste of our world."
        subtitle="Selected moments from weddings, galas and private celebrations we've had the joy of composing."
      />

      <section className="bg-ivory pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 text-[11px] tracking-[0.3em] uppercase border transition-colors ${
                  active === c
                    ? "bg-noir text-ivory border-noir"
                    : "border-[color:var(--border)] text-cocoa/80 hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div key={active} className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((it, i) => (
              <Reveal key={`${it.src}-${i}`} delay={i * 40} className="mb-5 break-inside-avoid overflow-hidden group relative">
                <img src={it.src} alt={`${it.cat} by Feast & Fest`} loading="lazy" className="w-full h-auto object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/40 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-ivory translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <p className="eyebrow !text-gold">{it.cat}</p>
                  <p className="mt-1 font-display text-lg">Feast &amp; Fest</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}