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
  type LucideIcon,
  Map,
  MountainSnow,
  Landmark,
  PawPrint,
  Navigation,
  Camera,
  Plane,
  BedDouble,
  ShieldCheck,
  FileText,
  UtensilsCrossed,
  Users,
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

const coreServices: {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
  accent: string;
}[] = [
  {
    icon: Map,
    title: "Custom Tour Planning",
    description:
      "Every journey is unique. Our expert travel designers craft fully bespoke itineraries tailored to your interests, pace, and budget — from a weekend getaway to a month-long expedition.",
    features: [
      "Personalised day-by-day itinerary",
      "24/7 dedicated trip advisor",
      "Flexible departure dates",
      "Last-minute adjustments",
    ],
    color: "from-amber-500/20 to-orange-600/10",
    accent: "border-amber-500/40",
  },
  {
    icon: MountainSnow,
    title: "Guided Trekking",
    description:
      "Conquer iconic trails with our certified Himalayan guides. Whether it's Everest Base Camp, Annapurna Circuit, or Langtang Valley, we handle permits, safety, and logistics.",
    features: [
      "Licensed TIMS & ACAP permits",
      "Experienced mountain guides",
      "Porter & gear support",
      "Emergency evacuation cover",
    ],
    color: "from-sky-500/20 to-blue-600/10",
    accent: "border-sky-500/40",
  },
  {
    icon: Landmark,
    title: "Cultural Immersion",
    description:
      "Go beyond sightseeing. Join local ceremonies, cook traditional meals with families, and explore UNESCO World Heritage Sites with historians who bring every stone to life.",
    features: [
      "Heritage trail walks",
      "Homestay experiences",
      "Cooking & craft workshops",
      "Temple & monastery visits",
    ],
    color: "from-violet-500/20 to-purple-600/10",
    accent: "border-violet-500/40",
  },
  {
    icon: PawPrint,
    title: "Wildlife Safaris",
    description:
      "Track Bengal tigers and one-horned rhinos through Chitwan's dense jungle. Our naturalist guides turn every safari into an unforgettable wildlife encounter.",
    features: [
      "Jeep & elephant safaris",
      "Expert naturalist guides",
      "Birdwatching tours",
      "National park fee inclusion",
    ],
    color: "from-emerald-500/20 to-green-600/10",
    accent: "border-emerald-500/40",
  },
  {
    icon: Navigation,
    title: "Helicopter Tours",
    description:
      "See the Himalayas from above. Our exclusive helicopter excursions offer breathtaking aerial views of Everest, Annapurna, and remote mountain villages inaccessible by foot.",
    features: [
      "Everest sunrise flights",
      "Mountain landing experiences",
      "High-altitude rescue capacity",
      "Luxury group charters",
    ],
    color: "from-rose-500/20 to-red-600/10",
    accent: "border-rose-500/40",
  },
  {
    icon: Camera,
    title: "Photography Expeditions",
    description:
      "Crafted for photographers — amateur or professional. We time destinations for golden hour, arrange exclusive access, and pair you with a local guide who knows every perfect angle.",
    features: [
      "Sunrise & golden-hour timing",
      "Exclusive location access",
      "Photography guide on request",
      "Landscape & portrait sessions",
    ],
    color: "from-pink-500/20 to-rose-600/10",
    accent: "border-pink-500/40",
  },
];

const supportServices: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Plane,
    title: "Airport Transfers",
    desc: "Seamless door-to-door pickups and drop-offs in private vehicles, 24 hours a day.",
  },
  {
    icon: BedDouble,
    title: "Accommodation Booking",
    desc: "Curated stays from boutique guesthouses to 5-star mountain lodges.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    desc: "Comprehensive policies covering trekking, medical evacuation, and trip cancellation.",
  },
  {
    icon: FileText,
    title: "Visa & Permit Assistance",
    desc: "We navigate all Nepal visa formalities, trekking permits, and national park entries.",
  },
  {
    icon: UtensilsCrossed,
    title: "Culinary Experiences",
    desc: "Food tours, cooking classes, and restaurant curation celebrating Nepali cuisine.",
  },
  {
    icon: Users,
    title: "Group & Corporate Tours",
    desc: "Team retreats, incentive travel, and large group logistics handled end-to-end.",
  },
];

const stats = [
  { value: "10,000+", label: "Happy Travellers" },
  { value: "50+", label: "Unique Services" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="min-h-screen bg-[#09090b] text-white overflow-x-hidden">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative h-[85vh] min-h-[560px] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85"
            alt="Nepal mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#09090b]" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <SectionLabel>What We Offer</SectionLabel>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Services
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            From high-altitude treks to intimate cultural encounters, every
            service we offer is designed to create memories that last a
            lifetime.
          </motion.p>
        </motion.div>
      </section>

      <AnimatedSection className="relative z-10 -mt-1 py-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp} custom={i}>
              <p className="text-3xl md:text-4xl font-bold text-amber-400 font-serif">
                {s.value}
              </p>
              <p className="text-sm text-white/50 mt-1 tracking-wide uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <SectionLabel>Core Offerings</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-4xl md:text-5xl font-bold mb-4"
            >
              Experiences Built Around You
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-white/60 max-w-2xl mx-auto text-lg"
            >
              We specialise in six signature service areas, each crafted to show
              you Nepal at its most extraordinary.
            </motion.p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((svc, i) => (
              <AnimatedSection key={svc.title}>
                <motion.div
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`group relative h-full rounded-2xl border ${svc.accent} bg-gradient-to-br ${svc.color} bg-white/[0.03] p-7 flex flex-col gap-5 cursor-default overflow-hidden`}
                >
                  {/* glow blob */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/[0.03] blur-2xl group-hover:bg-white/[0.06] transition-all duration-500" />

                  <svc.icon className="w-9 h-9 text-white/80" />

                  <div>
                    <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  <ul className="mt-auto space-y-2">
                    {svc.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <SectionLabel>Why JoyJourney</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Travel Smarter,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Experience Deeper
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-white/60 leading-relaxed mb-8"
            >
              We are not just a travel agency — we are storytellers,
              adventurers, and culture enthusiasts who have spent over 15 years
              perfecting the art of showing Nepal to the world. Our locally
              rooted team brings insider knowledge you simply cannot find in a
              guidebook.
            </motion.p>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {[
                "100% local expertise — our guides were born in these mountains",
                "Small group sizes for an intimate, personalised experience",
                "Sustainable travel practices that support local communities",
                "Real-time support from booking to safe return home",
              ].map((point, i) => (
                <motion.li
                  key={point}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-3 text-white/70"
                >
                  <span className="mt-1 w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400 text-xs">
                    ✓
                  </span>
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatedSection>

          <AnimatedSection className="relative">
            <motion.div
              variants={scaleIn}
              className="relative rounded-2xl overflow-hidden aspect-[4/5]"
            >
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80"
                alt="Himalayan guide leading trek"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-widest text-amber-400 mb-1">
                  Our Promise
                </p>
                <p className="text-white font-semibold text-lg leading-snug">
                  Every guide is certified, every route is scouted, every moment
                  is yours.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <SectionLabel>End-to-End Support</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-4xl md:text-5xl font-bold mb-4"
            >
              Everything Taken Care Of
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-white/60 max-w-xl mx-auto"
            >
              Beyond headline experiences, we handle every detail so you can
              focus entirely on the journey.
            </motion.p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportServices.map((s, i) => (
              <AnimatedSection key={s.title}>
                <motion.div
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex gap-4 p-6 rounded-xl border border-white/8 bg-white/[0.03] hover:border-amber-500/30 hover:bg-white/[0.05] transition-colors duration-300 cursor-default"
                >
                  <s.icon className="w-7 h-7 shrink-0 text-white/70 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <motion.div
              variants={scaleIn}
              className="relative rounded-3xl overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-orange-600/5 to-transparent p-12 text-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.12),_transparent_70%)]" />
              <div className="relative z-10">
                <motion.div variants={fadeUp}>
                  <SectionLabel>Start Your Journey</SectionLabel>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="font-serif text-4xl md:text-5xl font-bold mb-4"
                >
                  Ready to Explore Nepal?
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="text-white/60 text-lg mb-8 max-w-xl mx-auto"
                >
                  Tell us your dream trip and our team will craft your perfect
                  itinerary — completely free, with no obligation.
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
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm tracking-wide transition-colors duration-200"
                  >
                    Browse Packages ↗
                  </motion.a>
                  <motion.a
                    href="/destinations"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-amber-500/50 hover:bg-white/5 text-white font-semibold text-sm tracking-wide transition-colors duration-200"
                  >
                    View Destinations
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
