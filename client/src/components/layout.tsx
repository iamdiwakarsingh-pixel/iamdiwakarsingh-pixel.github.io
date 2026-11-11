import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Linkedin, Mail, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Teaching", href: "/teaching" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "The Theory Lab", href: "/theory-lab" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-orange-100"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl md:text-2xl font-serif font-bold text-primary tracking-tight">
            Dr. Diwakar Singh
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  location === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left transition-transform duration-300",
                    location === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </a>
            </Link>
          ))}
          <a
            href={personalInfo.socials.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "block text-lg font-medium py-2",
                  location === item.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-serif font-bold text-accent mb-4">Dr. Diwakar Singh</h3>
          <p className="text-white/70 max-w-xs">
            Blending academic rigor with spiritual wisdom for a sustainable future.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about"><a className="text-white/70 hover:text-accent transition-colors">About</a></Link></li>
            <li><Link href="/research"><a className="text-white/70 hover:text-accent transition-colors">Research</a></Link></li>
            <li><Link href="/teaching"><a className="text-white/70 hover:text-accent transition-colors">Teaching</a></Link></li>
            <li><Link href="/projects"><a className="text-white/70 hover:text-accent transition-colors">Projects</a></Link></li>
            <li><Link href="/theory-lab"><a className="text-white/70 hover:text-accent transition-colors">The Theory Lab</a></Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg text-white mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href={`mailto:${personalInfo.email}`} className="text-white/70 hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
            <a href={personalInfo.socials.linkedIn} target="_blank" rel="noreferrer" className="text-white/70 hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.socials.googleScholar} target="_blank" rel="noreferrer" className="text-white/70 hover:text-accent transition-colors">
              <FileText size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Dr. Diwakar Singh. All rights reserved.
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}