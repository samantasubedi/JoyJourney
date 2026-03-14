"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const destinations = [
  {
    name: "Everest Base Camp",
    desc: "The ultimate high-altitude trek.",
    imageName: "/everest.jpg",
  },
  {
    name: "Lumbini",
    desc: "Spiritual journey to the sacred site.",
    imageName: "/lumbini.jpg",
  },
  {
    name: "Chitwan National Park",
    desc: "Safari through lush jungles.",
    imageName: "/chitwan.jpeg",
  },
  {
    name: "Pokhara",
    desc: "Adventure and lakeside serenity.",
    imageName: "/pokhara.jpg",
  },
];

const travelPackages = [
  {
    name: "Adventure",
    desc: "Rafting, paragliding, and intense trails.",
    imageName: "/adventure.jpg",
  },
  {
    name: "Luxury",
    desc: "Five-star stays and private helicopters.",
    imageName: "/luxury.jpg",
  },
  {
    name: "Budget",
    desc: "Authentic experiences for smart travelers.",
    imageName: "/budget.jpg",
  },
  {
    name: "Family",
    desc: "Kid-friendly tours and safe adventures.",
    imageName: "/family.jpg",
  },
];

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const mobileLinks = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "Packages", href: "/packages" },
    ...navLinks,
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#06060b]/95 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_10px_60px_rgba(0,0,0,0.45)]"
          : "bg-gradient-to-b from-[#0a0a12]/95 via-[#0a0a12]/70 to-transparent ring-1 ring-white/5"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-[height,padding] duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 grid place-items-center text-black font-bold text-lg shadow-[0_15px_30px_rgba(251,191,36,0.35)]">
            JJ
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/50 hidden sm:block">
              Travel Studio
            </span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold text-white">
                Joy<span className="text-amber-400">Journey</span>
              </span>
              <span className="text-[11px] px-2 py-1 rounded-full bg-white/10 text-white/70 border border-white/10">
                Crafted Tours
              </span>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 backdrop-blur-sm border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={`inline-flex h-9 items-center px-4 text-sm font-medium rounded-full transition-colors border ${
                    isActive("/")
                      ? "text-white bg-white/10 border-white/10"
                      : "text-white/80 border-transparent hover:text-white hover:bg-white/10"
                  }`}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`inline-flex h-9 items-center px-4 text-sm font-medium rounded-full transition-all border border-transparent
                    text-white/80 hover:text-white bg-transparent hover:bg-white/10
                    data-[state=open]:text-amber-300 data-[state=open]:bg-white/10 data-[state=open]:border-white/10
                    [&>svg]:text-white/50 [&>svg]:ml-1`}
                >
                  Destinations
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#101018] border border-white/10 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.65)] p-5 w-[720px] max-w-[90vw]">
                  <div className="flex items-center justify-between mb-4 border-b border-white/8 pb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                      Popular Escapes
                    </span>
                    <NavigationMenuLink
                      href="/destinations"
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      View all →
                    </NavigationMenuLink>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-180">
                    {destinations.map((item) => (
                      <li key={item.name} className="overflow-hidden isolate">
                        <NavigationMenuLink className="group block rounded-xl p-2 hover:bg-white/6 transition-colors cursor-pointer ">
                          <div className="rounded-lg overflow-hidden mb-2 ">
                            <Image
                              height={1000}
                              width={1000}
                              alt={item.name}
                              src={item.imageName}
                              className="w-40! h-30 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <p className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                            {item.name}
                          </p>
                          <p className="text-xs text-white/40 mt-0.5 leading-snug">
                            {item.desc}
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`inline-flex h-9 items-center px-4 text-sm font-medium rounded-full transition-all border border-transparent
                    text-white/80 hover:text-white bg-transparent hover:bg-white/10
                    data-[state=open]:text-amber-300 data-[state=open]:bg-white/10 data-[state=open]:border-white/10
                    [&>svg]:text-white/50 [&>svg]:ml-1`}
                >
                  Packages
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#101018] border border-white/10 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.65)] p-5 w-[720px] max-w-[90vw]">
                  <div className="flex items-center justify-between mb-4 border-b border-white/8 pb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                      Travel Packages
                    </span>
                    <NavigationMenuLink
                      href="/packages"
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      View all →
                    </NavigationMenuLink>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-180">
                    {travelPackages.map((pkg) => (
                      <li key={pkg.name} className="overflow-hidden isolate">
                        <NavigationMenuLink className="group block rounded-xl p-2 hover:bg-white/6 transition-colors cursor-pointer">
                          <div className="rounded-lg overflow-hidden mb-2 ">
                            <Image
                              height={500}
                              width={500}
                              src={pkg.imageName}
                              alt={pkg.name}
                              className="w-40! h-30!  group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <p className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                            {pkg.name}
                          </p>
                          <p className="text-xs text-white/40 mt-0.5 leading-snug">
                            {pkg.desc}
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    href={link.href}
                    className={`inline-flex h-9 items-center px-4 text-sm font-medium rounded-full transition-colors border ${
                      isActive(link.href)
                        ? "text-white bg-white/10 border-white/10"
                        : "text-white/80 border-transparent hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href="/packages"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:inline-flex items-center bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold px-5 py-2.5 rounded-full transition-colors shadow-[0_10px_40px_rgba(251,191,36,0.5)]"
          >
            Book Now
          </motion.a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"}`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 w-0" : "w-4"}`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="md:hidden fixed top-4 left-4 right-4 rounded-3xl bg-[#0c0c13]/95 backdrop-blur-xl border border-white/8 shadow-[0_25px_80px_rgba(0,0,0,0.65)] px-5 py-5 z-50"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 grid place-items-center text-black font-bold text-lg">
                    JJ
                  </div>
                  <div className="leading-tight">
                    <p className="text-white font-semibold">JoyJourney</p>
                    <p className="text-xs text-white/50">
                      Curated Nepal escapes
                    </p>
                  </div>
                </div>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="block h-px w-4 rotate-45 bg-white" />
                  <span className="block h-px w-4 -rotate-45 -translate-y-[1px] bg-white" />
                </button>
              </div>

              <motion.ul
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.04 },
                  },
                }}
                className="space-y-1"
              >
                {mobileLinks.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium border ${
                        isActive(item.href)
                          ? "text-white border-white/15 bg-white/8"
                          : "text-white/80 border-white/5 bg-white/5 hover:text-white hover:border-white/10"
                      }`}
                    >
                      {item.label}
                      <span className="text-xs text-white/50">→</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a
                href="/packages"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 block text-center bg-amber-400 text-black font-bold py-3 rounded-full text-sm shadow-[0_12px_40px_rgba(251,191,36,0.55)]"
              >
                Book Now
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
