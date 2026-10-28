// Provisional page: validates the brand theme until add-home-page replaces it.
const swatches = [
  { name: "Primario", className: "bg-primary text-primary-foreground" },
  { name: "Primario oscuro", className: "bg-primary-dark text-primary-foreground" },
  { name: "Acento", className: "bg-sky-accent text-navy" },
  { name: "Salud", className: "bg-health-strong text-white" },
  { name: "Urgencias", className: "bg-emergency-strong text-white" },
  { name: "Navy", className: "bg-navy text-white" },
  { name: "Superficie", className: "bg-surface text-foreground" },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-16 sm:px-6">
      <header className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">
          Fe, Amor y Servicio
        </p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">Clínica La Esperanza</h1>
        <p className="max-w-2xl text-lg text-muted">
          Nuevo sitio en construcción. Atención médica integral con calidad, calidez y confianza en
          Montería, Córdoba.
        </p>
      </header>

      <section aria-labelledby="palette-title" className="flex flex-col gap-4">
        <h2 id="palette-title" className="text-2xl font-bold">
          Paleta de marca
        </h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {swatches.map((swatch) => (
            <li
              key={swatch.name}
              className={`flex h-24 items-end rounded-card p-4 font-semibold shadow-card ${swatch.className}`}
            >
              {swatch.name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
