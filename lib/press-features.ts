export type PressFeature = {
  slug: string;
  publication: string;
  title: string;
  date: string;
  format: string;
  sourceUrl: string;
  summary: string;
  takeaways: string[];
  quote?: string;
  quoteAttribution?: string;
};

export const pressFeatures: PressFeature[] = [
  {
    slug: "usa-leaders-aging-as-a-treatable-condition",
    publication: "The USA Leaders",
    title: "Inside the Clinic Where Aging Is Treated as a Curable Condition",
    date: "May 2026",
    format: "Leadership profile",
    sourceUrl: "https://theusaleaders.com/healthcare-leaders/khanh-nguyen/",
    summary:
      "The USA Leaders profiles Dr. Khanh Nguyen’s move from critical care into regenerative medicine—and the clinical philosophy behind her focus on healthspan, cellular function, and individualized care.",
    takeaways: [
      "Her work reframes age-related disease through the shared biology of cellular decline.",
      "Austin Regenerative Therapy combines physician oversight with personalized testing and emerging regenerative protocols.",
      "Transparency, regulation, and evidence remain central when the science or treatment landscape changes.",
      "Her long-term aim is to help move responsible longevity medicine from a boutique offering toward broader clinical adoption.",
    ],
    quote:
      "I envision a world where biological aging becomes a treatable condition rather than an inevitable fate.",
    quoteAttribution: "Dr. Khanh Nguyen in The USA Leaders",
  },
  {
    slug: "longevity-today-young-plasma-therapy",
    publication: "Longevity Today",
    title: "Young Plasma Therapy and Regenerative Medicine Breakthrough in Texas",
    date: "March 2026",
    format: "Video feature",
    sourceUrl:
      "https://longevitytoday.com/articles/young-plasma-therapy-and-regenerative-medicine-breakthrough-in-texas-5kLT9lbKD4A",
    summary:
      "A focused look at the plasma-exchange and cellular-medicine protocols that have placed Dr. Nguyen in the wider longevity conversation—and at why these therapies require more nuance than their headlines suggest.",
    takeaways: [
      "Plasma exchange is being studied as a way to change the circulating environment associated with inflammation and aging.",
      "Newer does not automatically mean better; patient selection and physician supervision matter.",
      "Regenerative medicine is most useful when it is connected to diagnostics, goals, and ongoing measurement.",
      "Responsible longevity care separates plausible mechanisms and emerging evidence from exaggerated promises.",
    ],
  },
  {
    slug: "ben-greenfield-weekly-roundup",
    publication: "Ben Greenfield Life",
    title: "The Conversations Shaping Longevity",
    date: "February 2026",
    format: "Editorial roundup",
    sourceUrl: "https://bengreenfieldlife.com/article/wkru1-30-2-5/",
    summary:
      "Ben Greenfield’s weekly health-and-performance roundup spotlights his conversation with Dr. Nguyen among the research, practices, and emerging ideas influencing modern longevity.",
    takeaways: [
      "The appearance places Dr. Nguyen’s work within a broader health, performance, and biohacking audience.",
      "Their conversation examines young plasma, cellular therapies, and regenerative aesthetics without reducing the subject to a single intervention.",
      "The feature reflects growing mainstream curiosity about the science—and limits—of regenerative medicine.",
    ],
    quote:
      "The Surprising Science of Injecting Young Blood, Salmon Sperm & Stem Cells Into Your Face—and Other Places.",
    quoteAttribution: "Featured episode title, Ben Greenfield Life",
  },
  {
    slug: "voyage-austin-hidden-gems",
    publication: "Voyage Austin",
    title: "Hidden Gems: Meet Khanh Nguyen of Austin Regenerative Medicine",
    date: "May 2022",
    format: "Founder interview",
    sourceUrl:
      "https://voyageaustin.com/interview/hidden-gems-meet-khanh-nguyen-of-austin-regenerative-medicine/",
    summary:
      "In this early founder profile, Dr. Nguyen shares the personal path that led her to medicine, her evolution toward functional and regenerative care, and the principles shaping her Austin practice.",
    takeaways: [
      "Her pursuit of medicine began in childhood and continued after arriving in the United States as a refugee.",
      "She expanded beyond conventional internal medicine to investigate root causes, genetics, epigenetics, and whole-person health.",
      "Her practice connects longevity, hormone optimization, peptide therapy, sexual health, and regenerative aesthetics.",
      "Continuous learning is part of her response to working in a field that is still becoming widely understood.",
    ],
    quote:
      "My goal is to continue to keep learning and apply all the new knowledge in order to best serve my patients.",
    quoteAttribution: "Dr. Khanh Nguyen in Voyage Austin",
  },
  {
    slug: "from-refugee-to-regenerative-doctor",
    publication: "Austin Regenerative Therapy",
    title: "From Refugee to Regenerative Doctor",
    date: "June 2025",
    format: "Personal profile",
    sourceUrl:
      "https://austinregen.com/from-refugee-to-regenerative-doctor-how-dr-khanh-nguyen-found-healing-purpose-and-a-new-path-in-medicine/",
    summary:
      "This personal profile traces the experiences that made medicine deeply personal for Dr. Nguyen—from survival and motherhood to burnout, recovery, and a different way of thinking about healing.",
    takeaways: [
      "Her refugee journey established a lasting belief in resilience, possibility, and the value of asking what comes next.",
      "Her son’s diagnosis reinforced the importance of listening closely and continuing to investigate when the first answer is incomplete.",
      "Her own experience with Graves’ disease and burnout changed how she understood health from the patient’s side of the room.",
      "Regenerative medicine became a way to connect rigorous inquiry with a more personal model of care.",
    ],
    quote: "Never stop asking questions.",
    quoteAttribution: "A principle shaped by Dr. Nguyen’s family experience",
  },
];

export function getPressFeature(slug: string) {
  return pressFeatures.find((feature) => feature.slug === slug);
}
