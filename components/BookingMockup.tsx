const cards = [
  {
    dot: "#145aff",
    status: "Nouveau",
    title: "Nouveau rendez-vous",
    meta: "Mme Dupont · Demain 9h00",
  },
  {
    dot: "#ffa64d",
    status: "En attente",
    title: "Appel manqué récupéré",
    meta: "M. Martin · Devis salle de bain",
  },
  {
    dot: "#16ca2e",
    status: "Confirmé",
    title: "Rendez-vous confirmé",
    meta: "M. Peeters · Jeudi 14h30",
  },
];

export default function BookingMockup() {
  return (
    <div
      role="img"
      aria-label="Interface de prise de rendez-vous : une carte Nouveau rendez-vous, une carte Appel manqué récupéré et une carte rendez-vous confirmé"
      className="rounded-2xl border border-stone-divider bg-white p-4 shadow-card sm:p-5"
    >
      <div className="flex items-center justify-between px-1 pb-3">
        <span className="text-sm font-semibold text-graphite-body">Agenda</span>
        <span className="rounded-full bg-royal-signal px-3 py-1 text-xs font-medium text-white">
          + Nouveau
        </span>
      </div>
      <div className="space-y-2">
        {cards.map((c) => (
          <div
            key={c.title}
            className="flex items-start gap-3 rounded-lg border border-stone-divider bg-white p-3.5 shadow-sm"
          >
            <span
              className="mt-1 h-[5px] w-[5px] shrink-0 rounded-full"
              style={{ backgroundColor: c.dot }}
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-semibold text-graphite-body">
                {c.title}
              </span>
              <p className="mt-0.5 text-xs text-ash-helper">{c.meta}</p>
            </div>
            <span
              className="shrink-0 rounded-full bg-fog-surface px-2 py-0.5 text-[11px] font-medium"
              style={{ color: c.dot }}
            >
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
