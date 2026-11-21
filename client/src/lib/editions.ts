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
    title: "That’s Interesting! Towards a Phenomenology of Sociology and a Sociology of Phenomenology",
    paperShort: "Murray S. Davis (1971) • Philosophy of the Social Sciences • Research Note B01",
    apaCitation:
      "Davis, M. S. (1971). That’s interesting! Towards a phenomenology of sociology and a sociology of phenomenology. Philosophy of the Social Sciences, 1(4), 309–344. https://doi.org/10.1177/004839317100100211",
    pdfPath: "/theory-lab/W1_Saturday_TL.pdf",
    coreTakeaway:
      "Truth is the entry condition that gets a paper through peer review, not what makes it remembered. A proposition is judged ‘interesting’ when it denies a taken-for-granted assumption held by its specific audience—and also passes Davis’s second test by changing what readers do on Monday.",
    sections: [
      {
        heading: "1 · Start Here",
        body: [
          "You read something this week. You stopped. You sent it to a friend. Now ask yourself an honest question. Did you send it because it was true? Almost certainly not. Hundreds of true things passed in front of your eyes that day—the share price, the weather, the time of a meeting. All true, all forgotten within the minute.",
          "You sent that one thing because it did something to you. It pushed against something you already believed, and for a second you had to stop and rearrange your thinking. That small moment, the little jolt before you hit forward, is the entire subject of the paper this note explains.",
          "Murray Davis wrote it in 1971. He was a sociologist, not a management scholar, and he was not writing advice for researchers. He was asking a question that had been sitting in plain sight for a century: why are some ideas remembered and most forgotten, when nearly all of them are perfectly correct?",
          "Learning Outcomes: After reading this note, you should be able to (1) say why being correct is not enough without sounding as though you are against being correct, (2) name the assumption your own paper denies in one sentence, (3) recognize the three ways work fails to land and tell them apart, (4) use Davis’s twelve moves to describe what kind of claim a paper is making, and (5) understand why the famous paper everyone cites felt so obvious when you finally read it."
        ]
      },
      {
        heading: "2 · The Original Scholarship & How to Read It",
        body: [
          "Publication Details: Philosophy of the Social Sciences, Vol. 1 (1971), pp. 309–344. Length: Thirty-five pages (the first ten carry the argument). Type: Peer-reviewed essay in philosophy of social science. Author at the time: Northern Illinois University (Sociology).",
          "Bibliographic Verification Note: Library and database records disagree on the issue number—one library copy records this as 1:4 (December 1971), while some indexes list it as 1(2). The year, volume, pages, and journal are not in dispute, and those four are enough for any reader to locate it. This series checks references rather than copying them, and states when a detail cannot be settled rather than picking one quietly.",
          "Access & How to Read It: Published by Sage, clean copies are also openly hosted by several universities for teaching purposes. Thirty-five pages is daunting and unnecessary: read the first ten pages slowly, as they contain the entire argument, and graze the remaining twenty-five pages of propositional examples."
        ]
      },
      {
        heading: "3 · Detailed Explanation: Mechanism, Failure Modes & The Twelve Moves",
        body: [
          "The Sentence That Offends People: Davis opens: ‘It has long been thought that a theorist is considered great because his theories are true, but this is false. A theorist is considered great, not because his theories are true, but because they are interesting.’ Read quickly, this sounds like an attack on truth. He is saying nothing of the kind.",
          "Why Truth Cannot Be What Makes You Remembered: Think about a competitive examination. Everyone who gets through has to clear the qualifying marks—clearing them is compulsory, but it is not what separates the person who gets the post from the thousand others who also cleared them. Everything that gets published is supposed to be true; peer review tests truth at the door. Truth is the entry condition. Students who follow every rule in theory-construction textbooks and nothing else, Davis warns, ‘will turn out work which will be found dull indeed. Their impeccably constructed theories will go unnoted, or, more precisely, unfootnoted.’",
          "The Mechanism: Something is interesting when it denies an assumption its audience already holds. Borrowing from Harold Garfinkel’s ‘routinized taken-for-granted world of everyday life,’ Davis calls this the routinely held assumption-ground. Being interesting is therefore not a property of a claim alone, but a relation between a claim and an audience.",
          "The Three Ways It Goes Wrong: (1) ‘That’s obvious’ — you confirmed what they already believed, so they affirm its truth while rejecting its value. (2) ‘That’s irrelevant’ — your claim touches neither side of their assumption-ground, so they cannot argue with it or use it. (3) ‘That’s absurd’ — you attacked a belief that is gripped rather than merely held, or denied their entire assumption-ground at once, risking being dismissed as a ‘crackpot.’ None of these three failures is a problem with your data; all three are errors in reading the audience.",
          "The Hidden Skill (Empathy): In a rarely quoted footnote, Davis writes: ‘The quality of being imaginative which interesting theorists are praised for possessing consists less of their ability to imagine inventively something novel than of their ability to imagine empathetically what others consider to be traditional.’ You cannot deny an assumption you cannot see.",
          "The Standard Form of a Research Paper: Davis maps the four-part rhetorical skeleton still used today: (1) Articulate the audience’s assumption (‘It has long been thought…’), (2) Deny it (‘But this is false…’), (3) Prove the old assumption wrong and the new one right (‘We have seen instead that…’), and (4) Close with practical consequences (‘Further investigation is necessary to…’).",
          "The Index — Twelve Ways to Turn an Idea Around: Looking at one thing: (1) Organization (what seems disorganized is organized), (2) Composition (what seem several things are one, or one is several), (3) Abstraction (what seems individual is collective—e.g., Durkheim on suicide—or the reverse, e.g., Freud on war), (4) Generalization (what seems local is general, or the reverse), (5) Stabilization (what seems stable is changing, or the reverse), (6) Function (what seems to work badly works well). Looking at several things together: (7) Evaluation (what seems bad is good—e.g., fever fighting illness), (8) Co-relation (what seem unrelated go together), (9) Co-existence (what seem incompatible coexist), (10) Co-variation (a positive relationship is negative), (11) Opposition (what seem similar are opposites), (12) Causation (the effect is actually the cause). Causation is the strongest move and hardest to earn; Generalization is the weakest and most common.",
          "The Second Test (Practical Significance): Denying an assumption is not enough. A theory is ‘truly interesting’ only if it also denies the significance of what the audience is currently doing—otherwise it earns a shrug: ‘So what? Who cares?’ A curiosity surprises you; a contribution makes you work differently on Monday. Davis ends his 35-page essay by aiming that exact line at himself.",
          "What Happens When You Win: Once an interesting claim persuades the field, it gets taught and absorbed into the assumption-ground—becoming ‘obvious.’ This is why famous classics often feel unremarkable when students finally read them: the ground underneath them moved."
        ]
      },
      {
        heading: "4 · Key Concepts",
        body: [
          "The interesting: A relation between a claim and an audience, occurring when a proposition denies an assumption that specific audience already holds.",
          "The assumption-ground: Davis’s term, built on Garfinkel, for the web of propositions an audience takes for granted without examining.",
          "The index of the interesting: Davis’s descriptive catalogue of twelve logical moves (twenty-four with inverses) by which famous social theories denied assumptions—best used diagnostically rather than as a brainstorming formula.",
          "The second test (practical significance): The requirement that a claim must also alter the significance of what the audience is currently doing, separating a true contribution from a mere curiosity.",
          "The half-life of an idea: The process by which a winning proposition is absorbed into the background assumptions of a field and ceases to feel surprising."
        ]
      },
      {
        heading: "5 · Theory Lab Interpretation: The Closed Door & Reading My Own Work",
        body: [
          "The Closed Door: Picture a door to hold the three failure modes together. If the door stands wide open, you walk through and feel nothing (‘That’s obvious’). If there is no door at all, just wall, you walk past without noticing (‘That’s irrelevant’). If the door is bolted and reinforced, you bounce off holding your nose (‘That’s absurd’). The interesting idea is the door that is closed but not locked: you push, it gives way, and you step somewhere unexpected.",
          "Reading My Own Work Through the Index: Take my paper in IIMB Management Review on Lokasamgraha as an indigenous construct for social entrepreneurship. Against Davis’s index, the move is Generalization: what is assumed to belong to one tradition is shown to explain how mission-driven enterprises hold together generally, denying the assumption that management theory comes from one part of the world while everywhere else supplies cases. Take my paper on jugaad and paradox in Indian social enterprises: usually dismissed as a makeshift compromise, the move is Evaluation and Function—showing that what looks like a deficiency holds competing demands together. Davis’s index did not generate those papers, but it gave me the one-sentence explanation reviewers ask for.",
          "[ YOUR STORY HERE ] Add two or three sentences recalling a moment when a reviewer, supervisor, or colleague told you your work was correct but did not land, or asked what the contribution was—and how you would answer now.",
          "Two Deaths, One Cause: Kilduff’s death is loud and arrives in six days with a letter; Davis’s death is silent—the paper is published, entirely correct, and left unfootnoted. Both are failures of audience, not execution.",
          "Why a 1971 Essay Still Matters: Sitting journal editors still rely on it—Colquitt and George cite Davis on curiosity, Barney echoes him against ‘nobody has studied this before,’ and Weick places ‘that’s interesting’ at the center of theorizing. Once absorbed, you stop asking ‘is my contribution interesting?’ and start asking ‘interesting to whom, and what do they currently believe?’"
        ]
      },
      {
        heading: "6 · Apply the Learning: The Two-Minute Test",
        body: [
          "Write one sentence about your current paper starting with: ‘It has long been thought that…’ followed by ‘…but in fact…’ If you cannot write it, the target assumption has not been identified yet.",
          "Three Diagnostic Checks: (1) Does anyone actually hold the first half? Name a paper, reviewer, or colleague who believes it—otherwise you invented a straw man that lands as irrelevant. (2) Which of the twelve moves are you making? If it is Generalization alone, decide whether that is sufficient. (3) Does your finding change what readers should be doing on Monday? If not, it fails Davis’s second test."
        ]
      },
      {
        heading: "7 · Further Reading & Series Continuation",
        body: [
          "Read Immediately Afterwards: Tihanyi, L. (2020). From ‘that’s interesting’ to ‘that’s important.’ Academy of Management Journal, 63(2), 329–331—an essential editorial corrective warning against chasing the appearance of surprise over substance.",
          "Source of Davis’s Central Idea: Garfinkel, H. (1967). Studies in ethnomethodology. Prentice-Hall.",
          "Where Davis Reappears in Series 1: Colquitt & George (2011) on topic choice (Week 2, Tuesday); Weick (1989) on disciplined imagination (Week 4, Saturday); Alvesson & Sandberg (2011) on problematization (Week 5, Saturday); and Kuhn (1962), The Structure of Scientific Revolutions, for paradigm shifts at the field level.",
          "Next in Series 1: A02 · The Editor’s Desk · Week 2, Tuesday: Colquitt and George (2011) on topic choice."
        ]
      }
    ],
    examples: [
      {
        type: "Documented",
        label: "Durkheim on Suicide & Freud on War (Abstraction Move)",
        text: "Davis (1971) illustrates the Abstraction move—showing that what appears purely individual is actually a collective property—through Durkheim’s demonstration that suicide rates follow stable sociological patterns, alongside Freud’s inverse move treating war as a psychological phenomenon."
      },
      {
        type: "Illustrative",
        label: "Lokasamgraha & Jugaad Through Davis’s Index",
        text: "Framing lokasamgraha as a generalizable organizational construct executes Davis’s Generalization move (challenging Western-only theory generation), while showing how jugaad sustains competing social and commercial demands executes the Evaluation and Function moves."
      },
      {
        type: "Contested",
        label: "Counter-Intuitive Novelty vs. Substance (Tihanyi, 2020)",
        text: "Davis’s essay is descriptive rather than a discovery method, assumes a single unified audience rather than fragmented subfields, and selects on famous outcomes. As AMJ editor Laszlo Tihanyi (2020) cautioned, fifty years of chasing ‘that’s interesting’ can reward contrived surprise over genuine importance."
      }
    ],
    limitations:
      "Davis (1971) offers a sociological description of audience reception rather than a method for generating or validating empirical findings. His framework assumes a relatively unified audience assumption-ground (whereas modern management subfields are fragmented), selects retrospectively on famous theories, and—as Tihanyi (2020) later noted—can encourage superficial contrarianism if divorced from practical and empirical importance."
  },
];