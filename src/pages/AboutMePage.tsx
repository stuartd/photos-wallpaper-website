import { Code2, Hammer, Mail, MapPin } from "lucide-react";
import { stuartHighlights } from "../content/site";

export function AboutMePage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sun">about the maker</p>
            <h1 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">Stuart</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/72">
              I make small, practical Mac utilities with a bias toward local-first behavior, plain
              files, and interfaces that stay out of the way.
            </p>
          </div>
          <div className="grid content-center gap-4">
            {stuartHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-lg border border-white/[0.12] bg-white/[0.08] p-5 text-paper/[0.82]"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-3">
          <article className="rounded-lg border border-ink/10 bg-white/70 p-6">
            <Code2 className="text-pine" aria-hidden />
            <h2 className="mt-5 text-xl font-semibold">Software style</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Native when native matters, web when web moves faster, and no backend when a local app
              can do the job cleanly.
            </p>
          </article>
          <article className="rounded-lg border border-ink/10 bg-white/70 p-6">
            <Hammer className="text-pine" aria-hidden />
            <h2 className="mt-5 text-xl font-semibold">Current focus</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Photos Wallpaper: a menu bar app that makes the desktop feel personal without making
              privacy complicated.
            </p>
          </article>
          <article className="rounded-lg border border-ink/10 bg-white/70 p-6">
            <MapPin className="text-pine" aria-hidden />
            <h2 className="mt-5 text-xl font-semibold">Based in</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              The UK, building small tools that are easy to inspect, explain, and keep running.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white/45 py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl">Contact placeholder</h2>
            <p className="mt-3 max-w-2xl leading-7 text-ink/70">
              Add a real email, GitHub, Mastodon, or download link here when the public identity for
              the project is settled.
            </p>
          </div>
          <a
            href="mailto:hello@example.com"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-clay px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine"
          >
            <Mail size={18} aria-hidden />
            hello@example.com
          </a>
        </div>
      </section>
    </>
  );
}
