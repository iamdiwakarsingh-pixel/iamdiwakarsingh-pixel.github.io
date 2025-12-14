import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/clean_spiritual_abstract_geometry_background.png";
import { personalInfo } from "@/lib/data";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-24 pt-24">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90 z-10" />
          <img
            src={heroBg}
            alt="Abstract spiritual background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="container relative z-20 px-4 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-base mb-4">
              Academic Portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 font-serif italic">
              {personalInfo.title}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/about">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all">
                  Explore My Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="/Dr_Diwakar_Singh_CV.pdf" download="Dr_Diwakar_Singh_CV.pdf">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-primary/20 hover:bg-orange-50 text-primary">
                  Download CV <Download className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* New Welcome Message */}
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl font-light leading-relaxed text-secondary/80 bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-white/40 shadow-sm">
              <p>
                Welcome. I’m Dr. Diwakar Singh — a researcher, educator, and former Indian Air Force officer exploring the intersection of organizational culture, indigenous values, and social impact.
              </p>
              <p>
                My work is grounded in a simple belief: sustainable change emerges when human values, purpose, and innovation align.
              </p>
              <p>
                Through my research on social enterprises, indigenous constructs like lokasamgraha, jugaad, and spirituality at work, I seek to understand how mission-driven organizations create meaningful, ethical, and enduring change.
              </p>
              <p>
                Thank you for visiting. I invite you to explore my journey — from two decades of service in the Indian Air Force to a life committed to teaching, research, and nurturing transformational entrepreneurship.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
