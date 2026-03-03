"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
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



type PackageCategory = "All" | "Trekking" | "Cultural" | "Wildlife" | "Luxury";

interface Package {
  id: number;
  tier: string;
  tagline: string;
  category: Exclude<PackageCategory, "All">;
  price: string;
  priceNote: string;
  duration: string;
  groupSize: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Strenuous";
  img: string;
  highlights: string[];
  includes: string[];
  bestFor: string;
  featured?: boolean;
  badge?: string;
}

const packages: Package[] = [
  {
    id: 1,
    tier: "Cultural Explorer",
    tagline: "Temples, heritage & the soul of Kathmandu",
    category: "Cultural",
    price: "$799",
    priceNote: "per person",
    duration: "7 Days",
    groupSize: "2–12",
    difficulty: "Easy",
    img: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=900&q=80",
    highlights: [
      "Kathmandu Valley Tour",
      "Nagarkot Sunrise",
      "Bhaktapur Durbar Square",
      "Pashupatinath Evening Aarti",
    ],
    includes: [
      "Airport transfers",
      "5-star hotel stays",
      "Expert cultural guide",
      "All entry fees",
      "Daily breakfast & dinners",
    ],
    bestFor: "Culture lovers & first-time visitors",
  },
  {
    id: 2,
    tier: "Jungle Escape",
    tagline: "Wild Nepal — where tigers roam free",
    category: "Wildlife",
    price: "$1,099",
    priceNote: "per person",
    duration: "8 Days",
    groupSize: "2–8",
    difficulty: "Easy",
    img: "https://images.unsplash.com/photo-1549887534-3dbf9e2a27fa?w=900&q=80",
    highlights: [
      "Chitwan National Park Safari",
      "Elephant & Rhino Encounters",
      "Canoe River Ride",
      "Tharu Cultural Evening",
    ],
    includes: [
      "Jungle lodge accommodation",
      "All safari activities",
      "Naturalist guide",
      "All meals",
      "National park fees",
    ],
    bestFor: "Nature enthusiasts & wildlife lovers",
  },
  {
    id: 3,
    tier: "Annapurna Trekker",
    tagline: "The world's greatest trek awaits",
    category: "Trekking",
    price: "$1,499",
    priceNote: "per person",
    duration: "14 Days",
    groupSize: "2–10",
    difficulty: "Moderate",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80",
    highlights: [
      "Annapurna Base Camp Trek",
      "Pokhara Lakeside",
      "Sarangkot Sunrise",
      "Paragliding Option",
    ],
    includes: [
      "Tea-house & lodge stays",
      "Experienced trek guide & porter",
      "ACAP & TIMS permits",
      "All meals on trek",
      "Emergency evacuation cover",
    ],
    bestFor: "Trekking enthusiasts & nature seekers",
    featured: true,
    badge: "Most Popular",
  },
  {
    id: 4,
    tier: "Grand Nepal",
    tagline: "Culture, wildlife & mountains — the complete Nepal",
    category: "Cultural",
    price: "$2,199",
    priceNote: "per person",
    duration: "18 Days",
    groupSize: "2–8",
    difficulty: "Moderate",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&q=80",
    highlights: [
      "Kathmandu Heritage Tour",
      "Chitwan Safari",
      "Annapurna Circuit Highlights",
      "Lumbini Pilgrimage",
    ],
    includes: [
      "Premium hotel & lodge stays",
      "Private guide throughout",
      "All transfers & flights",
      "All meals",
      "Full permit package",
    ],
    bestFor: "Travelers wanting a full Nepal experience",
    badge: "Best Value",
  },
  {
    id: 5,
    tier: "Everest Base Camp",
    tagline: "Stand at the foot of the world's highest peak",
    category: "Trekking",
    price: "$3,299",
    priceNote: "per person",
    duration: "21 Days",
    groupSize: "2–8",
    difficulty: "Strenuous",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
    highlights: [
      "Everest Base Camp (5,364 m)",
      "Kala Patthar Summit View",
      "Namche Bazaar",
      "Tengboche Monastery",
    ],
    includes: [
      "Premium lodge & tea-house stays",
      "Private certified guide & porter",
      "Lukla flight tickets",
      "Sagarmatha National Park permit",
      "All meals & snacks on trek",
    ],
    bestFor: "Serious trekkers & bucket-list adventurers",
    featured: true,
  },
  {
    id: 6,
    tier: "Himalayan Luxury",
    tagline: "The Himalayas, reimagined with 5-star refinement",
    category: "Luxury",
    price: "$5,999",
    priceNote: "per person",
    duration: "14 Days",
    groupSize: "2–4",
    difficulty: "Easy",
    img: "https://images.unsplash.com/photo-1623943739456-5fdb85bced56?w=900&q=80",
    highlights: [
      "Private Helicopter Excursion",
      "Luxury Eco-Lodge Stays",
      "EBC Scenic Flight",
      "Private Chef & Butler",
    ],
    includes: [
      "5-star & boutique hotel stays",
      "Private helicopter tours",
      "Personal concierge",
      "Fine dining throughout",
      "Exclusive cultural experiences",
    ],
    bestFor: "Luxury travelers & honeymoon couples",
    badge: "Premium",
  },
];

const categories: PackageCategory[] = [
  "All",
  "Trekking",
  "Cultural",
  "Wildlife",
  "Luxury",
];

const categoryIcons: Record<PackageCategory, string> = {
  All: "🗺",
  Trekking: "🏔",
  Cultural: "🛕",
  Wildlife: "🐘",
  Luxury: "✨",
};

const difficultyColor: Record<Package["difficulty"], string> = {
  Easy: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Moderate: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Challenging: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Strenuous: "text-red-400 bg-red-400/10 border-red-400/20",
};



function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      className={`relative rounded-2xl overflow-hidden bg-zinc-900/60 border transition-all duration-300 cursor-pointer ${
        pkg.featured
          ? "border-amber-500/40 shadow-lg shadow-amber-500/10"
          : "border-white/5 hover:border-white/15"
      }`}
      onClick={() => setExpanded((v) => !v)}
    >

      {pkg.badge && (
        <div className="absolute top-4 right-4 z-20 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
          {pkg.badge}
        </div>
      )}

   
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={pkg.img}
          alt={pkg.tier}
          animate={{ scale: expanded ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

       
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
          <span className="text-xs">{categoryIcons[pkg.category]}</span>
          <span className="text-xs font-semibold text-white/80">
            {pkg.category}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-xl font-bold font-serif text-white">
            {pkg.tier}
          </h3>
          <p className="text-sm text-white/55 mt-0.5">{pkg.tagline}</p>
        </div>
      </div>

    
      <div className="p-5">
     
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <span
            className={`text-xs font-semibold border rounded-full px-2.5 py-0.5 ${difficultyColor[pkg.difficulty]}`}
          >
            {pkg.difficulty}
          </span>
          <span className="flex items-center gap-1 text-xs text-white/50">
            🕐 {pkg.duration}
          </span>
          <span className="flex items-center gap-1 text-xs text-white/50">
            👥 {pkg.groupSize} pax
          </span>
        </div>

       
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.highlights.map((h) => (
            <span
              key={h}
              className="text-xs bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5 text-white/65"
            >
              {h}
            </span>
          ))}
        </div>

     
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="includes"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
                What&apos;s Included
              </p>
              <ul className="space-y-1.5 mb-4">
                {pkg.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <span className="mt-0.5 text-amber-400 shrink-0">✓</span>
                    {inc}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-white/40 italic mb-4">
                Best for: {pkg.bestFor}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div>
            <span className="text-2xl font-black font-serif text-amber-400">
              {pkg.price}
            </span>
            <span className="text-xs text-white/40 ml-1">{pkg.priceNote}</span>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.stopPropagation();
                setExpanded((v) => !v);
              }}
              className="text-xs font-semibold text-white/50 hover:text-white transition-colors"
            >
              {expanded ? "Less ↑" : "Details ↓"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                pkg.featured
                  ? "bg-amber-500 hover:bg-amber-400 text-black"
                  : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
              }`}
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}



function FeaturedPackageCard({ pkg }: { pkg: Package }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={scaleIn}
      custom={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer border border-amber-500/30 shadow-xl shadow-amber-500/10"
      style={{ minHeight: "460px" }}
    >
      <motion.img
        src={pkg.img}
        alt={pkg.tier}
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

      {pkg.badge && (
        <div className="absolute top-5 right-5 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
          {pkg.badge}
        </div>
      )}

      <div className="absolute top-5 left-5 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
        <span className="text-xs">{categoryIcons[pkg.category]}</span>
        <span className="text-xs font-semibold text-white/80">
          {pkg.category}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-7">
        <p className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-1">
          Featured Package
        </p>
        <h3 className="text-3xl font-black font-serif text-white mb-1">
          {pkg.tier}
        </h3>
        <p className="text-sm text-white/60 mb-3">{pkg.tagline}</p>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {pkg.highlights.map((h) => (
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

        <div className="flex items-center gap-5">
          <div>
            <span className="text-2xl font-black font-serif text-amber-400">
              {pkg.price}
            </span>
            <span className="text-xs text-white/40 ml-1">{pkg.priceNote}</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-white/50">
            🕐 {pkg.duration}
          </span>
          <span className="flex items-center gap-1 text-xs text-white/50">
            👥 {pkg.groupSize} pax
          </span>
          <motion.button
            whileHover={{ x: 4 }}
            className="ml-auto px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold transition-colors"
          >
            Book Now →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}



export default function Packages() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [active, setActive] = useState<PackageCategory>("All");

  const featured = packages.filter((p) => p.featured);
  const filtered =
    active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-[#09090b] text-white overflow-x-hidden">
    
      <section
        ref={heroRef}
        className="relative h-[70vh] min-h-130 flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1800&q=80"
            alt="Nepal trekking"
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
            <SectionLabel>Tailored Adventures</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-black font-serif leading-tight mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
                Packages
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed">
              Carefully crafted journeys through Nepal — from serene cultural
              escapes to legendary Himalayan expeditions.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
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

      {/* ── Stats bar ── */}
      <section className="border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm">
        <AnimatedSection className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "6+", label: "Curated Packages" },
            { value: "21", label: "Max Days" },
            { value: "12K+", label: "Happy Travelers" },
            { value: "100%", label: "Customisable" },
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

      {/* ── Featured packages ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <SectionLabel>Staff Picks</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black font-serif">
              Featured Packages
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Our most-loved adventures — hover each card to discover what makes
              them special.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((pkg, i) => (
              <FeaturedPackageCard
                key={pkg.id}
                pkg={{ ...pkg, featured: true }}
              />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── All packages ── */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="mb-10">
            <SectionLabel>Browse All</SectionLabel>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="text-4xl md:text-5xl font-black font-serif">
                All Packages
              </h2>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                      active === cat
                        ? "bg-amber-500 border-amber-500 text-black"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{categoryIcons[cat]}</span>
                    {cat}
                  </button>
                ))}
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
              filtered.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} index={i} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-white/30 text-lg">
                No packages in this category yet.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

   
      <section className="border-t border-white/5 bg-zinc-950/40">
        <AnimatedSection className="max-w-6xl mx-auto px-6 py-24">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <SectionLabel>Why JoyJourney</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black font-serif">
              Travel with confidence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🛡",
                title: "Safety First",
                desc: "All guides are certified wilderness first-aid trained. Your safety is our top priority on every expedition.",
                color: "from-sky-500/20 to-blue-600/10",
              },
              {
                icon: "🧭",
                title: "Expert Local Guides",
                desc: "Our guides are born and raised in Nepal — their intimate knowledge of the land is unmatched.",
                color: "from-amber-500/20 to-orange-600/10",
              },
              {
                icon: "♻️",
                title: "Sustainable Travel",
                desc: "We follow Leave No Trace principles and support local communities with every trip.",
                color: "from-emerald-500/20 to-green-600/10",
              },
              {
                icon: "🎯",
                title: "Fully Customisable",
                desc: "Every package can be tailored to your pace, interests, and budget. Your journey, your rules.",
                color: "from-violet-500/20 to-purple-600/10",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                custom={i}
                className={`rounded-2xl p-6 bg-linear-to-br ${item.color} border border-white/5`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold font-serif mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

    
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 via-transparent to-orange-600/5 pointer-events-none" />
        <AnimatedSection className="max-w-4xl mx-auto px-6 py-28 text-center">
          <motion.div variants={fadeUp} custom={0}>
            <SectionLabel>Design Your Trip</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-black font-serif mb-6"
          >
            Can&apos;t find your perfect package?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-white/55 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Let us build a fully bespoke Nepal adventure around your dates,
            interests, and budget. No cookie-cutter trips — just your dream
            journey.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide transition-colors"
            >
              Request Custom Package
            </motion.a>
            <motion.a
              href="/destinations"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full border border-white/15 hover:border-white/30 text-white font-semibold text-sm tracking-wide transition-colors"
            >
              Browse Destinations
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </section>
    </main>
  );
}
