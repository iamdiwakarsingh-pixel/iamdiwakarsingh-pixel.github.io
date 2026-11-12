import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { journey } from "@/lib/data";

export default function About() {
  return (
    <Layout>
      <div className="bg-orange-50/30 min-h-screen pb-24 font-serif">
        <section className="container px-4 mx-auto py-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                A Journey of Service, Scholarship & Purpose
              </h1>
            </div>

            {/* Section 1 */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                My professional life began far from academia, in the disciplined and high-stakes environment of the Indian Air Force, where I served for over 20 years. Leading diverse teams, managing critical communication and cybersecurity infrastructure, and training young officers taught me the enduring values of resilience, precision, humility, and service to a larger mission.
              </p>
              <p>
                Yet, as my military career progressed, I felt a deepening calling to understand human behavior, organizational life, and the unseen forces that shape collective action. This inquiry led me to formal studies in Psychology and Human Resource Management, and ultimately to a Ph.D. in Management.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">From Command to Inquiry</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Transitioning from the Air Force to academia was more than a career change; it was an intellectual and personal transformation. I entered research carrying the operational discipline of military service merged with the reflective stillness cultivated through years of meditation and self-inquiry.
                </p>
                <p>
                  During my doctoral research at Dr. B. R. Ambedkar University Delhi, I immersed myself in the study of social enterprises. I observed that mission-driven organizations sustain impact not merely through managerial technique, but through a distinct cultural wisdom that blends frugality, ethical clarity, community governance, and an unwavering commitment to human dignity. This culminated in my dissertation: “Understanding Organizational Culture of Social Enterprises Using a Case Study Approach.”
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">A Scholar Rooted in Indian Ethos</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My published research, spanning journals such as <em>IIMB Management Review</em>, <em>Journal of Social Entrepreneurship</em>, and <em>Social Enterprise Journal</em>, is anchored in Indian philosophical traditions, particularly the construct of <strong>lokasamgraha</strong> (acting for the welfare of all). I examine how indigenous constructs, frugal innovation (<em>jugaad</em>), and paradox management enable organizations to navigate competing social and commercial imperatives under severe resource constraints.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Educator, Ecosystem Builder & Scholar-Curator</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Today, as an Assistant Professor at the Entrepreneurship Development Institute of India (EDII), Ahmedabad, I teach entrepreneurship, innovation, leadership, and business analytics. Beyond the classroom, I lead strategic ecosystem initiatives in the Union Territory of Ladakh, heading the State Program Implementation Unit (SPIU) for the <strong>RAMP</strong> project and co-building <strong>Enterprising Ladakh</strong> with higher education institutions.
                </p>
                <p>
                  Alongside my empirical research, I am the founder and scholar-curator of <strong>The Theory Lab</strong>. Having mentored numerous doctoral and UGC NET aspirants, and having served as an Academy of Management Best Reviewer, I noticed that while research training teaches statistical and qualitative techniques, it rarely teaches the intellectual architecture of theoretical contribution. <em>The Theory Lab</em> bridges five decades of management scholarship and journal editorial wisdom into an accessible, rigorous curriculum for researchers.
                </p>
              </div>
            </div>

            {/* Philosophy Box */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-orange-100 text-center space-y-6 my-12">
              <h2 className="text-3xl font-bold text-primary">A Personal Philosophy</h2>
              <div className="text-xl font-light italic text-secondary space-y-3">
                <p>Purpose is not discovered; it is practiced.</p>
                <p>Leadership is not authority; it is service.</p>
                <p>Innovation is not technology; it is empathy.</p>
              </div>
              <p className="text-lg text-muted-foreground pt-4 border-t border-orange-50">
                I view scholarship as both an intellectual discipline and a social responsibility: a way to understand not only what people and institutions build, but how we validate what we claim to know about them.
              </p>
            </div>

            {/* Timeline Section */}
            <div className="pt-16 border-t border-orange-200">
              <h2 className="text-3xl font-bold text-secondary mb-12 text-center">My Journey</h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                From the disciplined skies of the Indian Air Force to the rigorous halls of academia, my path has been defined by a commitment to service, learning, and understanding the human spirit in organizations.
              </p>

              <div className="relative border-l-2 border-primary/20 pl-8 md:pl-12 space-y-12 max-w-3xl mx-auto">
                {journey.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="relative"
                    >
                      <div className="absolute -left-[42px] md:-left-[58px] top-0 bg-white p-2 rounded-full border border-orange-100 shadow-sm">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-50/50 hover:shadow-md transition-shadow">
                        <span className="text-sm font-semibold text-accent tracking-wider uppercase mb-1 block">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-secondary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </section>
      </div>
    </Layout>
  );
}