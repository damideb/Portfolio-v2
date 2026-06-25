"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePostHog } from "posthog-js/react";
import { experiences, projects, skills } from "@/lib/constants";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const posthog = usePostHog();

  function handleGetInTouch() {
    posthog.capture("get_in_touch", { source: "portfolio" });
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground overflow-hidden">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter">
            DAMILOLA<span className="text-accent">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-12 text-sm">
            {["About", "Work", "Experience", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-4">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-6 text-sm">
                <div className="flex flex-col gap-8 mt-8">
                  {["About", "Work", "Experience", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider font-medium"
                    >
                      {item}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <Link
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 bg-accent text-accent-foreground rounded-lg font-semibold text-center hover:bg-accent/90 transition-all"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link
            onClick={handleGetInTouch}
            href="#contact"
            className="hidden md:block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Get in Touch
          </Link>
        </div>
      </nav>

      <section className="min-h-screen flex items-center pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            <p className="text-accent font-mono text-sm uppercase tracking-widest mb-6">
              Frontend Developer · Lagos, Nigeria
            </p>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
              I build interfaces{" "}
              <span className="text-muted-foreground">
                that feel obvious to use.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12">
              3+ years working with JavaScript, React, and TypeScript across
              fintech, HR, and hiring products. I care about clean code, good
              performance, and the detail work that makes things feel right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#work"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold flex items-center gap-2 hover:bg-accent/90 transition-all hover:shadow-xl hover:shadow-accent/20 hover:scale-105"
              >
                See My Work <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 border border-border rounded-lg font-semibold hover:border-accent hover:bg-secondary transition-all hover:scale-105"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-4">
            About
          </p>
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tight max-w-2xl">
            A bit about me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've spent the last four years building product UIs at startups
                and scale-ups across Nigeria — working on everything from
                payroll dashboards to KYC onboarding flows to hiring tools used
                by enterprise teams.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I like working in codebases where things are a bit complicated.
                State management, form validation at scale, component APIs that
                need to handle a lot of edge cases — that's where I tend to do
                my best work.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outside of work I keep up with what's shipping in the React and
                TypeScript ecosystem, occasionally write about frontend
                patterns, and mentor a few junior devs in my network.
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold mb-6 text-accent font-mono">
                Tools I work with
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-3 bg-secondary rounded-lg border border-border hover:border-accent/50 transition-all duration-200 group"
                  >
                    <p className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-4">
            Work
          </p>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Selected projects
          </h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-xl">
            Things I've shipped — professional work and personal builds.
          </p>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <div className="relative h-72 md:h-96 overflow-hidden bg-secondary">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-xs text-accent font-mono uppercase tracking-widest mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    {project.link && project.link !== "#" && (
                      <Link
                        href={project.link}
                        target="_blank"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors mt-1" />
                      </Link>
                    )}
                  </div>

                  <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-secondary text-xs font-mono rounded-full border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="experience" className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tight">
            Where I've worked
          </h2>

          <div className="space-y-0">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-b border-border last:border-b-0 group"
              >
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    {exp.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-accent text-sm font-semibold mb-4">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight max-w-2xl">
            Let's work on something together
          </h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-xl leading-relaxed">
            Open to new opportunities, contract work, and interesting
            conversations. If you're building something and need a frontend
            engineer, reach out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-24">
            <Link
              target="_blank"
              href="mailto:adebzdamzy@gmail.com"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold flex items-center gap-2 hover:bg-accent/90 transition-all hover:shadow-xl hover:shadow-accent/20 group"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/damilola-adebowale-0585bb193/"
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:border-accent/50 hover:bg-secondary transition-all flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/damideb"
              target="_blank"
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:border-accent/50 hover:bg-secondary transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Link>
          </div>

          <div className="border-t border-border pt-10 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2026 Adebowale Damilola
            </p>
           
          </div>
        </div>
      </section>
    </div>
  );
}
