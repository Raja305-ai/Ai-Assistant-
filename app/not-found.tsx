import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <p className="font-mono text-xs text-slate">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-ink">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-sm text-slate">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 rounded-sm bg-charcoal px-6 py-3 text-sm font-medium text-paper hover:bg-charcoal2"
      >
        Back to home
      </Link>
    </main>
  );
}
