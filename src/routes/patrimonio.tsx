import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";

export const Route = createFileRoute("/patrimonio")({
  head: () => ({
    meta: [
      { title: "Patrimonio cultural y agroganadero | Ribera de los Majuelos" },
      { name: "description", content: "Conservación de prácticas tradicionales ambientalmente equivalentes o superiores: pastoreo extensivo, conocimiento tradicional, infraestructuras rurales históricas." },
      { property: "og:title", content: "Patrimonio cultural y agroganadero" },
      { property: "og:url", content: "/patrimonio" },
    ],
    links: [{ rel: "canonical", href: "/patrimonio" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Patrimonio"
        title="Lo tradicional, cuando es ambientalmente mejor"
        lead="Conservamos las prácticas tradicionales cuando son ambientalmente superiores o equivalentes a las alternativas modernas. El conocimiento heredado es también biodiversidad."
      />
      <Section>
        <ul className="grid gap-px bg-border md:grid-cols-2">
          {[
            { t: "Pastoreo extensivo", d: "Saber-hacer ganadero adaptado al territorio." },
            { t: "Conocimiento tradicional", d: "Toponimia, fenología, manejo de pastos y aguas." },
            { t: "Infraestructuras rurales históricas", d: "Muros de piedra seca, pozos, abrevaderos, majanos." },
            { t: "Sistemas sostenibles de aprovechamiento", d: "Modelos de uso múltiple compatibles con la conservación." },
          ].map((b) => (
            <li key={b.t} className="bg-background p-8">
              <h3 className="font-display text-xl text-encina">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
