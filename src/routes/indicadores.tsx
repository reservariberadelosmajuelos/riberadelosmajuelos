import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageHero, Section } from "@/components/PageHero";

export const Route = createFileRoute("/indicadores")({
  head: () => ({
    meta: [
      { title: "Indicadores y datos | Ribera de los Majuelos" },
      {
        name: "description",
        content:
          "Panel interactivo con gráficos de especies inventariadas, actuaciones de conservación, charcas restauradas y registros de fototrampeo. Filtros por año y categoría.",
      },
      { property: "og:title", content: "Indicadores y datos" },
      { property: "og:url", content: "/indicadores" },
    ],
    links: [{ rel: "canonical", href: "/indicadores" }],
  }),
  component: Page,
});

// ---------- Datos base (placeholder editorial; se actualizarán con datos reales) ----------

type Year = 2021 | 2022 | 2023 | 2024 | 2025;
const YEARS: Year[] = [2021, 2022, 2023, 2024, 2025];

const SPECIES_CATEGORIES = [
  "Mamíferos",
  "Aves",
  "Reptiles",
  "Anfibios",
  "Invertebrados",
  "Flora",
] as const;
type SpeciesCat = (typeof SPECIES_CATEGORIES)[number];

const speciesData: Record<Year, Record<SpeciesCat, number>> = {
  2021: { Mamíferos: 14, Aves: 78, Reptiles: 9, Anfibios: 5, Invertebrados: 42, Flora: 120 },
  2022: { Mamíferos: 16, Aves: 92, Reptiles: 11, Anfibios: 6, Invertebrados: 58, Flora: 138 },
  2023: { Mamíferos: 18, Aves: 104, Reptiles: 12, Anfibios: 7, Invertebrados: 71, Flora: 156 },
  2024: { Mamíferos: 21, Aves: 118, Reptiles: 13, Anfibios: 8, Invertebrados: 89, Flora: 174 },
  2025: { Mamíferos: 23, Aves: 127, Reptiles: 14, Anfibios: 9, Invertebrados: 102, Flora: 188 },
};

const ACTUACION_CATS = [
  "Restauración ribera",
  "Charcas",
  "Cajas nido",
  "Refugios fauna",
  "Setos y linderos",
] as const;
type ActCat = (typeof ACTUACION_CATS)[number];

const actuacionesData: { year: Year; cat: ActCat; n: number }[] = [
  { year: 2021, cat: "Restauración ribera", n: 2 },
  { year: 2021, cat: "Charcas", n: 1 },
  { year: 2021, cat: "Cajas nido", n: 20 },
  { year: 2021, cat: "Refugios fauna", n: 4 },
  { year: 2021, cat: "Setos y linderos", n: 3 },
  { year: 2022, cat: "Restauración ribera", n: 3 },
  { year: 2022, cat: "Charcas", n: 2 },
  { year: 2022, cat: "Cajas nido", n: 35 },
  { year: 2022, cat: "Refugios fauna", n: 6 },
  { year: 2022, cat: "Setos y linderos", n: 5 },
  { year: 2023, cat: "Restauración ribera", n: 4 },
  { year: 2023, cat: "Charcas", n: 3 },
  { year: 2023, cat: "Cajas nido", n: 48 },
  { year: 2023, cat: "Refugios fauna", n: 9 },
  { year: 2023, cat: "Setos y linderos", n: 7 },
  { year: 2024, cat: "Restauración ribera", n: 5 },
  { year: 2024, cat: "Charcas", n: 4 },
  { year: 2024, cat: "Cajas nido", n: 62 },
  { year: 2024, cat: "Refugios fauna", n: 12 },
  { year: 2024, cat: "Setos y linderos", n: 10 },
  { year: 2025, cat: "Restauración ribera", n: 6 },
  { year: 2025, cat: "Charcas", n: 5 },
  { year: 2025, cat: "Cajas nido", n: 78 },
  { year: 2025, cat: "Refugios fauna", n: 15 },
  { year: 2025, cat: "Setos y linderos", n: 13 },
];

const charcasData: { year: Year; activas: number; hidroperiodoMedio: number }[] = [
  { year: 2021, activas: 3, hidroperiodoMedio: 4.2 },
  { year: 2022, activas: 5, hidroperiodoMedio: 4.8 },
  { year: 2023, activas: 8, hidroperiodoMedio: 5.4 },
  { year: 2024, activas: 12, hidroperiodoMedio: 6.1 },
  { year: 2025, activas: 17, hidroperiodoMedio: 6.5 },
];

const FOTOTRAMPEO_ESPECIES = [
  "Zorro",
  "Jabalí",
  "Tejón",
  "Gineta",
  "Gato montés",
  "Meloncillo",
  "Ciervo",
  "Garduña",
] as const;
type FotoEsp = (typeof FOTOTRAMPEO_ESPECIES)[number];

const fototrampeoData: Record<Year, Record<FotoEsp, number>> = {
  2021: { Zorro: 142, Jabalí: 98, Tejón: 31, Gineta: 22, "Gato montés": 4, Meloncillo: 11, Ciervo: 0, Garduña: 9 },
  2022: { Zorro: 178, Jabalí: 121, Tejón: 44, Gineta: 35, "Gato montés": 6, Meloncillo: 18, Ciervo: 2, Garduña: 14 },
  2023: { Zorro: 203, Jabalí: 145, Tejón: 58, Gineta: 47, "Gato montés": 9, Meloncillo: 27, Ciervo: 5, Garduña: 19 },
  2024: { Zorro: 231, Jabalí: 162, Tejón: 71, Gineta: 62, "Gato montés": 12, Meloncillo: 38, Ciervo: 11, Garduña: 24 },
  2025: { Zorro: 254, Jabalí: 178, Tejón: 84, Gineta: 73, "Gato montés": 16, Meloncillo: 49, Ciervo: 18, Garduña: 29 },
};

// Paleta tonal coherente con el sistema de diseño (encina/ribera/tierra/dorado/piedra)
const PALETTE = [
  "oklch(0.42 0.06 145)",
  "oklch(0.55 0.08 200)",
  "oklch(0.58 0.10 60)",
  "oklch(0.72 0.12 85)",
  "oklch(0.48 0.05 30)",
  "oklch(0.65 0.07 165)",
  "oklch(0.38 0.04 250)",
  "oklch(0.62 0.09 110)",
];

// ---------- Componentes ----------

function StatCard({
  label,
  value,
  unit,
  hint,
}: {
  label: string;
  value: string | number;
  unit?: string;
  hint?: string;
}) {
  return (
    <div className="bg-background p-6">
      <div className="eyebrow">{label}</div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-4xl text-encina">{value}</span>
        {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
      </div>
      {hint && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function FilterBar({
  year,
  setYear,
  category,
  setCategory,
  categories,
  categoryLabel = "Categoría",
}: {
  year: Year | "all";
  setYear: (y: Year | "all") => void;
  category?: string;
  setCategory?: (c: string) => void;
  categories?: readonly string[];
  categoryLabel?: string;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end gap-6 border-b border-border pb-4">
      <div>
        <div className="eyebrow mb-2">Año</div>
        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => setYear("all")}
            className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
              year === "all"
                ? "bg-encina text-background border-encina"
                : "border-border text-foreground/80 hover:border-encina hover:text-encina"
            }`}
          >
            Todos
          </button>
          {YEARS.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
                year === y
                  ? "bg-encina text-background border-encina"
                  : "border-border text-foreground/80 hover:border-encina hover:text-encina"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>
      {categories && setCategory && (
        <div>
          <div className="eyebrow mb-2">{categoryLabel}</div>
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => setCategory("all")}
              className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
                category === "all"
                  ? "bg-ribera text-background border-ribera"
                  : "border-border text-foreground/80 hover:border-ribera hover:text-ribera"
              }`}
            >
              Todas
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
                  category === c
                    ? "bg-ribera text-background border-ribera"
                    : "border-border text-foreground/80 hover:border-ribera hover:text-ribera"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const tooltipStyle = {
  backgroundColor: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: 4,
  fontSize: 12,
};

// ---------- Bloques ----------

function EspeciesBlock() {
  const [year, setYear] = useState<Year | "all">("all");
  const [cat, setCat] = useState<string>("all");

  const chartData = useMemo(() => {
    return YEARS.map((y) => {
      const row: Record<string, number | string> = { year: y };
      SPECIES_CATEGORIES.forEach((c) => (row[c] = speciesData[y][c]));
      return row;
    });
  }, []);

  const filtered = useMemo(() => {
    return chartData.filter((r) => year === "all" || r.year === year);
  }, [chartData, year]);

  const totalAcumulado = useMemo(() => {
    const y = year === "all" ? 2025 : year;
    return SPECIES_CATEGORIES.reduce(
      (s, c) => s + (cat === "all" || cat === c ? speciesData[y][c] : 0),
      0,
    );
  }, [year, cat]);

  const cats = cat === "all" ? SPECIES_CATEGORIES : (SPECIES_CATEGORIES.filter((c) => c === cat) as readonly SpeciesCat[]);

  return (
    <div>
      <FilterBar
        year={year}
        setYear={setYear}
        category={cat}
        setCategory={setCat}
        categories={SPECIES_CATEGORIES}
        categoryLabel="Grupo taxonómico"
      />
      <div className="mb-6 grid gap-px bg-border md:grid-cols-3">
        <StatCard
          label="Especies catalogadas"
          value={totalAcumulado}
          unit={year === "all" ? "(2025)" : `(${year})`}
          hint={cat === "all" ? "Suma de todos los grupos" : cat}
        />
        <StatCard
          label="Grupos taxonómicos"
          value={SPECIES_CATEGORIES.length}
          hint="Mamíferos, aves, reptiles, anfibios, invertebrados, flora"
        />
        <StatCard
          label="Incremento 2021 → 2025"
          value={`+${Math.round(
            ((SPECIES_CATEGORIES.reduce((s, c) => s + speciesData[2025][c], 0) -
              SPECIES_CATEGORIES.reduce((s, c) => s + speciesData[2021][c], 0)) /
              SPECIES_CATEGORIES.reduce((s, c) => s + speciesData[2021][c], 0)) *
              100,
          )}%`}
          hint="Sobre el inventario total"
        />
      </div>

      <div className="h-80 w-full border border-border bg-card p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={filtered}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="year" stroke="var(--muted-foreground)" fontSize={12} />
            <YAxis stroke="var(--muted-foreground)" fontSize={12} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            {cats.map((c, i) => (
              <Bar key={c} dataKey={c} stackId="a" fill={PALETTE[i % PALETTE.length]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ActuacionesBlock() {
  const [year, setYear] = useState<Year | "all">("all");
  const [cat, setCat] = useState<string>("all");

  const filtered = useMemo(
    () =>
      actuacionesData.filter(
        (r) => (year === "all" || r.year === year) && (cat === "all" || r.cat === cat),
      ),
    [year, cat],
  );

  const porAnio = useMemo(() => {
    return YEARS.map((y) => ({
      year: y,
      n: filtered.filter((r) => r.year === y).reduce((s, r) => s + r.n, 0),
    }));
  }, [filtered]);

  const porCategoria = useMemo(() => {
    return ACTUACION_CATS.map((c) => ({
      name: c,
      value: filtered.filter((r) => r.cat === c).reduce((s, r) => s + r.n, 0),
    })).filter((d) => d.value > 0);
  }, [filtered]);

  const total = filtered.reduce((s, r) => s + r.n, 0);

  return (
    <div>
      <FilterBar
        year={year}
        setYear={setYear}
        category={cat}
        setCategory={setCat}
        categories={ACTUACION_CATS}
        categoryLabel="Tipo de actuación"
      />
      <div className="mb-6 grid gap-px bg-border md:grid-cols-3">
        <StatCard label="Actuaciones (filtro actual)" value={total} hint="Unidades acumuladas" />
        <StatCard
          label="Cajas nido instaladas"
          value={actuacionesData
            .filter((r) => r.cat === "Cajas nido" && (year === "all" || r.year === year))
            .reduce((s, r) => s + r.n, 0)}
          hint="Acumulado en el periodo"
        />
        <StatCard
          label="Tipos de intervención"
          value={porCategoria.length}
          hint="Categorías activas en el filtro"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 h-80 border border-border bg-card p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={porAnio}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="year" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="n" fill="oklch(0.42 0.06 145)" name="Actuaciones" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="lg:col-span-2 h-80 border border-border bg-card p-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={porCategoria}
                dataKey="value"
                nameKey="name"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={2}
              >
                {porCategoria.map((_, i) => (
                  <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function CharcasBlock() {
  const [year, setYear] = useState<Year | "all">("all");

  const filtered = useMemo(
    () => charcasData.filter((r) => year === "all" || r.year === year),
    [year],
  );

  const ultima = charcasData[charcasData.length - 1];

  return (
    <div>
      <FilterBar year={year} setYear={setYear} />
      <div className="mb-6 grid gap-px bg-border md:grid-cols-3">
        <StatCard label="Charcas activas" value={ultima.activas} unit="(2025)" />
        <StatCard
          label="Hidroperiodo medio"
          value={ultima.hidroperiodoMedio.toFixed(1)}
          unit="meses"
          hint="Duración media de la lámina de agua"
        />
        <StatCard
          label="Incremento 2021 → 2025"
          value={`+${ultima.activas - charcasData[0].activas}`}
          unit="charcas"
        />
      </div>
      <div className="h-80 w-full border border-border bg-card p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filtered}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="year" stroke="var(--muted-foreground)" fontSize={12} />
            <YAxis yAxisId="left" stroke="var(--muted-foreground)" fontSize={12} />
            <YAxis yAxisId="right" orientation="right" stroke="var(--muted-foreground)" fontSize={12} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="activas"
              stroke="oklch(0.55 0.08 200)"
              strokeWidth={2}
              name="Charcas activas"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="hidroperiodoMedio"
              stroke="oklch(0.72 0.12 85)"
              strokeWidth={2}
              name="Hidroperiodo (meses)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function FototrampeoBlock() {
  const [year, setYear] = useState<Year | "all">(2025);
  const [esp, setEsp] = useState<string>("all");

  const chartData = useMemo(() => {
    if (year === "all") {
      return FOTOTRAMPEO_ESPECIES.filter((e) => esp === "all" || esp === e).map((e) => ({
        especie: e,
        registros: YEARS.reduce((s, y) => s + fototrampeoData[y][e], 0),
      }));
    }
    return FOTOTRAMPEO_ESPECIES.filter((e) => esp === "all" || esp === e).map((e) => ({
      especie: e,
      registros: fototrampeoData[year][e],
    }));
  }, [year, esp]);

  const tendencia = useMemo(() => {
    return YEARS.map((y) => {
      const row: Record<string, number | string> = { year: y };
      (esp === "all" ? FOTOTRAMPEO_ESPECIES : [esp as FotoEsp]).forEach(
        (e) => (row[e] = fototrampeoData[y][e]),
      );
      return row;
    });
  }, [esp]);

  const total = chartData.reduce((s, d) => s + d.registros, 0);
  const top = [...chartData].sort((a, b) => b.registros - a.registros)[0];

  return (
    <div>
      <FilterBar
        year={year}
        setYear={setYear}
        category={esp}
        setCategory={setEsp}
        categories={FOTOTRAMPEO_ESPECIES}
        categoryLabel="Especie"
      />
      <div className="mb-6 grid gap-px bg-border md:grid-cols-3">
        <StatCard
          label="Registros (filtro actual)"
          value={total.toLocaleString("es-ES")}
          hint="Eventos de fototrampeo"
        />
        <StatCard label="Especie más detectada" value={top?.especie ?? "—"} hint={`${top?.registros ?? 0} registros`} />
        <StatCard
          label="Especies monitorizadas"
          value={FOTOTRAMPEO_ESPECIES.length}
          hint="Mamíferos objetivo del programa"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-80 border border-border bg-card p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis type="number" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis type="category" dataKey="especie" stroke="var(--muted-foreground)" fontSize={12} width={90} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="registros" fill="oklch(0.48 0.05 30)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-80 border border-border bg-card p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={tendencia}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="year" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              {(esp === "all" ? FOTOTRAMPEO_ESPECIES : [esp as FotoEsp]).map((e, i) => (
                <Line
                  key={e}
                  type="monotone"
                  dataKey={e}
                  stroke={PALETTE[i % PALETTE.length]}
                  strokeWidth={1.8}
                  dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// ---------- Página ----------

const TABS = [
  { id: "especies", label: "Especies" },
  { id: "actuaciones", label: "Actuaciones" },
  { id: "charcas", label: "Charcas" },
  { id: "fototrampeo", label: "Fototrampeo" },
] as const;

function Page() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("especies");

  return (
    <>
      <PageHero
        eyebrow="Indicadores y datos"
        title="Panel de seguimiento de la reserva"
        lead="Visualización interactiva de los principales indicadores ecológicos y de gestión. Filtre por año y categoría para explorar la evolución del inventario de especies, las actuaciones de conservación, la red de charcas y los registros de fototrampeo."
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-1 border-b border-border">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative px-5 py-3 text-sm font-medium transition-colors ${
                tab === t.id
                  ? "text-encina"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
              {tab === t.id && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-encina" />
              )}
            </button>
          ))}
        </div>

        {tab === "especies" && <EspeciesBlock />}
        {tab === "actuaciones" && <ActuacionesBlock />}
        {tab === "charcas" && <CharcasBlock />}
        {tab === "fototrampeo" && <FototrampeoBlock />}

        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          Datos en revisión continua. Las cifras se actualizan con cada memoria
          anual y con la validación de los inventarios de campo. Las series
          mostradas tienen carácter indicativo hasta la próxima publicación
          oficial de resultados.
        </p>
      </Section>
    </>
  );
}
