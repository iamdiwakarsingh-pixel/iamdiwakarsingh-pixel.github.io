import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Download, Layers, ShieldCheck, Compass, Award } from "lucide-react";
import { personalInfo } from "@/lib/data";

const FOUR_CHALLENGES = [
  {
    num: "01",
    title: "A Gap Is Not a Reason",
    desc: "Justifying research by the absence of prior work is a trap. Problem choice requires establishing why resolving an unresolved tension matters to theory and practice.",
    authors: "Alvesson & Sandberg • Barney • Colquitt",
  },
  {
    num: "02",
    title: "Logic, Not Citation",
    desc: "References, data, box-and-arrow diagrams, and hypotheses are not theory. Explanatory power resides exclusively in the unassisted causal mechanism: the Why.",
    authors: "Sutton & Staw • Whetten • Sparrowe & Mayer",
  },
  {
    num: "03",
    title: "Calibrate the Challenge",
    desc: "Positioning novelty appropriately. Too timid becomes obvious; too aggressive provokes defensive rejection. Theorizing demands disciplined imagination within the interesting zone.",
    authors: "Davis • Weick • Corley & Gioia",
  },
  {
    num: "04",
    title: "The Reader Is Not You",
    desc: "Overcoming reception bias. Distinctiveness obvious to the author is invisible to a reviewer with 20 minutes. Structure must orient, not alienate.",
    authors: "Kilduff • DiMaggio • Lange & Pfarrer • Shaw",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-border bg-gradient-to-b from-[#fcfbf9] to-background">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          
          {/* Avatar / Portrait */}
          <div className="relative inline-block mb-8">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto ring-1 ring-border">
              <img
                src="/diwakar.jpg"
                alt="Dr. Diwakar Singh"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image path differs
                  e.currentTarget.src = "https://iamdiwakarsingh-pixel.github.io/og-image.png";
                }}
              />
            </div>
            <span className="absolute bottom-1 right-2 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-0.5 rounded-full border-2 border-white">
              IAF Veteran
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight mb-4">
            Dr. Diwakar Singh
          </h1>

          <p className="text-lg md:text-xl font-medium text-primary mb-3">
            Assistant Professor, EDII Ahmedabad • Scholar–Curator of The Theory Lab
          </p>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Bridging 20 years of military leadership with doctoral scholarship in social enterprise, indigenous constructs (<em>Lokasaṃgraha</em>), and the intellectual architecture of knowledge creation.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/theory-lab">
              <a className="inline-flex items-center gap-2 bg-[#e26d36] hover:bg-[#d05c26] text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all">
                Explore The Theory Lab <ArrowRight size={18} />
              </a>
            </Link>
            <a
              href="/docs/CV_Diwakar_Singh.pdf"
              download
              className="inline-flex items-center gap-2 border border-border bg-card hover:bg-muted text-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Download CV <Download size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* 2. THE THEORY LAB FLAGSHIP SHOWCASE ON HOME */}
      <section className="py-20 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#e26d36] bg-[#e26d36]/10 px-3 py-1 rounded-full mb-3">
                FLAGSHIP SCHOLARLY INITIATIVE
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                The Theory Lab
              </h2>
              <p className="text-muted-foreground text-base max-w-2xl mt-2">
                Across five decades, journal editors and theorists return to the same four challenges. The Theory Lab synthesizes them into an integrated framework for understanding scholarly contribution.
              </p>
            </div>
            <Link href="/theory-lab">
              <a className="inline-flex items-center text-sm font-semibold text-[#e26d36] hover:underline shrink-0">
                View 24-Week Syllabus & Decks →
              </a>
            </Link>
          </div>

          {/* Publishing Cadence Banner */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-card border-l-4 border-amber-600 border border-border p-5 rounded-r-xl">
              <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider block mb-1">
                Tuesdays • The Editor’s Desk
              </span>
              <p className="text-sm font-semibold text-foreground mb-1">What Editors Look For at the Gate</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Practical insight from sitting editors on topic choice, introductions, hypotheses, and desk rejection.
              </p>
            </div>

            <div className="bg-card border-l-4 border-slate-700 border border-border p-5 rounded-r-xl">
              <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider block mb-1">
                Saturdays • The Theory Lab
              </span>
              <p className="text-sm font-semibold text-foreground mb-1">The Intellectual Architecture Underneath</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Deep dives into seminal papers: what theory is, what it is not, and the philosophical logic of explanation.
              </p>
            </div>
          </div>

          {/* The 4 Challenges Process */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {FOUR_CHALLENGES.map((ch) => (
              <div key={ch.num} className="bg-card border border-border p-6 rounded-xl hover:shadow-sm transition-shadow">
                <span className="text-2xl font-serif font-bold text-[#e26d36] block mb-2">{ch.num}</span>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{ch.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">{ch.desc}</p>
                <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-foreground/70">
                  Key Scholars: {ch.authors}
                </div>
              </div>
            ))}
          </div>

          {/* The Ladakh & Mentorship Context Note */}
          <div className="bg-[#fcfbf9] border border-border/80 p-6 rounded-xl text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">
              "For several years I have engaged these questions with doctoral and UGC NET aspirants. If you follow my field interventions across Ladakh and social enterprises, this is the other half of the same inquiry: not just what practitioners build, but how we validate what we claim to know about it."
            </p>
          </div>

        </div>
      </section>

      {/* 3. CORE ACADEMIC & RESEARCH PILLARS */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
              Research & Academic Anchors
            </h2>
            <p className="text-muted-foreground text-sm">
              Grounded in qualitative rigor, paradox theory, and Indian knowledge systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border rounded-xl">
              <Compass className="text-primary mb-4" size={28} />
              <h3 className="font-serif font-bold text-lg mb-2">Social Entrepreneurship</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Investigating dual-mission sustainability, hybrid governance, and paradoxical tensions in healthcare and rural enterprises.
              </p>
              <span className="text-[11px] font-mono text-primary">JSE (2025) • SEJ (2024)</span>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl">
              <Layers className="text-primary mb-4" size={28} />
              <h3 className="font-serif font-bold text-lg mb-2">Indigenous Constructs</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Conceptualizing indigenous Indian management philosophies including <em>Lokasaṃgraha</em>, <em>Jugaad</em>, and <em>Seva</em> for modern organizations.
              </p>
              <span className="text-[11px] font-mono text-primary">IIMB Management Review (2023)</span>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl">
              <ShieldCheck className="text-primary mb-4" size={28} />
              <h3 className="font-serif font-bold text-lg mb-2">Policy & Implementation</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Leading the SPIU for the RAMP Project in Ladakh and shaping entrepreneurship ecosystems across Himalayan higher education.
              </p>
              <span className="text-[11px] font-mono text-primary">RAMP Ladakh • EDII</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}