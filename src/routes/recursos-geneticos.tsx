import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import abeja from "@/assets/abeja-iberica.jpg";
import merina from "@/assets/merina-negra.jpg";
import avilena from "@/assets/avilena.jpg";

export const Route = createFileRoute("/recursos-geneticos")({
  head: () => ({
    meta: [
      { title: "Recursos genéticos autóctonos | Ribera de los Majuelos" },
      { name: "description", content: "Conservación de la abeja ibérica, la oveja Merina Negra y la Avileña-Negra Ibérica como recursos genéticos autóctonos." },
      { property: "og:title", content: "Recursos genéticos autóctonos" },
      { property: "og:url", content: "/recursos-geneticos" },
      { property: "og:image", content: abeja },
    ],
    links: [{ rel: "canonical", href: "/recursos-geneticos" }],
  }),
  component: Page,
});

const razas = [
  {
    img: abeja,
    eyebrow: "Apis mellifera iberiensis",
    t: "Abeja Ibérica",
    d: "Subespecie autóctona de la península ibérica, adaptada a sus floraciones y climatología. Pieza central de la apicultura de conservación de la reserva.",
  },
  {
    img: merina,
    eyebrow: "Raza autóctona en peligro de extinción",
    t: "Oveja Merina Negra",
    d: "Variedad rústica de la raza Merina, perfectamente adaptada a los sistemas extensivos del cuadrante suroccidental. Su conservación tiene un alto valor genético y cultural.",
  },
  {
    img: avilena,
    eyebrow: "Bovino extensivo",
    t: "Avileña-Negra Ibérica",
    d: "Raza bovina autóctona especializada en el aprovechamiento extensivo de pastos y montaneras. Reconocida por su rusticidad y por su calidad cárnica.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Recursos genéticos autóctonos"
        title="Conservar la biodiversidad doméstica"
        lead="La conservación de las razas autóctonas es indisociable de la conservación de los paisajes que las han modelado. Su valor genético, cultural, ecológico y productivo es insustituible."
        image={abeja}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {razas.map((r, idx) => (
          <article key={r.t} className={`grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 ${idx % 2 ? "lg:[&>div:first-child]:order-2" : ""} border-b border-border last:border-b-0`}>
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img src={r.img} alt={r.t} width={1024} height={768} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="eyebrow italic">{r.eyebrow}</div>
              <h2 className="mt-4 font-display text-4xl text-encina md:text-5xl">{r.t}</h2>
              <p className="mt-6 text-foreground/80">{r.d}</p>
              <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                {["Valor genético", "Valor cultural", "Adaptación ecológica", "Importancia productiva"].map((k) => (
                  <div key={k}>
                    <dt className="eyebrow">{k}</dt>
                    <dd className="mt-1 text-foreground/75">Documentado</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>

      <Section eyebrow="Por qué importa" title="Biodiversidad doméstica">
        <p className="max-w-3xl text-foreground/80">
          Las razas autóctonas son patrimonio genético acumulado durante siglos de
          coevolución con un territorio. Conservarlas no es una cuestión nostálgica:
          es una estrategia ecológica, productiva y de resiliencia frente a los retos
          ambientales del siglo XXI.
        </p>
      </Section>
    </>
  );
}
