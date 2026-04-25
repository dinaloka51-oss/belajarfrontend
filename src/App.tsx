import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
}

interface ServiceItem {
  icon: string;
  label: string;
}

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

interface PortfolioItem {
  category: "all" | "web" | "game" | "app";
  image: string;
  title: string;
}

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
];

const SERVICES: ServiceItem[] = [
  { icon: "🖥️", label: "Web Design" },
  { icon: "💻", label: "Web Development" },
  { icon: "🎨", label: "Theme Development" },
  { icon: "🎮", label: "Game Development" },
  { icon: "📱", label: "Apps Development" },
  { icon: "🖱️", label: "Desktop Application" },
  { icon: "🅆", label: "WordPress Themes" },
  { icon: "⚙️", label: "WordPress Plugins" },
  { icon: "📞", label: "Support & IT" },
];

const STATS: StatItem[] = [
  { icon: "📅", value: "12+", label: "Years of Experience" },
  { icon: "✅", value: "999+", label: "Completed Projects" },
  { icon: "👥", value: "480+", label: "Total Clients" },
  { icon: "🏆", value: "15+", label: "Award Won" },
];

const PORTFOLIO_TABS = ["All", "Web Development", "Game Development", "App Development"] as const;
type PortfolioTab = (typeof PORTFOLIO_TABS)[number];

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { category: "web", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=260&fit=crop", title: "Web App" },
  { category: "game", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=260&fit=crop", title: "Desk Setup" },
  { category: "app", image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=260&fit=crop", title: "Mobile App" },
  { category: "web", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=260&fit=crop", title: "Development" },
  { category: "app", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=260&fit=crop", title: "Mobile UX" },
  { category: "game", image: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=400&h=260&fit=crop", title: "Interface" },
];

const TEAM: TeamMember[] = [
  {
    name: "Jayden Vaughan",
    role: "Science Technician",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet consectetur.",
  },
  {
    name: "Sarah Mitchell",
    role: "Lead Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    quote: "Nullam consequat, mauris non interdum cursus, eros massa faucibus diam, in sodales quam ligula in est.",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1500, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(num);
  }, [inView, num, motionVal]);

  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className={`text-2xl font-black tracking-tight ${scrolled ? "text-[#3a6bc4]" : "text-white"}`}>
          <span className="text-[#3a6bc4] bg-white px-1 rounded mr-1">1</span>PAGE
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 hover:text-[#3a6bc4] ${scrolled ? "text-gray-700" : "text-white"
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className={`md:hidden text-2xl ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-sm font-semibold text-gray-700 hover:text-[#3a6bc4] hover:bg-blue-50"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const [slide, setSlide] = useState(0);
  const slides = [
    { title: "Game Development", sub: "We craft immersive worlds and interactive experiences that captivate players." },
    { title: "Web Design", sub: "Pixel-perfect interfaces that merge aesthetics with seamless usability." },
    { title: "App Development", sub: "Native and cross-platform mobile apps built for performance and scale." },
  ];

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div id="home" className="relative h-screen min-h-[560px] flex items-center justify-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a6e] via-[#2d5db8] to-[#4a7fd4]" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1484788984921-03950022c38b?w=1400&fit=crop')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a6e]/70 via-transparent to-transparent" />

      {/* Floating shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/10"
          style={{ width: 80 + i * 60, height: 80 + i * 60, top: `${10 + i * 15}%`, left: `${5 + i * 18}%` }}
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Prev / Next */}
      {(["←", "→"] as const).map((arrow, idx) => (
        <button
          key={arrow}
          onClick={() => setSlide((s) => (s + (idx === 0 ? -1 : 1) + slides.length) % slides.length)}
          className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all"
          style={{ [idx === 0 ? "left" : "right"]: "2rem" }}
        >
          {arrow}
        </button>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4">
              {slides[slide].title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl mx-auto">{slides[slide].sub}</p>
          </motion.div>
        </AnimatePresence>
        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-white text-[#2d5db8] font-bold tracking-widest uppercase text-sm px-10 py-4 rounded-full hover:bg-[#3a6bc4] hover:text-white transition-colors duration-300"
        >
          Get Started
        </motion.a>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === slide ? "bg-white w-6" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────────

function About() {
  return (
    <Section id="about" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2 variants={fadeUp} className="text-4xl font-black text-[#2d5db8] mb-3">
          Welcome To Our Website
        </motion.h2>
        <motion.div variants={fadeUp} className="w-12 h-1 bg-[#2d5db8] mx-auto mb-8 rounded-full" />
        <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies.
          Consequat mauris non interdum cursus. Donec viverra at massa faucibus diam, in sodales quam ligula in est.
          Nullam ultrices turpis ut justo mollis tempus. Aliquam et tortor at quam laoreet condimentum ac nec leo.
        </motion.p>
        <motion.a
          variants={fadeUp}
          href="#about"
          whileHover={{ scale: 1.05 }}
          className="inline-block border-2 border-[#2d5db8] text-[#2d5db8] font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#2d5db8] hover:text-white transition-all"
        >
          Read More
        </motion.a>
      </div>
    </Section>
  );
}

// ─── Mission Blocks ────────────────────────────────────────────────────────────

function Mission() {
  const items = [
    { icon: "↩", title: "Our Story", bg: "bg-[#3a6bc4]", text: "text-white" },
    { icon: "◎", title: "Our Mission", bg: "bg-[#1e1e2e]", text: "text-white" },
    { icon: "👁", title: "Our Vision", bg: "bg-[#3a6bc4]", text: "text-white" },
  ];

  return (
    <Section className="grid grid-cols-1 md:grid-cols-3">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          custom={i}
          whileHover={{ scale: 1.02 }}
          className={`${item.bg} ${item.text} p-12 text-center`}
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-black tracking-wide mb-4">{item.title}</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies.
            Nullam consequat, mauris non interdum cursus, eros massa faucibus diam, in sodales quam ligula in est.
          </p>
        </motion.div>
      ))}
    </Section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <Section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 variants={fadeUp} className="text-4xl font-black text-[#2d5db8] text-center mb-3">
          Our Services
        </motion.h2>
        <motion.div variants={fadeUp} className="w-12 h-1 bg-[#2d5db8] mx-auto mb-4 rounded-full" />
        <motion.p variants={fadeUp} className="text-gray-400 text-center mb-14 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies.
          Nullam consequat, mauris non interdum cursus.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.label}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(58,107,196,0.15)" }}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-6 py-5 cursor-pointer group transition-all"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#3a6bc4] flex items-center justify-center text-xl group-hover:bg-[#3a6bc4] group-hover:text-white transition-all">
                {svc.icon}
              </div>
              <span className="font-bold text-gray-700 text-sm tracking-wide uppercase group-hover:text-[#2d5db8] transition-colors">
                {svc.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <Section className="py-20 bg-[#3a6bc4]">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {STATS.map((stat, i) => (
          <motion.div key={stat.label} variants={fadeUp} custom={i} className="flex flex-col items-center gap-2">
            <span className="text-4xl mb-2">{stat.icon}</span>
            <span className="text-5xl font-black text-white">
              <AnimatedCounter value={stat.value} />
            </span>
            <span className="text-white/60 text-xs tracking-widest uppercase">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ─── Portfolio ─────────────────────────────────────────────────────────────────

function Portfolio() {
  const [active, setActive] = useState<PortfolioTab>("All");

  const filtered =
    active === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => {
        if (active === "Web Development") return p.category === "web";
        if (active === "Game Development") return p.category === "game";
        return p.category === "app";
      });

  return (
    <Section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 variants={fadeUp} className="text-4xl font-black text-[#2d5db8] text-center mb-3">
          Our Portfolio
        </motion.h2>
        <motion.div variants={fadeUp} className="w-12 h-1 bg-[#2d5db8] mx-auto mb-4 rounded-full" />
        <motion.p variants={fadeUp} className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies.
          Nullam consequat, mauris non interdum cursus.
        </motion.p>

        {/* Tabs */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-10">
          {PORTFOLIO_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full transition-all ${active === tab
                ? "bg-[#2d5db8] text-white shadow-lg shadow-blue-200"
                : "text-gray-400 hover:text-[#2d5db8]"
                }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.image}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#2d5db8]/0 group-hover:bg-[#2d5db8]/70 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-black text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <Section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 variants={fadeUp} className="text-4xl font-black text-[#2d5db8] text-center mb-3">
          What Clients Say
        </motion.h2>
        <motion.div variants={fadeUp} className="w-12 h-1 bg-[#2d5db8] mx-auto mb-14 rounded-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex gap-6"
            >
              <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0 ring-4 ring-[#3a6bc4]/20" />
              <div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 italic">"{member.quote}"</p>
                <p className="font-black text-gray-800">{member.name}</p>
                <p className="text-[#3a6bc4] text-xs font-semibold tracking-wide">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────────

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" className="py-24 bg-[#1a3a6e]">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-3">
          Contact Us
        </motion.h2>
        <motion.div variants={fadeUp} className="w-12 h-1 bg-white/40 mx-auto mb-10 rounded-full" />
        <motion.div variants={stagger} className="space-y-4">
          {(["Your Name", "Your Email"] as const).map((ph) => (
            <motion.input
              key={ph}
              variants={fadeUp}
              type={ph.includes("Email") ? "email" : "text"}
              placeholder={ph}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors"
            />
          ))}
          <motion.textarea
            variants={fadeUp}
            rows={5}
            placeholder="Your Message"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors resize-none"
          />
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSent(true)}
            className="w-full bg-white text-[#2d5db8] font-black tracking-widest uppercase py-4 rounded-xl hover:bg-[#3a6bc4] hover:text-white transition-all"
          >
            {sent ? "✓ Message Sent!" : "Send Message"}
          </motion.button>
        </motion.div>
      </div>
    </Section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400 py-10 text-center text-sm">
      <p className="mb-2">
        <span className="text-[#3a6bc4] font-black text-lg">1</span>
        <span className="text-white font-black text-lg">PAGE</span>
      </p>
      <p>© {new Date().getFullYear()} 1PAGE. All rights reserved.</p>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}