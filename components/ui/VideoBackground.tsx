// components/ui/VideoHeroBackground.tsx
"use client";

export function VideoHeroBackground({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
    </>
  );
}