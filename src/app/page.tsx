import WantedPoster from "./components/WantedPoster";
import Tabloid from "./components/Tabloid";

export default function HomePage() {
  return (
    <div className="p-8 bg-[#1a1a1a] text-white min-h-screen">
      {/* Masthead */}
      <header className="text-center border-b-4 border-black pb-4 mb-8">
        <h1 className="text-6xl font-extrabold">Olympian Free Press</h1>
        <p className="text-lg">Est. 2025</p>
      </header>

      {/* Wanted Poster */}
      <WantedPoster />

      {/* Tabloid Sections */}
      <section className="grid md:grid-cols-3 gap-6 mt-8">
        <Tabloid title="Experience">
          Placeholder content for experience.
        </Tabloid>
        <Tabloid title="Interests">
          Placeholder content for interests.
        </Tabloid>
        <Tabloid title="Skills">
          Placeholder content for skills.
        </Tabloid>
      </section>
    </div>
  );
}
