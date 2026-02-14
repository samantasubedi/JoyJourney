import React from "react";
import Link from "next/link";
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
  return (
    <div className="flex justify-center">
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2">
                <li>
                  <NavigationMenuLink> Everest Base Camp</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Lumbini</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Chitwan National Park</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Pokhara</NavigationMenuLink>
                </li>
              </ul>
              <NavigationMenuLink href="/destinations">
                View all destinations
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Packages</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2">
                <li>
                  <NavigationMenuLink>Adventure</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Luxury</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Budget</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Family</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/services">Services</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
  <NavigationMenu className="z-10 flex max-w-max flex-1 items-center justify-center">
  <NavigationMenuList className="group flex flex-1 list-none items-center justify-center space-x-1 p-1 bg-white/50 backdrop-blur-md rounded-full border border-slate-200 shadow-sm">
    
    {/* Home Link */}
    <NavigationMenuItem>
      <NavigationMenuLink 
        href="/" 
        className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-slate-100 hover:text-blue-600 focus:bg-slate-100 focus:outline-none"
      >
        Home
      </NavigationMenuLink>
    </NavigationMenuItem>

    {/* Destinations Dropdown */}
    <NavigationMenuItem>
      <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-slate-100 data-[state=open]:bg-slate-100">
        Destinations
      </NavigationMenuTrigger>
      <NavigationMenuContent className="absolute top-0 left-0 w-full md:w-[500px] lg:w-[600px] rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
        <div className="mb-4 flex items-center justify-between border-b pb-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">Popular Escapes</h4>
            <NavigationMenuLink href="/destinations" className="text-xs font-semibold text-blue-600 hover:underline">View all →</NavigationMenuLink>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {[ 
            { name: "Everest Base Camp", desc: "The ultimate high-altitude trek.", imageName: "🏔️" },
            { name: "Lumbini", desc: "Spiritual journey to the sacred site.", imageName: "☸️" },
            { name: "Chitwan Park", desc: "Safari through lush jungles.", imageName: "🐅" },
            { name: "Pokhara", desc: "Adventure and lakeside serenity.", imageName: "🛶" }
          ].map((item) => (
            <li key={item.name} className="group/item">
              <NavigationMenuLink className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-blue-50">
                <div className="flex items-center gap-2">
                    
                    <Image src={item.imageName} alt="image"></Image>
                    <div className="text-sm font-bold leading-none text-slate-900 group-hover/item:text-blue-700">{item.name}</div>
                </div>
                <p className="line-clamp-1 text-xs leading-snug text-slate-500 mt-1">
                  {item.desc}
                </p>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-slate-100 data-[state=open]:bg-slate-100">
        Packages
      </NavigationMenuTrigger>
      <NavigationMenuContent className="absolute top-0 left-0 w-full md:w-[450px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
        <ul className="grid grid-cols-1 gap-2">
          {[
            { name: "Adventure", desc: "Rafting, paragliding, and intense trails.", color: "hover:bg-orange-50", text: "group-hover:text-orange-700", border: "border-orange-100" },
            { name: "Luxury", desc: "Five-star stays and private helicopters.", color: "hover:bg-indigo-50", text: "group-hover:text-indigo-700", border: "border-indigo-100" },
            { name: "Budget", desc: "Authentic experiences for smart travelers.", color: "hover:bg-emerald-50", text: "group-hover:text-emerald-700", border: "border-emerald-100" },
            { name: "Family", desc: "Kid-friendly tours and safe adventures.", color: "hover:bg-rose-50", text: "group-hover:text-rose-700", border: "border-rose-100" }
          ].map((pkg) => (
            <li key={pkg.name} className="group/pkg">
              <NavigationMenuLink className={`flex flex-col gap-1 rounded-xl border border-transparent p-3 transition-all ${pkg.color} hover:${pkg.border} cursor-pointer`}>
                <div className={`text-sm font-bold ${pkg.text} transition-colors`}>{pkg.name}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{pkg.desc}</div>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>


    <NavigationMenuItem>
      <NavigationMenuLink 
        href="/services" 
        className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-slate-100 hover:text-blue-600"
      >
        Services
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink 
        href="/about" 
        className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-slate-100 hover:text-blue-600"
      >
        About
      </NavigationMenuLink>
    </NavigationMenuItem>

  </NavigationMenuList>
</NavigationMenu>
    </div>
  );
};

export default Navbar;
