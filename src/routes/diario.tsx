import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";

export const Route = createFileRoute("/diario")({
  head: () => ({
    meta: [
      { title: "Diario de campo | Ribera de los Majuelos" },
      { name: "description", content: "Cuaderno de campo profesional: fauna, flora, restauraciones, fototrampeo, fenología y seguimientos." },
      { property: "og:title", content: "Diario de campo" },
      { property: "og:url", content: "/diario" },
    ],
    links: [{ rel: "canonical", href: "/diario" }],
  }),
  component: Page,
});

const entradas = [
  { fecha: "—", cat: "Fototrampeo", t: "Próxima entrada", d: "Las observaciones más recientes se publicarán aquí, organizadas por categoría." },
  { fecha: "—", cat: "Fenología", t: "Próxima entrada", d: "Floraciones, migraciones y eventos fenológicos del territorio." },
  { fecha: "—", cat: "Restauración", t: "Próxima entrada", d: "Evolución de las actuaciones de revegetación y creación de hábitats." },
  { fecha: "—", cat: "Fauna", t: "Próxima entrada", d: "Observaciones notables, primeros registros y recolonizaciones." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Diario de campo"
        title="Un cuaderno abierto"
        lead="Notas, observaciones y resultados del trabajo de campo. El diario crece con el tiempo, sin urgencia, con la pausa del territorio."
      />
      <Section>
        <div className="flex flex-wrap gap-2">
          {["Todas", "Fauna", "Flora", "Restauración", "Fototrampeo", "Fenología", "Seguimientos"].map((t) => (
            <button key={t} className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground/70 hover:border-encina hover:text-encina">
              {t}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {entradas.map((e, i) => (
            <article key={i} className="bg-background p-8">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span>{e.fecha}</span>
                <span className="h-px w-6 bg-dorado" />
                <span className="text-encina">{e.cat}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl text-encina">{e.t}</h3>
              <p className="mt-3 text-foreground/80">{e.d}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
