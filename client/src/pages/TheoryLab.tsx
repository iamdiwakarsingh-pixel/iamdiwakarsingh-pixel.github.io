import { Layout } from "@/components/layout";
import { EDITIONS } from "@/lib/editions";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import {
  ExternalLink,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Lock,
  Sparkles,
  FileText,
} from "lucide-react";

interface WeekPlan {
  wk: number;
  tuesday: string;
  saturday: string;
  pairing: string;
  challenges: string;
  tuesdayApa: string;
  saturdayApa: string;
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
        tuesdayApa:
          "Kilduff, M. (2007). Editor's comments: The top ten reasons why your paper might not be sent out for review. Academy of Management Review, 32(3), 700–702. https://doi.org/10.5465/amr.2007.25274943",
        saturdayApa:
          "Davis, M. S. (1971). That's interesting! Towards a phenomenology of sociology and a sociology of phenomenology. Philosophy of the Social Sciences, 1(2), 309–344. https://doi.org/10.1177/004839317100100211",
      },
      {
        wk: 2,
        tuesday: "Colquitt & George (2011) Topic choice (AMJ)",
        saturday: "Sutton & Staw (1995) What theory is not (ASQ)",
        pairing: "What you choose years earlier, and what you must construct in the theory section.",
        challenges: "1, 2",
        tuesdayApa:
          "Colquitt, J. A., & George, G. (2011). From the editors: Part 1: Topic choice. Academy of Management Journal, 54(3), 432–435. https://doi.org/10.5465/amj.2011.61965960",
        saturdayApa:
          "Sutton, R. I., & Staw, B. M. (1995). What theory is not. Administrative Science Quarterly, 40(3), 371–384. https://doi.org/10.2307/2393788",
      },
      {
        wk: 3,
        tuesday: "Grant & Pollock (2011) Setting the hook (AMJ)",
        saturday: "Whetten (1989) What constitutes a theoretical contribution? (AMR)",
        pairing: "The first three pages of an introduction, and the four explanatory blocks underneath them.",
        challenges: "1, 2",
        tuesdayApa:
          "Grant, A. M., & Pollock, T. G. (2011). Publishing in AMJ—Part 3: Setting the hook. Academy of Management Journal, 54(5), 873–879. https://doi.org/10.5465/amj.2011.4000",
        saturdayApa:
          "Whetten, D. A. (1989). What constitutes a theoretical contribution? Academy of Management Review, 14(4), 490–495. https://doi.org/10.5465/amr.1989.4308371",
      },
      {
        wk: 4,
        tuesday: "Barney (2018) Positioning a theory paper (AMR)",
        saturday: "Weick (1989) Disciplined imagination (AMR)",
        pairing: "A formula for the introduction, and the generative imagination it must carry.",
        challenges: "2, 3",
        tuesdayApa:
          "Barney, J. (2018). Editor's comments: Positioning a theory paper for publication. Academy of Management Review, 43(3), 345–348. https://doi.org/10.5465/amr.2018.0112",
        saturdayApa:
          "Weick, K. E. (1989). Theory construction as disciplined imagination. Academy of Management Review, 14(4), 516–531. https://doi.org/10.5465/amr.1989.4308376",
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
        tuesdayApa:
          "Bono, J. E., & McNamara, G. (2011). Publishing in AMJ—Part 2: Research design. Academy of Management Journal, 54(4), 657–660. https://doi.org/10.5465/amj.2011.64869103",
        saturdayApa:
          "Alvesson, M., & Sandberg, J. (2011). Generating research questions through problematization. Academy of Management Review, 36(2), 247–271. https://doi.org/10.5465/amr.2009.0188",
      },
      {
        wk: 6,
        tuesday: "Sparrowe & Mayer (2011) Grounding hypotheses (AMJ)",
        saturday: "Bacharach (1989) Criteria for evaluation (AMR)",
        pairing: "Where hypotheses come from, and what makes a theory judgeable in principle.",
        challenges: "2",
        tuesdayApa:
          "Sparrowe, R. T., & Mayer, K. J. (2011). Publishing in AMJ—Part 4: Grounding hypotheses. Academy of Management Journal, 54(6), 1098–1102. https://doi.org/10.5465/amj.2011.4001",
        saturdayApa:
          "Bacharach, S. B. (1989). Organizational theories: Some criteria for evaluation. Academy of Management Review, 14(4), 496–515. https://doi.org/10.5465/amr.1989.4308374",
      },
      {
        wk: 7,
        tuesday: "Barney (2018) Theory contributions and the AMR review process (AMR)",
        saturday: "Van de Ven (1989) Nothing is quite so practical as a good theory (AMR)",
        pairing: "How the editorial gate works in practice, and what theory is for.",
        challenges: "1, 4",
        tuesdayApa:
          "Barney, J. (2018). Editor's comments: Theory contributions and the AMR review process. Academy of Management Review, 43(1), 1–4. https://doi.org/10.5465/amr.2017.0540",
        saturdayApa:
          "Van de Ven, A. H. (1989). Nothing is quite so practical as a good theory. Academy of Management Review, 14(4), 486–489. https://doi.org/10.5465/amr.1989.4308370",
      },
      {
        wk: 8,
        tuesday: "Zhang & Shaw (2012) Crafting methods and results (AMJ)",
        saturday: "Weick (1995) What theory is not, theorizing is (ASQ)",
        pairing: "What counts as a finished product, and what counts as the process of doing.",
        challenges: "2",
        tuesdayApa:
          "Zhang, Y., & Shaw, J. D. (2012). Publishing in AMJ—Part 5: Crafting the methods and results. Academy of Management Journal, 55(1), 8–12. https://doi.org/10.5465/amj.2012.4001",
        saturdayApa:
          "Weick, K. E. (1995). What theory is not, theorizing is. Administrative Science Quarterly, 40(3), 385–390. https://doi.org/10.2307/2393789",
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
        tuesdayApa:
          "Geletkanycz, M., & Tepper, B. J. (2012). Publishing in AMJ—Part 6: Discussing the implications. Academy of Management Journal, 55(2), 256–260. https://doi.org/10.5465/amj.2012.4002",
        saturdayApa:
          "DiMaggio, P. J. (1995). Comments on 'What theory is not'. Administrative Science Quarterly, 40(3), 391–397. https://doi.org/10.2307/2393790",
      },
      {
        wk: 10,
        tuesday: "Colquitt & Zapata-Phelan (2007) Trends in theory building (AMJ)",
        saturday: "Merton (1968) On sociological theories of the middle range",
        pairing: "How the field scores contribution, and the conceptual altitude theory should aim for.",
        challenges: "2, 3",
        tuesdayApa:
          "Colquitt, J. A., & Zapata-Phelan, C. P. (2007). Trends in theory building and theory testing: A five-decade study of the Academy of Management Journal. Academy of Management Journal, 50(6), 1281–1303. https://doi.org/10.5465/amj.2007.28165855",
        saturdayApa:
          "Merton, R. K. (1968). On sociological theories of the middle range. In Social theory and social structure (Enlarged ed., pp. 39–72). Free Press.",
      },
      {
        wk: 11,
        tuesday: "Locke, Golden-Biddle & Feldman (2008) Making doubt generative (Org Sci)",
        saturday: "Mintzberg (2005) Developing theory about the development of theory",
        pairing: "Doubt as an active method, and cherishing the anomalies that do not fit.",
        challenges: "1, 3",
        tuesdayApa:
          "Locke, K., Golden-Biddle, K., & Feldman, M. S. (2008). Making doubt generative: Rethinking the role of doubt in the research process. Organization Science, 19(6), 907–918. https://doi.org/10.1287/orsc.1080.0398",
        saturdayApa:
          "Mintzberg, H. (2005). Developing theory about the development of theory. In K. G. Smith & M. A. Hitt (Eds.), Great minds in management: The process of theory development (pp. 355–372). Oxford University Press.",
      },
      {
        wk: 12,
        tuesday: "Makadok, Burton & Barney (2018) Making theory contributions (SMJ)",
        saturday: "Corley & Gioia (2011) Building theory about theory building (AMR)",
        pairing: "A concrete procedure for contribution, and the dual tests of originality and utility.",
        challenges: "2, 4",
        tuesdayApa:
          "Makadok, R., Burton, R., & Barney, J. (2018). A practical guide for making theory contributions in strategic management. Strategic Management Journal, 39(6), 1530–1545. https://doi.org/10.1002/smj.2789",
        saturdayApa:
          "Corley, K. G., & Gioia, D. A. (2011). Building theory about theory building: What constitutes a theoretical contribution? Academy of Management Review, 36(1), 12–32. https://doi.org/10.5465/amr.2009.0486",
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
        tuesdayApa:
          "Lange, D., & Pfarrer, M. D. (2017). Editors' comments: Sense and structure—The core building blocks of an AMR article. Academy of Management Review, 42(3), 407–416. https://doi.org/10.5465/amr.2016.0225",
        saturdayApa:
          "Cornelissen, J., Höllerer, M. A., & Seidl, D. (2021). What theory is and can be: Forms of theorizing in organizational scholarship. Organization Theory, 2(3), 1–19. https://doi.org/10.1177/26317877211020328",
      },
      {
        wk: 14,
        tuesday: "Delbridge & Fiss (2013) Styles of theorizing and social organization (AMR)",
        saturday: "Sandberg & Alvesson (2021) Meanings of theory through typification (JMS)",
        pairing: "Styles and types: distinct answers to 'which kind of theory is yours?'",
        challenges: "3",
        tuesdayApa:
          "Delbridge, R., & Fiss, P. C. (2013). Editors' comments: Styles of theorizing and the social organization of knowledge. Academy of Management Review, 38(3), 325–331. https://doi.org/10.5465/amr.2013.0085",
        saturdayApa:
          "Sandberg, J., & Alvesson, M. (2021). Meanings of theory: Clarifying theory through typification. Journal of Management Studies, 58(2), 487–516. https://doi.org/10.1111/joms.12587",
      },
      {
        wk: 15,
        tuesday: "Okhuysen & Bonardi (2011) Combining theoretical lenses (AMR)",
        saturday: "Poole & Van de Ven (1989) Using paradox to build theories (AMR)",
        pairing: "Borrowing from multiple literatures and embracing productive contradiction.",
        challenges: "2, 3",
        tuesdayApa:
          "Okhuysen, G., & Bonardi, J. P. (2011). Editors' comments: The challenges of building theory by combining lenses. Academy of Management Review, 36(1), 6–11. https://doi.org/10.5465/amr.36.1.zok006",
        saturdayApa:
          "Poole, M. S., & Van de Ven, A. H. (1989). Using paradox to build management and organization theories. Academy of Management Review, 14(4), 562–578. https://doi.org/10.5465/amr.1989.4308389",
      },
      {
        wk: 16,
        tuesday: "Barkema, Chen et al. (2015) West meets East: new concepts (AMJ)",
        saturday: "Weick (1999) Theory construction as disciplined reflexivity (AMR)",
        pairing: "Whose concepts count as theory, reflexivity, and non-Western epistemologies.",
        challenges: "3, 4",
        tuesdayApa:
          "Barkema, H. G., Chen, X. P., George, G., Luo, Y., & Tsui, A. S. (2015). West meets East: New concepts and theories. Academy of Management Journal, 58(2), 460–479. https://doi.org/10.5465/amj.2015.4021",
        saturdayApa:
          "Weick, K. E. (1999). Theory construction as disciplined reflexivity: Tradeoffs in the 90s. Academy of Management Review, 24(4), 797–806. https://doi.org/10.5465/amr.1999.2553254",
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
        tuesdayApa:
          "Bansal, P., & Corley, K. (2012). Publishing in AMJ—Part 7: What's different about qualitative research? Academy of Management Journal, 55(3), 509–513. https://doi.org/10.5465/amj.2012.4003",
        saturdayApa:
          "Gioia, D. A., Corley, K. G., & Hamilton, A. L. (2013). Seeking qualitative rigor in inductive research: Notes on the Gioia methodology. Organizational Research Methods, 16(1), 15–31. https://doi.org/10.1177/1094428112452151",
      },
      {
        wk: 18,
        tuesday: "Pratt (2009) Writing and reviewing qualitative research (AMJ)",
        saturday: "Langley (1999) Strategies for theorizing from process data (AMR)",
        pairing: "Writing qualitative data so it is credible, and the seven process strategies.",
        challenges: "2, 4",
        tuesdayApa:
          "Pratt, M. G. (2009). From the editors: For the lack of a boilerplate: Tips on writing up (and reviewing) qualitative research. Academy of Management Journal, 52(5), 856–862. https://doi.org/10.5465/amj.2009.44632557",
        saturdayApa:
          "Langley, A. (1999). Strategies for theorizing from process data. Academy of Management Review, 24(4), 691–710. https://doi.org/10.5465/amr.1999.2553248",
      },
      {
        wk: 19,
        tuesday: "Corley (2016) How editors come to understand theoretical contribution (AMP)",
        saturday: "Langley & Cloutier (2020) What makes a process contribution? (Org Theory)",
        pairing: "How judgment forms in an editor's mind when analyzing dynamic phenomena.",
        challenges: "4",
        tuesdayApa:
          "Corley, K. (2016). Who, me? How editors come to understand theoretical contribution. Academy of Management Perspectives, 30(1), 1–10.",
        saturdayApa:
          "Cloutier, C., & Langley, A. (2020). What makes a process theoretical contribution? Organization Theory, 1(1), 1–32. https://doi.org/10.1177/2631787720902473",
      },
      {
        wk: 20,
        tuesday: "Shaw (2012) Responding to reviewers (AMJ)",
        saturday: "Pfeffer (1993) Barriers to the advance of organizational science (AMR)",
        pairing: "Surviving the conversation with reviewers, and fields unable to agree on standards.",
        challenges: "4",
        tuesdayApa:
          "Shaw, J. D. (2012). From the editors: Responding to reviewers. Academy of Management Journal, 55(6), 1261–1263. https://doi.org/10.5465/amj.2012.4006",
        saturdayApa:
          "Pfeffer, J. (1993). Barriers to the advance of organizational science: Paradigm development as a dependent variable. Academy of Management Review, 18(4), 599–620. https://doi.org/10.5465/amr.1993.9402210152",
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
        tuesdayApa:
          "Hambrick, D. C. (2007). The field of management's devotion to theory: Too much of a good thing? Academy of Management Journal, 50(6), 1346–1352. https://doi.org/10.5465/amj.2007.28166119",
        saturdayApa:
          "Ghoshal, S. (2005). Bad management theories are destroying good management practices. Academy of Management Learning & Education, 4(1), 75–91. https://doi.org/10.5465/amle.2005.16132558",
      },
      {
        wk: 22,
        tuesday: "Van de Ven & Johnson (2006) Knowledge for theory and practice (AMR)",
        saturday: "Carlile & Christensen (2005) Cycles of theory building in research",
        pairing: "Engaged scholarship and the recursive cycle between empirical anomalies and theory.",
        challenges: "1, 4",
        tuesdayApa:
          "Van de Ven, A. H., & Johnson, P. E. (2006). Knowledge for theory and practice. Academy of Management Review, 31(4), 802–821. https://doi.org/10.5465/amr.2006.22527385",
        saturdayApa:
          "Carlile, P. R., & Christensen, C. M. (2005). The cycles of theory building in management research (Working Paper No. 05-057). Harvard Business School.",
      },
      {
        wk: 23,
        tuesday: "Fisher & Aguinis (2017) Using theory elaboration (ORM)",
        saturday: "Shepherd & Suddaby (2017) Theory building: a review and integration (JoM)",
        pairing: "Concrete methods for theory elaboration, and the grand integration of models.",
        challenges: "2",
        tuesdayApa:
          "Fisher, G., & Aguinis, H. (2017). Using theory elaboration to make theoretical advancements. Organizational Research Methods, 20(3), 438–464. https://doi.org/10.1177/1094428116689707",
        saturdayApa:
          "Shepherd, D. A., & Suddaby, R. (2017). Theory building: A review and integration. Journal of Management, 43(1), 59–86. https://doi.org/10.1177/0149206316647102",
      },
      {
        wk: 24,
        tuesday: "Eisenhardt (2021) What is the Eisenhardt method, really? (Strat Org)",
        saturday: "Suddaby (2024) What theory is, what theory was: whence and whither theory",
        pairing: "A foundational method defending itself after thirty years, and looking forward.",
        challenges: "All",
        tuesdayApa:
          "Eisenhardt, K. M. (2021). What is the Eisenhardt method, really? Strategic Organization, 19(1), 147–160. https://doi.org/10.1177/1476127020982866",
        saturdayApa:
          "Suddaby, R. (2024). What theory is, what theory was: Whence and whither theory. Strategic Organization, 22(1), 192–205. https://doi.org/10.1177/14761270231211076",
      },
    ],
  },
];

export default function TheoryLab() {
  const [activeAct, setActiveAct] = useState(1);
  const [openRefs, setOpenRefs] = useState<Record<number, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  // Tracks which PDFs exist on the server (Weeks 1-4 enabled by default; Weeks 5-24 checked dynamically)
  const [availablePdfs, setAvailablePdfs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Automatically check which PDFs for Weeks 5-24 have been uploaded
    const checkFuturePdfs = async () => {
      const results: Record<string, boolean> = {};
      const checks: Promise<void>[] = [];

      for (let wk = 5; wk <= 24; wk++) {
        const tueKey = `W${wk}_Tue`;
        const satKey = `W${wk}_Sat`;

        checks.push(
          fetch(`/theory-lab/W${wk}_Tuesday_ED.pdf`, { method: "HEAD" })
            .then((res) => {
              const contentType = res.headers.get("content-type") || "";
              results[tueKey] = res.ok && contentType.includes("pdf");
            })
            .catch(() => {
              results[tueKey] = false;
            })
        );

        checks.push(
          fetch(`/theory-lab/W${wk}_Saturday_TL.pdf`, { method: "HEAD" })
            .then((res) => {
              const contentType = res.headers.get("content-type") || "";
              results[satKey] = res.ok && contentType.includes("pdf");
            })
            .catch(() => {
              results[satKey] = false;
            })
        );
      }

      await Promise.all(checks);
      setAvailablePdfs(results);
    };

    checkFuturePdfs();
  }, []);

  const toggleRefs = (wk: number) => {
    setOpenRefs((prev) => ({ ...prev, [wk]: !prev[wk] }));
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isTuesdayAvailable = (wk: number) => (wk <= 4 ? true : !!availablePdfs[`W${wk}_Tue`]);
  const isSaturdayAvailable = (wk: number) => (wk <= 4 ? true : !!availablePdfs[`W${wk}_Sat`]);

  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* HERO TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#e26d36] bg-[#e26d36]/10 px-3.5 py-1.5 rounded-full mb-4">
            SERIES 1 • 24 WEEKS
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Understanding Scholarly Contribution
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Most training teaches study design and statistical execution. The Theory Lab teaches the intellectual architecture underneath: how concepts are built, what makes an explanation an explanation, and why papers are desk-rejected.
          </p>
        </div>

        {/* THE 4 PROMISES LEDGER */}
        <div className="bg-card border border-border rounded-xl p-6 mb-10 shadow-xs">
          <h3 className="font-serif font-bold text-lg mb-4 text-foreground">
            The Scholar–Curator Promise Ledger
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-3 bg-muted/40 rounded-lg">
              <strong>1. Real Sources Only:</strong> Author and year in body; full APA 7 citations available on every week card.
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

        {/* START HERE • ORIENTATION (POST 0) CARD */}
        <div className="bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-amber-50/90 border-2 border-[#e26d36]/40 rounded-2xl p-6 sm:p-8 mb-14 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#e26d36] px-3 py-1 rounded-full">
              <Sparkles size={12} /> Start Here • Orientation (Post 0)
            </span>
            <span className="text-xs font-mono text-muted-foreground">8-Slide Launch Carousel</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-3">
            The Architecture of a Theoretical Contribution
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
            New to The Theory Lab? Begin with Post 0 to understand how five decades of management scholarship and journal editorials connect into a single four-stage explanatory framework.
          </p>

          {/* Diagnostic Question Callout */}
          <div className="bg-white/90 border-l-4 border-[#e26d36] p-4 rounded-r-lg mb-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#e26d36] block mb-1">
              Core Diagnostic Question
            </span>
            <p className="text-sm sm:text-base font-serif italic text-foreground">
              “When someone tells you your work needs a stronger theoretical contribution, what do you understand them to mean?”
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <span className="text-xs text-muted-foreground">
              Recommended reading ahead: <strong>Davis (1971)</strong> &amp; <strong>Kilduff (2007)</strong>
            </span>
            <a
              href="/docs/theory-lab-start-here.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e26d36] hover:bg-[#d05c26] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-lg shadow-xs transition-colors"
            >
              View Orientation Slides &amp; PDF <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* ACT TABS */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {SYLLABUS.map((act) => {
            const startWeek = (act.act - 1) * 4 + 1;
            const endWeek = act.act * 4;
            return (
              <button
                key={act.act}
                onClick={() => setActiveAct(act.act)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeAct === act.act
                    ? "bg-[#e26d36] text-white shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Act {act.act}: Weeks {startWeek}–{endWeek}
              </button>
            );
          })}
        </div>

        {/* ACTIVE ACT CONTENT */}
        {SYLLABUS.filter((a) => a.act === activeAct).map((act) => (
          <div key={act.act} className="space-y-6">
            <div className="border-b border-border pb-4 mb-6">
              <h2 className="text-2xl font-serif font-bold text-foreground">{act.title}</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{act.subtitle}</p>
            </div>

            <div className="space-y-4">
              {act.weeks.map((w) => {
                const tueReady = isTuesdayAvailable(w.wk);
                const satReady = isSaturdayAvailable(w.wk);
                const refsExpanded = !!openRefs[w.wk];

                return (
                  <div
                    key={w.wk}
                    className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-xs"
                  >
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
                          Tuesday • The Editor&apos;s Desk
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

                    {/* Collapsible APA 7 Citations Drawer */}
                    <div className="mb-4">
                      <button
                        type="button"
                        onClick={() => toggleRefs(w.wk)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <BookOpen size={13} className="text-[#e26d36]" />
                        <span>View Full References (APA 7)</span>
                        {refsExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      </button>

                      {refsExpanded && (
                        <div className="mt-3 p-4 bg-muted/40 border border-border/70 rounded-lg space-y-3 text-xs">
                          {/* Tuesday APA */}
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <span className="font-mono font-bold text-[10px] uppercase text-amber-700 block mb-0.5">
                                Tuesday Source (APA 7)
                              </span>
                              <p className="text-foreground/90 leading-relaxed select-all">
                                {w.tuesdayApa}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopy(w.tuesdayApa, `tue-${w.wk}`)}
                              className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded border border-border bg-white hover:bg-muted text-[11px] font-medium text-foreground transition-colors"
                              title="Copy Tuesday APA 7 citation"
                            >
                              {copiedId === `tue-${w.wk}` ? (
                                <>
                                  <Check size={12} className="text-green-600" /> Copied
                                </>
                              ) : (
                                <>
                                  <Copy size={12} /> Copy
                                </>
                              )}
                            </button>
                          </div>

                          {/* Saturday APA */}
                          <div className="flex items-start justify-between gap-3 pt-2.5 border-t border-border/50">
                            <div>
                              <span className="font-mono font-bold text-[10px] uppercase text-slate-700 block mb-0.5">
                                Saturday Source (APA 7)
                              </span>
                              <p className="text-foreground/90 leading-relaxed select-all">
                                {w.saturdayApa}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopy(w.saturdayApa, `sat-${w.wk}`)}
                              className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded border border-border bg-white hover:bg-muted text-[11px] font-medium text-foreground transition-colors"
                              title="Copy Saturday APA 7 citation"
                            >
                              {copiedId === `sat-${w.wk}` ? (
                                <>
                                  <Check size={12} className="text-green-600" /> Copied
                                </>
                              ) : (
                                <>
                                  <Copy size={12} /> Copy
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Left (Tuesday) and Right (Saturday) Essay + PDF Links */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-3 border-t border-border/60">
                      {/* Tuesday Actions */}
                      <div className="flex flex-wrap items-center gap-3">
                        {EDITIONS.some((e) => e.slug === `w${w.wk}-tuesday`) && (
                          <Link
                            href={`/theory-lab/w${w.wk}-tuesday`}
                            className="text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-md inline-flex items-center gap-1 transition-colors"
                          >
                            <FileText size={12} /> Read Essay
                          </Link>
                        )}

                        {tueReady ? (
                          <a
                            href={`/theory-lab/W${w.wk}_Tuesday_ED.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-amber-700 hover:underline inline-flex items-center gap-1"
                          >
                            Tuesday PDF <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span
                            className="text-xs font-medium text-muted-foreground/60 inline-flex items-center gap-1.5 cursor-not-allowed select-none"
                            title="Scheduled for upcoming release"
                          >
                            <Lock size={12} /> Tuesday (Scheduled)
                          </span>
                        )}
                      </div>

                      {/* Saturday Actions */}
                      <div className="flex flex-wrap items-center sm:justify-end gap-3">
                        {EDITIONS.some((e) => e.slug === `w${w.wk}-saturday`) && (
                          <Link
                            href={`/theory-lab/w${w.wk}-saturday`}
                            className="text-xs font-semibold text-primary bg-orange-50 hover:bg-orange-100 border border-orange-200 px-2.5 py-1 rounded-md inline-flex items-center gap-1 transition-colors"
                          >
                            <FileText size={12} /> Read Essay
                          </Link>
                        )}

                        {satReady ? (
                          <a
                            href={`/theory-lab/W${w.wk}_Saturday_TL.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
                          >
                            Saturday PDF <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span
                            className="text-xs font-medium text-muted-foreground/60 inline-flex items-center gap-1.5 cursor-not-allowed select-none"
                            title="Scheduled for upcoming release"
                          >
                            <Lock size={12} /> Saturday (Scheduled)
                          </span>
                        )}
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* UPCOMING SERIES ATTACHMENT */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <h4 className="font-serif font-bold text-foreground text-sm mb-2">
            The Extended Curriculum
          </h4>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Series 1 is the entry point. Upcoming: <strong>Series 2:</strong> Foundations of Research Thinking • <strong>Series 3:</strong> Theory Development &amp; Design • <strong>Series 4:</strong> Research Traditions and Indian Epistemology.
          </p>
        </div>
      </div>
    </Layout>
  );
}