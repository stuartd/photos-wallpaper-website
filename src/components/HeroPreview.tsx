export function HeroPreview() {
  return (
    <div className="space-y-12">
      <h2 className="text-5xl font-bold leading-tight text-ink sm:text-6xl">
        How it works
      </h2>
      <figure>
        <figcaption className="mb-5 text-3xl font-bold leading-tight text-ink">
          The app lives in the menu bar.
        </figcaption>
         <figcaption className="mb-5 text-3xl font-bold leading-tight text-ink">
          Choose a schedule, or change the wallpaper whenever you
          feel like it.
        </figcaption>

        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-soft sm:rounded-3xl">
          <img
            src="/schedule.png"
            alt="Photos Wallpaper menu showing schedule choices on a Mac desktop"
            className="h-auto w-full"
            width="1280"
            height="800"
          />
        </div>
      </figure>

      <figure>
        <figcaption className="mb-5 text-3xl font-bold leading-tight text-ink">
          When you see an image you want to find in your library, tell Photos Wallpaper to add the wallpaper image to the Photos Wallpaper album.
        </figcaption>

        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-soft sm:rounded-3xl">
          <img
            src="/added.png"
            alt="Photos Wallpaper message saying image has been added to Photos Wallpaper album"
            className="h-auto w-full"
            width="1280"
            height="800"
          />
        </div>
      </figure>
      <figure>
        <figcaption className="mb-5 text-3xl font-bold leading-tight text-ink">
          Go to the Photos Wallpaper album and revisit the day!
        </figcaption>

        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-soft sm:rounded-3xl">
          <img
            src="/in.png"
            alt="Image of a photo with the 'Show in all photos' menu option selected"
            className="h-auto w-full"
            width="1280"
            height="800"
          />
        </div>
      </figure>
    </div>
  )
}