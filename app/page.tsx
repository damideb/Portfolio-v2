"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePostHog } from "posthog-js/react";

const projects = [
  {
    id: 3,
    title: "MyHives App",
    category: "Financial Services",
    description:
      "a financial empowerment platform designed to help individuals and communities build wealth through shared savings, honest investments, and real financial education",
    tags: ["React", "APIs", "Dashboard", "Charts"],
    link: "https://myhives.io/",
    featured: true,
    image: "/projects/myHives.png",
  },
  {
    id: 1,
    title: "Loan Platform",
    category: "Financial Technology",
    description:
      "Premium loan application platform for high-value customers with real-time approval workflows and seamless financial integrations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "#",
    featured: true,
    image: "/projects/akopesam.png",
  },
  {
    id: 2,
    title: "Gigrithm Job Platform",
    category: "Work Hiring Solutions",
    description:
      "Enterprise-grade talent acquisition platform connecting companies with global professionals, featuring advanced matching algorithms.",
    tags: ["Next.js", "TypeScript", "Zustand", "Rechart", "Shad cn"],
    link: "#",
    featured: true,
    image: "/projects/gig.png",
  },

  {
    id: 4,
    title: "JobQuest Application Suite",
    category: "Job Search Tools",
    description:
      "Sophisticated job discovery and application management system with smart filtering and career tracking capabilities.",
    tags: ["React", "Redux", "APIs", "UI/UX"],
    link: "https://jobquesst.vercel.app/",
    featured: false,
    image: "/projects/jobQuest.png",
  },
  {
    id: 5,
    title: "Movie Streaming Platform",
    category: "Media & Entertainment",
    description:
      "Full-featured movie streaming application with real-time authentication, dynamic content delivery, and personalized recommendations.",
    tags: ["React", "Firebase", "TMDB API", "Real-time"],
    link: "https://movietrailerr.netlify.app/",
    featured: false,
    image: "/projects/movie.png",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Vue.js",
  "REST APIs",
  "UI/UX Design",
  "Testing Libraries",
  "Docker",
];

const experiences = [
  {
    title: " Frontend Engineer",
    company: "Enyata",
    period: "2025 - Present",
    description:
      "Developing and maintaining scalable frontend applications for various enterprise products",
  },
  {
    title: "Frontend Developer",
    company: "Zarttech",
    period: "2024 - 2025",
    description:
      "Developed and maintained production applications serving 50K+ users. Optimized performance and improved user engagement by 40%.",
  },
  {
    title: "Junior Frontend Developer",
    company: "Scelloo",
    period: "2022 - 2024",
    description:
      "Built responsive web applications and collaborated with design teams to implement pixel-perfect user interfaces.",
  },
];

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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
      {/* Fixed Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-white to-white bg-clip-text"
          >
            DAMILOLA
          </Link>
          <div className="hidden md:flex items-center gap-12 text-sm">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider font-medium"
            >
              About
            </Link>
            <Link
              href="#work"
              className="text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider font-medium"
            >
              Work
            </Link>
            <Link
              href="#experience"
              className="text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider font-medium"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] p-3 text-sm sm:w-[400px]"
              >
                <div className="flex flex-col gap-8 mt-8">
                  <Link
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider font-medium "
                  >
                    About
                  </Link>
                  <Link
                    href="#work"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider font-medium "
                  >
                    Work
                  </Link>
                  <Link
                    href="#experience"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider font-medium "
                  >
                    Experience
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider font-medium "
                  >
                    Contact
                  </Link>
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

          {/* Desktop CTA Button */}
          <Link
            onClick={handleGetInTouch}
            href="#contact"
            className="hidden md:block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:bg-accent/90 transition-all hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold">
                Frontend Developer
              </span>
            </div>
            <h1 className="md:text-6xl text-4xl font-black mb-6 leading-tight tracking-tight">
              Building digital products users trust and love
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            I spend my time building interfaces with Javascript frameworks and
            TypeScript. Focused on clean code, good performance, and designs
            that don't feel clunky.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#work"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all hover:shadow-2xl hover:scale-105"
            >
              View My Work <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:border-accent hover:bg-secondary transition-all hover:scale-105"
            >
              Let's Connect
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center py-24 px-6 border-t border-border relative"
      >
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h2 className="text-3xl md:text-6xl font-black mb-16 tracking-tight">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With 3+ years of professional experience, I've specialized in
                building digital products that users genuinely love. My journey
                spans from ambitious startups to established tech companies,
                where I've consistently delivered high-impact solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a perpetual learner, constantly exploring with new
                technologies and keeping up with the most recent developments in
                web development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I'm deeply committed to mentoring junior
                developers and contributing to the developer community.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider font-semibold mb-6 text-accent">
                  Core Technologies
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, idx) => (
                    <div
                      key={skill}
                      className="px-4 py-4 bg-secondary rounded-xl border border-border hover:border-accent hover:bg-secondary/80 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <p className="font-semibold text-sm relative z-10">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="min-h-screen flex items-center py-24 px-6 border-t border-border"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-6xl font-black mb-4 tracking-tight">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Selection of projects showcasing my expertise in building scalable,
            high performance applications.
          </p>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 hover:bg-secondary/20 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-96 overflow-hidden bg-secondary">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                </div>

                {/* Project Info */}
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-3xl font-bold group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full animate-pulse">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-accent font-semibold mb-2">
                        {project.category}
                      </p>
                    </div>
                    <Link href={project.link} target="_blank">
                      <div className="group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent" />
                      </div>
                    </Link>
                  </div>

                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-secondary text-sm font-medium rounded-full border border-border text-foreground hover:border-accent hover:bg-secondary/80 transition-colors"
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

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center py-24 px-6 border-t border-border"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-6xl font-black mb-16 tracking-tight">
            Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l-2 border-border pb-12 last:pb-0 hover:border-accent transition-colors"
              >
                <div className="absolute -left-4.25 top-0 w-8 h-8 bg-background border-2 border-accent rounded-full" />

                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-accent font-semibold text-lg">
                    {exp.company} · {exp.period}
                  </p>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center py-24 px-6 border-t border-border"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Link
              target="_blank"
              href="mailto:adebzdamzy@gmail.com"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold flex items-center gap-2 hover:bg-accent/90 transition-all hover:shadow-xl group"
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/damilola-adebowale-0585bb193/"
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:border-accent hover:bg-secondary transition-all flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/damideb"
              target="_blank"
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:border-accent hover:bg-secondary transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Link>
          </div>

          {/* Footer */}
          <div className="border-t border-border pt-12">
            <p className="text-sm text-muted-foreground">
              © 2026 Adebowale Damilola. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
