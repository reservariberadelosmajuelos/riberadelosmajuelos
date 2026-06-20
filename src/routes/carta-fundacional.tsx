import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/carta-fundacional")({
  head: () => ({
    meta: [
      { title: "Carta Fundacional | Reserva Natural Ribera de los Majuelos" },
      { name: "description", content: "Documento estratégico y fundacional de la Reserva Natural Ribera de los Majuelos." },
      { property: "og:title", content: "Carta Fundacional" },
      { property: "og:url", content: "/carta-fundacional" },
    ],
    links: [{ rel: "canonical", href: "/carta-fundacional" }],
  }),
  component: Page,
});

const articulos = [
  {
    n: "I",
    t: "Naturaleza y finalidad",
    p: "La Reserva Natural Ribera de los Majuelos es una iniciativa privada de conservación a largo plazo en el Valle del Alagón (Extremadura). Su finalidad última es conservar, restaurar y enriquecer la biodiversidad del territorio, entregando a las próximas generaciones un espacio ecológicamente más rico, funcional y resiliente que el recibido.",
  },
  {
    n: "II",
    t: "Principio rector",
    p: "La conservación constituye el objetivo principal. Las actividades productivas desarrolladas en la reserva son herramientas para financiarla, no fines en sí mismas. Ninguna decisión productiva podrá comprometer la integridad ecológica del territorio.",
  },
  {
    n: "III",
    t: "Modelo de gestión",
    p: "La gestión se basa en procesos naturales, pastoreo extensivo, ausencia de agricultura intensiva y ausencia de agroquímicos. Se favorece la conservación de los recursos genéticos autóctonos —Abeja Ibérica, Merina Negra, Avileña-Negra Ibérica— por su valor genético, cultural, ecológico y productivo.",
  },
  {
    n: "IV",
    t: "Compromiso económico",
    p: "El 100 % del beneficio neto generado por la actividad apícola se reinvierte íntegramente en la reserva, distribuido orientativamente entre adquisición de terrenos (50 %), restauración ecológica (25 %) y conservación activa de biodiversidad (25 %). El resto de actividades productivas destina, como mínimo, el 10 % del beneficio neto anual a actuaciones de conservación y restauración dentro de la reserva.",
  },
  {
    n: "V",
    t: "Transparencia",
    p: "La reserva se compromete a publicar periódicamente memorias anuales, resultados de seguimiento científico, actuaciones realizadas e indicadores ecológicos, en una vocación de comunicación abierta del trabajo desarrollado.",
  },
  {
    n: "VI",
    t: "Continuidad",
    p: "Este compromiso es de carácter intergeneracional. La reserva está concebida para perdurar y crecer durante décadas, mediante la incorporación continua de superficie protegida, conocimiento científico y actuaciones de conservación.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Documento fundacional"
        title="Carta Fundacional"
        lead="Documento estratégico que recoge los principios, compromisos y vocación de la Reserva Natural Ribera de los Majuelos."
      />
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-0">
        <div className="border-y border-dorado py-6 text-center">
          <div className="eyebrow">Valle del Alagón · Extremadura</div>
          <div className="mt-2 font-display text-xl italic text-encina">Anno fundationis</div>
        </div>
        <div className="mt-16 space-y-16">
          {articulos.map((a) => (
            <article key={a.n}>
              <div className="flex items-baseline gap-6">
                <div className="font-display text-5xl text-dorado">{a.n}</div>
                <h2 className="font-display text-2xl text-encina md:text-3xl">{a.t}</h2>
              </div>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-foreground/85">{a.p}</p>
            </article>
          ))}
        </div>
        <div className="mt-24 border-t border-border pt-8 text-center text-sm italic text-muted-foreground">
          Suscrito por la titularidad de la Reserva Natural Ribera de los Majuelos.
        </div>
      </section>
    </>
  );
}
