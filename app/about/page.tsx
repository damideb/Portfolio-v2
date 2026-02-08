'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function AboutPage() {
  const experiences = [
    {
      period: '2024 – Present',
      title: 'Senior Frontend Developer',
      company: 'Self-Employed',
      description: 'Building exceptional web applications and helping businesses create digital experiences that users love.',
      highlights: ['React.js', 'Next.js', 'TypeScript', 'Full-Stack'],
    },
    {
      period: '2022 – 2024',
      title: 'Frontend Developer',
      company: 'Various Companies',
      description: 'Developed responsive web applications for fintech, recruitment, and entertainment platforms. Led UI/UX improvements and component architecture.',
      highlights: ['React', 'Redux', 'Tailwind CSS', 'API Integration'],
    },
    {
      period: '2020 – 2022',
      title: 'Junior Frontend Developer',
      company: 'Web Startups',
      description: 'Built dynamic web interfaces and learned full-stack development. Collaborated with designers and backend engineers on feature implementation.',
      highlights: ['HTML/CSS', 'JavaScript', 'React Basics', 'Firebase'],
    },
  ];

  const skills = [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material-UI'] },
    { category: 'Backend & Tools', items: ['Node.js', 'PostgreSQL', 'Firebase', 'Git', 'REST APIs'] },
    { category: 'State Management', items: ['Redux', 'Redux Toolkit', 'React Query', 'Context API'] },
    { category: 'Design & Performance', items: ['Responsive Design', 'Web Performance', 'UI/UX Principles', 'Accessibility'] },
  ];

  const milestones = [
    { year: '2020', achievement: 'Started journey in web development' },
    { year: '2021', achievement: 'Built first complex full-stack application' },
    { year: '2022', achievement: 'Developed fintech platforms serving thousands' },
    { year: '2023', achievement: 'Mastered advanced React patterns and architecture' },
    { year: '2024', achievement: 'Now leading technical excellence and mentoring' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl hover:text-accent transition-colors">
            AD
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/#work" className="text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-foreground font-semibold">
              About
            </Link>
            <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Damilola Adebowale
              </h1>
              <p className="text-xl text-accent font-semibold">Frontend Developer & Designer</p>
              <p className="text-lg text-muted-foreground mt-4">
                Building web apps with React and Next.js
              </p>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
              I'm into building things that work well and look good. Been doing this for about 5 years now. I've built everything from loan apps to streaming platforms to job marketplaces. Whatever the project, I try to keep the code clean and the UI intuitive.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/damideb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:border-accent border border-border rounded-lg transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/damilola-adebowale-0585bb193"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:border-accent border border-border rounded-lg transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:adebzdamzy@gmail.com"
                className="p-3 bg-secondary hover:border-accent border border-border rounded-lg transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur-2xl opacity-50"></div>
            <Image
              src="/about-hero.jpg"
              alt="Damilola Adebowale"
              width={500}
              height={600}
              className="relative rounded-2xl object-cover border border-border"
            />
          </div>
        </div>
      </section>

      {/* About Narrative */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-4xl font-black mb-12">My Story</h2>
        
        <div className="prose prose-invert max-w-3xl space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            I got into web development because I wanted to understand how things work. Started messing around with HTML and CSS, then fell down the React rabbit hole. That was about 5 years ago. Since then I've built all kinds of stuff - financial platforms, job boards, streaming apps, analytics dashboards.
          </p>

          <p className="text-lg leading-relaxed">
            React is where I spend most of my time. I've worked on platforms that needed to handle a lot of users and data. The fintech stuff taught me about payments and security. Job platforms taught me about matching algorithms and real-time updates. Each project had its own weird challenges.
          </p>

          <p className="text-lg leading-relaxed">
            The part I actually care about is making things that don't feel broken. A lot of web apps are poorly designed - slow to load, confusing UI, bad mobile experience. I try not to build things like that. I think about how users will actually interact with it, and I care about performance. It matters.
          </p>

          <p className="text-lg leading-relaxed">
            Right now I'm focused on building products that solve real problems. I like working with teams that take code quality seriously and care about user experience. If you're building something interesting and need someone who can handle complex UIs or performance issues, let me know.
          </p>
        </div>
      </section>

      {/* Timeline Experience */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-4xl font-black mb-16">Experience Timeline</h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-accent pl-8 py-4 relative">
              <div className="absolute -left-3 w-4 h-4 bg-accent rounded-full mt-2"></div>
              
              <div className="mb-2">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider">{exp.period}</p>
                <h3 className="text-2xl font-bold mt-2">{exp.title}</h3>
                <p className="text-lg text-accent font-semibold">{exp.company}</p>
              </div>

              <p className="text-muted-foreground text-lg mb-6 max-w-2xl leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 bg-secondary text-sm font-medium rounded-full border border-border"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-4xl font-black mb-16">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="border border-border rounded-xl p-8 bg-secondary/30 hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:border-accent hover:bg-secondary/50 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-4xl font-black mb-16">Milestones</h2>

        <div className="grid md:grid-cols-5 gap-6">
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className="relative border border-border rounded-xl p-6 bg-secondary/30 hover:border-accent hover:bg-secondary/50 transition-all group"
            >
              <div className="absolute top-4 left-4 w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-accent-foreground">
                {idx + 1}
              </div>
              <div className="mt-12">
                <p className="text-2xl font-black text-accent mb-2">{milestone.year}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {milestone.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <div className="relative overflow-hidden rounded-2xl bg-secondary/40 border border-border p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 opacity-50"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Got a project in mind?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to interesting projects. Whether it's a new startup idea, a complex feature, or just code review feedback, feel free to reach out.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Get in Touch <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>© 2024 Damilola Adebowale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
