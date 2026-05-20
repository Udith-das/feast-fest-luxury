import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-ivory border-b border-[color:var(--border)]">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="eyebrow"><span className="gold-rule mr-3" />{eyebrow}<span className="gold-rule ml-3" /></p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={200}>
            <p className="mt-6 text-cocoa/80 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}