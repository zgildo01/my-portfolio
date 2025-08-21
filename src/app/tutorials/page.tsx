import Tabloid from "../components/Tabloid";

export default function TutorialsPage() {
  return (
    <div className="p-8 bg-[#1a1a1a] text-white min-h-screen">
      <header className="text-center border-b-4 border-black pb-4 mb-8">
        <h1 className="text-6xl font-extrabold">Olympian Free Press — Tutorials</h1>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Tabloid title="Tutorial 1">Placeholder tutorial preview.</Tabloid>
        <Tabloid title="Tutorial 2">Placeholder tutorial preview.</Tabloid>
        <Tabloid title="Tutorial 3">Placeholder tutorial preview.</Tabloid>
      </section>
    </div>
  );
}
