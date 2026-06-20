import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/actuaciones")({
  head: () => ({
    meta: [
      { title: "Actuaciones realizadas | Ribera de los Majuelos" },
      { name: "description", content: "Línea temporal visual de las actuaciones de conservación y restauración ejecutadas en la reserva." },
      { property: "og:title", content: "Actuaciones realizadas" },
      { property: "og:url", content: "/actuaciones" },
    ],
    links: [{ rel: "canonical", href: "/actuaciones" }],
  }),
  component: Page,
});

const hitos = [
  { t: "Adquisición de la finca", d: "Inicio del proyecto de reserva. Eliminación inmediata del laboreo." },
  { t: "Renuncia a la agricultura intensiva", d: "Abandono completo de agroquímicos y prácticas intensivas." },
  { t: "Primera revegetación de bosque de ribera", d: "Plantación de especies riparias autóctonas." },
  { t: "Instalación de 10 cajas nido para aves", d: "Diseñadas para distintos grupos: paseriformes, rapaces y trogloditas." },
  { t: "Instalación de 2 refugios para murciélagos", d: "Estructuras específicas adaptadas a quirópteros." },
  { t: "Construcción de la primera charca temporal mediterránea", d: "Más de 80 m² para anfibios e invertebrados." },
  { t: "Inicio del programa de fototrampeo", d: "Documentación sistemática de fauna." },
  { t: "Segunda revegetación de bosque de ribera", d: "Ampliación de la superficie restaurada." },
  { t: "Segunda charca temporal mediterránea", d: "Consolidación del sistema de hábitats acuáticos." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Actuaciones realizadas"
        title="Una década de trabajo sobre el terreno"
        lead="Línea temporal de las actuaciones de conservación y restauración ejecutadas dentro de la reserva."
      />

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-0">
        <ol className="relative space-y-12 border-l-2 border-dorado pl-10">
          {hitos.map((h, i) => (
            <li key={h.t} className="relative">
              <span className="absolute -left-[2.85rem] top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-dorado bg-background font-display text-xs text-encina">
                {i + 1}
              </span>
              <h3 className="font-display text-2xl text-encina">{h.t}</h3>
              <p className="mt-2 text-foreground/80">{h.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10">
        <div className="border-y border-border bg-card p-10">
          <div className="eyebrow rule-gold">Principios de manejo</div>
          <ul className="mt-6 grid gap-4 text-foreground/85 md:grid-cols-2">
            <li>· Ausencia de agricultura intensiva</li>
            <li>· Ausencia de agroquímicos</li>
            <li>· Gestión basada en procesos naturales</li>
            <li>· Pastoreo extensivo con razas autóctonas</li>
          </ul>
        </div>
      </section>
    </>
  );
}
