import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, PointMaterial, Points, View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDownload, FaGithub, FaLaravel, FaLinkedin, FaPhp, FaReact, FaVuejs } from "react-icons/fa";
import { SiGit, SiJavascript, SiMysql } from "react-icons/si";
import { BiLinkExternal, BiMailSend } from "react-icons/bi";
import "./App.css";
import SkillCard from "./Components/Skills/SkillCard";
import ShapeField from "./Components/ThreeScenes/ShapeField";
import profilePhoto from "./Components/files/ProfilePic.jpg";
import parkEase from "./Components/files/ParkEase.png";
import appleTv from "./Components/files/Appletv.jpg";
import tcd from "./Components/files/TCD.png";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Laravel", icon: FaLaravel, tone: "from-red-500 to-rose-300" },
  { name: "Vue.js", icon: FaVuejs, tone: "from-emerald-400 to-cyan-300" },
  { name: "PHP", icon: FaPhp, tone: "from-indigo-400 to-violet-300" },
  { name: "MySQL", icon: SiMysql, tone: "from-sky-400 to-blue-300" },
  { name: "React", icon: FaReact, tone: "from-cyan-300 to-blue-400" },
  { name: "JavaScript", icon: SiJavascript, tone: "from-yellow-300 to-orange-300" },
  { name: "Git", icon: SiGit, tone: "from-orange-500 to-red-300" },
];

const projects = [
  {
    title: "The Careers Department",
    image: tcd,
    stack: "Laravel, Vue.js, React, MySQL",
    summary: "Career guidance platform modules for schools, employers, dashboards, reporting, and role-based workflows.",
    href: "https://www.thecareersdepartment.com/",
    github: "https://github.com/ishaan8282",
  },
  {
    title: "ParkEase",
    image: parkEase,
    stack: "Vue 3, Laravel, MySQL, Tailwind",
    summary: "Smart parking management with real-time availability, booking flows, admin tools, and city-wise filtering.",
    href: "https://parkease-production-4b72.up.railway.app/",
    github: "https://github.com/ishaan8282/ParkEase",
  },
  {
    title: "Apple TV Clone",
    image: appleTv,
    stack: "HTML, CSS, JavaScript",
    summary: "Entertainment web app clone with auth flows, local storage persistence, and show browsing.",
    href: "https://peppy-speculoos-082f5c.netlify.app/",
    github: "https://github.com/ishaan8282/unit3project-appleTv-.git",
  },
  {
    title: "Portfolio 3D",
    image: profilePhoto,
    stack: "React, Three.js, GSAP, Tailwind",
    summary: "Interactive developer portfolio with particle systems, 3D cards, scroll motion, and a polished dark interface.",
    href: "https://ishaan8282.github.io",
    github: "https://github.com/ishaan8282/ishaan8282.github.io",
  },
];

const startYear = 2023;
const yearsExperience = new Date().getFullYear() - startYear;

const experience = [
  {
    period: "2023 - Present",
    role: "Full-Stack Web Developer",
    company: "TechSprinters",
    summary:
      `${yearsExperience}+ years building production web applications across Laravel, Vue.js, PHP, React, MySQL, and modern dashboard workflows.`,
    highlights: [
      "Built and improved employer, school management, reporting, and role-based modules.",
      "Delivered backend APIs, database work, and responsive UI features end-to-end.",
      "Collaborated across ongoing product cycles with attention to performance, UX, and maintainable code.",
    ],
  },
];

function ParticleSphere() {
  const pointsRef = useRef();
  const haloRef = useRef();
  const particles = useMemo(() => {
    const count = 2200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 1.62 + Math.random() * 0.22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.elapsedTime * 0.12 + mouse.x * 0.2;
    pointsRef.current.rotation.x = clock.elapsedTime * 0.06 + mouse.y * 0.15;
    if (haloRef.current) {
      haloRef.current.rotation.z = clock.elapsedTime * 0.18;
      haloRef.current.rotation.x = 1.15 + mouse.y * 0.12;
      haloRef.current.rotation.y = mouse.x * 0.18;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#3ae8ff" size={0.014} sizeAttenuation depthWrite={false} />
      </Points>
      <mesh ref={haloRef}>
        <torusGeometry args={[1.86, 0.006, 12, 180]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.42} />
      </mesh>
      <mesh rotation={[1.48, 0.1, -0.45]}>
        <torusGeometry args={[1.35, 0.004, 10, 160]} />
        <meshBasicMaterial color="#3ae8ff" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

function CustomCursor() {
  const dotRef = useRef();
  const haloRef = useRef();

  useEffect(() => {
    const move = (event) => {
      gsap.to(dotRef.current, { x: event.clientX, y: event.clientY, duration: 0.08, ease: "power2.out" });
      gsap.to(haloRef.current, { x: event.clientX, y: event.clientY, duration: 0.35, ease: "power3.out" });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={haloRef} className="cursor-halo" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

function Loader({ onComplete }) {
  const barRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, { opacity: 0, duration: 0.5, onComplete });
      }
    });

    tl.to(barRef.current, { width: "100%", duration: 1.2, ease: "power3.inOut" });
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-electric">Loading...</p>
      <div className="w-48 h-1 overflow-hidden rounded-full bg-white/10">
        <div ref={barRef} className="w-0 h-full bg-electric" />
      </div>
    </div>
  );
}

function Nav() {
  const links = ["about", "experience", "skills", "projects", "resume", "contact"];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: "-40% 0px -60% 0px" });

    const sections = document.querySelectorAll("section");
    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-ink/55 backdrop-blur-xl">
      <nav className="flex items-center justify-between px-5 py-4 mx-auto max-w-7xl md:px-8">
        <a href="#hero" className="text-sm font-black uppercase tracking-[0.32em] text-white">
          Ishan
        </a>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-white/10 hover:text-white ${activeSection === link ? 'bg-white/15 text-white' : 'text-slate-300'}`}>
              {link}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-ink transition hover:bg-electric hover:text-ink sm:inline-flex">
          Hire Me
        </a>
      </nav>
    </header>
  );
}

function HeroSkillOrbit() {
  const orbitSkills = [
    { name: "Laravel", icon: FaLaravel },
    { name: "React", icon: FaReact },
    { name: "Vue", icon: FaVuejs },
    { name: "PHP", icon: FaPhp },
    { name: "MySQL", icon: SiMysql },
    { name: "Git", icon: SiGit },
  ];

  return (
    <div className="hero-skill-orbit" aria-label="Core skills">
      <div className="orbit-ring orbit-ring-one" />
      <div className="orbit-ring orbit-ring-two" />
      <div className="hero-code-core">
        <span className="core-line">&lt;FullStack /&gt;</span>
        <span className="core-title">Laravel + Vue</span>
        <span className="core-subtitle">PHP . MySQL . React</span>
      </div>
      {orbitSkills.map(({ name, icon: Icon }, index) => (
        <div key={name} className={`orbit-badge orbit-badge-${index + 1}`}>
          <Icon />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  const name = "Ishan Mehta".split("");

  return (
    <section id="hero" className="relative flex items-center min-h-screen px-5 pt-24 overflow-hidden md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(58,232,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_32%),linear-gradient(135deg,#05060a_0%,#0d1020_55%,#05060a_100%)]" />
      <div className="absolute inset-0 opacity-25 grid-noise" />
      <View className="absolute pointer-events-none hero-orb">
        <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={45} />
        <ambientLight intensity={0.7} />
        <ParticleSphere />
      </View>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-[0.86fr_1.14fr] md:items-center">
        <div className="max-w-3xl">
          <h3 className="hero-title whitespace-nowrap text-[clamp(2.5rem,7vw,3rem)] font-black leading-[0.86] text-white" aria-label="Ishan Mehta">
            {name.map((letter, index) => (
              <span key={`${letter}-${index}`} className="inline-block hero-letter" aria-hidden="true">
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h3>
          <p className="max-w-2xl text-2xl font-semibold hero-subtitle mt-7 text-slate-100 md:text-4xl">Full Stack Developer</p>
          <p className="max-w-xl mt-6 text-base leading-8 hero-copy text-slate-400 md:text-lg">
            I build production-ready web apps.
            <br />
            Laravel, Vue.js, PHP, MySQL, React.
          </p>
          <div className="flex flex-wrap gap-4 hero-actions mt-9">
            <a href="#projects" className="rounded-full bg-electric px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-ink shadow-glow transition hover:bg-signal">
              View Work
            </a>
            <a href="#contact" className="rounded-full border border-white/15 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-violet hover:text-electric">
              Contact
            </a>
          </div>
        </div>
        <HeroSkillOrbit />
      </div>
      <div className="absolute z-10 w-px h-16 overflow-hidden bottom-8 left-1/2 bg-white/15">
        <span className="block w-px h-8 scroll-line bg-electric" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative px-5 overflow-hidden py-28 md:px-8">
      <View className="absolute inset-0 z-0 pointer-events-none about-shape-view opacity-45">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={48} />
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 4]} intensity={3} color="#3ae8ff" />
        <pointLight position={[-3, -2, 3]} intensity={2} color="#8b5cf6" />
        <ShapeField />
      </View>
      <div className="relative z-20 mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="reveal about-frame relative aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
          <img src={profilePhoto} alt="Ishan profile" className="h-full w-full rounded-[1.4rem] object-cover grayscale transition duration-700 hover:grayscale-0" />
          <div className="absolute p-4 border inset-x-8 bottom-8 rounded-2xl border-white/10 bg-ink/75 backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-electric">Available for builds</p>
          </div>
        </div>
        <div className="reveal">
          <p className="section-kicker">About</p>
          <h6 className="section-title">I turn product ideas into polished full-stack experiences.</h6>
          <p className="max-w-2xl text-lg leading-9 mt-7 text-slate-300">
            I am Ishan Mehta, a Full Stack Developer focused on Laravel, Vue.js, PHP, MySQL, and React. I enjoy building clean backend architecture, fast interfaces, admin dashboards, and user flows that feel calm even when the logic underneath is complex.
          </p>
          <div className="grid gap-4 mt-8 sm:grid-cols-3">
            {["Production UI", "Laravel APIs", "Vue + React"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="text-sm font-bold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkExperience() {
  return (
    <section id="experience" className="relative px-5 overflow-hidden py-28 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_28%,rgba(215,255,99,0.08),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(58,232,255,0.11),transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 reveal">
          <p className="section-kicker">Experience</p>
          <h3 className="section-title">{yearsExperience}+ years building full-stack products.</h3>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            I work across backend architecture, frontend interfaces, dashboards, data flows, and product features from concept through deployment.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr]">
          <div className="reveal experience-stat rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <span className="block text-[clamp(5rem,12vw,6rem)] font-black leading-none text-white">{yearsExperience}+</span>
            <span className="mt-4 block text-sm font-black uppercase tracking-[0.28em] text-electric">Years Experience</span>
          </div>

          {experience.map((item) => (
            <article key={item.role} className="reveal experience-card rounded-[2rem] border border-white/10 bg-[#080b14]/80 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-3 pb-6 border-b border-white/10 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-signal">{item.period}</p>
                  <h3 className="mt-3 text-3xl font-black text-white md:text-5xl">{item.role}</h3>
                  <p className="mt-2 text-lg font-semibold text-electric">{item.company}</p>
                </div>
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-300">{item.summary}</p>
              <div className="grid gap-3 mt-7">
                {item.highlights.map((highlight) => (
                  <p key={highlight} className="experience-point rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm leading-7 text-slate-300">
                    {highlight}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="skills" className="relative px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 mb-12 reveal md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Skills</p>
            <h3 className="section-title">A rotating stack for modern product engineering.</h3>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">Core tools I use to ship responsive interfaces, durable server logic, and reliable data flows.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              active={activeSkill === index}
              onActivate={() => setActiveSkill(index)}
              onDeactivate={() => setActiveSkill(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 reveal">
          <p className="section-kicker">Projects</p>
          <h3 className="section-title">Interactive builds with real product bones.</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article key={project.title} className="reveal project-card h-[460px]">
              <div className="project-card-inner">
                <div className="overflow-hidden border project-face rounded-3xl border-white/10 bg-orbit">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-64" />
                  <div className="p-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-electric">{project.stack}</p>
                    <h3 className="text-3xl font-black text-white">{project.title}</h3>
                    <a href={project.github} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-electric hover:text-electric">
                      GitHub <FaGithub />
                    </a>
                  </div>
                </div>
                <div className="project-face project-back rounded-3xl border border-electric/30 bg-[#07111d] p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-signal">Featured Work</p>
                  <h3 className="mt-5 text-3xl font-black text-white">{project.title}</h3>
                  <p className="mt-5 leading-8 text-slate-300">{project.summary}</p>
                  <div className="flex flex-wrap gap-3 mt-8">
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-ink transition hover:bg-electric">
                      GitHub <FaGithub />
                    </a>
                    <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-electric hover:text-electric">
                      Live <BiLinkExternal />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumeSection() {
  const resumeUrl = `${process.env.PUBLIC_URL}/Ishan_Mehta_Resume.pdf`;

  return (
    <section id="resume" className="px-5 py-28 md:px-8">
      <div className="reveal resume-card mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl md:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="section-kicker">Resume</p>
            <h3 className="section-title">Want the compact version?</h3>
            <p className="max-w-2xl mt-6 text-lg leading-8 text-slate-300">
              Download my resume for a quick overview of my full-stack experience, project work, and Laravel/Vue/PHP skill set.
            </p>
          </div>
          <a
            href={resumeUrl}
            download="Ishan_Mehta_Resume.pdf"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-electric px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-ink shadow-glow transition hover:bg-signal"
          >
            View Resume <FaDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="px-5 py-28 md:px-8">
      <div className="reveal mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl md:grid-cols-[0.8fr_1.2fr] md:p-10">
        <div>
          <p className="section-kicker">Contact</p>
          <h3 className="section-title">Let’s build something sharp.</h3>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Send a note about the product, dashboard, website, or full-stack feature you want to bring to life.
          </p>
          <div className="flex items-center gap-3 mt-8 text-slate-300">
            <FaGithub className="text-electric" />
            <span>github.com/ishaan8282</span>
          </div>
        </div>
        <form
          action="https://formspree.io/f/meqdnnye"
          method="POST"
          className="grid gap-4"
          onSubmit={() => setSent(true)}
        >
          <input className="field" name="name" placeholder="Name" required />
          <input className="field" name="email" type="email" placeholder="Email" required />
          <textarea className="resize-none field min-h-36" name="message" placeholder="Message" required />
          <button className="inline-flex items-center justify-center gap-3 rounded-full bg-electric px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-ink transition hover:bg-signal" type="submit">
            Send Message <BiMailSend className="text-xl" />
          </button>
          {sent && <p className="text-sm font-semibold text-signal">Thanks, your message is being sent.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-10 border-t border-white/10 bg-ink md:px-8">
      <div className="flex flex-col items-center justify-between gap-6 mx-auto max-w-7xl md:flex-row">
        <p className="text-sm font-semibold tracking-wide text-slate-400">
          © {new Date().getFullYear()} Ishan Mehta. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xl text-slate-400">
          <a href="https://github.com/ishaan8282" target="_blank" rel="noreferrer" className="transition hover:text-electric">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ishaan8282" target="_blank" rel="noreferrer" className="transition hover:text-electric">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });
    heroTimeline
      .fromTo(".hero-eyebrow", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 })
      .fromTo(
        ".hero-letter",
        {
          yPercent: 115,
          rotateX: -82,
          rotateZ: 8,
          opacity: 0,
          filter: "blur(18px)",
        },
        {
          yPercent: 0,
          rotateX: 0,
          rotateZ: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.05,
          stagger: 0.075,
        },
        "-=0.35"
      )
      .fromTo(".hero-subtitle", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.45")
      .fromTo(".hero-copy", { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.55")
      .fromTo(".hero-actions", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.5")
      .fromTo(".hero-orb", { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 0.2, duration: 1.4 }, "-=1.15")
      .fromTo(".hero-skill-orbit", { y: 34, opacity: 0, scale: 0.94 }, { y: 0, opacity: 1, scale: 1, duration: 1 }, "-=0.9")
      .fromTo(".orbit-badge", { y: 18, opacity: 0, scale: 0.82 }, { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.08 }, "-=0.55");

    gsap.fromTo(".reveal", { y: 48, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
      },
    });

    gsap.utils.toArray(".reveal").forEach((element) => {
      gsap.fromTo(element, { y: 54, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 82%",
        },
      });
    });

    gsap.to(".scroll-line", {
      yPercent: 120,
      repeat: -1,
      duration: 1.4,
      ease: "power2.inOut",
    });

    return () => {
      heroTimeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white App bg-ink" id="app-container">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <Nav />
      <main className="page-fade" style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.3s ease-out' }}>
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <Projects />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
      <Canvas
        className="pointer-events-none"
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}
        eventSource={document.getElementById("root")}
      >
        <View.Port />
      </Canvas>
    </div>
  );
}

export default App;
