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
    title: "The Top Ten Reasons Why Your Paper Might Not Be Sent Out for Review",
    paperShort: "Martin Kilduff (2007) • Academy of Management Review • Research Note A01",
    apaCitation:
      "Kilduff, M. (2007). Editor’s comments: The top ten reasons why your paper might not be sent out for review. Academy of Management Review, 32(3), 700–702. https://www.jstor.org/stable/20159329",
    pdfPath: "/theory-lab/W1_Tuesday_ED.pdf",
    coreTakeaway:
      "A desk rejection is a sorting decision about mission and audience fit, not a quality judgment. Eight of Kilduff’s ten reasons have nothing to do with how well the work was done—and regrouping his flat list into four diagnostic categories separates an afternoon fix from a structural rebuild.",
    sections: [
      {
        heading: "1 · Start Here",
        body: [
          "You submit. In your head you have already started waiting. Three months, maybe four. Reviewers, comments, a revision, perhaps a second round. You tell yourself not to check the portal.",
          "The reply comes in six days. It is short and it is polite. It says the paper is not a good fit for the journal. There are no reviewer comments, because there were no reviewers. Nobody read it the way you imagined somebody reading it.",
          "That is a desk rejection, and if you have not had one yet, you will. It is the single most common outcome in academic publishing and almost nobody is taught about it before it happens.",
          "The paper this note explains is three pages long. It was written in 2007 by Martin Kilduff, then editor of the Academy of Management Review, and it does something editors very rarely do. It opens the drawer and shows you exactly which pile your paper went into, and why.",
          "Learning Outcomes: After reading this note, you should be able to (1) explain what a desk rejection is and what it is not, (2) name the ten reasons a paper is refused before review and recognize them in your own drafts, (3) distinguish a problem you can fix in an afternoon from one that means the paper must be rebuilt, and (4) run a ten-minute check on any manuscript before you submit it."
        ]
      },
      {
        heading: "2 · The Original Scholarship & How to Read It",
        body: [
          "Publication Details: Academy of Management Review, Vol. 32, Issue 3 (July 2007), pp. 700–702. Length: Three pages. Type: Editor’s comments (not a peer-reviewed article). Author’s role at the time: Editor of AMR. Stable link: jstor.org/stable/20159329.",
          "Access Note: The article sits behind the Academy of Management’s paywall and on JSTOR. Most university libraries in India carry AMR through their Academy of Management or JSTOR subscriptions, and an institutional login will reach it. If you have no institutional access, write to the corresponding address on the Academy’s site, or ask a colleague with access; this series does not circulate copyrighted PDFs.",
          "How to Read It: Three pages, and nothing in it to skip. Twenty minutes with a pen. Read the ten reasons first, then go back to the opening two paragraphs, which explain the logic behind the screen and are easy to skim past on a first pass."
        ]
      },
      {
        heading: "3 · Detailed Explanation: Why Editors Screen & The Ten Reasons",
        body: [
          "What a Desk Rejection Actually Is: Picture a restaurant that serves only one kind of food. Everything on the menu is South Indian. The kitchen is excellent and the chef is famous. You arrive with a recipe for a Chinese dish. It is a very good recipe. You spent years on it. The chef hands it back at the door. Has the chef told you the recipe is bad? No. The chef has told you something much narrower: this is not what we cook here. A desk rejection is a sorting decision, not a quality judgement.",
          "Why Editors Screen Before Review: Kilduff is explicit that the screen is kindness, not dismissal. In his words, it exists because reviewers ‘almost never recommend publication of papers that are conceptually weak or do not conform to our mission,’ and so ‘we believe it better to truncate the review process than subject authors to the disservice of a lengthy review process when acceptance seems very unlikely.’ A fast no is a gift, even though it never feels like one.",
          "Why an Editor Sat Down and Wrote a List: Kilduff notes that his predecessor, Art Brief, had already described AMR in print as ‘the often misunderstood journal.’ Despite that, misdirected submissions kept arriving in such numbers that Kilduff mapped the main exits off the road, offering the ten ‘in no particular order.’",
          "Reason 1 — Reviews of the literature: The paper summarises what others have written, sometimes dressed up as propositions, without adding anything of its own. ‘Many of these papers resemble literature review chapters from dissertations.’ Better homes include the Academy of Management Annals and the International Journal of Management Reviews. This is the student who has read everything and has no opinion.",
          "Reason 2 — Practitioner papers: The audience of AMR is the management and organizations research community. The journal does not publish papers written for practitioners, nor papers that translate existing research for non-specialists (which belong in Academy of Management Perspectives).",
          "Reason 3 — Introductions for the uninformed: AMR is ‘not an outlet for synopses of the work of great thinkers’ such as Max Weber or Michel Foucault. Summarising a figure from another field, however well done, ‘is not sufficient to meet the charge of developing new theoretical insights concerning management and organizations.’ Bringing treasure home is not the same as making something.",
          "Reason 4 — No organizational relevance: Papers on phenomena with ‘no particular resonance for management and organizations’—such as individual behaviour or cognition with no reference to organizational context—belong in a psychology journal such as the Journal of Applied Psychology.",
          "Reason 5 — Targeted at another discipline: While receptive to diverse orientations, AMR does not publish work aimed exclusively at economics, accounting, finance, or literary studies. Any discipline’s tools are welcome; another discipline’s questions are not.",
          "Reason 6 — Replica of already published work: As Kilduff notes, parents of identical twins are keenly aware of the differences between their youngsters, whereas outsiders see the same twins. Even if a previous paper targeted a different audience, AMR will not publish overlapping work or book synopses, and authors must disclose relevant previous submissions in a cover letter.",
          "Reason 7 — Uninvited resubmissions: Once a paper is declined after review, revising and sending it back uninvited results in immediate desk rejection, as the journal checks submission histories.",
          "Reason 8 — Empirical research: Unlike most journals, AMR does not publish empirical hypothesis-testing papers. Data can be used to illustrate conceptual points (as in Chen, 1996), but empirical tests are not sent for review.",
          "Reason 9 — Guideline violations: Length, missing abstracts, spacing, and formatting requirements matter. As AMR’s Information for Contributors states: ‘Poor presentation is sufficient reason for the rejection of a manuscript.’",
          "Reason 10 — No theory: ‘A paper that consists of a collection of thoughts, however elegantly strung together, will not be sent for review unless there is a clear contribution to theory concerning some relevant aspect of management and organizations.’ Kilduff opens the door to three distinct traditions: (a) a Kuhnian emphasis on developing a new paradigm that shifts the frame itself, (b) a critical realist emphasis on exposing constraining structures for emancipation, and (c) a Lakatosian emphasis on strengthening the ‘protective belt’ of auxiliary theories around a research programme’s hard core (pointing to Baert, 2005, and Chalmers, 1999). A fact stays where you found it; an explanation travels. A paper with no theory is a fact that cannot travel.",
          "How the Editorial Closes: Kilduff concludes by naming six qualities of strong theory papers carried over from his 2006 editorial: clarity, logic, vividness, precision, succinctness, and surprise—the bridge to Saturday’s paper by Murray Davis."
        ]
      },
      {
        heading: "4 · Key Concepts",
        body: [
          "Desk rejection: The decision to refuse a manuscript without sending it to reviewers, made by an editor usually within days. It is a judgement about fit with the journal’s mission, not about research quality.",
          "Mission and scope: The published statement of what a journal exists to produce and for whom—a live operational document against which every draft should be tested.",
          "Theoretical contribution: An addition to what a research community is able to think, as distinct from an addition to what it knows. Each qualifying tradition changes the frame rather than merely filling a gap inside it.",
          "Journal fit: The match between a paper and a particular journal’s mission, audience, and form. Fit can be tested in advance without changing a word of the underlying research."
        ]
      },
      {
        heading: "5 · Theory Lab Interpretation: The Ten Are Really Four",
        body: [
          "Kilduff presents a flat list ‘in no particular order.’ I find it far easier to hold, and far easier to teach, in four diagnostic groups—because a beginner reading a flat list of ten cannot tell a typographical problem from a structural one:",
          "Group A — Is this the kind of thing we make? (Form of the work): Reason 1 (literature review), Reason 8 (empirical), Reason 10 (no theory). Particularly for Reason 10, this may mean the paper cannot be saved in its present form without rebuilding.",
          "Group B — Is this for our readers? (Audience and subject): Reason 2 (practitioners), Reason 3 (introductions), Reason 4 (no organizational relevance), Reason 5 (another discipline). The paper may be finished, but it is standing at the wrong door.",
          "Group C — Is this new, and have you been straight with us? (Novelty and conduct): Reason 6 (replica), Reason 7 (uninvited resubmission). Handled through transparency and an honest cover letter.",
          "Group D — Did you take basic care? (Presentation): Reason 9 (guideline violations). Fixable in an afternoon.",
          "Eight of the Ten Are About Audience: Wrong journal, wrong readership, wrong discipline, wrong field, already said to these readers, already said by you, wrong form, wrong presentation. Only two are about the work itself. This connects directly to Saturday’s paper: Kilduff’s death is loud and arrives in six days with a letter; Murray Davis’s death is silent—the paper is published, entirely correct, and nobody ever picks it up.",
          "Reading This From the Other Side of the Desk: Having reviewed more than forty manuscripts for Academy of Management interest groups, journals including the Journal of Entrepreneurship, Polar Record, and FIIB Business Review, and having received the 2024 AOM Entrepreneurship Division Best Reviewer Award, I no longer read these ten reasons as accusations. From the reviewer’s side, the most common sight is not bad work—it is good work in the wrong place."
        ]
      },
      {
        heading: "6 · Apply the Learning: The Ten-Minute Pre-Submission Test",
        body: [
          "Before uploading any manuscript, answer these four prompts in writing:",
          "1. Name three: Name three papers published in your target journal in the last two years that your paper would sit beside on a shelf. If you cannot find three, you have your answer for free.",
          "2. Say what changes: Complete this sentence: ‘After reading my paper, a reader can think ______, which they could not think before.’ If the blank describes what you found rather than what we can now think, you face Reason 10.",
          "3. Name the group: Walk the four groups (A, B, C, D) and identify your highest-risk group honestly.",
          "4. Check the cover letter: Disclose any previous submission, overlapping publication, or conference proceeding plainly in the cover letter.",
          "Pre-Submission Checklist: (1) Makes a claim, not just a summary [Guards 1, 10]; (2) Written for field researchers, not practitioners or newcomers [Guards 2, 3]; (3) Organizational relevance is stated, not assumed [Guards 4]; (4) Question belongs to management [Guards 5]; (5) No substantial overlap with prior work [Guards 6, 7]; (6) History disclosed in cover letter [Guards 6, 7]; (7) Word limit, abstract, spacing, and style match guidelines [Guards 9]; (8) At least one colleague has read it and told you what it argues [Guards all]."
        ]
      },
      {
        heading: "7 · Further Reading & Series Continuation",
        body: [
          "Companion Piece (Read Next): Kilduff, M. (2006). Editor’s comments: Publishing theory. Academy of Management Review, 31(2), 252–255. Where the 2007 list maps the exits, this maps the road.",
          "Historical Context: Brief, A. P. (2003). Editor’s comments: AMR, the often misunderstood journal. Academy of Management Review, 28(1), 7–8.",
          "Philosophy of Science Behind Reason 10: Baert, P. (2005). Philosophy of the social sciences: Towards pragmatism. Polity Press (note: Kilduff’s reference list misprints the author as ‘Baert, B.’ and publisher as Cambridge University Press); and Chalmers, A. F. (1999). What is this thing called science? (3rd ed.). Hackett.",
          "Using Data in a Conceptual Paper: Chen, M.-J. (1996). Competitor analysis and interfirm rivalry: Toward a theoretical integration. Academy of Management Review, 21(1), 100–134.",
          "Next in Series 1: B01 · The Theory Lab · Week 1, Saturday: Davis, M. S. (1971). That’s interesting! Philosophy of the Social Sciences, 1(2), 309–344—explaining why the audience problem Kilduff describes at the gate continues operating long after your paper is in print."
        ]
      }
    ],
    examples: [
      {
        type: "Documented",
        label: "The Editorial Gate & Asymmetric Cost",
        text: "At top management journals such as AMR, editors screen out conceptually weak or off-mission manuscripts within days because external reviewers almost never recommend publication for them—saving authors from a four-month wait ending in an inevitable rejection (Kilduff, 2007)."
      },
      {
        type: "Illustrative",
        label: "The South Indian Restaurant Analogy",
        text: "Bringing a carefully crafted Chinese recipe to a renowned South Indian kitchen results in a polite refusal at the door. The chef is not judging the quality of your cooking—only stating that the dish is not on the restaurant’s menu."
      },
      {
        type: "Contested",
        label: "Pushing Back on 'One Journal's Territory'",
        text: "Critics argue Kilduff’s list merely defends AMR’s turf, or that the 2007 landscape predates Academy of Management Discoveries (launched in 2015 for phenomenon-driven work). While more doors exist today and Reason 8 is specific to non-empirical outlets, higher submission volumes make the initial mission-fit filter even stricter across all journals."
      }
    ],
    limitations:
      "Kilduff (2007) articulates one conceptual journal’s mission statement rather than universal laws: Reason 8 (no empirical research) is true of AMR and false of sister journals like AMJ. Furthermore, the list maps the exits rather than the positive road to publication (covered in Kilduff, 2006), and the launch of Academy of Management Discoveries in 2015 created a dedicated home for phenomenon-driven research that lacked an outlet in 2007."
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