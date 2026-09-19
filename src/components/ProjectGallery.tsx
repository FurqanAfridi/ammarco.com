import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import type { ProjectMedia } from "@/data/projects";

type ProjectGalleryProps = {
  media: ProjectMedia[];
  title: string;
};

const ProjectGallery = ({ media, title }: ProjectGalleryProps) => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
      if (event.key === "ArrowRight") {
        setActive((index) => (index === null ? index : (index + 1) % media.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index === null ? index : (index - 1 + media.length) % media.length));
      }
    };

    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, media.length]);

  const current = active !== null ? media[active] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {media.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            className={`group relative overflow-hidden rounded-2xl bg-muted text-left ${
              index === 0 ? "sm:col-span-2 lg:col-span-3 lg:h-[32rem]" : "h-56 sm:h-64"
            }`}
          >
            {item.type === "video" ? (
              <>
                <video
                  src={item.src}
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">
                  <Play className="h-3.5 w-3.5" />
                  Video
                </span>
              </>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-4 text-sm text-white">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {current && active !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-primary/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>
          {media.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
                onClick={(event) => {
                  event.stopPropagation();
                  setActive((index) => (index === null ? index : (index - 1 + media.length) % media.length));
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
                onClick={(event) => {
                  event.stopPropagation();
                  setActive((index) => (index === null ? index : (index + 1) % media.length));
                }}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          <figure className="max-h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            {current.type === "video" ? (
              <video src={current.src} controls autoPlay className="max-h-[80vh] w-full rounded-2xl bg-black object-contain" />
            ) : (
              <img src={current.src} alt={current.alt} className="max-h-[80vh] w-full rounded-2xl object-contain" />
            )}
            <figcaption className="mt-4 text-center text-sm text-white/80 sm:text-base">{current.caption}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
