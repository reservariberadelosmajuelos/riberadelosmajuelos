import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import bosque from "@/assets/bosque-ribera.jpg";
import charca from "@/assets/charca.jpg";

export const Route = createFileRoute("/conservacion")({
  head: () => ({
    meta: [
      { title: "Conservación y restauración ecológica | Ribera de los Majuelos" },
      { name: "description", content: "Conservación del patrimonio natural, restauración de bosques de ribera, charcas temporales mediterráneas, humedales y conservación de aves, murciélagos y polinizadores." },
      { property: "og:title", content: "Conservación" },
      { property: "og:url", content: "/conservacion" },
      { property: "og:image", content: bosque },
    ],
    links: [{ rel: "canonical", href: "/conservacion" }],
  }),
  component: Page,
});

const subapartados = [
  { t: "Conservación del patrimonio natural existente", d: "Identificación, vigilancia y gestión activa de los hábitats y poblaciones presentes." },
  { t: "Restauración de bosques de ribera", d: "Recuperación de la vegetación riparia: alisos, sauces, fresnos y olmos." },
  { t: "Restauración ecológica", d: "Recuperación de procesos, conectividad y funcionalidad en hábitats degradados." },
  { t: "Charcas temporales mediterráneas", d: "Creación y conservación de este hábitat prioritario para anfibios e invertebrados." },
  { t: "Humedales naturalizados", d: "Diseño de pequeños humedales como nodos de biodiversidad y refugio para fauna." },
  { t: "Conservación de aves", d: "Cajas nido específicas, vigilancia de nidos y mejora del hábitat." },
  { t: "Conservación de murciélagos", d: "Refugios artificiales y conservación de refugios naturales." },
  { t: "Conservación de polinizadores", d: "Manejo florístico y conservación de la abeja ibérica y polinizadores silvestres." },
  { t: "Gestión del paisaje", d: "Mantenimiento de mosaicos heterogéneos: dehesas, bosque, ribera, pastizal." },
  { t: "Prevención de especies exóticas invasoras", d: "Prevención, vigilancia, detección temprana y respuesta rápida." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Conservación"
        title="Proteger lo existente, restaurar lo degradado"
        lead="La conservación articula toda la gestión de la reserva. Trabajamos en diez líneas complementarias que cubren ecosistemas, hábitats y grupos faunísticos clave."
        image={bosque}
      />

      <Section>
        <div className="grid gap-px bg-border md:grid-cols-2">
          {subapartados.map((s) => (
            <div key={s.t} className="bg-background p-8">
              <h3 className="font-display text-xl text-encina">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Enfoque" title="Prevención · Vigilancia · Detección temprana">
        <div className="grid gap-8 md:grid-cols-3">
          <Block t="Prevención" d="Diseño del manejo para evitar la llegada de amenazas y la pérdida de calidad ecológica." />
          <Block t="Vigilancia" d="Recorridos sistemáticos, fototrampeo y registros continuos para detectar cambios." />
          <Block t="Detección temprana" d="Capacidad de respuesta inmediata ante especies exóticas, focos de degradación o impactos." />
        </div>
      </Section>

      <section className="relative isolate overflow-hidden">
        <img src={charca} alt="Charca temporal mediterránea" width={1024} height={1024} loading="lazy" className="h-[60vh] w-full object-cover" />
      </section>
    </>
  );
}

function Block({ t, d }: { t: string; d: string }) {
  return (
    <div className="border-l-2 border-dorado bg-card p-6">
      <div className="eyebrow">{t}</div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{d}</p>
    </div>
  );
}
