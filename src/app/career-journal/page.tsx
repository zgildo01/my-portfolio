// app/career-journal/page.tsx
export default function CareerJournalPage() {
  return (
    <div className="bg-[#f9f4e7] text-black min-h-screen p-8 font-serif">
      <header className="text-center mb-6">
        <h1 className="text-5xl font-bold">Career Journal</h1>
        <p className="italic">Notes & sketches along the way...</p>
      </header>

      <article className="max-w-2xl mx-auto space-y-6">
        <p>
          Placeholder journal entry written in a handwriting-style font.
        </p>
        <p>
          Another placeholder entry with sketches or decorative margins later.
        </p>
      </article>
    </div>
  );
}
