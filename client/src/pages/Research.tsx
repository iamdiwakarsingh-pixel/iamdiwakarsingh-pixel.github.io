import { Layout } from "@/components/layout";
import { motion } from "framer-motion";

export default function Research() {
  return (
    <Layout>
      <div className="bg-background min-h-screen pb-24 font-serif">
        <section className="container px-4 mx-auto py-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Intro */}
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
                Research Narrative
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                My research sits at the intersection of organizational culture, indigenous management, social entrepreneurship, and spirituality. I aim to understand how purpose-driven organizations navigate complexity, resource scarcity, and social missions while remaining resilient and values-driven.
              </p>
            </div>

            {/* Core Questions */}
            <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100">
              <h2 className="text-3xl font-bold text-secondary mb-6">Core Questions That Guide My Work</h2>
              <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6 marker:text-primary">
                <li>How do social enterprises balance dual missions of impact and sustainability?</li>
                <li>What cultural mechanisms enable frugality without compromising quality or dignity?</li>
                <li>How do indigenous constructs like lokasamgraha influence organizational behavior?</li>
                <li>Can spirituality be a legitimate, ethical, and practical resource for leadership?</li>
                <li>How do individuals and organizations enact hybridity — blending business logic with compassion and community wisdom?</li>
              </ul>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Research Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My work is qualitative, interpretive, and deeply ethnographic. I spend time in the field — in hospitals, villages, counseling rooms, training centers — observing how people live their values through daily actions.
              </p>
              <div className="bg-white p-6 rounded-xl border border-border">
                <p className="text-lg font-medium text-secondary mb-4">This approach helps uncover:</p>
                <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"/> Tacit cultural norms</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"/> Invisible tensions</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"/> Micro-level practices</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"/> Meaning-making processes</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"/> Spiritual influences on decision-making</li>
                </ul>
              </div>
            </div>

            {/* Themes */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Themes Emerging from My Scholarship</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Jugaad as a cultural logic for navigating paradoxes",
                  "Frugal innovation as a moral, not just economic, practice",
                  "Spirituality at work as a source of ethical grounding",
                  "Cultural hybridity in mission-driven organizations",
                  "Learning orientation in social enterprises",
                  "Sustainability frameworks rooted in Indian ontologies"
                ].map((theme, i) => (
                  <div key={i} className="p-4 bg-white shadow-sm border border-border rounded-lg flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">✦</span>
                    <span className="text-lg text-secondary/90">{theme}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="text-center bg-secondary text-white p-12 rounded-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10">
                <h2 className="text-3xl font-bold text-accent mb-6">My Vision as a Scholar</h2>
                <p className="text-xl font-light leading-relaxed text-white/90">
                  I aspire to build knowledge that is indigenous yet globally relevant, empirical yet deeply human, theoretical yet accessible, spiritual yet academically rigorous. Ultimately, I hope my work contributes to creating enterprises that are not only successful — but soulful.
                </p>
              </div>
            </div>

          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
