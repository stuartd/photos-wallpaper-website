import { NavLink, Outlet } from "react-router-dom";
import { Camera, MonitorUp, Shield } from "lucide-react";
import { navItems } from "../content/site";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-paper/[0.92] backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <NavLink to="/" className="flex items-center gap-3 font-semibold">
            <span className="grid size-10 place-items-center rounded-md bg-pine text-white">
              <Camera size={20} aria-hidden />
            </span>
            <span>Photos Wallpaper</span>
          </NavLink>
          <div className="flex items-center gap-1 rounded-md border border-line bg-panel p-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    "rounded px-3 py-2 text-sm font-medium transition",
                    isActive ? "bg-ink text-paper" : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-ink/10 bg-panel text-ink">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap items-center gap-3 text-sm text-ink/70">
            <span className="inline-flex items-center gap-2">
              <Shield size={16} aria-hidden /> Local-first
            </span>
            <span className="inline-flex items-center gap-2">
              <MonitorUp size={16} aria-hidden /> macOS
            </span>
          </div>
          <a
            href="/#privacy"
            className="text-sm font-semibold text-ink/70 transition hover:text-ink"
          >
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
