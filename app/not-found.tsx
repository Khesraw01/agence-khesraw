import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div className="text-center">
        <p className="text-sm font-medium text-royal-signal">Erreur 404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-midnight-ink md:text-6xl">
          Page introuvable
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-slate-caption">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-royal-signal px-8 py-3.5 text-[15px] font-medium text-royal-signal transition-colors hover:bg-lavender-wash"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
