import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";

export const Route = createFileRoute("/zahra-del-alagon")({
  head: () => ({
    meta: [
      { title: "Zahra del Alagón | Marca comercial vinculada a la Reserva" },
      { name: "description", content: "Zahra del Alagón es la marca comercial cuyos productos agroecológicos —miel, carne y aceite de oliva virgen extra— contribuyen a financiar la Reserva Natural Ribera de los Majuelos." },
      { property: "og:title", content: "Zahra del Alagón" },
      { property: "og:url", content: "/zahra-del-alagon" },
    ],
    links: [{ rel: "canonical", href: "/zahra-del-alagon" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Marca comercial vinculada"
        title="Zahra del Alagón"
        lead="Marca comercial independiente cuyos productos agroecológicos contribuyen a financiar las actuaciones desarrolladas dentro de la Reserva Natural Ribera de los Majuelos."
      />

      <Section eyebrow="La relación" title="Dos entidades, un mismo propósito">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="border-l-2 border-encina bg-card p-8">
            <div className="eyebrow">Reserva Natural</div>
            <h3 className="mt-3 font-display text-2xl text-encina">Ribera de los Majuelos</h3>
            <p className="mt-4 text-sm text-foreground/80">
              Proyecto de conservación a largo plazo. Define los objetivos ecológicos,
              ejecuta las actuaciones de restauración y conservación, y publica los
              resultados.
            </p>
          </div>
          <div className="border-l-2 border-dorado bg-card p-8">
            <div className="eyebrow">Marca comercial</div>
            <h3 className="mt-3 font-display text-2xl italic text-encina">Zahra del Alagón</h3>
            <p className="mt-4 text-sm text-foreground/80">
              Comercializa los productos agroecológicos —miel, carne, aceite de oliva
              virgen extra y otros— generados por el manejo de la reserva. Sus
              beneficios contribuyen a la financiación del proyecto de conservación.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Productos" title="Lo que produce el territorio">
        <ul className="grid gap-px bg-border md:grid-cols-3">
          {["Miel", "Carne", "Aceite de oliva virgen extra", "Otros productos agroecológicos"].map((p) => (
            <li key={p} className="bg-background p-8 font-display text-xl text-encina">{p}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Modelo" title="De la venta a la conservación">
        <p className="max-w-3xl text-foreground/80">
          La compra de cualquier producto Zahra del Alagón participa en el modelo de
          financiación de la reserva. Los porcentajes exactos de reinversión se
          describen en{" "}
          <Link to="/transparencia" className="text-encina underline-offset-4 hover:underline">Transparencia</Link>.
        </p>
      </Section>
    </>
  );
}
