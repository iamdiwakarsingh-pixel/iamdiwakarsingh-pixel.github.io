import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { researchInterests, publications, projects } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Book, Presentation } from "lucide-react";

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

            {/* Separator */}
            <div className="w-full h-px bg-border my-16" />

            {/* Original Research Content Restored Below */}
            
            {/* Header */}
            <div className="text-center bg-gradient-spiritual p-12 rounded-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Research & Scholarship</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Exploring the intersections of spirituality, indigenous wisdom, and modern organizational management.
              </p>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
              {researchInterests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-border flex flex-col items-center text-center hover:shadow-md transition-shadow h-full justify-center gap-4"
                  >
                    <Icon className="w-10 h-10 text-primary/80" />
                    <span className="text-base font-medium text-secondary">{interest.title}</span>
                  </div>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content: Publications */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" /> Publications
                </h2>
                
                <Tabs defaultValue="journals" className="w-full">
                  <TabsList className="w-full justify-start mb-8 bg-muted/30 p-1 rounded-full h-12">
                    <TabsTrigger value="journals" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Journals</TabsTrigger>
                    <TabsTrigger value="proceedings" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Proceedings</TabsTrigger>
                    <TabsTrigger value="chapters" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Book Chapters</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="journals" className="space-y-4">
                    {publications.journalArticles.map((pub, i) => (
                      <div 
                        key={i}
                        className="p-6 bg-white rounded-xl border border-border shadow-sm hover:border-primary/30 transition-colors"
                      >
                        <div className="flex gap-4">
                          <span className="text-primary font-bold text-xl opacity-50 shrink-0">{i + 1}.</span>
                          <p className="text-foreground/90 leading-relaxed text-lg">{pub}</p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="proceedings" className="space-y-4">
                    {publications.proceedings.map((pub, i) => (
                      <div key={i} className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <p className="text-foreground/90 leading-relaxed text-lg">{pub}</p>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="chapters" className="space-y-4">
                    {publications.bookChapters.map((pub, i) => (
                      <div key={i} className="p-6 bg-white rounded-xl border border-border shadow-sm">
                        <p className="text-foreground/90 leading-relaxed text-lg flex items-start gap-3">
                          <Book className="w-5 h-5 text-accent mt-1 shrink-0" /> {pub}
                        </p>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar: Projects */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-2">
                  <Presentation className="w-6 h-6 text-primary" /> Projects
                </h2>
                
                <div className="space-y-6">
                  {projects.map((project, i) => (
                    <Card key={i} className="bg-white border-orange-100 hover:shadow-md transition-all group">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription>
                          <Badge variant="secondary" className="bg-orange-50 text-orange-700 hover:bg-orange-100 border-none mt-2">
                            {project.role}
                          </Badge>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
