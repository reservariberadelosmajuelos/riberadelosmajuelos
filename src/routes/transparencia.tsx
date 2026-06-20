import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparencia | Modelo de financiación de la Reserva" },
      { name: "description", content: "Modelo económico y de transparencia: el 100 % del beneficio neto de la apicultura y al menos el 10 % del resto de actividades se reinvierte en la reserva." },
      { property: "og:title", content: "Transparencia" },
      { property: "og:url", content: "/transparencia" },
    ],
    links: [{ rel: "canonical", href: "/transparencia" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Transparencia"
        title="Cómo se financia la conservación"
        lead="La reserva se financia con su propia actividad productiva. Aquí se explica, sin opacidad, cómo se reparte el beneficio neto generado."
      />

      <Section eyebrow="Actividad apícola" title="100 % del beneficio neto a la reserva">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { p: "50 %", t: "Adquisición y ampliación de terrenos", d: "Compra de fincas colindantes, conectividad ecológica y consolidación territorial." },
            { p: "25 %", t: "Restauración ecológica", d: "Bosques de ribera, humedales, revegetaciones, recuperación de hábitats." },
            { p: "25 %", t: "Conservación activa de biodiversidad", d: "Cajas nido, refugios, charcas, fototrampeo, inventarios, seguimiento." },
          ].map((b) => (
            <div key={b.t} className="border-l-2 border-dorado bg-card p-6">
              <div className="font-display text-5xl text-encina">{b.p}</div>
              <div className="mt-3 font-medium text-encina">{b.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Resto de actividades" title="Mínimo del 10 % del beneficio neto anual">
        <p className="max-w-3xl text-foreground/80">
          Las actividades productivas no apícolas —ganadería extensiva, producción de
          aceite de oliva virgen extra y otras compatibles— destinan, como compromiso
          mínimo, el <strong className="text-encina">10 % de su beneficio neto anual</strong> a
          actuaciones de conservación y restauración dentro de la reserva.
        </p>
      </Section>

      <Section eyebrow="Rendición de cuentas">
        <div className="border border-border bg-card p-8">
          <p className="text-foreground/80">
            Los detalles, métricas y resultados anuales se publican en{" "}
            <a href="/memorias" className="text-encina underline-offset-4 hover:underline">Memorias anuales</a> y{" "}
            <a href="/investigacion" className="text-encina underline-offset-4 hover:underline">Investigación y seguimiento</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
