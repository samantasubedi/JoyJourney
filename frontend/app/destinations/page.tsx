"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  type Variants,
  AnimatePresence,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Globe2,
  Landmark,
  Mountain,
  PawPrint,
  Sparkles,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" as const },
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

type Category = "All" | "Mountains" | "Culture" | "Wildlife" | "Spiritual";

interface Destination {
  id: number;
  name: string;
  region: string;
  tagline: string;
  category: Exclude<Category, "All">;
  img: string;
  description: string;
  highlights: string[];
  bestTime: string;
  duration: string;
  altitude?: string;
  featured?: boolean;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Kathmandu Valley",
    region: "Central Nepal",
    tagline: "City of a Thousand Temples",
    category: "Culture",
    img: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=900&q=80",
    description:
      "A living museum of art and architecture, Kathmandu blends ancient pagodas, bustling bazaars, and vibrant street life into one intoxicating experience.",
    highlights: [
      "Pashupatinath Temple",
      "Boudhanath Stupa",
      "Swayambhunath",
      "Durbar Square",
    ],
    bestTime: "Oct – Dec & Mar – May",
    duration: "3–5 Days",
    featured: true,
  },
  {
    id: 2,
    name: "Everest Region",
    region: "Khumbu, East Nepal",
    tagline: "Roof of the World",
    category: "Mountains",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
    description:
      "Stand in the shadow of the world's highest peak. The Khumbu valley offers legendary trekking routes, Sherpa culture, and views that defy description.",
    highlights: [
      "Everest Base Camp",
      "Kala Patthar",
      "Namche Bazaar",
      "Tengboche Monastery",
    ],
    bestTime: "Mar – May & Sep – Nov",
    duration: "12–16 Days",
    altitude: "5,364 m",
    featured: true,
  },
  {
    id: 3,
    name: "Pokhara",
    region: "Gandaki, West Nepal",
    tagline: "Gateway to the Annapurnas",
    category: "Mountains",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    description:
      "Nestled beside the mirror-like Phewa Lake with the Annapurna massif as a backdrop, Pokhara is Nepal's adventure capital and a haven of natural beauty.",
    highlights: [
      "Phewa Lake",
      "Sarangkot Sunrise",
      "Davis Falls",
      "Paragliding",
    ],
    bestTime: "Sep – Nov & Mar – May",
    duration: "3–4 Days",
    featured: true,
  },
  {
    id: 4,
    name: "Chitwan",
    region: "Terai, South Nepal",
    tagline: "Jungle Safari Paradise",
    category: "Wildlife",
    img: "https://images.unsplash.com/photo-1549887534-3dbf9e2a27fa?w=900&q=80",
    description:
      "One of Asia's finest wildlife reserves, Chitwan shelters Bengal tigers, one-horned rhinos, gharials, and over 500 bird species in dense subtropical jungle.",
    highlights: [
      "Jeep Safari",
      "Elephant Bathing",
      "Canoe Ride",
      "Tharu Cultural Show",
    ],
    bestTime: "Oct – Mar",
    duration: "3–5 Days",
    featured: true,
  },
  {
    id: 5,
    name: "Lumbini",
    region: "Rupandehi, South Nepal",
    tagline: "Birthplace of the Buddha",
    category: "Spiritual",
    img: "https://images.unsplash.com/photo-1609766857695-e5d4da3eb57a?w=900&q=80",
    description:
      "A UNESCO World Heritage Site and one of the holiest places on Earth, Lumbini is where Siddhartha Gautama — the Buddha — was born circa 563 BCE.",
    highlights: [
      "Maya Devi Temple",
      "Ashoka Pillar",
      "World Peace Flame",
      "International Monasteries",
    ],
    bestTime: "Oct – Mar",
    duration: "1–2 Days",
  },
  {
    id: 6,
    name: "Annapurna Circuit",
    region: "Gandaki & Dhaulagiri",
    tagline: "The World's Greatest Trek",
    category: "Mountains",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80",
    description:
      "Circumnavigating the Annapurna massif, this epic journey passes through subtropical forests, high-altitude deserts, and ancient Tibetan-influenced villages.",
    highlights: [
      "Thorong La Pass (5,416 m)",
      "Muktinath Temple",
      "Manang Valley",
      "Marpha Village",
    ],
    bestTime: "Mar – May & Oct – Nov",
    duration: "14–21 Days",
    altitude: "5,416 m",
  },
  {
    id: 7,
    name: "Mustang",
    region: "Northern Nepal",
    tagline: "The Forbidden Kingdom",
    category: "Culture",
    img: "https://images.unsplash.com/photo-1623943739456-5fdb85bced56?w=900&q=80",
    description:
      "A restricted-permit region bordering Tibet, Upper Mustang offers an intact, centuries-old Buddhist kingdom with dramatic, Mars-like canyon landscapes.",
    highlights: [
      "Lo Manthang Walled City",
      "Cave Monasteries",
      "Tiji Festival",
      "Ancient Murals",
    ],
    bestTime: "Mar – Nov",
    duration: "10–14 Days",
    altitude: "3,840 m",
  },
  {
    id: 8,
    name: "Langtang Valley",
    region: "Bagmati, Central Nepal",
    tagline: "Valley of Glaciers",
    category: "Mountains",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&q=80",
    description:
      "The closest trekking destination to Kathmandu, Langtang offers pristine high-altitude landscapes, Tamang culture, and spectacular views of Langtang Lirung.",
    highlights: [
      "Kyanjin Gompa",
      "Tserko Ri (4,984 m)",
      "Langtang Lirung Views",
      "Yak Cheese Factory",
    ],
    bestTime: "Mar – May & Oct – Dec",
    duration: "7–10 Days",
    altitude: "3,870 m",
  },
];

const categories: Category[] = [
  "All",
  "Mountains",
  "Culture",
  "Wildlife",
  "Spiritual",
];

const categoryIcons: Record<Category, LucideIcon> = {
  All: Globe2,
  Mountains: Mountain,
  Culture: Landmark,
  Wildlife: PawPrint,
  Spiritual: Sparkles,
};

function DestinationCard({
  dest,
  index,
}: {
  dest: Destination;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const CategoryIcon = categoryIcons[dest.category];

  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden bg-zinc-900/60 border border-white/5 cursor-pointer"
    >
      <div className="relative h-60 overflow-hidden">
        <motion.img
          src={dest.img}
          alt={dest.name}
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
          <CategoryIcon className="w-4 h-4 text-amber-400" strokeWidth={1.8} />
          <span className="text-xs font-semibold text-white/80">
            {dest.category}
          </span>
        </div>

        {dest.altitude && (
          <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-xs font-bold text-black">
              {dest.altitude}
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-1">
            {dest.region}
          </p>
          <h3 className="text-xl font-bold font-serif text-white">
            {dest.name}
          </h3>
          <p className="text-sm text-white/60 mt-0.5">{dest.tagline}</p>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm text-white/60 leading-relaxed mb-4">
          {dest.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {dest.highlights.map((h) => (
            <span
              key={h}
              className="text-xs bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-white/70"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-white/50">
            <Clock3 className="w-4 h-4" strokeWidth={1.75} />
            <span>{dest.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/50">
            <CalendarDays className="w-4 h-4" strokeWidth={1.75} />
            <span>{dest.bestTime}</span>
          </div>
          <motion.button
            whileHover={{ x: 3 }}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
          >
            Explore <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.25} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedCard({ dest, index }: { dest: Destination; index: number }) {
  const [hovered, setHovered] = useState(false);
  const CategoryIcon = categoryIcons[dest.category];

  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ minHeight: "420px" }}
    >
      <motion.img
        src={dest.img}
        alt={dest.name}
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
          <CategoryIcon className="w-4 h-4 text-amber-400" strokeWidth={1.8} />
          <span className="text-xs font-semibold text-white/80">
            {dest.category}
          </span>
        </div>
        {dest.altitude && (
          <div className="bg-amber-500 rounded-full px-3 py-1">
            <span className="text-xs font-bold text-black">
              {dest.altitude}
            </span>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-7">
        <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-1">
          {dest.region}
        </p>
        <h3 className="text-3xl font-bold font-serif text-white mb-1">
          {dest.name}
        </h3>
        <p className="text-sm text-white/60 mb-3">{dest.tagline}</p>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-sm text-white/70 leading-relaxed mb-4 max-w-sm">
                {dest.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {dest.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs bg-white/10 border border-white/15 rounded-full px-2.5 py-1 text-white/80"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-xs text-white/50">
            <Clock3 className="w-4 h-4" strokeWidth={1.75} />
            <span>{dest.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/50">
            <CalendarDays className="w-4 h-4" strokeWidth={1.75} />
            <span>{dest.bestTime}</span>
          </div>
          <motion.button
            whileHover={{ x: 4 }}
            className="ml-auto text-sm font-semibold text-amber-400 flex items-center gap-1.5"
          >
            Explore <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [active, setActive] = useState<Category>("All");

  const featured = destinations.filter((d) => d.featured);
  const filtered =
    active === "All"
      ? destinations
      : destinations.filter((d) => d.category === active);

  return (
    <main className="min-h-screen bg-[#09090b] text-white overflow-x-hidden">
      <section
        ref={heroRef}
        className="relative h-[70vh] min-h-130 flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=80"
            alt="Nepal landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-zinc-950/60 via-zinc-950/40 to-[#09090b]" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <SectionLabel>Explore Nepal</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-black font-serif leading-tight mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
                Destinations
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed">
              From the world&apos;s highest peaks to ancient jungle kingdoms —
              discover every face of Nepal with JoyJourney.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-amber-400" />
          </div>
        </motion.div>
      </section>

      <section className="border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm">
        <AnimatedSection className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "8+", label: "Iconic Destinations" },
            { value: "150+", label: "Trekking Routes" },
            { value: "5,416 m", label: "Highest Pass" },
            { value: "12K+", label: "Happy Travelers" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              custom={i}
              className="text-center"
            >
              <p className="text-3xl font-black font-serif text-amber-400">
                {s.value}
              </p>
              <p className="text-sm text-white/50 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <SectionLabel>Top Picks</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black font-serif">
              Featured Destinations
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Handpicked experiences that define Nepal — hover each card to
              discover more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((dest, i) => (
              <FeaturedCard key={dest.id} dest={dest} index={i} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="mb-10">
            <SectionLabel>Browse All</SectionLabel>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="text-4xl md:text-5xl font-black font-serif">
                All Destinations
              </h2>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const Icon = categoryIcons[cat];
                  return (
                    <button
                      key={cat}
                      onClick={() => setActive(cat)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                        active === cat
                          ? "bg-amber-500 border-amber-500 text-black"
                          : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((dest, i) => (
                <DestinationCard key={dest.id} dest={dest} index={i} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-white/30 text-lg">
                No destinations in this category yet.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 via-transparent to-orange-600/5 pointer-events-none" />
        <AnimatedSection className="max-w-4xl mx-auto px-6 py-28 text-center">
          <motion.div variants={fadeUp} custom={0}>
            <SectionLabel>Plan Your Journey</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-black font-serif mb-6"
          >
            Ready to Explore Nepal?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-white/55 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Let our experts craft a personalized itinerary for your dream Nepal
            adventure — from Himalayan treks to cultural deep-dives.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/packages"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide transition-colors"
            >
              View Our Packages
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full border border-white/15 hover:border-white/30 text-white font-semibold text-sm tracking-wide transition-colors"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </section>
    </main>
  );
}
