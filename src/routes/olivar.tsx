import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import olivar from "@/assets/olivar.jpg";

export const Route = createFileRoute("/olivar")({
  head: () => ({
    meta: [
      { title: "Olivar y paisaje agrario | Ribera de los Majuelos" },
      { name: "description", content: "Olivar tradicional con cubiertas vegetales, conservación del suelo, fauna auxiliar y producción sostenible de aceite de oliva virgen extra." },
      { property: "og:title", content: "Olivar y paisaje agrario" },
      { property: "og:url", content: "/olivar" },
      { property: "og:image", content: olivar },
    ],
    links: [{ rel: "canonical", href: "/olivar" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Olivar y paisaje agrario"
        title="Un olivar vivo"
        lead="Olivar tradicional manejado con cubiertas vegetales, sin agroquímicos, integrado en el mosaico paisajístico de la reserva."
        image={olivar}
      />
      <Section>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Cubiertas vegetales", d: "Protección del suelo y refugio para fauna auxiliar." },
            { t: "Conservación del suelo", d: "Mantenimiento de la fertilidad y de la estructura edáfica." },
            { t: "Fauna auxiliar", d: "Insectos, aves y reptiles que regulan plagas de forma natural." },
            { t: "Producción sostenible", d: "Aceite de oliva virgen extra trazable y honesto con su origen." },
          ].map((b) => (
            <div key={b.t} className="bg-background p-8">
              <h3 className="font-display text-xl text-encina">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
