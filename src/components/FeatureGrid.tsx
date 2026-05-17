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
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <article key={feature.title} className="bg-panel p-5">
            <div className="grid size-10 place-items-center rounded-md bg-mist text-pine">
              <Icon size={22} aria-hidden />
            </div>
            <h3 className="mt-5 text-base font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">{feature.description}</p>
          </article>
        );
      })}
    </div>
  );
}
