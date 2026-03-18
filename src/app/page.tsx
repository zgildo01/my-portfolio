import WantedPoster from "./components/WantedPoster";
import TabloidSection from "./components/TabloidSection";
import Masthead from "./components/Masthead";

export default function HomePage() {
  return (
    <div className="p-8 bg-[#1a1a1a] text-black min-h-screen">
      <Masthead />
      <h2 className="font-headline text-4xl font-bold text-center mb-6 uppercase">
        Suspect on the loose on the internet!
      </h2>
      <WantedPoster />
      <TabloidSection
        items={[
          { title: "Experience", content: "Lots of text about experience AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" },
          { title: "Interests", content: "Shorter text here..." },
          { title: "Skills", content: "Even more text here..." },
          { title: "Education", content: "Some text about education..." },
          { title: "Goals", content: "Some text about goals..." }
        ]}
      />
    </div>
  );
}
