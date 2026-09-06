import { Camera, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="sticky top-0 z-20 border-b border-line bg-paper/[0.94] backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        >
          <Link to="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-full bg-pine text-white">
              <Camera size={16} aria-hidden />
            </span>
            <span>Photos Wallpaper</span>
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium text-ink/65 sm:gap-6">
            <a href="/#privacy" className="hidden transition hover:text-ink sm:block">
              Privacy
            </a>
            <a href="/#support" className="hidden transition hover:text-ink sm:block">
              Support
            </a>
            <a
              href="https://apps.apple.com/gb/app/photos-wallpaper/id6769191842?mt=12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-ink transition hover:border-ink/35"
            >
              Get the free app <ExternalLink size={14} aria-hidden />
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="border-t border-line bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-display text-xl font-semibold">Photos Wallpaper</p>
            <p className="mt-2 text-sm text-paper/55">
              A free, local-first Mac app made by Stuart.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-paper/70">
            <a href="/#privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/#support" className="hover:text-white">
              Support
            </a>
            <a href="mailto:support@photos-wallpaper.app" className="hover:text-white">
              Email
            </a>
            <a
              href="https://github.com/stuartd/photos-wallpaper#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <SiGithub size={15} aria-hidden /> App source
            </a>
            <a
              href="https://stuartd.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Made by Stuart
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
