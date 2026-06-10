import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowRight } from "lucide-react";

type Category = "Starters" | "Mains" | "Desserts" | "Beverages";

const menu: Record<Category, { dish: string; desc: string }[]> = {
  Starters: [
    { dish: "Amuse-Bouche Trio", desc: "Chef's daily selection of three refined bites to open the palate" },
    { dish: "Wild Mushroom Velouté", desc: "Aged truffle oil, brioche croutons, micro-herb garnish" },
    { dish: "Burrata & Heirloom Tomato", desc: "24-hour marinated tomatoes, basil pistou, aged balsamic reduction" },
    { dish: "Seared Scallops", desc: "Cauliflower purée, crispy capers, lemon beurre blanc" },
    { dish: "Chaat Royale", desc: "Elevated street flavours — crisp baskets, tamarind, pomegranate, sev" },
    { dish: "Prawn Tempura", desc: "Yuzu aioli, togarashi sesame, shiso leaf" },
  ],
  Mains: [
    { dish: "Prime Lamb Rack", desc: "Herb-dijon crust, pommes dauphinoise, roasted garlic jus" },
    { dish: "Butter Poached Lobster", desc: "Saffron beurre blanc, fennel confit, caviar pearls" },
    { dish: "Truffle Risotto", desc: "Arborio, aged Parmigiano, black truffle shavings, chive oil" },
    { dish: "Slow-Braised Short Rib", desc: "72-hour red wine braise, celeriac purée, pickled shallots" },
    { dish: "Tandoori-Spiced Sea Bass", desc: "Kokum butter, cucumber raita, charred lemon" },
    { dish: "Wild Mushroom Wellington", desc: "Porcini duxelles, golden pastry, red wine reduction" },
  ],
  Desserts: [
    { dish: "Valrhona Chocolate Fondant", desc: "Single-origin 70% dark chocolate, vanilla bean gelato" },
    { dish: "Mango & Saffron Panna Cotta", desc: "Alphonso mango coulis, candied pistachios, rose water" },
    { dish: "Crème Brûlée", desc: "Classic Madagascar vanilla, caramelised sugar crust" },
    { dish: "Opera Cake", desc: "Joconde sponge, coffee ganache, dark chocolate glaze" },
    { dish: "Gulab Jamun Soufflé", desc: "Warm rose-cardamom soufflé, rabdi espuma" },
    { dish: "Artisan Cheese Selection", desc: "Aged Indian and imported cheeses, honeycomb, lavash" },
  ],
  Beverages: [
    { dish: "Signature Welcome Cocktail", desc: "Seasonal fruit, fresh herbs, artisan sparkling water" },
    { dish: "Premium Bar Programme", desc: "Curated wines, aged spirits, craft cocktails — tailored to your event" },
    { dish: "Mocktail Collection", desc: "House-crafted zero-proof blends — rose-lychee, citrus-ginger, mango-mint" },
    { dish: "Specialty Coffee Service", desc: "Single-origin pour-overs, espresso, cold brew, cardamom chai" },
    { dish: "Artisan Tea Service", desc: "Rare Darjeeling, Japanese matcha ceremonials, curated herbal blends" },
    { dish: "Infused Water Stations", desc: "Cucumber-mint, rose-lychee, citrus-ginger — presented in crystal decanters" },
  ],
};

const categories: Category[] = ["Starters", "Mains", "Desserts", "Beverages"];

export default function MenuPage() {
  const [active, setActive] = useState<Category>("Starters");

  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
        <PageHeader
          eyebrow="Menu"
          title="Composed with craft. Served with grace."
          subtitle="Each dish is authored seasonally, sourced with intention, and plated with cinematic care. All menus are fully bespoke — this is a curated showcase."
        />

        {/* Category tabs */}
        <section className="bg-ivory sticky top-20 z-30 border-b border-[color:var(--border)]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex overflow-x-auto gap-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`flex-none px-8 py-5 text-[11px] tracking-[0.3em] uppercase font-medium border-b-2 transition-colors whitespace-nowrap ${
                    active === cat
                      ? "border-gold text-noir"
                      : "border-transparent text-cocoa/60 hover:text-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu items */}
        <section className="py-20 lg:py-28 bg-ivory">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="grid md:grid-cols-2 gap-px bg-[color:var(--border)]"
              >
                {menu[active].map((item, i) => (
                  <div
                    key={item.dish}
                    className="bg-ivory p-10 group hover:bg-white transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="eyebrow !text-gold/70">0{i + 1}</p>
                        <h3 className="mt-3 font-display text-2xl">{item.dish}</h3>
                        <p className="mt-3 text-sm text-cocoa/70 leading-relaxed font-light max-w-sm">{item.desc}</p>
                      </div>
                    </div>
                    <span className="mt-8 inline-block w-8 h-px bg-gold group-hover:w-14 transition-all duration-500" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Bespoke note */}
        <section className="py-20 lg:py-28 bg-noir text-ivory">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal><p className="eyebrow"><span className="gold-rule mr-3" />Bespoke Menus</p></Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-4xl md:text-5xl text-ivory leading-[1.1]">
                  Every menu is <span className="italic text-gold">written for you.</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-ivory/70 font-light leading-relaxed">
                  The dishes above are a curated showcase of our capabilities. We author every menu from
                  scratch — shaped by your event, your guests, the season, and the story you want to tell.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p className="mt-4 text-ivory/70 font-light leading-relaxed">
                  Our chefs work with you through a private tasting session to finalise every course,
                  every pairing, and every detail before the day arrives.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-gold text-noir text-[11px] tracking-[0.3em] uppercase hover:bg-ivory transition-colors"
                >
                  Begin Your Menu <ArrowRight size={14} />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-px bg-ivory/10">
                {[
                  ["Seasonal", "Sourced fresh, menu changes with the harvest"],
                  ["Dietary", "Vegetarian, vegan, gluten-free — all accommodated"],
                  ["Cuisines", "Indian, Continental, Asian, Fusion & beyond"],
                  ["Tasting", "Private session with our executive chefs"],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-noir p-8">
                    <h3 className="font-display text-xl text-gold">{title}</h3>
                    <p className="mt-2 text-xs text-ivory/50 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
