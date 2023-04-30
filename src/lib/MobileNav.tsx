"use client";

import { useEffect, useRef, useState } from "react";

export default function MobileNav({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const onClickOutside = (e: MouseEvent) => {
    if (btnRef.current && !btnRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.addEventListener("click", onClickOutside);
    } else {
      document.body.removeEventListener("click", onClickOutside);
    }
    return () => {
      document.body.removeEventListener("click", onClickOutside);
    };
  }, [open]);

  return (
    <>
      <button
        className="p-4 text-white md:hidden top-0 left-0 right-0 z-50"
        onClick={() => setOpen(!open)}
        ref={btnRef}
      >
        <svg
          className="w-6 h-6 inline-block mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d={`${open ? "M4 4L20 20M4 20L20 4" : "M4 6h16M4 12h16M4 18h16"}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="sr-only">{open ? "close" : "open"} menu</span>
      </button>
      <div
        className={`${
          open ? "block" : "hidden"
        } md:block fixed md:relative top-0 left-0 right-0 z-40 bg-gray-700 md:bg-transparent`}
        onClick={() => setOpen(false)}
      >
        {children}
      </div>
    </>
  );
}
