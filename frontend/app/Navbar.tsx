"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const packages = [
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xl font-serif font-bold text-white">
            Joy<span className="text-amber-400">Journey</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="inline-flex h-9 items-center px-4 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/8"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`inline-flex h-9 items-center px-4 text-sm font-medium rounded-full transition-all
                    text-white/80 hover:text-white bg-transparent hover:bg-white/8
                    data-[state=open]:text-amber-400 data-[state=open]:bg-white/8
                    [&>svg]:text-white/50 [&>svg]:ml-1`}
                >
                  Destinations
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-[#111113] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-5 w-[700px]!">
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
                  <ul className="grid grid-cols-4 gap-2">
                    {destinations.map((item) => (
                      <li key={item.name} className="overflow-hidden isolate">
                        <NavigationMenuLink className="group block rounded-xl p-2 hover:bg-white/6 transition-colors cursor-pointer">
                          <div className="rounded-lg overflow-hidden mb-2 h-16">
                            <Image
                              height={200}
                              width={400}
                              alt={item.name}
                              src={item.imageName}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  className={`inline-flex h-9 items-center px-4 text-sm font-medium rounded-full transition-all
                    text-white/80 hover:text-white bg-transparent hover:bg-white/8
                    data-[state=open]:text-amber-400 data-[state=open]:bg-white/8
                    [&>svg]:text-white/50 [&>svg]:ml-1`}
                >
                  Packages
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-[#111113] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-5 w-[700px]!">
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
                  <ul className="grid grid-cols-4 gap-2">
                    {packages.map((pkg) => (
                      <li key={pkg.name} className="overflow-hidden isolate">
                        <NavigationMenuLink className="group block rounded-xl p-2 hover:bg-white/6 transition-colors cursor-pointer">
                          <div className="rounded-lg overflow-hidden mb-2 h-16">
                            <Image
                              height={200}
                              width={400}
                              src={pkg.imageName}
                              alt={pkg.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                    className="inline-flex h-9 items-center px-4 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/8"
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
            className="hidden md:inline-flex items-center bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            Book Now
          </motion.a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
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
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0f0f12]/98 backdrop-blur-xl border-t border-white/8 px-6 pb-6 pt-4"
          >
            <nav className="flex flex-col gap-1">
              {["Home", "Destinations", "Packages", "Services", "About"].map(
                (item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/80 hover:text-amber-400 transition-colors py-2.5 text-sm font-medium border-b border-white/6 last:border-0"
                  >
                    {item}
                  </Link>
                ),
              )}
              <a
                href="/packages"
                className="mt-4 text-center bg-amber-400 text-black font-bold py-3 rounded-full text-sm"
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
