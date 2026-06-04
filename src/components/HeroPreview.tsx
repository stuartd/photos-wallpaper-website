import { ShieldCheck } from "lucide-react";

export function HeroPreview() {
  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-panel shadow-soft">
      <div className="bg-ink">
        <img
          src="/pw-1280x800.png"
          alt="Photos Wallpaper menu bar app showing wallpaper schedule options over a Mac desktop"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
      <figcaption className="grid gap-px border-t border-line bg-line sm:grid-cols-2">
        <div className="bg-panel p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/50">Primary surface</p>
          <p className="mt-2 text-sm font-semibold">A menu bar dropdown, not a full settings window.</p>
        </div>
        <div className="flex items-start gap-2 bg-panel p-4 text-sm leading-6 text-ink/70">
          <ShieldCheck size={17} className="mt-0.5 shrink-0 text-fern" aria-hidden />
          <span>Schedule changes, manual refresh, history, diagnostics, privacy, and quit live in one compact menu.</span>
        </div>
      </figcaption>
    </figure>
  );
}
