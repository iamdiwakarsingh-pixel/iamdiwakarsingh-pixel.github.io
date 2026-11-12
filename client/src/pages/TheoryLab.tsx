import { Layout } from "@/components/layout";
import { useState } from "react";
import { BookOpen, CheckCircle, FileText, Layers, ExternalLink, Download, AlertCircle } from "lucide-react";

interface WeekPlan {
  wk: number;
  tuesday: string;
  saturday: string;
  pairing: string;
  challenges: string;
}

interface Act {
  act: number;
  title: string;
  subtitle: string;
  weeks: WeekPlan[];
}

const SYLLABUS: Act[] = [
  {
    act: 1,
    title: "ACT 1: You Were Rejected and Nobody Told You Why",
    subtitle: "Weeks 1–4 • Uncovering desk rejections and the anatomy of contribution",
    weeks: [
      {
        wk: 1,
        tuesday: "Kilduff (2007) Ten reasons your paper is not sent out for review (AMR)",
        saturday: "Davis (1971) That’s interesting! (Phil. Soc. Sci.)",
        pairing: "Two ways work disappears before it is judged: at the editorial gate, and quietly afterwards.",
        challenges: "1, 3",
      },
      {
        wk: 2,
        tuesday: "Colquitt & George (2011) Topic choice (AMJ)",
        saturday: "Sutton & Staw (1995) What theory is not (ASQ)",
        pairing: "What you choose years earlier, and what you must construct in the theory section.",
        challenges: "1, 2",
      },
      {
        wk: 3,
        tuesday: "Grant & Pollock (2011) Setting the hook (AMJ)",
        saturday: "Whetten (1989) What constitutes a theoretical contribution? (AMR)",
        pairing: "The first three pages of an introduction, and the four explanatory blocks underneath them.",
        challenges: "1, 2",
      },
      {
        wk: 4,
        tuesday: "Barney (2018) Positioning a theory paper (AMR)",
        saturday: "Weick (1989) Disciplined imagination (AMR)",
        pairing: "A formula for the introduction, and the generative imagination it must carry.",
        challenges: "2, 3",
      },
    ],
  },
  {
    act: 2,
    title: "ACT 2: Here Is the Standard, and What It Actually Asks",
    subtitle: "Weeks 5–8 • Research design, problematization, and falsifiability",
    weeks: [
      {
        wk: 5,
        tuesday: "Bono & McNamara (2011) Research design (AMJ)",
        saturday: "Alvesson & Sandberg (2011) Generating questions through problematization (AMR)",
        pairing: "Designing a study, and finding an assumption worth designing a study for.",
        challenges: "1",
      },
      {
        wk: 6,
        tuesday: "Sparrowe & Mayer (2011) Grounding hypotheses (AMJ)",
        saturday: "Bacharach (1989) Criteria for evaluation (AMR)",
        pairing: "Where hypotheses come from, and what makes a theory judgeable in principle.",
        challenges: "2",
      },
      {
        wk: 7,
        tuesday: "Barney (2018) Theory contributions and the AMR review process (AMR)",
        saturday: "Van de Ven (1989) Nothing is quite so practical as a good theory (AMR)",
        pairing: "How the editorial gate works in practice, and what theory is for.",
        challenges: "1, 4",
      },
      {
        wk: 8,
        tuesday: "Zhang & Shaw (2012) Crafting methods and results (AMJ)",
        saturday: "Weick (1995) What theory is not, theorizing is (ASQ)",
        pairing: "What counts as a finished product, and what counts as the process of doing.",
        challenges: "2",
      },
    ],
  },
  {
    act: 3,
    title: "ACT 3: The Standard Rests on Ideas Commonly Misunderstood",
    subtitle: "Weeks 9–12 • Discussion sections, middle-range theory, and doubt as method",
    weeks: [
      {
        wk: 9,
        tuesday: "Geletkanycz & Tepper (2012) Discussion and implications (AMJ)",
        saturday: "DiMaggio (1995) Comments on 'What theory is not' (ASQ)",
        pairing: "Where meaning is synthesized, and who decides what counts as meaning.",
        challenges: "4",
      },
      {
        wk: 10,
        tuesday: "Colquitt & Zapata-Phelan (2007) Trends in theory building (AMJ)",
        saturday: "Merton (1968) On sociological theories of the middle range",
        pairing: "How the field scores contribution, and the conceptual altitude theory should aim for.",
        challenges: "2, 3",
      },
      {
        wk: 11,
        tuesday: "Locke, Golden-Biddle & Feldman (2008) Making doubt generative (Org Sci)",
        saturday: "Mintzberg (2005) Developing theory about the development of theory",
        pairing: "Doubt as an active method, and cherishing the anomalies that do not fit.",
        challenges: "1, 3",
      },
      {
        wk: 12,
        tuesday: "Makadok, Burton & Barney (2018) Making theory contributions (SMJ)",
        saturday: "Corley & Gioia (2011) Building theory about theory building (AMR)",
        pairing: "A concrete procedure for contribution, and the dual tests of originality and utility.",
        challenges: "2, 4",
      },
    ],
  },
  {
    act: 4,
    title: "ACT 4: There Isn't One Standard; Your Reviewer Picked One",
    subtitle: "Weeks 13–16 • The pluralist turn, styles of theorizing, and indigenous concepts",
    weeks: [
      {
        wk: 13,
        tuesday: "Lange & Pfarrer (2017) Sense and structure: core building blocks (AMR)",
        saturday: "Cornelissen, Höllerer & Seidl (2021) Forms of theorizing (Org Theory)",
        pairing: "One journal’s blueprint (the 5 Cs), and the plural reality behind it.",
        challenges: "3, 4",
      },
      {
        wk: 14,
        tuesday: "Delbridge & Fiss (2013) Styles of theorizing and social organization (AMR)",
        saturday: "Sandberg & Alvesson (2021) Meanings of theory through typification (JMS)",
        pairing: "Styles and types: distinct answers to 'which kind of theory is yours?'",
        challenges: "3",
      },
      {
        wk: 15,
        tuesday: "Okhuysen & Bonardi (2011) Combining theoretical lenses (AMR)",
        saturday: "Poole & Van de Ven (1989) Using paradox to build theories (AMR)",
        pairing: "Borrowing from multiple literatures and embracing productive contradiction.",
        challenges: "2, 3",
      },
      {
        wk: 16,
        tuesday: "Barkema, Chen et al. (2015) West meets East: new concepts (AMJ)",
        saturday: "Weick (1999) Theory construction as disciplined reflexivity (AMR)",
        pairing: "Whose concepts count as theory, reflexivity, and non-Western epistemologies.",
        challenges: "3, 4",
      },
    ],
  },
  {
    act: 5,
    title: "ACT 5: Your Work Will Be Read by People Who Are Not You",
    subtitle: "Weeks 17–20 • Qualitative rigor, process theorizing, and reviewer psychology",
    weeks: [
      {
        wk: 17,
        tuesday: "Bansal & Corley (2012) Qualitative research (AMJ)",
        saturday: "Gioia, Corley & Hamilton (2013) Qualitative rigor in inductive research (ORM)",
        pairing: "What editors ask of qualitative manuscripts, and the rigor built to answer it.",
        challenges: "4",
      },
      {
        wk: 18,
        tuesday: "Pratt (2009) Writing and reviewing qualitative research (AMJ)",
        saturday: "Langley (1999) Strategies for theorizing from process data (AMR)",
        pairing: "Writing qualitative data so it is credible, and the seven process strategies.",
        challenges: "2, 4",
      },
      {
        wk: 19,
        tuesday: "Corley (2016) How editors come to understand theoretical contribution (AMP)",
        saturday: "Langley & Cloutier (2020) What makes a process contribution? (Org Theory)",
        pairing: "How judgment forms in an editor's mind when analyzing dynamic phenomena.",
        challenges: "4",
      },
      {
        wk: 20,
        tuesday: "Shaw (2012) Responding to reviewers (AMJ)",
        saturday: "Pfeffer (1993) Barriers to the advance of organizational science (AMR)",
        pairing: "Surviving the conversation with reviewers, and fields unable to agree on standards.",
        challenges: "4",
      },
    ],
  },
  {
    act: 6,
    title: "ACT 6: What It All Adds Up To",
    subtitle: "Weeks 21–24 • Critiques of theory fetishism, cycles of practice, and synthesis",
    weeks: [
      {
        wk: 21,
        tuesday: "Hambrick (2007) Management’s devotion to theory: too much? (AMJ)",
        saturday: "Ghoshal (2005) Bad management theories destroying good practices (AMLE)",
        pairing: "The unintended consequences of theory obsession: the series turning on itself.",
        challenges: "All",
      },
      {
        wk: 22,
        tuesday: "Van de Ven & Johnson (2006) Knowledge for theory and practice (AMR)",
        saturday: "Carlile & Christensen (2005) Cycles of theory building in research",
        pairing: "Engaged scholarship and the recursive cycle between empirical anomalies and theory.",
        challenges: "1, 4",
      },
      {
        wk: 23,
        tuesday: "Fisher & Aguinis (2017) Using theory elaboration (ORM)",
        saturday: "Shepherd & Suddaby (2017) Theory building: a review and integration (JoM)",
        pairing: "Concrete methods for theory elaboration, and the grand integration of models.",
        challenges: "2",
      },
      {
        wk: 24,
        tuesday: "Eisenhardt (2021) What is the Eisenhardt method, really? (Strat Org)",
        saturday: "Suddaby (2024) What theory is, what theory was: whence and whither theory",
        pairing: "A foundational method defending itself after thirty years, and looking forward.",
        challenges: "All",
      },
    ],
  },
];

export default function TheoryLab() {
  const [activeAct, setActiveAct] = useState(1);

  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* HERO TITLE */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-border/60">
                    {/* Left Link: Tuesday (The Editor's Desk) */}
                    <a
                      href={`/docs/theory-lab/W${w.wk}_Tuesday_ED.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-amber-700 hover:underline inline-flex items-center gap-1"
                    >
                      View Tuesday Slides & PDF <ExternalLink size={12} />
                    </a>

                    {/* Right Link: Saturday (The Theory Lab) */}
                    <a
                      href={`/docs/theory-lab/W${w.wk}_Saturday_TL.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Saturday Slides & PDF <ExternalLink size={12} />
                    </a>
                  </div>

        {/* THE 4 PROMISES LEDGER */}
        <div className="bg-card border border-border rounded-xl p-6 mb-16 shadow-xs">
          <h3 className="font-serif font-bold text-lg mb-4 text-foreground">The Scholar–Curator Promise Ledger</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-3 bg-muted/40 rounded-lg">
              <strong>1. Real Sources Only:</strong> Author and year in body; full APA 7 citations on sources cards.
            </div>
            <div className="p-3 bg-muted/40 rounded-lg">
              <strong>2. Typed Examples:</strong> Every case is labeled as <em>Documented</em>, <em>Contested</em>, or <em>Illustrative</em>.
            </div>
            <div className="p-3 bg-muted/40 rounded-lg">
              <strong>3. Disagreements Shown:</strong> When theorists collide (e.g., Bacharach vs. Weick on falsifiability), tension is highlighted.
            </div>
            <div className="p-3 bg-muted/40 rounded-lg">
              <strong>4. Honest Limits:</strong> Outdated, context-bound, or flawed work is explicitly identified as such.
            </div>
          </div>
        </div>

        {/* ACT TABS */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {SYLLABUS.map((act) => (
            <button
              key={act.act}
              onClick={() => setActiveAct(act.act)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeAct === act.act
                  ? "bg-[#e26d36] text-white shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Act {act.act}: Weeks {act.act * 4 - 3}–{act.act * 4}
            </button>
          ))}
        </div>

        {/* ACTIVE ACT CONTENT */}
        {SYLLABUS.filter((a) => a.act === activeAct).map((act) => (
          <div key={act.act} className="space-y-6">
            <div className="border-b border-border pb-4 mb-6">
              <h2 className="text-2xl font-serif font-bold text-foreground">{act.title}</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{act.subtitle}</p>
            </div>

            <div className="space-y-4">
              {act.weeks.map((w) => (
                <div key={w.wk} className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-xs">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono font-bold text-[#e26d36] bg-[#e26d36]/10 px-2.5 py-1 rounded">
                      Week {w.wk}
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Challenge Focus: Pillar(s) {w.challenges}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="p-3.5 bg-amber-500/5 border border-amber-600/20 rounded-lg">
                      <span className="text-[10px] font-mono font-bold text-amber-700 uppercase block mb-1">
                        Tuesday • The Editor's Desk
                      </span>
                      <p className="text-xs font-semibold text-foreground">{w.tuesday}</p>
                    </div>

                    <div className="p-3.5 bg-slate-500/5 border border-slate-600/20 rounded-lg">
                      <span className="text-[10px] font-mono font-bold text-slate-700 uppercase block mb-1">
                        Saturday • The Theory Lab
                      </span>
                      <p className="text-xs font-semibold text-foreground">{w.saturday}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground italic mb-4">
                    <strong>The Pairing:</strong> {w.pairing}
                  </p>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-border/60">
                    <a
                      href={`/docs/theory-lab/W${w.wk}_CAROUSEL.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Slides & PDF <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* UPCOMING SERIES ATTACHMENT */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <h4 className="font-serif font-bold text-foreground text-sm mb-2">The Extended Curriculum</h4>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Series 1 is the entry point. Upcoming: <strong>Series 2:</strong> Foundations of Research Thinking • <strong>Series 3:</strong> Theory Development & Design • <strong>Series 4:</strong> Research Traditions and Indian Epistemology.
          </p>
        </div>

      </div>
    </Layout>
  );
}