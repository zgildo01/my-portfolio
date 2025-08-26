import WantedPoster from "./components/WantedPoster";
import TabloidSection from "./components/TabloidSection";
import Masthead from "./components/Masthead";

export default function HomePage() {
  return (
    <div className="p-8 bg-[#1a1a1a] text-white min-h-screen">
      {/* Masthead */}
      <Masthead />

      {/* Page Headline*/}
      <h2 className="text-4xl font-bold text-center mb-6 uppercase">
        Suspect on the loose on the internet!
      </h2>

      {/* Wanted Poster */}
      <WantedPoster />

      {/* Tabloid Sections */}
      <TabloidSection
        items={[
          { title: "Experience", content: "Lots of text about experience AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" },
          { title: "Interests", content: "Shorter text here..." },
          { title: "Skills", content: "Even more text here..." },
        ]}
      />
    </div>
  );
}
