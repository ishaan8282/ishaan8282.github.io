import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PointMaterial, Points } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDownload, FaGithub, FaLaravel, FaPhp, FaReact, FaVuejs } from "react-icons/fa";
import { SiGit, SiJavascript, SiMysql } from "react-icons/si";
import { BiLinkExternal, BiMailSend } from "react-icons/bi";
import "./App.css";
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

const experience = [
  {
    period: "2022 - Present",
    role: "Full-Stack Web Developer",
    company: "TechSprinters",
    summary:
      "4 years building production web applications across Laravel, Vue.js, PHP, React, MySQL, and modern dashboard workflows.",
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

function ShapeField() {
  const groupRef = useRef();

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.12 + mouse.x * 0.08;
    groupRef.current.rotation.x = mouse.y * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.3} rotationIntensity={0.8} floatIntensity={1.4}>
        <mesh position={[-1.7, 0.4, 0]}>
          <icosahedronGeometry args={[0.58, 1]} />
          <MeshDistortMaterial color="#3ae8ff" distort={0.25} speed={2} roughness={0.18} metalness={0.55} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={1.1} floatIntensity={1.1}>
        <mesh position={[1.45, -0.15, -0.35]}>
          <torusKnotGeometry args={[0.46, 0.14, 100, 16]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.28} metalness={0.65} />
        </mesh>
      </Float>
      <Float speed={1.15} rotationIntensity={1.4} floatIntensity={1.6}>
        <mesh position={[0.15, 0.95, -0.55]}>
          <octahedronGeometry args={[0.42]} />
          <meshStandardMaterial color="#d7ff63" roughness={0.35} metalness={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function SkillCardScene({ index, active }) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const hoverLift = active ? 0.22 : 0;
    meshRef.current.position.y += (hoverLift - meshRef.current.position.y) * 0.08;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime + index) * 0.18 + (active ? 0.25 : 0);
    meshRef.current.rotation.y = clock.elapsedTime * (active ? 0.95 : 0.48) + index;
    meshRef.current.scale.x += ((active ? 1.18 : 1) - meshRef.current.scale.x) * 0.08;
    meshRef.current.scale.y += ((active ? 1.18 : 1) - meshRef.current.scale.y) * 0.08;
    meshRef.current.scale.z += ((active ? 1.18 : 1) - meshRef.current.scale.z) * 0.08;

    if (ringRef.current) {
      ringRef.current.rotation.z = -clock.elapsedTime * (active ? 1.1 : 0.45);
      ringRef.current.scale.setScalar(active ? 1.12 : 0.92);
    }
  });

  return (
    <group>
      <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.35}>
        <mesh ref={meshRef}>
          <boxGeometry args={[1.6, 1.04, 0.12]} />
          <meshStandardMaterial color={index % 2 ? "#8b5cf6" : "#3ae8ff"} roughness={0.16} metalness={0.78} />
        </mesh>
      </Float>
      <mesh ref={ringRef} rotation={[1.25, 0, 0]}>
        <torusGeometry args={[0.92, 0.012, 10, 96]} />
        <meshBasicMaterial color={active ? "#d7ff63" : "#3ae8ff"} transparent opacity={active ? 0.72 : 0.28} />
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

function Nav() {
  const links = ["about", "experience", "skills", "projects", "resume", "contact"];

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-ink/55 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#hero" className="text-sm font-black uppercase tracking-[0.32em] text-white">
          Ishan
        </a>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:bg-white/10 hover:text-white">
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
  const name = "Ishan".split("");

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(58,232,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_32%),linear-gradient(135deg,#05060a_0%,#0d1020_55%,#05060a_100%)]" />
      <div className="absolute inset-0 opacity-25 grid-noise" />
      <div className="hero-orb pointer-events-none absolute">
        <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <ParticleSphere />
        </Canvas>
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-[0.86fr_1.14fr] md:items-center">
        <div className="max-w-3xl">
          <p className="hero-eyebrow mb-5 text-xs font-bold uppercase tracking-[0.45em] text-electric">Laravel / Vue.js / PHP</p>
          <h1 className="hero-title text-[clamp(4rem,10vw,8.4rem)] font-black leading-[0.86] text-white" aria-label="Ishan">
            {name.map((letter, index) => (
              <span key={`${letter}-${index}`} className="hero-letter" aria-hidden="true">
                {letter}
              </span>
            ))}
          </h1>
          <p className="hero-subtitle mt-7 max-w-2xl text-2xl font-semibold text-slate-100 md:text-4xl">Full Stack Developer</p>
          <p className="hero-copy mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            I build production-ready web apps.
            <br />
            Laravel, Vue.js, PHP, MySQL, React.
          </p>
          <div className="hero-actions mt-9 flex flex-wrap gap-4">
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
      <div className="absolute bottom-8 left-1/2 z-10 h-16 w-px overflow-hidden bg-white/15">
        <span className="scroll-line block h-8 w-px bg-electric" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden px-5 py-28 md:px-8">
      <div className="absolute inset-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 5], fov: 48 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[3, 3, 4]} intensity={3} color="#3ae8ff" />
          <pointLight position={[-3, -2, 3]} intensity={2} color="#8b5cf6" />
          <ShapeField />
        </Canvas>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="reveal about-frame relative aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
          <img src={profilePhoto} alt="Ishan profile" className="h-full w-full rounded-[1.4rem] object-cover grayscale transition duration-700 hover:grayscale-0" />
          <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/10 bg-ink/75 p-4 backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-electric">Available for builds</p>
          </div>
        </div>
        <div className="reveal">
          <p className="section-kicker">About</p>
          <h2 className="section-title">I turn product ideas into polished full-stack experiences.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-300">
            I am Ishan, a Full Stack Developer focused on Laravel, Vue.js, PHP, MySQL, and React. I enjoy building clean backend architecture, fast interfaces, admin dashboards, and user flows that feel calm even when the logic underneath is complex.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
    <section id="experience" className="relative overflow-hidden px-5 py-28 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_28%,rgba(215,255,99,0.08),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(58,232,255,0.11),transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="reveal mb-12 max-w-4xl">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">4 years building full-stack products.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I work across backend architecture, frontend interfaces, dashboards, data flows, and product features from concept through deployment.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr]">
          <div className="reveal experience-stat rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <span className="block text-[clamp(5rem,12vw,10rem)] font-black leading-none text-white">4+</span>
            <span className="mt-4 block text-sm font-black uppercase tracking-[0.28em] text-electric">Years Experience</span>
          </div>

          {experience.map((item) => (
            <article key={item.role} className="reveal experience-card rounded-[2rem] border border-white/10 bg-[#080b14]/80 p-7 backdrop-blur-xl md:p-9">
              <div className="flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-signal">{item.period}</p>
                  <h3 className="mt-3 text-3xl font-black text-white md:text-5xl">{item.role}</h3>
                  <p className="mt-2 text-lg font-semibold text-electric">{item.company}</p>
                </div>
                <span className="rounded-full border border-electric/30 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-200">
                  Laravel / Vue / PHP
                </span>
              </div>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{item.summary}</p>
              <div className="mt-7 grid gap-3">
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
        <div className="reveal mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Skills</p>
            <h2 className="section-title max-w-3xl">A rotating stack for modern product engineering.</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">Core tools I use to ship responsive interfaces, durable server logic, and reliable data flows.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ name, icon: Icon, tone }, index) => (
            <article
              key={name}
              className="reveal skill-card group relative min-h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5"
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
              onFocus={() => setActiveSkill(index)}
              onBlur={() => setActiveSkill(null)}
              tabIndex={0}
            >
              <div className="absolute inset-0 opacity-60 transition duration-500 group-hover:opacity-100">
                <Canvas camera={{ position: [0, 0, 3], fov: 42 }}>
                  <ambientLight intensity={0.8} />
                  <pointLight position={[2, 2, 2]} intensity={2.5} />
                  <pointLight position={[-2, -1, 2]} intensity={1.2} color="#8b5cf6" />
                  <SkillCardScene index={index} active={activeSkill === index} />
                </Canvas>
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tone} text-2xl text-ink`}>
                  <Icon />
                </div>
                <div>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-slate-400">Core Skill</p>
                  <h3 className="text-2xl font-black text-white">{name}</h3>
                </div>
              </div>
            </article>
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
        <div className="reveal mb-12">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title max-w-4xl">Interactive builds with real product bones.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article key={project.title} className="reveal project-card h-[460px]">
              <div className="project-card-inner">
                <div className="project-face overflow-hidden rounded-3xl border border-white/10 bg-orbit">
                  <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
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
                  <div className="mt-8 flex flex-wrap gap-3">
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
            <h2 className="section-title max-w-3xl">Want the compact version?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
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
          <h2 className="section-title">Let’s build something sharp.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Send a note about the product, dashboard, website, or full-stack feature you want to bring to life.
          </p>
          <div className="mt-8 flex items-center gap-3 text-slate-300">
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
          <textarea className="field min-h-36 resize-none" name="message" placeholder="Message" required />
          <button className="inline-flex items-center justify-center gap-3 rounded-full bg-electric px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-ink transition hover:bg-signal" type="submit">
            Send Message <BiMailSend className="text-xl" />
          </button>
          {sent && <p className="text-sm font-semibold text-signal">Thanks, your message is being sent.</p>}
        </form>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
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
  }, []);

  return (
    <div className="App min-h-screen overflow-x-hidden bg-ink text-white">
      <CustomCursor />
      <Nav />
      <main className="page-fade">
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <Projects />
        <ResumeSection />
        <Contact />
      </main>
    </div>
  );
}

export default App;
