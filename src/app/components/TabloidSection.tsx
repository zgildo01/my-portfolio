import Tabloid from "./Tabloid";

type TabloidSectionProps = {
  items: { title: string; content: string }[];
};

export default function TabloidSection({ items }: TabloidSectionProps) {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 items-start">
      {items.map((item, idx) => (
        <Tabloid key={idx} title={item.title}>
          {item.content}
        </Tabloid>
      ))}
    </section>
  );
}
