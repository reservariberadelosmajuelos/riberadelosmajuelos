import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import abeja from "@/assets/abeja-iberica.jpg";

export const Route = createFileRoute("/apicultura")({
  head: () => ({
    meta: [
      { title: "Apicultura | Reserva Natural Ribera de los Majuelos" },
      { name: "description", content: "Manejo apícola con abeja ibérica, flora melífera y conservación de polinizadores. El 100% del beneficio neto se reinvierte en la reserva." },
      { property: "og:title", content: "Apicultura" },
      { property: "og:url", content: "/apicultura" },
      { property: "og:image", content: abeja },
    ],
    links: [{ rel: "canonical", href: "/apicultura" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Apicultura"
        title="La abeja ibérica como motor de la conservación"
        lead="La apicultura es la actividad económica central de la reserva. El 100 % del beneficio neto generado se reinvierte íntegramente en conservación y restauración."
        image={abeja}
      />

      <Section eyebrow="Manejo apícola" title="Apicultura de conservación">
        <div className="grid gap-12 lg:grid-cols-2">
          <p className="text-foreground/80">
            Trabajamos exclusivamente con abeja ibérica (<i>Apis mellifera iberiensis</i>),
            la subespecie autóctona de la península. Su manejo se concibe desde una lógica
            de conservación: mantener poblaciones sanas, locales y bien adaptadas al
            territorio.
          </p>
          <p className="text-foreground/80">
            La calidad de la miel es resultado directo de la calidad ecológica del
            entorno: un territorio rico en flora melífera silvestre produce mieles
            complejas, trazables y honestas con su origen.
          </p>
        </div>
      </Section>

      <Section eyebrow="Flora melífera" title="El paisaje como colmena">
        <ul className="grid gap-px bg-border md:grid-cols-3">
          {["Encina", "Romero", "Cantueso", "Jara", "Brezo", "Tomillo", "Eucalipto", "Castaño", "Almendro"].map((f) => (
            <li key={f} className="bg-background p-5 font-display text-lg text-encina">{f}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Compromiso" title="100 % del beneficio neto a la reserva">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { p: "50 %", t: "Adquisición de terrenos" },
            { p: "25 %", t: "Restauración ecológica" },
            { p: "25 %", t: "Conservación activa" },
          ].map((b) => (
            <div key={b.t} className="border-l-2 border-dorado bg-card p-6">
              <div className="font-display text-4xl text-encina">{b.p}</div>
              <div className="mt-2 text-sm text-muted-foreground">{b.t}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
