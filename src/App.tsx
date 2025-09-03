import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Calendar, ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

// ---------- Content you can customize ----------
const NAME = "Alan Lau";
const TAGLINE = "Software Engineer • Full-Stack • Cloud";
const SUMMARY =
  "I build delightful, performant web apps with a focus on clean UX and reliable engineering. Previously shipped apps used by thousands of users.";

const LOCATION = "New York, NY";
const EMAIL = "alanlau97@gmail.com";
const RESUME_URL = "/resume.pdf"; // replace with your actual file path
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/jiajern", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jiajern/", Icon: Linkedin },
  { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail },
];

const SKILLS = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Java / Spring",
  "PostgreSQL",
  "AWS",
  "Docker",
  "CI/CD",
  "Tailwind CSS",
];

const PROJECTS = [
  {
    title: "dParking",
    blurb:
      "A decentralized mobile parking system to make parking more accessible and secure. Made it into the top 6 at Lehman Hackathon 2019.",
    tech: ["React", "AntDesign", "BlockStack", "Heroku"],
    demo: "https://devpost.com/software/uknown",
    code: "https://github.com/jiajern/dParking",
    image:
      `${import.meta.env.BASE_URL}/dParking.gif`,
  },
  {
    title: "Revive",
    blurb:
      "A mobile app to help people finding the disposal site for their waste by simply taking a photo. Awarded the best hack for environment at CUNY Hackathon 2019.",
    tech: ["React Native", "Google Cloud"],
    demo: "https://devpost.com/software/cuny-hackathon-2019",
    code: "https://github.com/jiajern/revive",
    image:
      `${import.meta.env.BASE_URL}/revive.png`,
  },
  {
    title: "JobFirst",
    blurb:
      "A job listing web application designed to help immigrants with language barriers easily find employment opportunities.",
    tech: ["React", "GraphQL", "AWS Amplify", "Ant Design"],
    demo: "https://example.com/demo",
    code: "https://github.com/jiajern/JobFirst",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop",
  },
];

const TIMELINE = [
  {
    when: "January 2022 — Present",
    where: "BNY | Pershing",
    what: "Full-Stack Engineer - Senior Associate",
  },
  {
    when: "February 2020 — January 2022",
    where: "BNY | Pershing",
    what: "Full-Stack Engineer - Associate",
  },
  {
    when: "August 2019 — January 2020",
    where: "Macaulay Honors College at The City University of New York",
    what: "College Assistant",
  },
  {
    when: "July 2019 — August 2019",
    where: "Macaulay Honors College at The City University of New York",
    what: "Data Analyst - Internship",
  },
];

// ---------- Helpers ----------
const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const section = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

function Nav() {
  const items = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#timeline", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className={`${section} h-16 flex items-center justify-between`}>
        <a href="#home" className="font-semibold tracking-tight text-lg">{NAME}</a>
        <nav className="hidden md:flex gap-6 text-sm">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="hover:opacity-80 transition-opacity">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <a href="#contact" className="text-sm inline-flex items-center gap-1">
            <span>Contact</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className={`${section} scroll-mt-16 pt-16 pb-16 md:pt-24 md:pb-28`}>
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <motion.div
          className="md:col-span-3"
          animate="show"
          viewport={{ once: true }}
          variants={fade}
        >
          <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{TAGLINE}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1]">
            Hi, I'm <span className="underline decoration-4 decoration-neutral-300 dark:decoration-neutral-700">{NAME}</span>
          </h1>
          <p className="mt-5 text-neutral-700 dark:text-neutral-300 max-w-2xl">{SUMMARY}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={RESUME_URL} target="_blank" rel="noreferrer">Download Résumé</a>
            </Button>
            <div className="flex items-center gap-3 ml-1">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{LOCATION}</span>
            <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" />Open to opportunities</span>
          </div>
        </motion.div>
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 shadow-inner overflow-hidden flex items-end p-6">
            <img src={`${import.meta.env.BASE_URL}/picture.jpeg`} alt="Picture of me" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className={`${section} scroll-mt-16 py-12 md:py-16`}>
      <motion.h2
        className="text-2xl md:text-3xl font-bold"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fade}
      >
        Featured Projects
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <motion.div key={p.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="object-cover w-full h-full" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">
                <p>{p.blurb}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="px-2 py-1 rounded-full text-xs border border-neutral-200 dark:border-neutral-700">{t}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto flex gap-3">
                <Button asChild size="sm">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="sm" variant="secondary">
                  <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                    Source <Github className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className={`${section} scroll-mt-16 py-12 md:py-16`}>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div className="md:col-span-2" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <h2 className="text-2xl md:text-3xl font-bold">About</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I love turning complex ideas into simple, elegant interfaces. I care about code quality,
            accessibility, and meaningful product impact. I’ve collaborated with cross‑functional teams and shipped
            features end‑to‑end—from discovery and design to implementation, testing, and release.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
            <h3 className="font-semibold">At a glance</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>⚡ 5+ years experience</li>
              <li>🧪 Led testing culture & CI</li>
              <li>🧭 Product‑minded engineer</li>
              <li>🌱 Always learning</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className={`${section} scroll-mt-16 py-12 md:py-16`}>
      <motion.h2 className="text-2xl md:text-3xl font-bold" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
        Skills
      </motion.h2>
      <motion.ul
        className="mt-6 flex flex-wrap gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
      >
        {SKILLS.map((s) => (
          <motion.li key={s} variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }} className="px-3 py-2 rounded-full border text-sm border-neutral-200 dark:border-neutral-700">
            {s}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

function Timeline() {
  return (
    <section id="timeline" className={`${section} scroll-mt-16 py-12 md:py-16`}>
      <motion.h2 className="text-2xl md:text-3xl font-bold" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
        Experience
      </motion.h2>
      <div className="mt-8 relative">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
        <ul className="space-y-6">
          {TIMELINE.map((t) => (
            <li key={t.when} className="pl-10 relative">
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-400" />
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{t.when}</div>
              <div className="font-semibold">{t.what}</div>
              <div className="text-neutral-700 dark:text-neutral-300">{t.where}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const message = encodeURIComponent(String(data.get("message") || ""));
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "Website"}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${message}`;
  };

  return (
    <section id="contact" className={`${section} scroll-mt-16 py-12 md:py-20`}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
        <h2 className="text-2xl md:text-3xl font-bold">Let’s work together</h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl">
          Interested in collaborating or have an opportunity in mind? Send me a note—I'll get back to you.
        </p>
        <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
          <Input name="name" placeholder="Your name" required />
          <Input name="email" type="email" placeholder="Your email" required />
          <div className="md:col-span-2">
            <Textarea name="message" placeholder="Project details or message" rows={5} required />
          </div>
          <div className="md:col-span-2">
            <Button type="submit">Send Email</Button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 mt-8">
      <div className={`${section} flex flex-col md:flex-row items-center justify-between gap-4`}>
        <div className="text-sm text-neutral-500">© {new Date().getFullYear()} {NAME}. All rights reserved.</div>
        <div className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="scroll-smooth bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 selection:bg-neutral-900/90 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
