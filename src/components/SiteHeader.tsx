import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const groups: { label: string; items: { to: string; label: string }[] }[] = [
  {
    label: "La Reserva",
    items: [
      { to: "/la-reserva", label: "La Reserva" },
      { to: "/carta-fundacional", label: "Carta Fundacional" },
      { to: "/patrimonio", label: "Patrimonio cultural" },
    ],
  },
  {
    label: "Conservación",
    items: [
      { to: "/conservacion", label: "Conservación" },
      { to: "/biodiversidad", label: "Biodiversidad" },
      { to: "/recursos-geneticos", label: "Recursos genéticos" },
      { to: "/actuaciones", label: "Actuaciones realizadas" },
    ],
  },
  {
    label: "Actividades",
    items: [
      { to: "/apicultura", label: "Apicultura" },
      { to: "/ganaderia", label: "Ganadería extensiva" },
      { to: "/olivar", label: "Olivar y paisaje agrario" },
    ],
  },
  {
    label: "Divulgación",
    items: [
      { to: "/diario", label: "Diario de campo" },
      { to: "/galeria", label: "Galería" },
      { to: "/videoteca", label: "Videoteca" },
      { to: "/investigacion", label: "Investigación" },
      { to: "/memorias", label: "Memorias anuales" },
    ],
  },
  {
    label: "Modelo",
    items: [
      { to: "/transparencia", label: "Transparencia" },
      { to: "/zahra-del-alagon", label: "Zahra del Alagón" },
    ],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="inline-block h-9 w-9 rounded-full border border-encina/70" aria-hidden>
            <span className="block h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--dorado),var(--encina)_70%)]" />
          </span>
          <span className="font-display text-lg leading-tight tracking-tight text-encina">
            Reserva Natural
            <span className="block text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Ribera de los Majuelos
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {groups.map((g) => (
            <div key={g.label} className="group relative">
              <button className="text-sm font-medium text-foreground/85 hover:text-encina transition-colors">
                {g.label}
              </button>
              <div className="invisible absolute left-1/2 top-full z-40 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="rounded-md border border-border bg-card p-2 shadow-[var(--shadow-soft)]">
                  {g.items.map((i) => (
                    <Link
                      key={i.to}
                      to={i.to}
                      className="block rounded px-3 py-2 text-sm text-foreground/85 hover:bg-secondary hover:text-encina"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <button
          className="lg:hidden text-encina"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl space-y-4 px-6 py-6">
            {groups.map((g) => (
              <div key={g.label}>
                <div className="eyebrow mb-2">{g.label}</div>
                <div className="grid grid-cols-2 gap-1">
                  {g.items.map((i) => (
                    <Link
                      key={i.to}
                      to={i.to}
                      onClick={() => setOpen(false)}
                      className="rounded px-2 py-1.5 text-sm text-foreground/85 hover:bg-secondary"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
