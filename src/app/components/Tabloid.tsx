import React from "react";

type TabloidProps = {
  title: string;
  children: React.ReactNode;
};

export default function Tabloid({ title, children }: TabloidProps) {
  return (
    <div className="border border-black p-4 flex flex-col gap-2 bg-white/90 dark:bg-[#f4e1c1]">
      <h2 className="text-xl font-bold text-center">{title}</h2>
      <p className="text-sm">{children}</p>
    </div>
  );
}
