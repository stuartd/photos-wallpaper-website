import { Download, Terminal } from "lucide-react";
import { FeatureGrid } from "../components/FeatureGrid";
import { HeroPreview } from "../components/HeroPreview";
import { appFeatures, privacyPoints, timeline } from "../content/site";

export function AboutAppPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">macOS menu bar app</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Photos Wallpaper
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
              Photos Wallpaper is a macOS menu bar app that rotates your desktop wallpaper using images from your own
              Photos library, with multiple different schedules available. It supports multiple displays, and keeps the
              data flow on your Mac.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#setup"
                className="inline-flex items-center gap-2 rounded-md bg-pine px-5 py-3 text-sm font-semibold text-paper transition hover:bg-fern"
              >
                <Download size={18} aria-hidden />
                Setup Notes
              </a>
              <a
                href="#privacy"
                className="inline-flex items-center gap-2 rounded-md border border-ink/15 px-5 py-3 text-sm font-semibold transition hover:bg-white"
              >
                <Terminal size={18} aria-hidden />
                Privacy Model
              </a>
            </div>
          </div>
          <HeroPreview />
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-display text-4xl">What it does</h2>
            <p className="mt-3 leading-7 text-ink/70">
              The app bridges Photos, AppKit screens, and macOS wallpaper APIs into a simple refresh
              workflow.
            </p>
          </div>
          <FeatureGrid features={appFeatures} />
        </div>
      </section>

      <section id="privacy" className="scroll-mt-24 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl">Privacy posture</h2>
            <p className="mt-4 leading-7 text-ink/70">
              Photos Wallpaper has no database, backend,
              account layer, analytics, or advertising integration.
            </p>
          </div>
          <FeatureGrid features={privacyPoints} />
        </div>
      </section>

      <section id="setup" className="scroll-mt-24 bg-pine py-14 text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-4xl">Typical flow</h2>
            <p className="mt-4 leading-7 text-paper/72">
              The production app is a native macOS utility. This starter website is will grow to include 
              release notes, screenshots, and download pages.
            </p>
          </div>
          <ol className="grid gap-3">
            {timeline.map((item, index) => (
              <li key={item} className="flex items-center gap-4 rounded-md border border-white/15 bg-white/10 p-4">
                <span className="grid size-9 shrink-0 place-items-center rounded bg-sun font-semibold text-ink">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
