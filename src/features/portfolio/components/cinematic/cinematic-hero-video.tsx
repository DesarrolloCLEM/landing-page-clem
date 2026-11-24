"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Client island: starting, pausing and resuming a video, and reading the motion preference to
// decide whether it may start on its own, need JavaScript. WCAG 2.2.2 also asks for a way to
// pause moving content that lasts more than five seconds. Without JavaScript the poster stays.

type CinematicHeroVideoProps = {
  src: string;
  poster: string;
};

export function CinematicHeroVideo({ src, poster }: CinematicHeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Browsers may refuse to start it (data saver, power saving): the poster stays.
    video.play().catch(() => {});
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <>
      <video
        ref={ref}
        // Decorative background: muted and looping, controlled by the button below.
        aria-hidden="true"
        tabIndex={-1}
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        src={src}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="cine-hero-video absolute inset-0 -z-10 size-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pausar video" : "Reproducir video"}
        className="absolute right-4 bottom-4 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/40 bg-navy/60 text-white backdrop-blur-sm transition-colors hover:bg-navy/80 sm:right-6 sm:bottom-6"
      >
        {playing ? (
          <Pause aria-hidden="true" className="size-4" />
        ) : (
          <Play aria-hidden="true" className="size-4" />
        )}
      </button>
    </>
  );
}
