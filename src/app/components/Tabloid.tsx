import React from "react";

type TabloidProps = {
  title: string;
  children: React.ReactNode;
};

export default function Tabloid({ title, children }: TabloidProps) {
  return (
    <div className="w-full border border-black p-6 bg-white/90 dark:bg-[#f4e1c1] break-words">
      <h2 className="text-2xl font-bold text-center mb-4">
        {title}
      </h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}
