import { Layout } from "@/components/layout";
import { BookOpen, FileCheck, HelpCircle, Layers, ArrowRight, Download, ExternalLink } from "lucide-react";

// The 4 commitments defined in your charter
const COMMITMENTS = [
  {
    title: "1. Real Sources Only",
    desc: "Every post cites established scholarship with complete bibliographic references so you can verify and read the papers directly.",
  },
  {
    title: "2. Rigorously Typed Examples",
    desc: "Every concept states whether its illustration is Documented empirically, Contested in literature, or Constructed to illustrate.",
  },
  {
    title: "3. Disagreements Shown, Not Smoothed",
    desc: "Where theorists collide (e.g., Bacharach's falsifiability vs. Weick's imagination), the tension is highlighted rather than glossed over.",
  },
  {
    title: "4. Intellectual Honesty",
    desc: "Where a seminal paper is dated, context-bound, overstated, or flawed, its analytical boundaries are explicitly called out.",
  },
];

// The 6 structured blocks of the 24-week curriculum
const CURRICULUM = [
  { range: "Weeks 1–4", theme: "You were rejected and nobody told you why" },
  { range: "Weeks 5–8", theme: "Here is the standard, and what it actually asks" },
  { range: "Weeks 9–12", theme: "The standard rests on ideas commonly misunderstood" },
  { range: "Weeks 13–16", theme: "There isn't one standard, your reviewer picked one" },
  { range: "Weeks 17–20", theme: "Your work will be read by people who are not you" },
  { range: "Weeks 21–24", theme: "What it all adds up to" },
];

// Repository of Posts / Carousels
const REPOSITORY = [
  {
    id: "post-0",
    week: "Orientation",
    track: "Manifesto",
    title: "The Architecture of a Theoretical Contribution: Start Here",
    date: "November 2026",
    summary:
      "Most research training teaches technique. Far less teaches the intellectual architecture underneath: how concepts are built, what makes an explanation an explanation, and why some contributions change a field while others are forgotten.",
    keyReferences: [
      "Davis, M. S. (1971). That's interesting! Philosophy of the Social Sciences, 1, 309–344.",
      "Kilduff, M. (2007). The top ten reasons why your paper might not be sent out for review. AMR, 32(3), 700–702.",
    ],
    pdfUrl: "/docs/theory-lab-start-here.pdf",
    readTime: "8-slide carousel + Essay",
  },
];

export default function TheoryLab() {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full mb-4">
            <Layers size={14} />
            <span>Scholar–Curator Initiative</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground tracking-tight mb-5">
            The Theory Lab
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed mb-6">
            Translating the intellectual architecture of knowledge creation. We bridge five decades of management theory and journal editorial insight into one connected, actionable curriculum.
          </p>

          {/* Publishing Rhythm Badge */}
          <div className="inline-flex flex-wrap justify-center items-center gap-4 bg-muted/60 border border-border p-3.5 rounded-xl text-sm font-medium text-foreground">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              <strong>Tuesdays:</strong> The Editor’s Desk
            </span>
            <span className="hidden sm:inline text-muted-foreground/40">•</span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <strong>Saturdays:</strong> The Theory Lab Deep-Dive
            </span>
          </div>
        </div>

        {/* The 4 Commitments (Rigor Standards) */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">The Four Commitments</h2>
            <p className="text-sm text-muted-foreground mt-1">Every post, carousel, and synthesis is held to this standard.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {COMMITMENTS.map((c, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-xl shadow-xs">
                <h3 className="font-serif font-bold text-base text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 24-Week Program Roadmap */}
        <section className="mb-20 bg-muted/30 border border-border rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/80 gap-3 mb-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">Series 1: The Shape of the 24 Weeks</h2>
              <p className="text-sm text-muted-foreground">From initial desk rejection to building defensible theoretical frameworks.</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-primary text-white rounded-md self-start sm:self-auto">
              24-Week Program
            </span>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CURRICULUM.map((item, idx) => (
              <div key={idx} className="bg-card border border-border/60 p-4 rounded-lg flex flex-col justify-between">
                <span className="text-xs font-mono font-bold text-primary mb-1 block">{item.range}</span>
                <p className="text-sm font-medium text-foreground leading-snug">{item.theme}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Active Repository / Editions Feed */}
        <section>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">Editions & Slides Archive</h2>
              <p className="text-sm text-muted-foreground">Download slide decks, read references, and inspect underlying literature.</p>
            </div>
            <BookOpen className="text-muted-foreground hidden sm:block" size={24} />
          </div>

          <div className="space-y-8">
            {REPOSITORY.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xs hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-bold font-mono text-accent bg-accent/10 px-2.5 py-1 rounded">
                    {post.track} • {post.week}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">{post.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-4">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  {post.summary}
                </p>

                {/* Primary Sources / Reading Box */}
                <div className="bg-muted/40 border border-border/70 rounded-xl p-4 mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
                    <FileCheck size={14} className="text-primary" />
                    Essential Sources Examined
                  </h4>
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 font-mono">
                    {post.keyReferences.map((ref, rIdx) => (
                      <li key={rIdx} className="leading-relaxed pl-3 border-l-2 border-primary/40">
                        {ref}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
                  <span className="text-xs text-muted-foreground font-medium">{post.readTime}</span>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href={post.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      View Slides <ExternalLink size={14} />
                    </a>
                    <a
                      href={post.pdfUrl}
                      download
                      className="inline-flex items-center gap-1.5 bg-primary text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Download size={14} />
                      Download PDF
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
}