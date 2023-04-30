"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { classList } from "@/utes/fns";
import { useEffect, useState } from "react";

export default function AnimalImage({
  src,
  alt,
  className,
  shortCaption,
  longCaption,
}: {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  shortCaption: string;
  longCaption: string;
}) {
  const imageClasses =
    "rounded-xl object-center object-cover !relative !h-[400px]";

  const [factOpen, setFactOpen] = useState(false);

  const toggleFact = () => {
    setFactOpen(!factOpen);
  };

  useEffect(() => {
    let t: number;
    if (factOpen) {
      t = window.setTimeout(() => {
        setFactOpen(false);
      }, 5000);
    }

    return () => {
      clearTimeout(t);
    };
  }, [factOpen]);

  return (
    <figure
      className="h-full w-full relative overflow-hidden flex flex-col items-center justify-center cursor-pointer"
      onClick={toggleFact}
      onMouseOver={(e) => {
        if (!factOpen) setFactOpen(true);
      }}
      onMouseLeave={(e) => {
        if (factOpen) setFactOpen(false);
      }}
    >
      <Image
        src={src}
        placeholder="blur"
        className={classList(className ?? "", imageClasses)}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        alt={alt}
      />
      <figcaption className="flex flex-col items-center w-full transition-all">
        {shortCaption}
        <div
          className={classList(
            "absolute transition-all",
            factOpen ? "bottom-6 opacity-1" : "-bottom-64 opacity-0",
            "text-center  max-w-fit mx-auto bg-gray-800/75  rounded-b-xl  mx-4"
          )}
        >
          {longCaption}
        </div>
      </figcaption>
    </figure>
  );
}
