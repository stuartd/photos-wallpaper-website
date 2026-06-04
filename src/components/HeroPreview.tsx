import { Check, ChevronDown, Clock, Image, Monitor, RefreshCcw, ShieldCheck } from "lucide-react";

export function HeroPreview() {
  return (
    <div className="rounded-lg border border-line bg-panel p-3 shadow-soft">
      <div className="overflow-hidden rounded-md border border-line bg-mist">
        <div className="flex h-10 items-center justify-between border-b border-line bg-panel px-4">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#ffbd2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="text-xs font-medium text-ink/55">Desktop preview</div>
        </div>

        <div className="grid gap-3 p-3 sm:grid-cols-[1fr_260px]">
          <div className="grid min-h-[330px] content-between overflow-hidden rounded-md border border-line bg-[linear-gradient(135deg,#dce8ee,#7aa6b3_42%,#273746)] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-white/30 bg-white/80 px-3 py-2 text-xs font-medium text-ink shadow-sm">
              <span className="flex items-center gap-2">
                <Image size={15} aria-hidden />
                Library: Favorites
              </span>
              <span>Next: 14:00</span>
            </div>
            <div className="rounded-md border border-white/20 bg-ink/72 p-3 text-paper">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-paper/65">Current wallpaper</p>
              <p className="mt-1 text-sm font-semibold">IMG_4821 from Photos</p>
              <p className="mt-1 text-xs text-paper/68">Applied separately to Built-in Display and Studio Display.</p>
            </div>
          </div>

          <div className="rounded-md border border-line bg-panel text-sm">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="font-semibold">Photos Wallpaper</span>
              <ChevronDown size={16} className="text-ink/55" aria-hidden />
            </div>
            <div className="space-y-3 p-4">
              <button className="flex w-full items-center justify-center gap-2 rounded-md bg-pine px-3 py-2 text-sm font-semibold text-white">
                <RefreshCcw size={16} aria-hidden />
                Refresh Now
              </button>

              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink/55">
                  <Clock size={14} aria-hidden />
                  Schedule
                </div>
                {["On wake", "Every hour", "Every day"].map((item, index) => (
                  <div
                    key={item}
                    className={[
                      "mb-1 flex items-center justify-between rounded px-3 py-2",
                      index === 1 ? "bg-mist font-semibold text-ink" : "text-ink/68"
                    ].join(" ")}
                  >
                    {item}
                    {index === 1 ? <Check size={16} className="text-pine" aria-hidden /> : null}
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink/55">
                  <Monitor size={14} aria-hidden />
                  Displays
                </div>
                <div
                  className="mb-1 flex items-center justify-between rounded bg-mist px-3 py-2 text-ink"
                >
                  Built-in Display
                  <span className="text-xs text-ink/55">Set</span>
                </div>
                <div className="flex items-center justify-between rounded bg-mist px-3 py-2 text-ink">
                  Studio Display
                  <span className="text-xs text-ink/55">Set</span>
                </div>
              </div>

              <div className="flex items-start gap-2 rounded-md border border-line bg-white px-3 py-2 text-xs leading-5 text-ink/70">
                <ShieldCheck size={15} className="mt-0.5 shrink-0 text-fern" aria-hidden />
                Photos access is used locally. No upload path, account, or analytics.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
