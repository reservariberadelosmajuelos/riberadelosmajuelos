import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </>
      )}
      <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        {eyebrow && <div className="eyebrow rule-gold">{eyebrow}</div>}
        <h1 className="mt-6 font-display text-4xl leading-[1.05] text-encina md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
            {lead}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-[1.03rem] leading-relaxed text-foreground/85 lg:px-0 lg:py-24">
      {children}
    </div>
  );
}

export function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-20 lg:px-10 ${className}`}>
      {eyebrow && <div className="eyebrow rule-gold">{eyebrow}</div>}
      {title && (
        <h2 className="mt-4 font-display text-3xl text-encina md:text-4xl">{title}</h2>
      )}
      <div className={title || eyebrow ? "mt-10" : ""}>{children}</div>
    </section>
  );
}
