import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-reserva.jpg";
import bosque from "@/assets/bosque-ribera.jpg";
import charca from "@/assets/charca.jpg";
import abeja from "@/assets/abeja-iberica.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reserva Natural Ribera de los Majuelos | Conservación en el Valle del Alagón" },
      {
        name: "description",
        content:
          "Reserva natural privada dedicada a la conservación, restauración ecológica y producción agroecológica en el Valle del Alagón, Extremadura.",
      },
      { property: "og:title", content: "Reserva Natural Ribera de los Majuelos" },
      {
        property: "og:description",
        content:
          "Conservación de la naturaleza financiada mediante producción agroecológica. Apicultura, ganadería extensiva, olivar y seguimiento científico.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const indicadores = [
  { value: "2", label: "Revegetaciones de bosque de ribera" },
  { value: "10", label: "Cajas nido instaladas" },
  { value: "2", label: "Refugios para murciélagos" },
  { value: "2", label: "Charcas temporales mediterráneas" },
];

const bloques = [
  {
    eyebrow: "Conservación",
    title: "Proteger los procesos naturales",
    text: "Vigilancia, prevención y gestión activa de hábitats prioritarios.",
    to: "/conservacion",
  },
  {
    eyebrow: "Biodiversidad",
    title: "Una base de datos viva",
    text: "Fichas de fauna y flora documentadas mediante seguimiento científico.",
    to: "/biodiversidad",
  },
  {
    eyebrow: "Restauración ecológica",
    title: "Revegetaciones, charcas, humedales",
    text: "Recuperación de bosques de ribera y creación de hábitats.",
    to: "/conservacion",
  },
  {
    eyebrow: "Recursos genéticos autóctonos",
    title: "Abeja Ibérica · Merina Negra · Avileña",
    text: "Conservación de razas y poblaciones locales adaptadas.",
    to: "/recursos-geneticos",
  },
  {
    eyebrow: "Diario de campo",
    title: "Cuaderno abierto de observaciones",
    text: "Publicaciones sobre fauna, flora, fenología y fototrampeo.",
    to: "/diario",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[88vh] overflow-hidden border-b border-border">
        <img
          src={hero}
          alt="Paisaje de dehesa con encinas y el río Alagón al amanecer"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.02_120/0.35)] via-[oklch(0.18_0.02_120/0.25)] to-[oklch(0.18_0.02_120/0.85)]" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
          <div className="eyebrow text-[oklch(0.92_0.05_85)]">
            <span className="inline-block h-px w-7 bg-[oklch(0.82_0.12_80)] align-middle mr-3" />
            Valle del Alagón · Extremadura
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] text-[oklch(0.98_0.01_85)] md:text-7xl lg:text-[5.5rem]">
            Reserva Natural<br />
            <span className="italic text-[oklch(0.88_0.07_80)]">Ribera de los Majuelos</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[oklch(0.93_0.01_85)] md:text-xl">
            Conservación de la naturaleza financiada mediante producción agroecológica.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/la-reserva"
              className="rounded-sm border border-[oklch(0.95_0.02_85)] bg-[oklch(0.98_0.01_85)] px-6 py-3 text-sm font-medium text-encina transition hover:bg-transparent hover:text-[oklch(0.98_0.01_85)]"
            >
              Conocer la reserva
            </Link>
            <Link
              to="/carta-fundacional"
              className="rounded-sm border border-[oklch(0.95_0.02_85/0.5)] px-6 py-3 text-sm font-medium text-[oklch(0.98_0.01_85)] transition hover:bg-[oklch(0.98_0.01_85/0.1)]"
            >
              Carta fundacional
            </Link>
          </div>
        </div>
      </section>

      {/* Indicadores */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <div className="eyebrow rule-gold">Actuaciones realizadas</div>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {indicadores.map((i) => (
              <div key={i.label} className="border-l border-dorado/60 pl-4">
                <div className="font-display text-5xl text-encina md:text-6xl">{i.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {i.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/actuaciones" className="text-sm font-medium text-encina underline-offset-4 hover:underline">
              Ver línea temporal completa →
            </Link>
          </div>
        </div>
      </section>

      {/* Manifiesto */}
      <section className="mx-auto max-w-5xl px-6 py-28 lg:px-10">
        <div className="eyebrow rule-gold">Filosofía</div>
        <p className="mt-8 font-display text-3xl leading-snug text-encina md:text-4xl">
          Una iniciativa privada cuya finalidad última es entregar un territorio
          ecológicamente más rico, funcional y resiliente que el recibido.
        </p>
        <div className="mt-10 grid gap-10 text-foreground/80 md:grid-cols-2">
          <p>
            La <strong className="text-encina">conservación</strong> es el objetivo principal de la
            reserva. Las actividades productivas —apicultura, ganadería extensiva y producción de
            aceite de oliva virgen extra— son herramientas para financiarla.
          </p>
          <p>
            La reserva integra conservación de ecosistemas, restauración ecológica, seguimiento
            científico y conservación de <strong className="text-encina">recursos genéticos
            autóctonos</strong>, en un modelo económicamente sostenible a largo plazo.
          </p>
        </div>
      </section>

      {/* Bloques destacados */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="eyebrow rule-gold">Áreas de trabajo</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-encina md:text-4xl">
            Conservación, restauración y conocimiento
          </h2>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {bloques.map((b) => (
              <Link
                key={b.title}
                to={b.to}
                className="group bg-background p-8 transition hover:bg-card"
              >
                <div className="eyebrow">{b.eyebrow}</div>
                <h3 className="mt-4 font-display text-2xl text-encina">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                <div className="mt-6 text-xs font-medium uppercase tracking-widest text-dorado">
                  Conocer más →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso económico */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="eyebrow rule-gold">Compromiso económico</div>
            <h2 className="mt-4 font-display text-3xl text-encina md:text-5xl">
              El 100 % del beneficio neto de la apicultura se reinvierte en la reserva.
            </h2>
            <p className="mt-8 text-foreground/80">
              Un modelo de financiación transparente: la conservación no depende de
              subvenciones, sino de la propia actividad productiva. El resto de
              actividades aporta un compromiso mínimo del 10 % del beneficio neto anual.
            </p>
            <Link to="/transparencia" className="mt-10 inline-block text-sm font-medium text-encina underline-offset-4 hover:underline">
              Ver modelo de transparencia →
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { p: "50 %", t: "Adquisición y ampliación de terrenos", d: "Compra de fincas colindantes, conectividad ecológica y consolidación territorial." },
              { p: "25 %", t: "Restauración ecológica", d: "Bosques de ribera, humedales, revegetaciones y recuperación de hábitats." },
              { p: "25 %", t: "Conservación activa de biodiversidad", d: "Cajas nido, refugios, charcas, fototrampeo e inventarios." },
            ].map((b) => (
              <div key={b.t} className="flex gap-6 border-l-2 border-dorado bg-card p-6">
                <div className="font-display text-4xl text-encina">{b.p}</div>
                <div>
                  <div className="font-medium text-encina">{b.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{b.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagen galería */}
      <section className="grid gap-px bg-border md:grid-cols-3">
        {[
          { src: bosque, t: "Bosques de ribera", to: "/conservacion" },
          { src: charca, t: "Charcas temporales mediterráneas", to: "/conservacion" },
          { src: abeja, t: "Abeja ibérica", to: "/recursos-geneticos" },
        ].map((i) => (
          <Link key={i.t} to={i.to} className="group relative block aspect-[4/5] overflow-hidden bg-background">
            <img src={i.src} alt={i.t} width={1024} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.02_120/0.85)] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="eyebrow text-[oklch(0.85_0.1_80)]">Explorar</div>
              <div className="mt-2 font-display text-2xl text-[oklch(0.98_0.01_85)]">{i.t}</div>
            </div>
          </Link>
        ))}
      </section>

      {/* Zahra teaser */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-10">
        <div className="eyebrow rule-gold mx-auto inline-block">Marca comercial vinculada</div>
        <h2 className="mt-6 font-display text-4xl text-encina md:text-5xl italic">
          Zahra del Alagón
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
          Los productos agroecológicos de Zahra del Alagón —miel, carne y aceite de oliva
          virgen extra— contribuyen a financiar las actuaciones desarrolladas dentro de la
          Reserva Natural Ribera de los Majuelos.
        </p>
        <Link to="/zahra-del-alagon" className="mt-8 inline-block text-sm font-medium text-encina underline-offset-4 hover:underline">
          Conocer la relación →
        </Link>
      </section>
    </>
  );
}
