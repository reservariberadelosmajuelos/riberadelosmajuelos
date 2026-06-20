import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-[oklch(0.18_0.02_120)] text-[oklch(0.92_0.008_85)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="font-display text-2xl leading-tight">
            Reserva Natural<br />
            <span className="text-[oklch(0.75_0.1_80)]">Ribera de los Majuelos</span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[oklch(0.78_0.01_85)]">
            Iniciativa privada de conservación, restauración ecológica y producción
            agroecológica en el Valle del Alagón, Extremadura. Un compromiso a largo
            plazo con la biodiversidad y los procesos naturales.
          </p>
        </div>

        <div>
          <div className="eyebrow text-[oklch(0.75_0.1_80)]">Navegar</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/la-reserva" className="hover:text-[oklch(0.75_0.1_80)]">La Reserva</Link></li>
            <li><Link to="/conservacion" className="hover:text-[oklch(0.75_0.1_80)]">Conservación</Link></li>
            <li><Link to="/biodiversidad" className="hover:text-[oklch(0.75_0.1_80)]">Biodiversidad</Link></li>
            <li><Link to="/transparencia" className="hover:text-[oklch(0.75_0.1_80)]">Transparencia</Link></li>
            <li><Link to="/memorias" className="hover:text-[oklch(0.75_0.1_80)]">Memorias anuales</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-[oklch(0.75_0.1_80)]">Documentos</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/carta-fundacional" className="hover:text-[oklch(0.75_0.1_80)]">Carta Fundacional</Link></li>
            <li><Link to="/actuaciones" className="hover:text-[oklch(0.75_0.1_80)]">Actuaciones realizadas</Link></li>
            <li><Link to="/investigacion" className="hover:text-[oklch(0.75_0.1_80)]">Investigación</Link></li>
            <li><Link to="/zahra-del-alagon" className="hover:text-[oklch(0.75_0.1_80)]">Zahra del Alagón</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-[oklch(0.72_0.01_85)] lg:flex-row lg:items-center lg:px-10">
          <div>© {new Date().getFullYear()} Reserva Natural Ribera de los Majuelos · Valle del Alagón, Extremadura</div>
          <div>Conservación financiada mediante producción agroecológica.</div>
        </div>
      </div>
    </footer>
  );
}
