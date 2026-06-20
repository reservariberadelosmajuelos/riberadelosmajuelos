import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import merina from "@/assets/merina-negra.jpg";
import avilena from "@/assets/avilena.jpg";

export const Route = createFileRoute("/ganaderia")({
  head: () => ({
    meta: [
      { title: "Ganadería extensiva | Merina Negra y Avileña-Negra Ibérica" },
      { name: "description", content: "Ganadería extensiva con razas autóctonas Merina Negra y Avileña-Negra Ibérica. Pastoreo, conservación de hábitats y prevención de incendios." },
      { property: "og:title", content: "Ganadería extensiva" },
      { property: "og:url", content: "/ganaderia" },
      { property: "og:image", content: merina },
    ],
    links: [{ rel: "canonical", href: "/ganaderia" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Ganadería extensiva"
        title="Pastoreo como herramienta ecológica"
        lead="La ganadería extensiva con razas autóctonas conserva mosaicos paisajísticos, previene incendios y aporta calidad gastronómica. Compromiso mínimo del 10 % del beneficio neto a la reserva."
        image={merina}
      />

      <Section eyebrow="Merina Negra" title="Oveja autóctona en peligro">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={merina} alt="Oveja Merina Negra" width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <p className="text-foreground/80">
            La Merina Negra es una raza autóctona española catalogada en peligro de
            extinción. Su rusticidad y adaptación a las condiciones extensivas del
            suroeste peninsular la convierten en una pieza clave para la conservación
            de paisajes culturales y la prevención de incendios forestales.
          </p>
        </div>
      </Section>

      <Section eyebrow="Avileña-Negra Ibérica" title="Bovino rústico de aprovechamiento extensivo">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <p className="text-foreground/80 lg:order-2">
            La Avileña-Negra Ibérica es una raza bovina autóctona adaptada a sistemas
            extensivos de montaña y dehesa. Aprovecha pastos y montanera, manteniendo
            el equilibrio del territorio y produciendo una carne de calidad reconocida.
          </p>
          <img src={avilena} alt="Avileña-Negra Ibérica" width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover lg:order-1" />
        </div>
      </Section>

      <Section eyebrow="Funciones ecológicas" title="Por qué el pastoreo">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Conservación de hábitats", d: "Mantiene mosaicos heterogéneos y diversidad estructural." },
            { t: "Prevención de incendios", d: "Reducción de combustible vegetal de forma natural." },
            { t: "Biodiversidad asociada", d: "Coprófagos, polinizadores y aves vinculadas al pastoreo." },
            { t: "Calidad gastronómica", d: "Trazabilidad real, alimentación natural y bienestar animal." },
          ].map((b) => (
            <div key={b.t} className="border-l-2 border-dorado bg-card p-6">
              <div className="font-display text-lg text-encina">{b.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
