import { Layout } from "@/components/layout"; // Adjust path if layout is in another directory

interface Edition {
  id: string;
  number: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  pdfUrl: string;
}

const EDITIONS: Edition[] = [
  {
    id: "edition-1",
    number: "Edition 01",
    date: "November 2026",
    category: "Paradox Theory",
    title: "Navigating Dual Missions in Social Enterprise",
    summary:
      "A deep dive into managing the continuous tension between commercial viability and deep social mission through a 'both/and' paradox lens.",
    pdfUrl: "/docs/paradox-theory-edition-1.pdf",
  },
];

export default function TheoryLab() {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
            Research in Practice
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            The Theory Lab
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Translating management theories, organizational paradoxes, and indigenous constructs into actionable frameworks and visual carousels.
          </p>
        </div>

        {/* Editions Grid */}
        <div className="space-y-6">
          {EDITIONS.map((edition) => (
            <div
              key={edition.id}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {edition.category} • {edition.number}
                </span>
                <span className="text-xs text-muted-foreground">{edition.date}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-3">
                {edition.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {edition.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                <a
                  href={edition.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  View Slides & PDF ↗
                </a>
                <a
                  href={edition.pdfUrl}
                  download
                  className="inline-flex items-center bg-primary text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}