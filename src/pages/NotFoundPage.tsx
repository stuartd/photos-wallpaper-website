import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">404</p>
      <h1 className="mt-4 font-display text-5xl">Page not found</h1>
      <p className="mt-4 leading-7 text-ink/70">That page was not found.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-md bg-pine px-5 py-3 text-sm font-semibold text-paper transition hover:bg-fern"
      >
        Back to Photos Wallpaper
      </Link>
    </section>
  );
}
