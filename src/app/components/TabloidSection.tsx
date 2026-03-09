"use client";

import { useEffect, useRef } from "react";
import Tabloid from "./Tabloid";

type TabloidSectionProps = {
  items: { title: string; content: string }[];
};

const getColsFromWidth = (w: number) => {
  if (w >= 1024) return 3;
  if (w >= 640) return 2;
  return 1;
};

export default function TabloidSection({ items }: TabloidSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const applySpans = () => {
      const cols = getColsFromWidth(window.innerWidth);
      const n = items.length;

      const allItems = section.querySelectorAll("[data-tabloid-item]");
      allItems.forEach((el) => {
        (el as HTMLElement).style.gridColumn = "";
      });

      if (cols === 1 || n <= cols) return;

      const lastRowItems = n % cols || cols;
      if (lastRowItems === cols) return;

      const lastItemIndex = n - 1;
      const lastItemSpan = cols - (lastRowItems - 1);
      const lastItemEl = section.querySelector(
        `[data-tabloid-item="${lastItemIndex}"]`
      ) as HTMLElement;
      if (lastItemEl) {
        lastItemEl.style.gridColumn = `span ${lastItemSpan}`;
      }
    };

    applySpans();

    let t: number | null = null;
    const onResize = () => {
      if (t) clearTimeout(t);
      t = window.setTimeout(() => {
        applySpans();
        t = null;
      }, 100);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (t) clearTimeout(t);
    };
  }, [items]);

  return (
    <section
      ref={sectionRef}
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 items-stretch"
    >
      {items.map((item, idx) => (
        <div key={idx} data-tabloid-item={idx} className="flex flex-col">
          <Tabloid title={item.title}>{item.content}</Tabloid>
        </div>
      ))}
    </section>
  );
}
