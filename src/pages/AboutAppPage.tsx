import { Download, Terminal } from "lucide-react";
import { FeatureGrid } from "../components/FeatureGrid";
import { HeroPreview } from "../components/HeroPreview";
import { appFeatures, privacyPoints, productStats, setupChoices, timeline } from "../content/site";

export function AboutAppPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pine">macOS menu bar app</p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.04] sm:text-6xl">
              Photos Wallpaper
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
              Photos Wallpaper brings your photo library back to the desktop.<br /><br />
              Revisit your memories as wallpaper across every display, with simple schedules.<br /><br />
              Everything stays on your Mac.
              </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#setup"
                className="inline-flex items-center gap-2 rounded-md bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-fern"
              >
                <Download size={18} aria-hidden />
                Setup Notes
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
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/50">{stat.label}</dt>
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
            <p className="mt-3 leading-7 text-ink/70">
              Where do the photos come from? When does
              the wallpaper change? What happens if I have multiple displays?
            </p>
          </div>
          <FeatureGrid features={appFeatures} />
        </div>
      </section>

      <section id="privacy" className="scroll-mt-24 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Privacy model</h2>
            <p className="mt-4 leading-7 text-ink/70">
              Photos Wallpaper has no database, backend, account layer, analytics, or advertising. It's your photo library, now and always.
            </p>
          </div>
          <FeatureGrid features={privacyPoints} />
        </div>
      </section>
      
      
      <section id="setup" className="scroll-mt-24 border-y border-line bg-ink py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Typical flow</h2>
            <p className="mt-4 leading-7 text-white/72">
              The production app is a native macOS utility. This starter website can grow into a
              download page with screenshots, release notes, and troubleshooting once the app is ready
              to ship.
            </p>
            <div className="mt-7 grid gap-3">
              {setupChoices.map((choice) => {
                const Icon = choice.icon;

                return (
                  <div key={choice.title} className="flex items-center gap-3 rounded-md border border-white/12 bg-white/[0.08] p-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-md bg-white/10 text-sun">
                      <Icon size={19} aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{choice.title}</span>
                      <span className="block text-sm text-white/66">{choice.value}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <ol className="grid gap-3">
            {timeline.map((item, index) => (
              <li key={item} className="flex items-center gap-4 rounded-md border border-white/12 bg-white/[0.08] p-4">
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
