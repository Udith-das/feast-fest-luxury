import { useEffect, useRef, useState, type ReactNode, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  children: ReactNode;
  as?: "div" | "section" | "header" | "article" | "li" | "h1" | "h2" | "h3" | "p";
};

export function Reveal({ delay = 0, children, className = "", as: Tag = "div", style, ...rest }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Comp>
  );
}