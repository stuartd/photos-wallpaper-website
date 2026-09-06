import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { HeroPreview } from "../components/HeroPreview";
import { appFeatures, privacyDetails, privacyPoints, supportPoints } from "../content/site";

const appStoreUrl = "https://apps.apple.com/gb/app/photos-wallpaper/id6769191842?mt=12";

export function AboutAppPage() {
  return (
    <>
      <section className="overflow-hidden bg-paper">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-wide text-clay">
              A free Mac app from Stuart
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[5.5rem]">
              See the photos you’d almost forgotten.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">
              Photos Wallpaper quietly brings photographs from your Photos library to your desktop:
              old holidays, ordinary days, and people and places you haven’t seen in a while.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-fern focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine"
              >
                Download free on the Mac App Store
                <ExternalLink size={16} aria-hidden />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-2 py-2 text-sm font-semibold text-ink/65 underline decoration-line underline-offset-4 transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine"
              >
                How it works <ArrowDown size={16} aria-hidden />
              </a>
            </div>
          </div>

          <div className="mt-14 lg:mt-20">
            <HeroPreview />
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 border-y border-line bg-panel py-16 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">The whole idea</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Your library, in the background.
            </h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {appFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 py-7 sm:gap-6"
                >
                  <div className="font-display text-sm text-clay">0{index + 1}</div>
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon size={19} className="text-pine" aria-hidden />
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>
                    <p className="mt-2 max-w-xl leading-7 text-ink/65">{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="privacy" className="scroll-mt-24 bg-mist py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Nothing leaves your Mac</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Your photos are not the product.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              Photos Wallpaper works locally. There is no account, no analytics, and no photo
              upload. It asks for Photos permission because that is where it finds the pictures to
              use as wallpaper.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {privacyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <article key={point.title} className="bg-panel p-6 sm:p-8">
                  <Icon size={22} className="text-pine" aria-hidden />
                  <h3 className="mt-5 font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{point.description}</p>
                </article>
              );
            })}
          </div>
          <ul className="mt-8 grid gap-3 text-sm leading-6 text-ink/65 md:grid-cols-3">
            {privacyDetails.map((detail) => (
              <li key={detail} className="border-l-2 border-clay pl-4">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="support" className="scroll-mt-24 bg-paper py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Help, if you need it</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">Support</h2>
            <p className="mt-5 max-w-md leading-7 text-ink/65">
              Email is best for general help or anything you would rather not post publicly. You can
              also open an issue for a reproducible bug or feature request.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="mailto:support@photos-wallpaper.app" className="button-primary">
                <Mail size={17} aria-hidden /> Email support
              </a>
              <a
                href="https://github.com/stuartd/photos-wallpaper-website/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <SiGithub size={17} aria-hidden /> Open an issue
              </a>
            </div>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {supportPoints.map((point) => (
              <li key={point.title} className="py-5">
                <h3 className="font-semibold">{point.title}</h3>
                <p className="mt-1 text-sm leading-6 text-ink/65">{point.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
