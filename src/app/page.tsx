"use client";

import { useRef, useEffect } from "react";

import type { DragCardProps } from "@/components/DragBoard";
import { DragBoard } from "@/components/DragBoard";
import { Marquee } from "@/components/Marquee";
import { Navigation } from "@/components/Navigation";
import { ProgressBar } from "@/components/ProgressBar";
import { SectionHead } from "@/components/SectionHead";
import { AboutCard } from "@/components/AboutCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ContactCard } from "@/components/ContactCard";
import { SkillGroup, SkillsGrid } from "@/components/SkillGroup";
import { ProjectCard } from "@/components/ProjectCard";
import { useTheme } from "@/hooks/useTheme";
import { useReveal } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { useImpactBars } from "@/hooks/useImpactBars";
import { useStackCards } from "@/hooks/useStackCards";
import { useMagneticButtons } from "@/hooks/useMagneticButtons";

const HERO_CARDS: DragCardProps[] = [
  { className: "c1", style: { left: "8%", top: "12%" }, icon: "$", value: "200+", label: "users on live billing" },
  { className: "c2", style: { left: "42%", top: "28%" }, icon: "⚡", value: "45%", label: "faster response time" },
  { className: "c3", style: { left: "14%", top: "58%" }, icon: "▣", value: "3", label: "production apps shipped" },
  { className: "c4", style: { left: "50%", top: "62%" }, icon: "☁", value: "Azure", label: "+ Docker, deployed solo" },
];

const PROJECTS = [
  {
    num: "01",
    category: "ENTERPRISE COMPLIANCE",
    title: "AidenVision — Audit & Advanced Reporting",
    date: "Oct 2025 — Present",
    status: "live" as const,
    statusLabel: "In progress",
    description: "Frontend modules for an enterprise Windows endpoint management and compliance platform used by IT teams and CISOs.",
    bullets: (
      <>
        <li>Built an Audit Reporting module: sortable/paginated report lists, date-range search, delete confirmation flows, and in-browser PDF viewing.</li>
        <li>Built an Advanced Reporting dashboard with drag-and-drop widgets, persistent layout preferences, and cross-widget filter toggling.</li>
        <li>Shipped five report types: Compliance, Problem Endpoint, Device Export, SLO Tracker, and ROI Report.</li>
        <li>Worked directly with backend and product teams to define API contracts and ship features end-to-end.</li>
      </>
    ),
    tags: ["React.js", "TypeScript", "Drag & Drop UI"],
    impactLabel: "REPORT TYPES SHIPPED",
    impactValue: 100,
  },
  {
    num: "02",
    category: "FINTECH / WORKFLOW",
    title: "AnaYAna — Compliance & Workflow Platform",
    date: "Aug 2024 — May 2025",
    status: "done" as const,
    statusLabel: "Shipped",
    description: "A compliance platform connecting businesses and accountants through automated workflow management.",
    bullets: (
      <>
        <li>Integrated Stripe for subscription billing, serving 200+ active users.</li>
        <li>Optimized the Supabase schema, cutting query time by 50%.</li>
        <li>Implemented real-time notifications and document management features.</li>
      </>
    ),
    tags: ["Next.js", "Node.js", "Supabase", "Stripe", "TypeScript"],
    impactLabel: "QUERY TIME REDUCED",
    impactValue: 50,
  },
  {
    num: "03",
    category: "APPLIED AI",
    title: "Investilo — Intelligent Stock Chatbot",
    date: "May 2025 — Jul 2025",
    status: "done" as const,
    statusLabel: "Shipped",
    description: "An intelligent stock information chatbot answering NLP-based financial queries with live market context.",
    bullets: (
      <>
        <li>Built with Agno Agent for real-time web scraping (Crawl4AI) and natural-language financial query handling.</li>
        <li>Designed an async RESTful API in FastAPI for low-latency responses.</li>
        <li>Containerized with Docker and deployed on an Azure VM.</li>
      </>
    ),
    tags: ["Python", "FastAPI", "Agno AI", "Crawl4AI", "Docker", "Azure"],
    impactLabel: "ASYNC API · LIVE DATA",
    impactValue: 90,
  },
];

export default function Home() {
  const [, toggle] = useTheme();
  const progressRef = useRef<HTMLDivElement>(null);

  useReveal();
  useCountUp();
  useImpactBars();
  useStackCards();
  useMagneticButtons();

  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;

    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      el.style.width = `${scrolled}%`;
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ProgressBar />
      <div className="bg-dots" />

      <Navigation />

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">● Open to Full-Stack / AI Engineering roles</div>
            <h1>
              Sri Hari Narayan V — full-stack developer building{" "}
              <span className="grad">production AI-integrated software.</span>
            </h1>
            <p className="sub">
              1+ year shipping enterprise applications end-to-end: React/Next.js front ends, Node &amp; FastAPI services,
              and the Azure infrastructure underneath, with AI woven in where it actually earns its place.
            </p>
            <div className="hero-cta">
              <a href="#work" className="btn btn-primary magnetic">See the work</a>
              <a href="mailto:sriharivelayutham.28@gmail.com" className="btn btn-ghost magnetic">Email me</a>
            </div>
            <div className="hero-meta">
              <a href="https://sriharinarayantech.vercel.app" target="_blank" rel="noopener noreferrer">↗ Live portfolio</a>
              <a href="https://github.com/srihari20031" target="_blank" rel="noopener noreferrer">↗ GitHub</a>
              <a href="https://linkedin.com/in/sriharinarayanv" target="_blank" rel="noopener noreferrer">↗ LinkedIn</a>
            </div>
          </div>

          <div className="drag-board-wrap">
            <DragBoard cards={HERO_CARDS} />
            <div className="drag-hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 11l3-3 3 3M9 13l3 3 3-3" />
              </svg>
              these cards are draggable — built the same way I built AidenVision&apos;s widgets
            </div>
          </div>
        </div>
      </header>

      <Marquee />

      <section id="about">
        <div className="wrap">
          <SectionHead tag="// 01 — about" title="Summary" />
          <AboutCard
            content={
              <>
                <p>
                  I&apos;m a full-stack developer with <strong>1+ year of experience</strong> building scalable enterprise
                  applications using <strong>React, Next.js, and Node.js</strong>. Most of my work lives at the
                  intersection of clean product UI and the unglamorous infrastructure behind it — cloud deployments on{" "}
                  <strong>Azure</strong>, containerized with <strong>Docker</strong>, and AI features that are integrated
                  because they solve a real problem, not because they&apos;re trendy.
                </p>
                <p>
                  I care about applications that hold up in production: queries that stay fast as data grows, payment flows
                  that don&apos;t break for paying customers, and AI tooling that&apos;s reliable enough for an enterprise
                  client to put their name on.
                </p>
              </>
            }
          />
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <ExperienceCard
            title="Associate Software Engineer"
            org="Neosme Technologies · Salem, India"
            date="JULY 2024 — PRESENT"
            bullets={
              <>
                <li>Worked across multiple client projects end-to-end — frontend interfaces, backend APIs, and production deployments.</li>
                <li>Handled cloud deployments on Azure VM with Docker containerization, managing the full application lifecycle.</li>
                <li>Implemented Stripe payment infrastructure handling subscription and transaction management for 200+ users.</li>
                <li>Built an AI-powered chatbot using Agno Agent with real-time web crawling, deployed on Azure VM via Docker.</li>
                <li>Engineered vector similarity search integrated with the OpenAI API for an intelligent recommendation engine.</li>
                <li>Optimized database queries and caching strategies, improving application response time by 45%.</li>
              </>
            }
            stats={[
              { value: "200+", label: "users on Stripe billing" },
              { value: "45%", label: "faster response time" },
              { value: "3", label: "client projects delivered" },
            ]}
          />
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <SectionHead tag="// 03 — selected work" title="Projects" description="Scroll through — each one stacks on the last, the way a real project history should." />

          <div className="stack-wrap">
            {PROJECTS.map((p, idx) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <SectionHead tag="// 04 — stack" title="Tools I reach for" />
          <SkillsGrid>
            <SkillGroup title="LANGUAGES">
              <span className="chip">JavaScript</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Python</span>
              <span className="chip">Java</span>
              <span className="chip">SQL</span>
            </SkillGroup>
            <SkillGroup title="FRONTEND">
              <span className="chip">React.js</span>
              <span className="chip">Next.js</span>
              <span className="chip">Tailwind CSS</span>
            </SkillGroup>
            <SkillGroup title="BACKEND">
              <span className="chip">Node.js</span>
              <span className="chip">Express.js</span>
              <span className="chip">FastAPI</span>
            </SkillGroup>
            <SkillGroup title="DATABASES">
              <span className="chip">MongoDB</span>
              <span className="chip">SQL</span>
              <span className="chip">Supabase</span>
            </SkillGroup>
            <SkillGroup title="CLOUD & DEVOPS">
              <span className="chip">Azure</span>
              <span className="chip">Docker</span>
            </SkillGroup>
            <SkillGroup title="AI / ML">
              <span className="chip">OpenAI API</span>
              <span className="chip">Agno Agent</span>
              <span className="chip">Crawl4AI</span>
            </SkillGroup>
            <SkillGroup title="TOOLS">
              <span className="chip">Git</span>
              <span className="chip">Postman</span>
            </SkillGroup>
          </SkillsGrid>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <ContactCard />
        </div>
      </section>

      <footer>
        <p>Sri Hari Narayan V · Salem, India · built by prompt</p>
      </footer>
    </>
  );
}
