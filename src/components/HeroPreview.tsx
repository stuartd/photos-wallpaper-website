import { Check, Image, Monitor, RefreshCcw } from "lucide-react";

export function HeroPreview() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-lg bg-ink p-4 text-paper shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(240,179,91,0.45),transparent_28%),linear-gradient(135deg,#173f35,#121417_55%,#b95f43)]" />
      <div className="relative grid h-full gap-4">
        <div className="flex items-center justify-between rounded-md border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Image size={17} aria-hidden />
            Photos Wallpaper
          </div>
          <span className="rounded bg-white/15 px-2 py-1 text-xs">Menu bar</span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-md border border-white/15 bg-white/12 p-4 backdrop-blur">
            <div className="flex items-center justify-between text-sm">
              <span>Wallpaper Schedule</span>
              <RefreshCcw size={16} aria-hidden />
            </div>
            <div className="mt-4 space-y-2">
              {["On Wake", "Every hour", "Every day"].map((item, index) => (
                <div
                  key={item}
                  className={[
                    "flex items-center justify-between rounded px-3 py-2 text-sm",
                    index === 1 ? "bg-sun text-ink" : "bg-white/10 text-paper/80"
                  ].join(" ")}
                >
                  {item}
                  {index === 1 ? <Check size={16} aria-hidden /> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-white/15 bg-white/12 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-sm">
              <Monitor size={16} aria-hidden />
              Connected displays
            </div>
            <div className="mt-4 grid gap-3">
              <div className="aspect-video rounded bg-[linear-gradient(135deg,#f6d78c,#2f6f5e)]" />
              <div className="aspect-video rounded bg-[linear-gradient(135deg,#b95f43,#f7f4ec)]" />
            </div>
          </div>
        </div>

        <div className="rounded-md border border-white/15 bg-white/10 p-4 text-sm leading-6 text-paper/80 backdrop-blur">
          Local Photos access, one wallpaper per screen, and a plain-text history file when you want to
          find the image again.
        </div>
      </div>
    </div>
  );
}
