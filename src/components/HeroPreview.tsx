export function HeroPreview() {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-soft sm:rounded-3xl">
        <img
          src="/pw-1280x800.png"
          alt="Photos Wallpaper menu showing schedule choices on a Mac desktop"
          className="aspect-[16/10] w-full object-cover"
          width="1280"
          height="800"
        />
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-ink/55">
        The app lives in the menu bar. Choose a schedule, or change the wallpaper whenever you feel
        like it.
      </figcaption>
    </figure>
  );
}
