"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  type Variants,
} from "framer-motion";
import {
  Mountain,
  Landmark,
  Trees,
  Sparkles,
  Check,
  ArrowRight,
  Star,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Gem,
} from "lucide-react";

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
  const inView = useInView(ref, { once: true, amount: 0.2 });
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

const highlights = [
  {
    icon: Mountain,
    title: "Himalayan Majesty",
    desc: "Stand before 8 of the world's 10 highest peaks, including the legendary Mount Everest.",
    color: "from-sky-500/20 to-blue-600/10",
    iconColor: "text-sky-400",
  },
  {
    icon: Landmark,
    title: "Ancient Culture",
    desc: "Thousands of temples, UNESCO World Heritage Sites, and living traditions that span millennia.",
    color: "from-amber-500/20 to-orange-600/10",
    iconColor: "text-amber-400",
  },
  {
    icon: Trees,
    title: "Wildlife Safari",
    desc: "Spot rare Bengal tigers, one-horned rhinos, and elephants in Chitwan National Park.",
    color: "from-emerald-500/20 to-green-600/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Sparkles,
    title: "Spiritual Home",
    desc: "Walk in the footsteps of the Buddha at Lumbini — the sacred birthplace of enlightenment.",
    color: "from-violet-500/20 to-purple-600/10",
    iconColor: "text-violet-400",
  },
];

const destinations = [
  {
    name: "Kathmandu",
    tagline: "City of Temples",
    img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",

    span: "md:col-span-2",
  },
  {
    name: "Pokhara",
    tagline: "Gateway to the Annapurnas",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    span: "",
  },
  {
    name: "Chitwan",
    tagline: "Jungle Safari Paradise",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    span: "",
  },
  {
    name: "Everest Region",
    tagline: "Roof of the World",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    span: "md:col-span-2",
  },
];

const stats = [
  { value: "8+", label: "World's Highest Peaks" },
  { value: "150+", label: "Trekking Routes" },
  { value: "12K+", label: "Happy Travelers" },
  { value: "20+", label: "Years of Experience" },
];

const packages = [
  {
    tier: "Explorer",
    price: "$799",
    duration: "7 Days",
    highlight: false,
    features: [
      "Kathmandu Valley Tour",
      "Nagarkot Sunrise View",
      "Cultural Heritage Sites",
      "Guided City Walk",
      "Standard Hotel Stays",
    ],
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
  },
  {
    tier: "Adventurer",
    price: "$1,499",
    duration: "14 Days",
    highlight: true,
    features: [
      "Annapurna Base Camp Trek",
      "Chitwan Safari",
      "Pokhara Adventure",
      "All Meals Included",
      "Premium Lodge Stays",
    ],
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
  },
  {
    tier: "Summit",
    price: "$3,299",
    duration: "21 Days",
    highlight: false,
    features: [
      "Everest Base Camp Trek",
      "Luxury Hotel Stays",
      "Helicopter Return",
      "Private Guide & Porter",
      "Full Support Team",
    ],
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
];

const testimonials = [
  {
    quote:
      "JoyJourney turned my dream of reaching Everest Base Camp into the most unforgettable chapter of my life. Flawless from start to finish.",
    name: "Sarah Mitchell",
    role: "Adventure Traveler, USA",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote:
      "Every detail was handled with care. The cultural immersion, the landscapes, the people — Nepal through JoyJourney is simply magical.",
    name: "Luca Rossi",
    role: "Photographer, Italy",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    quote:
      "Our family safari at Chitwan was incredible. The kids still talk about it. Professional, safe, and breathtaking — highly recommended.",
    name: "Priya Nair",
    role: "Family Traveler, India",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
];

export default function Home() {
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
        className="relative h-screen min-h-175 flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=90"
            alt="Nepal mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-[#09090b]" />
          <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/30" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-[8%] w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Nepal&apos;s Premier Travel Experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold leading-[1.05] mb-6 tracking-tight"
          >
            <span className="block text-white">Discover the</span>
            <span className="block bg-linear-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent pb-2">
              Soul of Nepal
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From Everest Base Camp to ancient temples, from jungle safaris to
            lakeside serenity — your extraordinary journey begins here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/destinations"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 40px rgba(245,158,11,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-linear-to-r from-amber-400 to-yellow-500 text-black font-bold px-8 py-4 rounded-full text-sm tracking-wide cursor-pointer inline-flex items-center gap-2"
            >
              Explore Destinations <ArrowRight size={15} />
            </motion.a>
            <motion.a
              href="/packages"
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide cursor-pointer"
            >
              View Packages
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-linear-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      <section className="relative z-10 -mt-1 bg-[#09090b] px-6">
        <AnimatedSection className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              custom={i}
              className="bg-[#0f0f12] px-8 py-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-1">
                {s.value}
              </div>
              <div className="text-white/50 text-xs tracking-wider uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <SectionLabel>Why Nepal</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-serif font-bold text-white"
            >
              A World Unlike Any Other
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 text-white/50 max-w-xl mx-auto leading-relaxed"
            >
              Nepal packs an astonishing world of experiences into one small
              country — the highest peaks, the oldest cultures, the rarest
              wildlife.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`relative bg-linear-to-br ${h.color} border border-white/10 rounded-2xl p-7 overflow-hidden group cursor-default`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/3 rounded-2xl" />
                <div className={`mb-5 ${h.iconColor}`}>
                  <h.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{h.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0b0b0e]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <motion.div variants={fadeUp}>
              <SectionLabel>Destinations</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-serif font-bold text-white"
            >
              Places That Take Your Breath Away
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-3 gap-4 auto-rows-[280px]">
            {destinations.map((d, i) => (
              <motion.div
                key={d.name}
                variants={scaleIn}
                custom={i}
                className={`${d.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-amber-400 text-xs tracking-widest uppercase font-semibold mb-1">
                    {d.tagline}
                  </p>
                  <h3 className="text-white text-2xl font-serif font-bold">
                    {d.name}
                  </h3>
                </div>
                <div className="absolute top-5 right-5 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight size={15} />
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          <AnimatedSection className="text-center mt-10">
            <motion.a
              variants={fadeUp}
              href="/destinations"
              className="inline-flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide"
            >
              View all destinations <ArrowRight size={15} />
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <motion.div
              variants={scaleIn}
              className="relative rounded-3xl overflow-hidden aspect-4/5"
            >
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85"
                alt="Trekking Nepal"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-8 -right-4 md:-right-8 bg-[#0f0f12]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 shadow-2xl max-w-50"
              >
                <p className="text-amber-400 text-3xl font-serif font-bold">
                  98%
                </p>
                <p className="text-white/60 text-xs mt-1 leading-snug">
                  Satisfaction rate from our travelers
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="space-y-6">
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Promise</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight"
            >
              Crafted Journeys, <br />
              <span className="text-amber-400">Unforgettable Memories</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-white/55 leading-relaxed"
            >
              We don&apos;t just plan trips — we architect transformative
              experiences. Every route, every lodge, every guide is chosen with
              meticulous care to ensure your Nepal journey exceeds every
              expectation.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4 pt-2">
              {[
                "Expert local guides with 10+ years experience",
                "Small group sizes for an intimate experience",
                "Sustainable and responsible travel practices",
                "24/7 on-ground support throughout your journey",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  custom={i + 3}
                  className="flex items-start gap-3 text-white/70 text-sm"
                >
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                    <Check size={11} strokeWidth={2.5} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              variants={fadeUp}
              custom={7}
              href="/about"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm mt-2 group"
            >
              Learn about us{" "}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0b0b0e]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <SectionLabel>Travel Packages</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-serif font-bold text-white"
            >
              Find Your Perfect Adventure
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.tier}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative rounded-3xl overflow-hidden border flex flex-col ${
                  pkg.highlight
                    ? "border-amber-400/60 shadow-[0_0_60px_rgba(245,158,11,0.15)]"
                    : "border-white/10"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-4 right-4 z-10 bg-amber-400 text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={pkg.img}
                    alt={pkg.tier}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0f0f12]" />
                </div>
                <div
                  className={`p-7 flex-1 flex flex-col ${pkg.highlight ? "bg-linear-to-b from-amber-950/30 to-[#0f0f12]" : "bg-[#0f0f12]"}`}
                >
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-1">
                    {pkg.duration}
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">
                    {pkg.tier}
                  </h3>
                  <p className="text-amber-400 text-3xl font-bold mb-6">
                    {pkg.price}
                  </p>
                  <ul className="space-y-2.5 flex-1 mb-7">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-white/60 text-sm"
                      >
                        <Gem size={12} className="text-amber-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="/packages"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer ${
                      pkg.highlight
                        ? "bg-amber-400 text-black hover:bg-amber-300"
                        : "bg-white/8 border border-white/15 text-white hover:bg-white/15"
                    }`}
                  >
                    Book This Package
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <SectionLabel>Testimonials</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-serif font-bold text-white"
            >
              Words from Our Travelers
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
                className="bg-[#0f0f12] border border-white/8 rounded-2xl p-8 flex flex-col gap-6"
              >
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <blockquote className="text-white/70 text-sm leading-loose flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-400/30"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-6 px-6 pb-24">
        <AnimatedSection>
          <motion.div
            variants={scaleIn}
            className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80"
              alt="Everest"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
            <div className="relative z-10 px-10 py-20 md:py-24 max-w-2xl">
              <SectionLabel>Start Your Journey</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2 mb-5 leading-tight">
                Your Adventure <br />
                <span className="text-amber-400">Awaits in Nepal</span>
              </h2>
              <p className="text-white/65 mb-8 leading-relaxed">
                Join thousands of travelers who discovered the magic of Nepal
                with JoyJourney. Let us craft your perfect itinerary — no two
                journeys are ever the same.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/packages"
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 40px rgba(245,158,11,0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-linear-to-r from-amber-400 to-yellow-500 text-black font-bold px-8 py-4 rounded-full text-sm tracking-wide cursor-pointer text-center"
                >
                  Book Your Adventure <ArrowRight size={15} />
                </motion.a>
                <motion.a
                  href="/services"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                  className="inline-block bg-white/8 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-sm cursor-pointer text-center"
                >
                  View Services
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

      <footer className="bg-[#050507] border-t border-white/8 px-6 pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-14">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                Joy<span className="text-amber-400">Journey</span>
              </h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-xs">
                Nepal&apos;s premier travel experience — crafting unforgettable
                journeys since 2005. Explore the Himalayas, culture, and
                wildlife.
              </p>
              <div className="flex gap-3 mt-6">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" },
                ].map(({ icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href="#"
                    aria-label={label}
                    whileHover={{ scale: 1.15 }}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-amber-400/50 hover:text-amber-400 transition-colors"
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>

            {[
              {
                title: "Explore",
                links: ["Destinations", "Packages", "Services", "About"],
              },
              {
                title: "Support",
                links: ["Travel Guide", "FAQs", "Contact Us", "Blog"],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-white/80 font-semibold text-sm mb-5 tracking-wider uppercase">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                        className="text-white/40 text-sm hover:text-amber-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} JoyJourney. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/30 text-xs hover:text-white/60 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
