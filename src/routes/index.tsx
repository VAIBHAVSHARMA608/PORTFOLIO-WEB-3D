import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Mail, MapPin, Download, ArrowRight,
  Code2, Database, Cloud, Wrench, Sparkles, Briefcase, GraduationCap,
  ExternalLink, Stethoscope, FileText, Calendar, Car, ShoppingBag,
  ChefHat, Filter, LayoutDashboard, Layers, Server, Palette,
  Search, Rocket, Trophy, Sun, TrendingUp, Coffee,
  BookOpen, ScanFace, MessageSquare, HeartPulse, Sprout, Award,
  BadgeCheck, Library, Box,
} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram } from "react-icons/fa";
import vaibhavPhoto from "@/assets/vaibhav.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhav Sharma — Full-Stack Developer & Startup Co-Founder" },
      { name: "description", content: "Vaibhav Sharma — Full-Stack Web Developer, B.Tech CSE student at CGC, co-founder of Kapstone Healthcare. 25+ projects across AI, healthcare, and SaaS." },
      { property: "og:title", content: "Vaibhav Sharma — Full-Stack Developer" },
      { property: "og:description", content: "Full-Stack Developer building modern AI-powered web products." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Books", href: "#books" },
  { label: "Contact", href: "#contact" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen text-foreground">
      <BackgroundFX />
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Services />
        <Achievements />
        <Books />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-[oklch(0.55_0.25_280/0.35)] blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-[oklch(0.6_0.22_220/0.3)] blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[oklch(0.5_0.2_300/0.25)] blur-3xl animate-blob" style={{ animationDelay: "-12s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_70%)]" />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-6xl px-4 transition-all ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 ${scrolled ? "glass-strong shadow-elev" : "glass"}`}>
          <a href="#top" className="flex items-center gap-2 font-display font-bold">
            <span className="grid place-items-center h-8 w-8 rounded-lg grad-primary text-primary-foreground text-sm">VS</span>
            <span className="hidden sm:inline">Vaibhav<span className="text-gradient">.dev</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-white/5 transition">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a href="#contact" className="rounded-lg grad-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">Hire me</a>
          </div>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-white/5">
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-md text-sm hover:bg-white/5">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block mt-2 rounded-lg grad-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">Hire me</a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <section id="top" ref={ref} className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[oklch(0.75_0.2_150)] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.75_0.2_150)]" />
              </span>
              Available for internships & freelance
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient">Vaibhav Sharma</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl">Full-Stack Developer & Founder.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              B.Tech CSE student at CGC, co-founder of <span className="text-foreground font-medium">Kapstone Healthcare</span>, and builder of 25+ real-world products spanning AI tools, healthcare platforms, IoT, and SaaS dashboards.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl grad-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition">
                View my work <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-white/5 transition">
                Hire me
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a href="https://github.com/VAIBHAVSHARMA608" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition"><Github className="h-5 w-5" /></a>
              <a href="https://linkedin.com/in/vaibhav-sharma-918590348" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition"><Linkedin className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/vaibhav_sharma_608/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-foreground transition"><Instagram className="h-5 w-5" /></a>
              <a href="mailto:vaibhavattri77@gmail.com" aria-label="Email" className="hover:text-foreground transition"><Mail className="h-5 w-5" /></a>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5 text-xs"><MapPin className="h-3.5 w-3.5" /> Panipat, India</div>
            </div>
          </motion.div>
          <motion.div style={{ y }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative mx-auto md:mx-0">
            <div className="absolute -inset-6 rounded-[2rem] bg-[var(--grad-glow)] blur-2xl" />
            <div className="relative glass-strong rounded-[2rem] p-3 shadow-elev animate-float">
              <img src={vaibhavPhoto} alt="Vaibhav Sharma" width={420} height={420} className="rounded-[1.5rem] w-[280px] sm:w-[360px] md:w-[420px] aspect-square object-cover" />
              <div className="absolute -bottom-5 -left-5 glass-strong rounded-2xl px-4 py-3 shadow-elev">
                <div className="text-xs text-muted-foreground">Currently building</div>
                <div className="text-sm font-semibold flex items-center gap-1.5"><Stethoscope className="h-4 w-4 text-[oklch(0.75_0.2_220)]" /> Kapstone Healthcare</div>
              </div>
              <div className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-elev">
                <div className="text-2xl font-display font-bold text-gradient">25+</div>
                <div className="text-xs text-muted-foreground">Projects built</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS", "Express", "Docker", "Kubernetes", "Google Cloud", "Python", "MySQL", "Vercel", "AI Integration"];
  return (
    <div className="relative py-6 border-y border-border overflow-hidden glass">
      <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
        {[...items, ...items].map((it, i) => (
          <span key={i} className="font-mono text-sm text-muted-foreground">◆ {it}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-12 max-w-2xl">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono text-muted-foreground mb-4">
        <Sparkles className="h-3 w-3" /> {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground text-base md:text-lg leading-relaxed">{sub}</p>}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 mx-auto max-w-6xl px-4">
      <SectionTitle eyebrow="About" title="Building products people actually use." sub="I design and ship full-stack web applications — from AI-driven tools and healthcare platforms to e-commerce, IoT, and admin dashboards. I care about clean code, fast UIs, and measurable outcomes." />
      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2 glass rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-3">My story</h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm a second-year B.Tech CSE student at <span className="text-foreground">CGC University</span> with a serious bias toward building. Beyond coursework, I've built 25+ real projects, completed multiple internships, and co-founded <span className="text-foreground">Kapstone Healthcare</span> — a telemedicine platform connecting patients and doctors through AI-powered consultations, appointment booking, and secure medical records.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Before fully moving into software, I worked as an <span className="text-foreground">E-commerce Specialist at K.S Handicraft</span>, a handloom & textile startup focused on curtains, where I managed online storefronts across Amazon, Meesho, Flipkart, IndiaMART and Shopsy. That experience shaped how I think about products — not just code, but real customers, logistics, and revenue.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My focus is full-stack JavaScript — React, Next.js, Node.js, MongoDB — with a strong eye for UX, SEO, and deployment, plus growing experience in DevOps (Docker, Kubernetes) and applied ML. I love collaborating with founders and teams who move fast and care about quality.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {[
              { k: "Role", v: "Full-Stack Developer" },
              { k: "Location", v: "Panipat, India" },
              { k: "Open to", v: "Internships, Freelance" },
            ].map((x) => (
              <div key={x.k} className="rounded-xl border border-border p-3">
                <div className="text-xs text-muted-foreground font-mono">{x.k}</div>
                <div className="text-sm font-medium mt-1">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground mb-4"><GraduationCap className="h-4 w-4" /> Education</div>
          <div className="space-y-5">
            <div className="relative pl-5 border-l-2 border-[oklch(0.7_0.2_275/0.5)]">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full grad-primary" />
              <div className="text-sm font-semibold">B.Tech, Computer Science</div>
              <div className="text-xs text-muted-foreground mt-0.5">CGC University, Jhanjeri · 2024 — 2028</div>
              <div className="text-xs text-muted-foreground mt-1">2nd year · Currently pursuing</div>
            </div>
            <div className="relative pl-5 border-l-2 border-border">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-muted" />
              <div className="text-sm font-semibold">Senior Secondary (Science)</div>
              <div className="text-xs text-muted-foreground mt-0.5">Panipat, Haryana</div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground mb-3"><Trophy className="h-4 w-4" /> Goals</div>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>→ Build and deploy Kapstone from idea to a live application</li>
              <li>→ Land an SDE internship at a product company</li>
              <li>→ Open-source 3 production-grade tools</li>
              <li>→ Publish the Aizen Arc book series</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  { icon: Code2, title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "AngularJS", "Tailwind CSS", "Bootstrap"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Puppeteer"] },
  { icon: Database, title: "Database", items: ["MongoDB", "MySQL", "Schema Design"] },
  { icon: Layers, title: "Languages", items: ["JavaScript", "TypeScript", "Python", "C", "C++"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Vite", "NPM"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["Docker Fundamentals", "Kubernetes Fundamentals", "Amazon EC2 Fundamentals", "Terraform Fundamentals", "CI/CD Fundamentals", "NGINX Fundamentals", "Linux Fundamentals", "Google Cloud Fundamentals", "Vercel Fundamentals", "Netlify Fundamentals"] },
];

const proficiency = [
  { name: "React / Next.js", level: 92 },
  { name: "Node.js / Express", level: 88 },
  { name: "MongoDB", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "UI / UX & Tailwind", level: 90 },
  { name: "Docker / Kubernetes", level: 65 },
  { name: "SEO & Deployment", level: 82 },
];

function Skills() {
  return (
    <section id="skills" className="py-24 mx-auto max-w-6xl px-4">
      <SectionTitle eyebrow="Skills" title="A modern full-stack toolkit." sub="From pixels to production — I'm comfortable across the entire web stack, with growing DevOps and ML experience." />
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
        <div className="grid sm:grid-cols-2 gap-4">
          {skillGroups.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass rounded-2xl p-5 hover:border-[oklch(0.7_0.2_275/0.4)] hover:-translate-y-1 transition group">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="grid place-items-center h-9 w-9 rounded-lg grad-primary text-primary-foreground group-hover:scale-110 transition">
                  <g.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 border border-border text-muted-foreground">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="glass rounded-2xl p-6 md:p-8">
          <h3 className="font-semibold mb-5">Core proficiency</h3>
          <div className="space-y-5">
            {proficiency.map((p, i) => (
              <div key={p.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{p.name}</span>
                  <span className="font-mono text-muted-foreground">{p.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${p.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }} className="h-full grad-primary rounded-full" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <div className="text-xs font-mono text-muted-foreground mb-2">ALSO</div>
            <div className="flex flex-wrap gap-1.5">
              {["SEO Optimization", "API Integration", "Responsive Design", "Authentication", "AI Integration", "Prompt Engineering", "E-Commerce", "Amazon Seller Central"].map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded-md grad-primary text-primary-foreground font-medium">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const experience = [
  {
    role: "Co-Founder & Lead Developer",
    company: "Kapstone Healthcare",
    period: "2026 — Present",
    desc: "Building a healthcare platform connecting patients with doctors through AI consultations, appointment booking, video calls, and secure medical records.",
    tags: ["Next.js", "Node.js", "MongoDB", "Twilio", "AI"],
  },
  {
    role: "Frontend Web Developer",
    company: "Springer Capital",
    period: "2026",
    desc: "Built modern business interfaces and component systems for client-facing web solutions.",
    tags: ["React", "Tailwind", "UI Systems"],
  },
  {
    role: "Web Developer Intern",
    company: "Elevate Labs",
    period: "2025",
    desc: "Worked on responsive frontend interfaces, project implementations and performance optimization.",
    tags: ["React", "Frontend", "Deployment"],
  },
  {
    role: "E-Commerce Specialist",
    company: "K.S Handicraft",
    period: "2024 — 2025",
    desc: "Managed and established online dashboards for a handloom & textile startup (curtains-focused) across Amazon, Meesho, Flipkart, IndiaMART and Shopsy — handling product listing, ad campaign execution, and order supervision. Coordinated logistics including packing, label printing and shipping. Tracked returns, orders and sales performance, and analyzed market trends and competitor activity to optimize marketing campaigns and drive revenue growth.",
    tags: ["E-Commerce", "Amazon Seller Central", "Listing & Optimization", "Logistics"],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 mx-auto max-w-6xl px-4">
      <SectionTitle eyebrow="Experience" title="Internships, founder work & startup roots." sub="Real teams, real deadlines, real users — and real revenue." />
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-8">
          {experience.map((e, i) => (
            <motion.div key={e.company} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className={`relative md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
              <div className="absolute left-4 md:left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full grad-primary ring-4 ring-background" />
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="text-xs font-mono text-muted-foreground">{e.period}</div>
                <h3 className="mt-1 text-xl font-semibold">{e.role}</h3>
                <div className="text-sm text-gradient font-semibold">{e.company}</div>
              </div>
              <div className={`pl-12 md:pl-0 mt-3 md:mt-0 ${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                <div className="glass rounded-2xl p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  <div className={`mt-3 flex flex-wrap gap-1.5 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                    {e.tags.map((t) => (
                      <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 border border-border text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const clientProjects = [
  {
    name: "Deepak Hindu Shiksha Samiti",
    desc: "Official informational website for the institution — programs, activities and contact details.",
    tech: ["GoDaddy Builder", "Web Design"],
    icon: GraduationCap,
    link: "https://deepakhindushikshasamiti.godaddysites.com/", code: "#",
    color: "from-[oklch(0.68_0.2_30)] to-[oklch(0.55_0.22_350)]",
  },
  {
    name: "Pari Industries",
    desc: "Business website for Pari Industries showcasing products, services and contact information.",
    tech: ["GoDaddy Builder", "Web Design"],
    icon: Briefcase,
    link: "https://pariindustries4.godaddysites.com/", code: "#",
    color: "from-[oklch(0.65_0.18_230)] to-[oklch(0.5_0.2_270)]",
  },
  {
    name: "K.S Handicraft",
    desc: "Live storefront website for K.S Handicraft, the handloom & textile (curtains-focused) brand.",
    tech: ["GoDaddy Builder", "E-Commerce"],
    icon: ShoppingBag,
    link: "https://kshandicraft.godaddysites.com/", code: "#",
    color: "from-[oklch(0.7_0.18_140)] to-[oklch(0.55_0.22_200)]",
  },
  {
    name: "Kharar Landran Rental Services",
    desc: "Live self-drive car rental booking site serving the Kharar–Landran area.",
    tech: ["HTML", "CSS", "Bootstrap", "JS"],
    icon: Car,
    link: "https://www.khararlandranrentalservices.in/", code: "#",
    color: "from-[oklch(0.7_0.2_30)] to-[oklch(0.55_0.22_320)]",
  },
  {
    name: "Brother Car Rentals",
    desc: "Live car rental platform with an available-cars listing and booking section.",
    tech: ["HTML", "CSS", "Bootstrap", "JS"],
    icon: Car,
    link: "https://brothercarrentals.in/#available-cars", code: "#",
    color: "from-[oklch(0.72_0.2_20)] to-[oklch(0.55_0.22_340)]",
  },
];

const projects = [
  {
    name: "Kapstone Healthcare",
    role: "Co-Founder & Developer",
    desc: "Healthcare platform connecting patients and doctors via online consultations, appointment booking, AI assistance and secure medical records.",
    tech: ["Next.js", "Node.js", "MongoDB", "Express", "Tailwind"],
    icon: Stethoscope,
    featured: true,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/KAPSTONE-HEALTHCAREs",
    color: "from-[oklch(0.65_0.2_220)] to-[oklch(0.55_0.25_280)]",
  },
  {
    name: "CV GEN AI",
    desc: "AI-powered resume builder with intelligent suggestions, PDF export and template management.",
    tech: ["Node.js", "MongoDB", "Puppeteer", "AI"],
    icon: FileText,
    featured: true,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/CVGENERATORAI",
    color: "from-[oklch(0.7_0.2_300)] to-[oklch(0.55_0.25_260)]",
  },
  {
    name: "CarFlex 2.0",
    desc: "Upgraded self-drive car rental and booking platform with improved fleet management and booking flow.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: Car,
    featured: true,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/CARFLEX-2.0",
    color: "from-[oklch(0.7_0.2_30)] to-[oklch(0.55_0.22_320)]",
  },
  {
    name: "Trading Bot v1.0",
    desc: "Automated trading bot for analyzing market data and executing strategy-based trades.",
    tech: ["Python", "APIs", "Automation"],
    icon: TrendingUp,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/Trading_Bot-v1.0",
    color: "from-[oklch(0.7_0.18_140)] to-[oklch(0.55_0.22_200)]",
  },
  {
    name: "Farmcart (HackNwin)",
    desc: "Hackathon project — a farm-to-consumer marketplace connecting farmers directly with buyers.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: Sprout,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/HackNwin-Farmcart",
    color: "from-[oklch(0.72_0.18_150)] to-[oklch(0.55_0.2_210)]",
  },
  {
    name: "Solar Monitoring System",
    desc: "IoT-based dashboard for tracking solar panel output, efficiency and energy generation trends.",
    tech: ["IoT", "JavaScript", "Dashboards"],
    icon: Sun,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/SOLARMONITORINGSYSTEM",
    color: "from-[oklch(0.78_0.18_85)] to-[oklch(0.6_0.22_30)]",
  },
  {
    name: "Coffee App v1.0",
    desc: "Coffee ordering app concept with menu browsing, cart and order management.",
    tech: ["React", "JavaScript", "UI/UX"],
    icon: Coffee,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/COFFEEAPPV1.0",
    color: "from-[oklch(0.6_0.16_50)] to-[oklch(0.5_0.2_20)]",
  },
  {
    name: "Blog Website v1.0",
    desc: "Full-stack blogging platform with post creation, categories and a clean reading experience.",
    tech: ["Node.js", "MongoDB", "Express"],
    icon: BookOpen,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/Blog-Website-V1.0",
    color: "from-[oklch(0.65_0.18_260)] to-[oklch(0.5_0.2_290)]",
  },
  {
    name: "QuickDesk v1.0",
    desc: "Business productivity and helpdesk-style management application for small teams.",
    tech: ["React", "Tailwind", "Node"],
    icon: LayoutDashboard,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/QuickdeskV1.0-",
    color: "from-[oklch(0.7_0.2_310)] to-[oklch(0.55_0.22_270)]",
  },
  {
    name: "DigiPlat v1.0",
    desc: "Digital platform project exploring multi-module dashboards and modular architecture.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: Layers,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/DIGIPLATV1.0",
    color: "from-[oklch(0.68_0.2_250)] to-[oklch(0.55_0.22_300)]",
  },
  {
    name: "Face Recognition",
    desc: "Face detection and recognition system using computer vision for identity verification.",
    tech: ["Python", "OpenCV", "ML"],
    icon: ScanFace,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/Face-Recognization",
    color: "from-[oklch(0.6_0.2_280)] to-[oklch(0.5_0.22_320)]",
  },
  {
    name: "Springer Capital Assessment",
    desc: "Final assessment project built during the Springer Capital frontend role — business UI components.",
    tech: ["React", "Tailwind", "UI Systems"],
    icon: Briefcase,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/SPRINGER-CAPITAL-FINAL-ASSESMENT",
    color: "from-[oklch(0.65_0.18_230)] to-[oklch(0.5_0.2_270)]",
  },
  {
    name: "Portfolio Website",
    desc: "This personal portfolio — built with React, Tailwind and motion design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    icon: Code2,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/Portfolio-website",
    color: "from-[oklch(0.65_0.22_280)] to-[oklch(0.55_0.25_240)]",
  },
  {
    name: "EDA Credit System",
    desc: "Exploratory data analysis on credit/loan data to surface trends and risk indicators.",
    tech: ["Python", "Pandas", "Data Analysis"],
    icon: Database,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/EDA-Credit-system",
    color: "from-[oklch(0.62_0.18_210)] to-[oklch(0.5_0.2_250)]",
  },
  {
    name: "Hate Speech Detection",
    desc: "NLP model to classify and flag hateful or offensive text content.",
    tech: ["Python", "NLP", "ML"],
    icon: MessageSquare,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/Hate-Speech-detection",
    color: "from-[oklch(0.6_0.22_20)] to-[oklch(0.5_0.22_350)]",
  },
  {
    name: "Heart Failure Detection",
    desc: "ML model predicting heart failure risk from patient health records.",
    tech: ["Python", "Scikit-learn", "ML"],
    icon: HeartPulse,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/heart-failure-detection",
    color: "from-[oklch(0.62_0.2_10)] to-[oklch(0.5_0.22_340)]",
  },
  {
    name: "Coding Ninjas — Project 1",
    desc: "Foundational project completed as part of the Coding Ninjas program.",
    tech: ["JavaScript", "DSA"],
    icon: Code2,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/Coding-Ninja-project-1",
    color: "from-[oklch(0.65_0.18_260)] to-[oklch(0.5_0.2_300)]",
  },
  {
    name: "Data Filtering System",
    desc: "Advanced data filtering and management platform with fast queries and a clean UI.",
    tech: ["React", "Node", "MongoDB"],
    icon: Filter,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/Data-Filtering-System",
    color: "from-[oklch(0.7_0.18_260)] to-[oklch(0.55_0.22_210)]",
  },
  {
    name: "Simple Chat Bot",
    desc: "Rule-based / AI chatbot demo for handling basic conversational queries.",
    tech: ["JavaScript", "Node.js"],
    icon: MessageSquare,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/SIMPLE-CHAT-BOT",
    color: "from-[oklch(0.68_0.18_240)] to-[oklch(0.55_0.2_280)]",
  },
  {
    name: "Simple Car Rental",
    desc: "Early-version self-drive car booking platform for local rentals — responsive and SEO-optimized.",
    tech: ["HTML", "CSS", "Bootstrap", "JS"],
    icon: Car,
    link: "https://khararlandranrentalservices.netlify.app/", code: "https://github.com/VAIBHAVSHARMA608/SIMPLE-CAR-RENTAL",
    color: "from-[oklch(0.7_0.2_30)] to-[oklch(0.55_0.22_320)]",
  },
  {
    name: "Blog Website",
    desc: "An earlier blogging platform prototype focused on simple content publishing.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: BookOpen,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/blogwebsite",
    color: "from-[oklch(0.65_0.18_270)] to-[oklch(0.5_0.2_300)]",
  },
  {
    name: "Fetch User API",
    desc: "Backend service for fetching, paginating and managing user data via REST endpoints.",
    tech: ["Node.js", "Express", "REST API"],
    icon: Server,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/fetch-user-api",
    color: "from-[oklch(0.62_0.18_220)] to-[oklch(0.5_0.2_260)]",
  },
  {
    name: "Simple Query Forms",
    desc: "Form-handling system for capturing and managing user queries/contact requests.",
    tech: ["HTML", "JavaScript", "Node.js"],
    icon: FileText,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/simple-query-forms",
    color: "from-[oklch(0.65_0.18_250)] to-[oklch(0.5_0.2_290)]",
  },
  {
    name: "Simple Book Store",
    desc: "E-commerce style book store with catalog browsing, cart and checkout flow.",
    tech: ["JavaScript", "Node.js", "MongoDB"],
    icon: ShoppingBag,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/simple-book-store",
    color: "from-[oklch(0.68_0.18_140)] to-[oklch(0.55_0.2_190)]",
  },
  {
    name: "Institution Website",
    desc: "Informational website built for an educational institution — programs, admissions and contact.",
    tech: ["HTML", "CSS", "Bootstrap"],
    icon: GraduationCap,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/Institution-website-",
    color: "from-[oklch(0.65_0.18_230)] to-[oklch(0.5_0.2_270)]",
  },
  {
    name: "Forage — Midas (Job Simulation)",
    desc: "Software engineering job simulation completed on Forage, applying real-world engineering workflows.",
    tech: ["Software Engineering", "Forage"],
    icon: Briefcase,
    link: "#", code: "https://github.com/VAIBHAVSHARMA608/forage-midas",
    color: "from-[oklch(0.6_0.18_260)] to-[oklch(0.5_0.22_300)]",
  },
  {
    name: "CookieMice Chef",
    desc: "AI cooking assistant generating recipes, ingredient substitutions and meal plans via Gemini.",
    tech: ["Gemini AI", "Node.js", "Express"],
    icon: ChefHat,
    link: "#", code: "#",
    color: "from-[oklch(0.75_0.18_70)] to-[oklch(0.6_0.22_30)]",
  },
  {
    name: "CraftNest Suite",
    desc: "E-commerce platform for handicraft businesses with seller portal, customer portal and order tracking.",
    tech: ["Node.js", "MongoDB", "Express"],
    icon: ShoppingBag,
    link: "#", code: "#",
    color: "from-[oklch(0.7_0.18_140)] to-[oklch(0.55_0.22_200)]",
  },
];

function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const cats = ["All", "Featured", "AI / ML", "Full-Stack"];
  const visible = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Featured") return p.featured;
    if (filter === "AI / ML") return p.tech.some((t) => ["ai", "gemini", "ml", "nlp", "opencv", "scikit-learn"].some((k) => t.toLowerCase().includes(k)));
    if (filter === "Full-Stack") return p.tech.includes("Node.js") || p.tech.includes("Express");
    return true;
  });
  return (
    <section id="projects" className="py-24 mx-auto max-w-6xl px-4">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono text-muted-foreground mb-4">
            <Sparkles className="h-3 w-3" /> Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Selected work from 25+ projects built.</h2>
          <p className="mt-3 text-muted-foreground">A look at what I've been building — from a healthcare startup to AI/ML tools, IoT dashboards, e-commerce platforms and more.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${filter === c ? "grad-primary text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"}`}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((p, i) => (
          <motion.article key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: (i % 6) * 0.05 }} className={`group relative glass rounded-2xl overflow-hidden hover:-translate-y-1 transition ${p.featured ? "lg:col-span-1" : ""}`}>
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.color} overflow-hidden`}>
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <p.icon className="h-16 w-16 text-white/90 drop-shadow-xl group-hover:scale-110 transition" />
              </div>
              {p.featured && (
                <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-black/40 backdrop-blur text-white border border-white/20">Featured</span>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <div className="flex gap-1">
                  {p.link !== "#" && <a href={p.link} target="_blank" rel="noreferrer" aria-label="Live" className="p-1.5 rounded-md hover:bg-white/10 transition"><ExternalLink className="h-4 w-4 text-muted-foreground" /></a>}
                  {p.code !== "#" && <a href={p.code} target="_blank" rel="noreferrer" aria-label="Code" className="p-1.5 rounded-md hover:bg-white/10 transition"><Github className="h-4 w-4 text-muted-foreground" /></a>}
                </div>
              </div>
              {p.role && <div className="text-xs text-gradient font-semibold mt-0.5">{p.role}</div>}
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-border text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-16">
        <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground mb-2">
          <Rocket className="h-4 w-4" /> 5 live projects shipped
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-6">Client sites live in production.</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {clientProjects.map((p, i) => (
            <motion.a href={p.link} target="_blank" rel="noreferrer" key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative glass rounded-2xl overflow-hidden hover:-translate-y-1 transition block">
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 grid place-items-center">
                  <p.icon className="h-16 w-16 text-white/90 drop-shadow-xl group-hover:scale-110 transition" />
                </div>
                <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-black/40 backdrop-blur text-white border border-white/20">Live</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-border text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

const certifications = [
  {
    title: "Introduction to Kubernetes (LFS158)",
    issuer: "The Linux Foundation",
    date: "Issued Jun 2026 · Expires Dec 2036",
    credId: "LF3dmj47lyuq",
    skills: ["Kubernetes (Basic)"],
    icon: Box,
  },
  {
    title: "IBM Z DevOps Testing Fundamentals",
    issuer: "IBM",
    date: "Issued Jun 2026 · Expires Jun 2036",
    credId: "ISG-DL0060450G",
    skills: ["DevOps", "Testing Fundamentals"],
    icon: BadgeCheck,
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    date: "",
    credId: "",
    skills: ["Software Engineering"],
    icon: Briefcase,
  },
  {
    title: "Full Stack Development by MEAN",
    issuer: "Cisco ThingQbator, IGDTUW",
    date: "",
    credId: "",
    skills: ["Node.js", "AngularJS", "MongoDB", "Express.js"],
    icon: Layers,
  },
  {
    title: "Full Stack Developer",
    issuer: "OneRoadmap",
    date: "Issued Jun 2025",
    credId: "CERT-ACF3A24D",
    skills: ["Prompt Engineering", "HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git", "APIs"],
    icon: Award,
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-24 mx-auto max-w-6xl px-4">
      <SectionTitle eyebrow="Certifications" title="Verified credentials & coursework." sub="Continuous learning across cloud-native infrastructure, DevOps and full-stack development." />
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass rounded-2xl p-6 hover:-translate-y-1 transition">
            <div className="flex items-start gap-3">
              <div className="grid place-items-center h-11 w-11 shrink-0 rounded-xl grad-primary text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold leading-snug">{c.title}</h3>
                <div className="text-sm text-gradient font-medium mt-0.5">{c.issuer}</div>
                {c.date && <div className="text-xs text-muted-foreground mt-1">{c.date}</div>}
                {c.credId && <div className="text-xs font-mono text-muted-foreground mt-0.5">Credential ID: {c.credId}</div>}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-border text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const services = [
  { icon: Code2, title: "Full-Stack Development", desc: "End-to-end web apps with React, Next.js, Node.js and MongoDB." },
  { icon: Palette, title: "Frontend & UI Design", desc: "Responsive, polished interfaces with Tailwind and modern motion." },
  { icon: Server, title: "Backend & APIs", desc: "Scalable REST APIs, authentication systems and database design." },
  { icon: LayoutDashboard, title: "Custom Dashboards", desc: "Admin panels and internal tools tailored to your operations." },
  { icon: Search, title: "SEO Optimization", desc: "Technical SEO, schema, and Search Console-driven improvements." },
  { icon: Rocket, title: "Deployment Support", desc: "CI/CD, Docker, hosting on Vercel/Netlify/GCP, and performance tuning." },
];

function Services() {
  return (
    <section id="services" className="py-24 mx-auto max-w-6xl px-4">
      <SectionTitle eyebrow="Services" title="What I can build for you." sub="Pricing on request — from a single landing page to a full SaaS product." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass rounded-2xl p-6 group hover:-translate-y-1 transition">
            <div className="grid place-items-center h-11 w-11 rounded-xl grad-primary text-primary-foreground mb-4 group-hover:scale-110 transition">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <div className="mt-4 text-xs font-mono text-muted-foreground">Starts from <span className="text-foreground">on request</span></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1400; const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-gradient">{val}{suffix}</div>;
}

function Achievements() {
  const stats = [
    { n: 25, suffix: "+", label: "Projects built", icon: Code2 },
    { n: 5, suffix: "", label: "Live projects shipped", icon: Rocket },
    { n: 4, suffix: "+", label: "Roles & internships", icon: Briefcase },
    { n: 1, suffix: "", label: "Startup co-founded", icon: Sparkles },
    { n: 5, suffix: "+", label: "Certifications earned", icon: Award },
  ];
  return (
    <section className="py-24 mx-auto max-w-6xl px-4">
      <SectionTitle eyebrow="Achievements" title="Numbers that back the story." />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-6 text-center">
            <s.icon className="h-5 w-5 mx-auto text-muted-foreground mb-3" />
            <Counter to={s.n} suffix={s.suffix} />
            <div className="mt-2 text-xs md:text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const books = [
  {
    title: "The Nightmare of the Hell",
    status: "Published",
    desc: "The debut entry in the Nightmare of Hell series — available as an ebook and in print.",
    links: [
      { label: "Read on Bri Books", href: "https://www.bribooks.com/bookstore/the-nightmare-of-the-hell/" },
      { label: "Get it on Amazon", href: "https://www.amazon.com/Nightmare-Hell-Louis-his-nightmare-ebook/dp/B0D72TN8HX/ref=tmm_kin_swatch_0" },
    ],
  },
  {
    title: "Nightmare of Hell 3",
    status: "Published",
    desc: "The third installment continuing the Nightmare of Hell story.",
    links: [
      { label: "Read on Bri Books", href: "https://www.bribooks.com/bookstore/nightmare-of-hell-3/" },
    ],
  },
  {
    title: "Nightmare of Hell — next chapter",
    status: "Upcoming",
    desc: "The next chapter in the Nightmare of Hell series, currently in the works.",
    links: [],
  },
  {
    title: "Aizen Arc",
    status: "Upcoming",
    desc: "A new story arc in development — details to be revealed on release.",
    links: [],
  },
];

function Books() {
  return (
    <section id="books" className="py-24 mx-auto max-w-6xl px-4">
      <SectionTitle eyebrow="Beyond Code" title="I also write." sub="Outside of engineering, I write dark fantasy fiction under the Nightmare of Hell series." />
      <div className="grid md:grid-cols-2 gap-4">
        {books.map((b, i) => (
          <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="grid place-items-center h-11 w-11 shrink-0 rounded-xl grad-primary text-primary-foreground">
                <Library className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{b.title}</h3>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md ${b.status === "Published" ? "bg-white/10 text-foreground" : "border border-border text-muted-foreground"}`}>{b.status}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                {b.links.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {b.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gradient hover:opacity-80 transition">
                        {l.label} <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 mx-auto max-w-6xl px-4">
      <div className="relative overflow-hidden glass-strong rounded-3xl p-8 md:p-14">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[oklch(0.6_0.25_280/0.35)] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[oklch(0.65_0.22_220/0.3)] blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono text-muted-foreground mb-4">
              <Mail className="h-3 w-3" /> Get in touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Have a project in mind? <span className="text-gradient">Let's build it.</span></h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">I'm currently open to internships, freelance gigs and collaborations. The fastest way to reach me is email.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:vaibhavattri77@gmail.com" className="inline-flex items-center gap-2 rounded-xl grad-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition">
                <Mail className="h-4 w-4" /> vaibhavattri77@gmail.com
              </a>
              <a href="https://linkedin.com/in/vaibhav-sharma-918590348" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Github, label: "GitHub", v: "@VAIBHAVSHARMA608", href: "https://github.com/VAIBHAVSHARMA608" },
              { icon: Linkedin, label: "LinkedIn", v: "vaibhav-sharma", href: "https://linkedin.com/in/vaibhav-sharma-918590348" },
              { icon: Instagram, label: "Instagram", v: "@vaibhav_sharma_608", href: "https://www.instagram.com/vaibhav_sharma_608/" },
              { icon: MapPin, label: "Location", v: "Panipat, India", href: "#" },
              { icon: Briefcase, label: "Freelancer", v: "vaibhavattri77", href: "https://www.freelancer.com/u/vaibhavattri77" },
              { icon: Rocket, label: "Fiverr", v: "vaibhav_attri", href: "https://www.fiverr.com/vaibhav_attri/build-fix-and-deploy-your-website" },
            ].map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="glass rounded-2xl p-5 hover:-translate-y-1 transition group">
                <c.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition" />
                <div className="mt-3 text-xs font-mono text-muted-foreground">{c.label}</div>
                <div className="text-sm font-semibold mt-0.5 truncate">{c.v}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 mx-auto max-w-6xl px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center h-7 w-7 rounded-md grad-primary text-primary-foreground text-xs font-bold">VS</span>
          <span>© {new Date().getFullYear()} Vaibhav Sharma. Crafted with care.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/VAIBHAVSHARMA608" target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="https://linkedin.com/in/vaibhav-sharma-918590348" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:vaibhavattri77@gmail.com" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}