import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/site";

// Shared by the home and about pages: "loading" until the photo answers,
// then "ok", or "missing" if public/images/profile/ramadhani.jpg isn't there yet.
export const usePhotoStatus = () => {
  const [status, setStatus] = useState(profile.photo ? "loading" : "missing");
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) setStatus(img.naturalWidth > 0 ? "ok" : "missing");
  }, []);

  const imgProps = {
    ref: imgRef,
    src: profile.photo,
    onLoad: () => setStatus("ok"),
    onError: () => setStatus("missing"),
  };
  return [status, imgProps];
};

// Splatter dots, fixed so the server and browser render the same picture.
const dots = [
  [92, 160, 9], [70, 210, 5], [118, 120, 4], [60, 300, 7], [86, 350, 3], [140, 470, 6],
  [110, 520, 3], [205, 545, 5], [470, 120, 6], [505, 175, 4], [530, 260, 8], [548, 330, 3],
  [500, 430, 5], [452, 505, 7], [410, 548, 3], [300, 70, 5], [255, 48, 3], [350, 52, 4],
  [40, 255, 3], [565, 395, 4],
];

export const InkSplash = ({ className = "" }) => (
  <svg viewBox="0 0 600 600" className={`absolute inset-0 w-full h-full ${className}`} aria-hidden="true">
    <defs>
      <filter id="ink-edge" x="-30%" y="-30%" width="160%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="11" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="ink-drop" x="-50%" y="-50%" width="200%" height="200%">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
      </filter>
    </defs>
    <g filter="url(#ink-edge)" className="mix-blend-multiply dark:mix-blend-screen dark:opacity-90">
      <ellipse cx="240" cy="215" rx="175" ry="150" fill="#6C4BC4" opacity="0.5" />
      <ellipse cx="385" cy="300" rx="150" ry="175" fill="#1F8A8A" opacity="0.45" />
      <ellipse cx="300" cy="445" rx="175" ry="110" fill="#E39B3A" opacity="0.45" />
      <ellipse cx="165" cy="395" rx="110" ry="125" fill="#B63E96" opacity="0.32" />
    </g>
    <g filter="url(#ink-drop)" className="fill-dark dark:fill-light" opacity="0.75">
      {dots.map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
      ))}
    </g>
  </svg>
);

const HeroPortrait = () => {
  const [status, imgProps] = usePhotoStatus();
  return (
    <div className="relative w-full max-w-[580px] aspect-square mx-auto lg:max-w-[420px] md:max-w-[340px]">
      <InkSplash />
      {profile.photo && status !== "missing" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          {...imgProps}
          alt={`Portrait of ${profile.name}`}
          className={`blob-mask absolute left-[13%] top-[11%] w-[74%] h-[74%] object-cover transition-opacity duration-700 ${
            status === "ok" ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : null}
      {status === "missing" ? (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="text-[10rem] leading-none font-extrabold tracking-tight text-dark dark:text-light xl:text-[8rem] md:text-[6rem]">
            {profile.initials}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default HeroPortrait;
