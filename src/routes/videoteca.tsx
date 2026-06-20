import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";

export const Route = createFileRoute("/videoteca")({
  head: () => ({
    meta: [
      { title: "Videoteca | Ribera de los Majuelos" },
      { name: "description", content: "Vídeos propios y materiales audiovisuales sobre la reserva, su fauna y sus actuaciones de conservación." },
      { property: "og:title", content: "Videoteca" },
      { property: "og:url", content: "/videoteca" },
    ],
    links: [{ rel: "canonical", href: "/videoteca" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Videoteca"
        title="El territorio en movimiento"
        lead="Materiales audiovisuales propios y de divulgación. Pronto se publicarán las primeras piezas."
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="overflow-hidden border border-border bg-card">
              <div className="aspect-video bg-[linear-gradient(135deg,oklch(0.32_0.04_145),oklch(0.5_0.07_155))]" />
              <div className="p-5">
                <div className="eyebrow">Próximamente</div>
                <div className="mt-2 font-display text-xl text-encina">Vídeo {i}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
