import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";

export const Route = createFileRoute("/investigacion")({
  head: () => ({
    meta: [
      { title: "Investigación y seguimiento científico | Ribera de los Majuelos" },
      { name: "description", content: "Fototrampeo, inventarios, indicadores ecológicos y seguimiento de actuaciones en la reserva." },
      { property: "og:title", content: "Investigación y seguimiento" },
      { property: "og:url", content: "/investigacion" },
    ],
    links: [{ rel: "canonical", href: "/investigacion" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Investigación y seguimiento"
        title="Datos para tomar decisiones"
        lead="Toda la gestión se apoya en información rigurosa y trazable: fototrampeo, inventarios sistemáticos, indicadores ecológicos y seguimiento de las actuaciones realizadas."
      />
      <Section>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Fototrampeo", d: "Cámaras automáticas distribuidas por el territorio." },
            { t: "Inventarios", d: "Censos periódicos de fauna, flora y comunidades." },
            { t: "Indicadores ecológicos", d: "Métricas reproducibles para evaluar la salud del territorio." },
            { t: "Seguimiento de actuaciones", d: "Evaluación del éxito de las restauraciones y refugios." },
          ].map((b) => (
            <div key={b.t} className="bg-background p-8">
              <div className="eyebrow">Línea</div>
              <h3 className="mt-3 font-display text-xl text-encina">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Resultados" title="Panel de indicadores">
        <p className="mb-6 max-w-2xl text-muted-foreground">
          Hemos abierto un panel interactivo con gráficos de especies, actuaciones,
          charcas y fototrampeo, con filtros por año y categoría.
        </p>
        <a
          href="/indicadores"
          className="inline-flex items-center gap-2 border border-encina px-5 py-3 text-sm font-medium text-encina transition-colors hover:bg-encina hover:text-background"
        >
          Ver indicadores y datos →
        </a>
      </Section>
    </>
  );
}
