import { Github, Mail, Send, Terminal } from "lucide-react";
import { FeatureGrid } from "../components/FeatureGrid";
import { HeroPreview } from "../components/HeroPreview";
import { appFeatures, privacyPoints, productStats, supportPoints } from "../content/site";

export function AboutAppPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pine">
              macOS menu bar app
            </p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.04] sm:text-6xl">
              Photos Wallpaper
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
              Photos Wallpaper brings your photo library back to the desktop.
              <br />
              <br />
              Revisit your memories as wallpaper across every display, with simple schedules.
              <br />
              <br />
              Everything stays on your Mac.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:testflight@photos-wallpaper.app?subject=Photos%20Wallpaper%20TestFlight"
                className="inline-flex items-center gap-2 rounded-md bg-pine px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:bg-fern"
              >
                <Send size={18} aria-hidden />
                Join the TestFlight
              </a>
              <a
                href="#privacy"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-panel px-5 py-3 text-sm font-semibold transition hover:bg-mist"
              >
                <Terminal size={18} aria-hidden />
                Privacy Model
              </a>
            </div>
            <dl className="mt-9 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
              {productStats.map((stat) => (
                <div key={stat.label} className="bg-panel p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/50">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <HeroPreview />
        </div>
      </section>

      <section className="border-y border-line bg-panel py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What it does</h2>
          </div>
          <FeatureGrid features={appFeatures} />
        </div>
      </section>

      <section id="privacy" className="scroll-mt-24 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Privacy model</h2>
            <p className="mt-4 leading-7 text-ink/70">
              Photos Wallpaper has no database, backend, account layer, analytics, or advertising.
              It's your photo library, now and always.
            </p>
          </div>
          <FeatureGrid features={privacyPoints} />
        </div>
      </section>

      <section id="support" className="scroll-mt-24 border-t border-line bg-panel py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Support</h2>
            <p className="mt-4 leading-7 text-ink/70">
              Need help with Photos Wallpaper? Email is best for general help or anything you would
              rather not post publicly. GitHub Issues are welcome for reproducible bugs and feature
              requests.
            </p>
            <p className="mt-4 leading-7 text-ink/70">
              Photos Wallpaper does not upload your library. Please only include screenshots or
              photo details if you intentionally choose to share them.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:support@photos-wallpaper.app"
                className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine"
              >
                <Mail size={18} aria-hidden />
                Email support
              </a>
              <a
                href="https://github.com/stuartd/photos-wallpaper-website/issues"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-panel px-5 py-3 text-sm font-semibold transition hover:bg-mist"
              >
                <Github size={18} aria-hidden />
                Open an issue
              </a>
            </div>
          </div>
          <FeatureGrid features={supportPoints} />
        </div>
      </section>
    </>
  );
}
