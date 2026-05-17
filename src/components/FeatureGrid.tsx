import type { LucideIcon } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FeatureGridProps = {
  features: Feature[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <article key={feature.title} className="rounded-lg border border-ink/10 bg-white/70 p-5 shadow-sm">
            <div className="grid size-11 place-items-center rounded-md bg-fern/10 text-pine">
              <Icon size={22} aria-hidden />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">{feature.description}</p>
          </article>
        );
      })}
    </div>
  );
}
