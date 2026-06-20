import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import hero from "@/assets/hero-reserva.jpg";

export const Route = createFileRoute("/la-reserva")({
  head: () => ({
    meta: [
      { title: "La Reserva | Ribera de los Majuelos" },
      { name: "description", content: "Historia, filosofía, objetivos y visión a largo plazo de la Reserva Natural Ribera de los Majuelos en Extremadura." },
      { property: "og:title", content: "La Reserva | Ribera de los Majuelos" },
      { property: "og:description", content: "Una iniciativa privada de conservación a largo plazo en el Valle del Alagón." },
      { property: "og:url", content: "/la-reserva" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/la-reserva" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="La Reserva"
        title="Un territorio cuidado para las próximas generaciones"
        lead="Ribera de los Majuelos es una reserva natural privada en el Valle del Alagón. Su finalidad última es conservar, restaurar y enriquecer la biodiversidad del territorio mediante un modelo económicamente sostenible."
        image={hero}
      />

      <Section eyebrow="Historia" title="Origen y vocación">
        <div className="grid gap-12 lg:grid-cols-2">
          <p className="text-foreground/80">
            La reserva nace de una vocación familiar de cuidado del territorio. Tras la
            adquisición de la finca se eliminó el laboreo, se renunció a la agricultura
            intensiva y a los agroquímicos, y se adoptó una gestión basada en procesos
            naturales y pastoreo extensivo.
          </p>
          <p className="text-foreground/80">
            Desde entonces se ha trabajado sin pausa en la documentación de la
            biodiversidad presente, la restauración de hábitats degradados y la creación
            de infraestructuras para fauna —cajas nido, refugios para murciélagos,
            charcas temporales mediterráneas—.
          </p>
        </div>
      </Section>

      <Section eyebrow="Filosofía" title="La conservación como objetivo principal">
        <div className="space-y-6 text-foreground/85">
          <p>
            La conservación es el objetivo principal. Las actividades productivas
            —apicultura, ganadería extensiva, olivar— son herramientas para financiarla.
          </p>
          <p>
            Aspiramos a entregar un territorio ecológicamente más rico, funcional y
            resiliente que el recibido. Este compromiso intergeneracional articula
            todas las decisiones de manejo.
          </p>
        </div>
      </Section>

      <Section eyebrow="Objetivos" title="Líneas de trabajo">
        <ul className="grid gap-6 md:grid-cols-2">
          {[
            "Conservación de los ecosistemas presentes",
            "Restauración ecológica de hábitats degradados",
            "Conservación de recursos genéticos autóctonos",
            "Seguimiento científico de la biodiversidad",
            "Producción agroecológica como herramienta de financiación",
            "Divulgación, transparencia y documentación pública",
          ].map((o) => (
            <li key={o} className="border-l-2 border-dorado bg-card p-5">
              <span className="text-encina">{o}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Visión" title="Una mirada larga">
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/85">
          La reserva está concebida para crecer durante décadas: ampliar superficie,
          mejorar la conectividad ecológica, profundizar el conocimiento científico
          sobre el territorio y abrir progresivamente sus aprendizajes a la sociedad.
        </p>
      </Section>
    </>
  );
}
