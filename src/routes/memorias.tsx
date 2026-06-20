import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";

export const Route = createFileRoute("/memorias")({
  head: () => ({
    meta: [
      { title: "Memorias anuales | Ribera de los Majuelos" },
      { name: "description", content: "Publicación periódica de memorias, informes y resultados de conservación de la reserva." },
      { property: "og:title", content: "Memorias anuales" },
      { property: "og:url", content: "/memorias" },
    ],
    links: [{ rel: "canonical", href: "/memorias" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Memorias anuales"
        title="Rendir cuentas, año a año"
        lead="La transparencia es estructural a la reserva. Aquí se publicarán las memorias anuales, los informes técnicos y los resultados de los seguimientos."
      />
      <Section>
        <ul className="divide-y divide-border border-y border-border">
          {["—", "—", "—"].map((y, i) => (
            <li key={i} className="flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="eyebrow">Memoria anual</div>
                <div className="mt-1 font-display text-2xl text-encina">Ejercicio {y}</div>
                <div className="text-sm text-muted-foreground">Próxima publicación</div>
              </div>
              <span className="text-sm text-muted-foreground">PDF · Pendiente</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
