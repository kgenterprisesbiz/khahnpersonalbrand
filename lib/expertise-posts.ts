export type ExpertisePost = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readTime: string;
  perspective: string;
  lens: {
    established: string;
    emerging: string;
    unknown: string;
    ask: string;
  };
  body: string[];
  sources?: { label: string; url: string }[];
};

export const expertisePosts: ExpertisePost[] = [
  {
    slug: "young-plasma-exchange",
    title: "Young Plasma Exchange: What We Know—and What We Don’t",
    dek: "The real science behind one of longevity medicine’s most talked-about therapies.",
    category: "Plasma Exchange", readTime: "7 min",
    perspective: "Promising does not mean proven—and uncertainty is not the same as irrelevance.",
    lens: {
      established: "Plasma exchange is an established medical procedure for specific clinical indications, with known operational and safety requirements.",
      emerging: "Researchers are studying changes in inflammatory, proteomic, and biological-age markers after different plasma-based interventions.",
      unknown: "Current evidence does not establish that these approaches extend human life or reliably improve long-term function in healthy people.",
      ask: "Which procedure is actually being offered, for what outcome, with what evidence, screening, monitoring, and physician oversight?",
    },
    body: [
      "The phrase “young blood” makes for an irresistible headline. It also makes careful science harder to hear. Plasma-based longevity research is neither a fountain-of-youth story nor something that should be dismissed because the language surrounding it can sound sensational.",
      "Plasma carries proteins, signaling molecules, antibodies, and other factors throughout the body. Researchers are studying whether changing that circulating environment may influence inflammation and biomarkers associated with aging. Human research has produced intriguing signals, but biomarkers are not the same thing as proof of longer life or better long-term function.",
      "There is also an important distinction between therapeutic plasma exchange, plasma dilution, and infusing plasma from younger donors. Those approaches are often blended together in public conversation even though they are not interchangeable.",
      "The responsible question is not “Does this reverse aging?” It is: What outcome are we trying to improve, what evidence supports this protocol, what are the risks, and how will we know whether it helped? That is a less dramatic conversation. It is also the one worth having.",
    ],
    sources: [
      { label: "2025 human plasmapheresis biomarker study", url: "https://pubmed.ncbi.nlm.nih.gov/40592961/" },
      { label: "2025 multi-omics therapeutic plasma exchange study", url: "https://pubmed.ncbi.nlm.nih.gov/40424097/" },
    ],
  },
  {
    slug: "peptides-without-hype", title: "Peptides, Without the Hype",
    dek: "What peptide therapy is designed to do—and why medical supervision matters.",
    category: "Peptide Therapy", readTime: "6 min",
    perspective: "A trending protocol is not a treatment plan.",
    lens: {
      established: "Some peptide-based medications are FDA approved for defined uses and have established prescribing information.",
      emerging: "A broader group of peptides is being studied for repair, metabolism, immune signaling, and other potential applications.",
      unknown: "For many promoted compounds, robust human efficacy, optimal dosing, long-term safety, and product quality remain uncertain.",
      ask: "What is the regulatory status, evidence level, source, dose, monitoring plan, and reason this particular peptide fits this particular person?",
    },
    body: [
      "Peptides are short chains of amino acids that can act as signals in the body. That broad definition is part of the problem: “peptide therapy” can sound like one treatment when it actually describes many different compounds, mechanisms, evidence levels, and regulatory circumstances.",
      "Some peptide-based medications are FDA approved for specific uses. Other substances promoted online are compounded or unapproved and may have limited human safety data. Those categories should never be blurred for the sake of a cleaner sales pitch.",
      "The right conversation begins with a goal, a medical history, current medications, appropriate testing, and an honest discussion about what is known. It does not begin with a protocol copied from a creator’s morning routine.",
      "Promising medicine can still be careful medicine. In fact, it has to be. The more quickly public enthusiasm moves, the more deliberately physicians need to explain sourcing, evidence, monitoring, and risk.",
    ],
    sources: [
      { label: "FDA: safety risks associated with certain compounded substances", url: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks" },
      { label: "FDA: understanding the risks of compounded drugs", url: "https://www.fda.gov/drugs/human-drug-compounding/understanding-risks-compounded-drugs" },
    ],
  },
  {
    slug: "stem-cells-exosomes-and-the-regulatory-reality", title: "Stem Cells, Exosomes, and the Regulatory Reality",
    dek: "The questions patients should ask before excitement outruns evidence.",
    category: "Regenerative Medicine", readTime: "8 min",
    perspective: "Innovation and caution belong in the same room.",
    lens: {
      established: "Product identity, source, processing, sterility, intended use, and regulatory status materially affect risk.",
      emerging: "Cellular and extracellular-vesicle research continues to explore potential regenerative mechanisms and clinical applications.",
      unknown: "A promising mechanism does not establish that a commercial product is safe or effective for the condition being marketed.",
      ask: "What exactly is being administered, is it approved for this use, what human evidence exists, and what adverse events have been reported?",
    },
    body: [
      "Few phrases in medicine carry more hope—or more confusion—than “stem cells.” Patients may encounter the same words used to describe approved products, investigational research, autologous procedures, and unapproved commercial treatments. Those are not equivalent.",
      "The FDA has repeatedly warned consumers about unapproved regenerative products marketed for a wide range of diseases and conditions. It has also stated that there are currently no FDA-approved exosome products. That regulatory reality belongs near the beginning of the conversation, not buried in fine print.",
      "This does not mean regenerative science lacks potential. It means the exact product, source, processing, intended use, evidence, and oversight matter. A compelling mechanism in a laboratory is not automatically a demonstrated clinical benefit in people.",
      "A credible clinician should welcome detailed questions: What exactly is being administered? Is it approved for this use? What human evidence exists? What adverse events have been reported? What other options are available? In an emerging field, transparency is not a barrier to progress. It is how progress earns trust.",
    ],
    sources: [
      { label: "FDA consumer alert on stem cells and exosomes", url: "https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" },
      { label: "FDA patient information on regenerative medicine therapies", url: "https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/important-patient-and-consumer-information-about-regenerative-medicine-therapies" },
    ],
  },
  {
    slug: "hallmarks-of-aging", title: "The Hallmarks of Aging: A Better Map, Not a Magic Answer",
    dek: "Why scientists study the underlying biology of aging—and what that framework can and cannot tell us.",
    category: "Longevity Science", readTime: "7 min",
    perspective: "Aging is a network of interacting processes, not one switch waiting to be flipped.",
    lens: {
      established: "Aging involves multiple interacting biological processes associated with declining resilience and increased disease risk.",
      emerging: "Researchers are testing whether targeting individual or combined hallmarks can improve meaningful measures of healthspan.",
      unknown: "No single hallmark, marker, or intervention currently proves that an individual has meaningfully slowed aging.",
      ask: "Does the intervention improve function, symptoms, risk, or quality of life—not merely move an interesting laboratory number?",
    },
    body: [
      "The hallmarks of aging give researchers a way to organize the biological changes associated with getting older—changes involving cellular senescence, mitochondrial function, genomic stability, protein maintenance, stem-cell exhaustion, and more.",
      "This framework matters because many age-related diseases share underlying biology. Studying those shared mechanisms may help researchers understand why different conditions often appear together and where future interventions might have broader effects.",
      "But a scientific map is not a consumer checklist. Measuring one marker or targeting one pathway does not establish that a person has slowed aging in a meaningful way. Human function, symptoms, risk, quality of life, and long-term outcomes still matter.",
      "The useful promise of the hallmarks is not that they make aging simple. It is that they help us ask more precise questions about a deeply interconnected process—and recognize when a claim is far more certain than the science supporting it.",
    ],
    sources: [
      { label: "National Institute on Aging: research on the hallmarks of aging", url: "https://www.nia.nih.gov/research/blog/2022/03/three-interconnected-foas-encourage-fresh-look-aging-hallmarks" },
      { label: "National Institute on Aging: cellular senescence and healthier aging", url: "https://www.nia.nih.gov/news/does-cellular-senescence-hold-secrets-healthier-aging" },
    ],
  },
  {
    slug: "biomarkers-are-not-the-finish-line", title: "Biomarkers Are Useful. They Are Not the Finish Line.",
    dek: "What a better-looking number can—and cannot—tell you about living better for longer.",
    category: "Healthspan", readTime: "6 min",
    perspective: "A number matters only when we understand what it represents.",
    lens: {
      established: "Validated biomarkers can reveal risk, track physiology, and help clinicians monitor response to treatment.",
      emerging: "Multi-omics data and biological-age tools may help detect patterns that conventional snapshots miss.",
      unknown: "A better score does not automatically mean a person will feel better, avoid disease, or live longer.",
      ask: "Is the test validated for this use, is the change reproducible, and does it connect to an outcome that matters to the patient?",
    },
    body: [
      "Longevity medicine is full of measurements: inflammatory markers, metabolic data, biological-age estimates, cardiovascular indicators, body composition, and more. Good data can reveal patterns that symptoms alone may miss.",
      "The trap is treating every movement in a biomarker as a meaningful health outcome. A change may be statistically interesting without proving that someone will feel better, function better, avoid disease, or live longer.",
      "That does not make biomarkers useless. It makes context essential. Was the test validated for this purpose? How large was the change? Is it reproducible? Does it connect to an outcome that matters to the patient? Could another factor explain it?",
      "The goal is not to collect the most impressive dashboard. It is to use the right measurements to make better decisions—and to remain willing to change course when the person and the numbers tell different stories.",
    ],
  },
  {
    slug: "physician-burnout", title: "The Day I Stopped Calling Burnout Normal",
    dek: "Medicine trained me to endure almost anything. It did not teach me when to stop.",
    category: "Personal Perspective", readTime: "5 min",
    perspective: "Familiar is not the same as healthy.",
    lens: {
      established: "Chronic occupational stress and burnout can affect wellbeing, performance, relationships, and physical health.",
      emerging: "Organizations are exploring structural, cultural, and individual approaches to prevent burnout and support recovery.",
      unknown: "There is no universal reset; the source of strain and the path forward differ for every person and workplace.",
      ask: "What has become normalized that you would never recommend to someone in your care?",
    },
    body: [
      "For years, I treated exhaustion like evidence that I was doing the work correctly. Long shifts. High stakes. One more patient, and then one more after that.",
      "Burnout is easy to normalize in medicine because everyone around you is tired, too. The culture can reward endurance long after endurance stops being admirable and starts becoming dangerous.",
      "My own health eventually forced a question I had avoided: If I would not tell a patient to keep living this way, why was I giving myself different advice? That question changed more than my schedule. It changed the kind of medicine I wanted to practice.",
      "Changing course was not leaving medicine. It was choosing to practice it with the same attention I asked my patients to give their own lives—and accepting that prevention should apply to physicians, too.",
    ],
  },
];

export function getExpertisePost(slug: string) { return expertisePosts.find((post) => post.slug === slug); }
