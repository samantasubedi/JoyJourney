"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  type Variants,
} from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-amber-500 mb-3">
      {children}
    </span>
  );
}

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { value: "12K+", label: "Happy Travelers" },
  { value: "20+", label: "Years of Experience" },
  { value: "150+", label: "Trekking Routes" },
  { value: "98%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: "🌿",
    title: "Sustainable Travel",
    desc: "We are committed to protecting Nepal's fragile ecosystems. Every trip is designed with minimal environmental impact in mind.",
    color: "from-emerald-500/20 to-green-600/10",
    border: "border-emerald-500/20",
  },
  {
    icon: "🤝",
    title: "Community First",
    desc: "We work hand-in-hand with local guides, lodges, and communities so tourism directly uplifts the people of Nepal.",
    color: "from-amber-500/20 to-orange-600/10",
    border: "border-amber-500/20",
  },
  {
    icon: "🛡️",
    title: "Safety Above All",
    desc: "From certified guides to emergency protocols, your safety is our highest priority on every route.",
    color: "from-sky-500/20 to-blue-600/10",
    border: "border-sky-500/20",
  },
  {
    icon: "✨",
    title: "Authentic Experiences",
    desc: "No cookie-cutter tours. We craft journeys that immerse you in real culture, real landscapes, and real stories.",
    color: "from-violet-500/20 to-purple-600/10",
    border: "border-violet-500/20",
  },
];

const team = [
  {
    name: "Aarav Sharma",
    role: "Founder & Lead Guide",
    img: "https://i.pravatar.cc/300?img=11",
    bio: "Born in the foothills of the Annapurnas, Aarav has spent 20 years guiding travelers to Nepal's most breathtaking corners.",
  },
  {
    name: "Maya Thapa",
    role: "Head of Operations",
    img: "https://i.pravatar.cc/300?img=47",
    bio: "With a background in hospitality and a passion for flawless logistics, Maya ensures every journey unfolds seamlessly.",
  },
  {
    name: "Rajan Gurung",
    role: "Senior Trek Specialist",
    img: "https://i.pravatar.cc/300?img=15",
    bio: "A former mountaineer with over 30 Himalayan expeditions, Rajan's expertise turns ambitious treks into safe triumphs.",
  },
];

const milestones = [
  { year: "2004", event: "JoyJourney founded in Kathmandu by Aarav Sharma." },
  {
    year: "2008",
    event: "First Everest Base Camp package introduced — sold out in weeks.",
  },
  {
    year: "2013",
    event: "Expanded to wildlife safaris, partnering with Chitwan lodges.",
  },
  {
    year: "2015",
    event:
      "Helped rebuild trails and communities after the Nepal earthquake. 🙏",
  },
  {
    year: "2019",
    event: "Launched luxury helicopter tours and private summit expeditions.",
  },
  {
    year: "2024",
    event:
      "Crossed 12,000 happy travelers. Recognised as Nepal's Top Eco-Tour Operator.",
  },
];

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="bg-[#09090b] text-white overflow-x-hidden">
      <section
        ref={heroRef}
        className="relative h-[80vh] min-h-[560px] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1920&q=90"
            alt="Himalayan landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-[#09090b]" />
          <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/30" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[12%] w-72 h-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 18, 0], opacity: [0.2, 0.45, 0.2] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-[10%] w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Our Story
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold leading-[1.08] mb-6 tracking-tight"
          >
            <span className="block text-white">Passion Born in</span>
            <span className="block bg-linear-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent pb-2">
              the Himalayas
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Two decades of guiding dreamers, adventurers, and wanderers through
            the world&apos;s most magnificent landscape.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-snug mb-6">
                More than a travel agency — we&apos;re{" "}
                <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  storytellers
                </span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-5">
                JoyJourney was born from a simple belief: travel should
                transform you. Since 2004, we&apos;ve been curating immersive
                experiences across Nepal — from the icy ridges of Everest to the
                steaming forests of Chitwan.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Every route we craft, every lodge we partner with, every guide
                we train is a reflection of our obsession with authenticity. We
                don&apos;t just show you Nepal — we let Nepal speak to you.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="relative">
            <motion.div
              variants={scaleIn}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80"
                alt="Nepal trek"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="absolute -bottom-6 -left-4 bg-[#111113] border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-md shadow-xl"
            >
              <p className="text-3xl font-serif font-bold text-amber-400">
                20+
              </p>
              <p className="text-white/60 text-sm mt-0.5">
                Years guiding Nepal
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={scaleIn}
                custom={i}
                className="relative group bg-white/[0.03] border border-white/8 rounded-2xl p-7 text-center hover:border-amber-500/30 transition-colors duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-4xl font-serif font-bold text-amber-400 mb-2">
                  {s.value}
                </p>
                <p className="text-white/50 text-sm tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <SectionLabel>What Drives Us</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Our Core Values
              </h2>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                custom={i}
                className={`relative group bg-linear-to-br ${v.color} border ${v.border} rounded-2xl p-7 hover:scale-[1.02] transition-transform duration-300`}
              >
                <span className="text-4xl mb-5 block">{v.icon}</span>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {v.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Journey</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Two Decades of Milestones
              </h2>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-10 pl-16">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  variants={fadeUp}
                  custom={i}
                  className="relative"
                >
                  <div className="absolute -left-[2.6rem] top-1 w-3 h-3 rounded-full bg-amber-400 ring-4 ring-amber-400/20" />
                  <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">
                    {m.year}
                  </p>
                  <p className="text-white/70 leading-relaxed">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <SectionLabel>The People Behind the Magic</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Meet Our Team
              </h2>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={scaleIn}
                custom={i}
                className="group bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-colors duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="text-white font-semibold text-xl font-serif mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 px-6">
        <AnimatedSection>
          <motion.div
            variants={scaleIn}
            className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80"
              alt="Nepal vista"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-amber-900/40" />

            <div className="relative z-10 text-center py-20 px-8">
              <motion.div variants={fadeUp}>
                <SectionLabel>Ready to Explore?</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-snug"
              >
                Your Nepal adventure{" "}
                <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  awaits
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-white/70 text-lg max-w-xl mx-auto mb-10"
              >
                Let&apos;s plan a journey that will stay with you forever. Talk
                to our experts today.
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="/packages"
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 40px rgba(245,158,11,0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-colors duration-200"
                >
                  View Packages
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-colors duration-200"
                >
                  Our Services
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>
    </main>
  );
}
