import Masthead from "../components/Masthead";
import TabloidSection from "../components/TabloidSection";

export default function TutorialsPage() {
  return (
    <div className="p-8 bg-[#1a1a1a] text-black min-h-screen">
      <Masthead />

      <h2 className="text-4xl font-bold text-center mb-6 uppercase">
        Local Guides
      </h2>

      <TabloidSection
        items={[
          { title: "Tutorial 1", content: "Placeholder tutorial preview." },
          { title: "Tutorial 2", content: "Another preview." },
          { title: "Tutorial 3", content: "Yet another preview." },
        ]}
      />

    </div>
  );
}
