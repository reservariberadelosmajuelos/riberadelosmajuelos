import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";

export const Route = createFileRoute("/biodiversidad")({
  head: () => ({
    meta: [
      { title: "Biodiversidad | Inventario de fauna y flora" },
      { name: "description", content: "Base de datos visual de la biodiversidad documentada en la Reserva Natural Ribera de los Majuelos: mamíferos, aves, reptiles, anfibios, invertebrados y flora." },
      { property: "og:title", content: "Biodiversidad" },
      { property: "og:url", content: "/biodiversidad" },
    ],
    links: [{ rel: "canonical", href: "/biodiversidad" }],
  }),
  component: Page,
});

const grupos = [
  { t: "Mamíferos", n: "—", d: "Carnívoros, ungulados, micromamíferos y quirópteros." },
  { t: "Aves", n: "—", d: "Rapaces, paseriformes, esteparias y aves de ribera." },
  { t: "Reptiles", n: "—", d: "Lagartos, lagartijas, culebras y galápagos." },
  { t: "Anfibios", n: "—", d: "Especies ligadas a las charcas temporales mediterráneas." },
  { t: "Invertebrados", n: "—", d: "Polinizadores, odonatos, coleópteros y entomofauna asociada." },
  { t: "Flora", n: "—", d: "Vegetación de ribera, dehesa, pastizal y comunidades acuáticas." },
];

const fichaPlaceholders = Array.from({ length: 8 });

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Biodiversidad"
        title="Una base de datos viva del territorio"
        lead="Catálogo visual y científico de las especies documentadas en la reserva. Cada ficha incluye fotografías, nombre común, nombre científico, estado de conservación y observaciones de campo."
      />

      <Section eyebrow="Grupos taxonómicos">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {grupos.map((g) => (
            <div key={g.t} className="bg-background p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-encina">{g.t}</h3>
                <span className="font-display text-3xl text-dorado">{g.n}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{g.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Fichas de especies" title="Catálogo">
        <div className="mb-8 text-sm text-muted-foreground">
          Catálogo en construcción permanente. Las fichas se incorporan a medida que se
          validan las observaciones y se completan los registros fotográficos.
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {fichaPlaceholders.map((_, i) => (
            <article key={i} className="group overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] bg-[linear-gradient(135deg,oklch(0.92_0.02_120),oklch(0.85_0.03_110))]" />
              <div className="p-5">
                <div className="eyebrow">Ficha {String(i + 1).padStart(3, "0")}</div>
                <div className="mt-2 font-display text-lg text-encina">Especie pendiente</div>
                <div className="mt-1 text-xs italic text-muted-foreground">Nomen scientificum</div>
                <div className="mt-4 text-xs text-muted-foreground">Estado: —</div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
