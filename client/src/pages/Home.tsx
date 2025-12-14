import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, Download, BookOpen, Users, Anchor } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/clean_spiritual_abstract_geometry_background.png";

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
            <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Academic Portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 font-serif italic">
              {personalInfo.title}
            </p>
            <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-orange-50/50">
        <div className="container px-4 mx-auto text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-8">
              Personal Philosophy
            </h2>
            <p className="text-xl leading-loose text-muted-foreground font-light">
              "{personalInfo.philosophy}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/research">
              <motion.div 
                whileHover={{ y: -5 }}
                className="group cursor-pointer p-8 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-secondary">Research</h3>
                <p className="text-muted-foreground">
                  Exploring Social Entrepreneurship, Indigenous Management, and Organizational Culture.
                </p>
              </motion.div>
            </Link>

            <Link href="/about">
              <motion.div 
                whileHover={{ y: -5 }}
                className="group cursor-pointer p-8 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                  <Anchor size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-secondary">Service</h3>
                <p className="text-muted-foreground">
                  20 years in the Indian Air Force, transitioning to academic leadership and mentorship.
                </p>
              </motion.div>
            </Link>

            <Link href="/teaching">
              <motion.div 
                whileHover={{ y: -5 }}
                className="group cursor-pointer p-8 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto bg-yellow-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-secondary">Teaching</h3>
                <p className="text-muted-foreground">
                  Educating the next generation in Entrepreneurship, Innovation, and Organizational Behavior.
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
