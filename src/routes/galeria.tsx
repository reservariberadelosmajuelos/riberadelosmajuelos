import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import hero from "@/assets/hero-reserva.jpg";
import bosque from "@/assets/bosque-ribera.jpg";
import charca from "@/assets/charca.jpg";
import abeja from "@/assets/abeja-iberica.jpg";
import merina from "@/assets/merina-negra.jpg";
import avilena from "@/assets/avilena.jpg";
import olivar from "@/assets/olivar.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería | Ribera de los Majuelos" },
      { name: "description", content: "Portfolio fotográfico: paisajes, fauna, flora, apicultura, ganadería, restauración, charcas y bosques de ribera." },
      { property: "og:title", content: "Galería fotográfica" },
      { property: "og:url", content: "/galeria" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Page,
});

const imgs = [
  { src: hero, t: "Paisaje · Dehesa al amanecer" },
  { src: bosque, t: "Restauración · Bosque de ribera" },
  { src: charca, t: "Charca temporal mediterránea" },
  { src: abeja, t: "Apicultura · Abeja ibérica" },
  { src: merina, t: "Ganadería · Merina Negra" },
  { src: avilena, t: "Ganadería · Avileña-Negra Ibérica" },
  { src: olivar, t: "Olivar tradicional" },
  { src: hero, t: "Paisaje · Valle del Alagón" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Galería"
        title="Una mirada al territorio"
        lead="Fotografía documental y editorial de la reserva. El archivo se amplía permanentemente."
      />
      <Section>
        <div className="flex flex-wrap gap-2">
          {["Todas", "Paisajes", "Fauna", "Flora", "Apicultura", "Ganadería", "Restauración", "Charcas", "Bosques de ribera"].map((t) => (
            <button key={t} className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground/70 hover:border-encina hover:text-encina">{t}</button>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {imgs.map((i, idx) => (
            <figure key={idx} className={`group relative overflow-hidden ${idx % 5 === 0 ? "aspect-[3/4] col-span-2 row-span-2" : "aspect-square"}`}>
              <img src={i.src} alt={i.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.18_0.02_120/0.85)] to-transparent p-4 text-xs text-[oklch(0.95_0.01_85)] opacity-0 transition-opacity group-hover:opacity-100">
                {i.t}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
