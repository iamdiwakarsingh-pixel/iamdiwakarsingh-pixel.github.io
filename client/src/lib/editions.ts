export interface EditionExample {
  type: "Documented" | "Contested" | "Illustrative";
  label: string;
  text: string;
}

export interface EditionContent {
  slug: string; // e.g., "w1-tuesday"
  wk: number;
  day: "Tuesday" | "Saturday";
  seriesLabel: "The Editor's Desk" | "The Theory Lab";
  title: string;
  paperShort: string;
  apaCitation: string;
  pdfPath: string;
  coreTakeaway: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  examples: EditionExample[];
  limitations: string;
}

export const EDITIONS: EditionContent[] = [
  {
    slug: "w1-tuesday",
    wk: 1,
    day: "Tuesday",
    seriesLabel: "The Editor's Desk",
    title: "Ten Reasons Your Paper Is Not Sent Out for Review",
    paperShort: "Kilduff (2007) • Academy of Management Review",
    apaCitation:
      "Kilduff, M. (2007). Editor's comments: The top ten reasons why your paper might not be sent out for review. Academy of Management Review, 32(3), 700–702. https://doi.org/10.5465/amr.2007.25274943",
    pdfPath: "/theory-lab/W1_Tuesday_ED.pdf",
    coreTakeaway:
      "Desk rejection is rarely about minor methodological flaws; it happens when a manuscript fails to enter an active theoretical conversation, confuses a phenomenon with a theory, or ignores the journal's core audience.",
    sections: [
      {
        heading: "1. What Happens at the Editorial Gate",
        body: [
          "Before a single reviewer sees your manuscript, an associate editor asks one threshold question: if everything in this paper works as claimed, does it advance theoretical understanding in this journal's domain?",
          "Martin Kilduff, writing as Editor of Academy of Management Review, cataloged the recurring patterns behind immediate desk rejections. Across nearly all ten reasons, the failure is architectural rather than cosmetic."
        ]
      },
      {
        heading: "2. The Three Fatal Misconceptions",
        body: [
          "First, describing an important empirical phenomenon—even an urgent global crisis—is not a theoretical contribution unless you explain the underlying causal mechanisms.",
          "Second, summarizing past literature without problematizing it signals a textbook chapter rather than a research frontier. Editors look for unresolved tensions, boundary conditions, or competing explanations.",
          "Third, submitting a manuscript written for a specialized empirical audience to a conceptual journal without reframing its theoretical stakes guarantees an immediate return."
        ]
      },
      {
        heading: "3. Pre-Submission Diagnostic Checklist",
        body: [
          "Before clicking submit, audit your first three pages: Can a busy editor identify the specific theoretical conversation you are joining, the assumption you are challenging, and why the answer matters beyond your empirical setting?"
        ]
      }
    ],
    examples: [
      {
        type: "Documented",
        label: "Editorial Desk-Rejection Rates",
        text: "At top management journals such as AMR and AMJ, between 40% and 60% of submissions are desk-rejected prior to external peer review, primarily due to insufficient theoretical framing rather than statistical errors (Kilduff, 2007)."
      },
      {
        type: "Illustrative",
        label: "Phenomenon vs. Theory Trap",
        text: "A manuscript documenting how rural social enterprises survived supply-chain disruptions during a crisis addresses an important phenomenon, but becomes publishable only when it theorizes the cultural or structural mechanism (such as moral governance or frugal bricolage) explaining how they did so."
      }
    ],
    limitations:
      "Kilduff's editorial reflects the norms of a dedicated conceptual journal (AMR) in the late 2000s; empirical journals weigh data-theory fit differently, though the threshold demand for clear theoretical framing remains."
  },
  {
    slug: "w1-saturday",
    wk: 1,
    day: "Saturday",
    seriesLabel: "The Theory Lab",
    title: "That’s Interesting! The Sociology of What Commands Attention",
    paperShort: "Davis (1971) • Philosophy of the Social Sciences",
    apaCitation:
      "Davis, M. S. (1971). That's interesting! Towards a phenomenology of sociology and a sociology of phenomenology. Philosophy of the Social Sciences, 1(2), 309–344. https://doi.org/10.1177/004839317100100211",
    pdfPath: "/theory-lab/W1_Saturday_TL.pdf",
    coreTakeaway:
      "Theories endure not because they are merely 'true' in a vacuum, but because they systematically challenge an audience's taken-for-granted assumptions without overturning their entire worldview.",
    sections: [
      {
        heading: "1. Why Technically Valid Papers Disappear Quietly",
        body: [
          "Passing the editorial gate is only half the battle. Thousands of methodologically sound articles are published every year and never cited. Murray Davis (1971) asked why certain social science ideas become classics while others vanish.",
          "His answer overturned naive positivism: a theory is judged 'interesting' when it attacks an assumption held by its specific audience—showing that what seemed like X is actually Y."
        ]
      },
      {
        heading: "2. The Goldilocks Zone of Assumption-Challenging",
        body: [
          "Davis mapped twelve logical forms of the 'Index of the Interesting'—including organization (what seems disorganized is actually structured), abstraction (what seems an individual trait is actually a collective property), and evaluation (what seems harmful actually sustains the system).",
          "Crucially, a claim must stay in a narrow cognitive band: if it confirms what readers already believe, they say 'That's obvious.' If it denies every foundational belief they hold, they say 'That's absurd.' Only when it overturns a secondary assumption while leaving core premises intact do readers say 'That's interesting!'"
        ]
      }
    ],
    examples: [
      {
        type: "Documented",
        label: "Davis's Twelve Categories",
        text: "Davis (1971) demonstrated his framework across classic works by Durkheim (suicide as a social rather than purely individual phenomenon) and Goffman (everyday interaction as theatrical dramaturgy)."
      },
      {
        type: "Contested",
        label: "Interestingness vs. Truth",
        text: "Later scholars—including Weick and Bartunek—cautioned that chasing 'counter-intuitive' novelty alone can encourage clever paradox-mongering at the expense of cumulative, reliable empirical knowledge."
      }
    ],
    limitations:
      "Davis analyzes the rhetorical and cognitive reception of theory rather than empirical verification; an interesting proposition still requires rigorous logical or empirical grounding to stand as valid scholarship."
  }
];