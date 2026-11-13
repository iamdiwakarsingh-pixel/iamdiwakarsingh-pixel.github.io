import { Layout } from "@/components/layout";
import { EDITIONS } from "@/lib/editions";
import { useRoute, Link } from "wouter";
import { useState } from "react";
import {
  ArrowLeft,
  Download,
  Copy,
  Check,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

export default function TheoryLabEdition() {
  const [, params] = useRoute("/theory-lab/:slug");
  const [copied, setCopied] = useState(false);

  const edition = EDITIONS.find((e) => e.slug === params?.slug);

  if (!edition) {
    return (
      <Layout>
        <div className="py-24 px-4 max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-3xl font-serif font-bold text-foreground">
            Edition Coming Soon
          </h1>
          <p className="text-muted-foreground">
            The web essay for this edition has not been published yet. Return to the master syllabus to view available weeks and slide decks.
          </p>
          <Link
            href="/theory-lab"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#e26d36] hover:underline"
          >
            <ArrowLeft size={16} /> Back to The Theory Lab Syllabus
          </Link>
        </div>
      </Layout>
    );
  }

  const handleCopyApa = () => {
    navigator.clipboard.writeText(edition.apaCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const badgeColors: Record<string, string> = {
    Documented: "bg-emerald-50 text-emerald-800 border-emerald-200",
    Contested: "bg-amber-50 text-amber-800 border-amber-200",
    Illustrative: "bg-sky-50 text-sky-800 border-sky-200",
  };

  return (
    <Layout>
      <article className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Top Navigation & PDF Action */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-border">
          <Link
            href="/theory-lab"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} /> Back to 24-Week Syllabus
          </Link>

          <a
            href={edition.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e26d36] hover:bg-[#d05c26] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg shadow-xs transition-colors"
          >
            <Download size={14} /> Download Slides &amp; PDF
          </a>
        </div>

        {/* Header Metadata */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#e26d36] bg-[#e26d36]/10 px-3 py-1 rounded-full">
              Week {edition.wk} • {edition.day}
            </span>
            <span className="text-xs font-mono font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {edition.seriesLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight mb-3">
            {edition.title}
          </h1>
          <p className="text-sm sm:text-base font-medium text-muted-foreground">
            Anchor Text: {edition.paperShort}
          </p>
        </header>

        {/* Core Takeaway Box */}
        <div className="bg-amber-50/70 border-l-4 border-[#e26d36] p-5 rounded-r-xl mb-10">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#e26d36] block mb-1">
            Core Architectural Insight
          </span>
          <p className="text-sm sm:text-base font-serif text-foreground leading-relaxed">
            {edition.coreTakeaway}
          </p>
        </div>

        {/* Main Essay Sections */}
        <div className="space-y-8 mb-12">
          {edition.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
                {sec.heading}
              </h2>
              {sec.body.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-base text-foreground/90 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Typed Examples (Promise #2 & #3) */}
        <section className="mb-12 space-y-4">
          <h3 className="text-lg font-serif font-bold text-foreground border-b border-border pb-2">
            Scholar–Curator Evidence &amp; Tensions
          </h3>
          <div className="space-y-4">
            {edition.examples.map((ex, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 bg-card border border-border rounded-xl space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded border ${
                      badgeColors[ex.type] || "bg-muted text-foreground"
                    }`}
                  >
                    {ex.type}
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    {ex.label}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {ex.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Honest Limits (Promise #4) */}
        <section className="p-5 bg-muted/40 border border-border rounded-xl mb-10 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground mb-1">
              Scope &amp; Boundary Conditions
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {edition.limitations}
            </p>
          </div>
        </section>

        {/* Full APA 7 Citation & Copy */}
        <section className="p-5 bg-card border border-border rounded-xl mb-10">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-foreground">
              <BookOpen size={14} className="text-[#e26d36]" /> Reference (APA 7)
            </span>
            <button
              type="button"
              onClick={handleCopyApa}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-border bg-muted/40 hover:bg-muted text-xs font-medium text-foreground transition-colors"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-green-600" /> Copied
                </>
              ) : (
                <>
                  <Copy size={13} /> Copy Citation
                </>
              )}
            </button>
          </div>
          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed select-all">
            {edition.apaCitation}
          </p>
        </section>

        {/* Bottom Footer CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
          <Link
            href="/theory-lab"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={15} /> Return to Syllabus
          </Link>

          <a
            href={edition.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e26d36] hover:bg-[#d05c26] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-lg shadow-xs transition-colors"
          >
            <Download size={14} /> Download Companion PDF Deck
          </a>
        </div>
      </article>
    </Layout>
  );
}