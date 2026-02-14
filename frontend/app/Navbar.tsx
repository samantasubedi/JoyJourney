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
  const destinations = [
    {
      name: "Everest Base Camp",
      desc: "The ultimate high-altitude trek.",
      imageName: "/everest.jpg",
      imageClass: `bg-[url("/everest.jpg")]`,
    },
    {
      name: "Lumbini",
      desc: "Spiritual journey to the sacred site.",
      imageName: "/lumbini.jpg",
      imageClass: `bg-[url("/lumbini.jpg")]`,
    },
    {
      name: "Chitwan National Park",
      desc: "Safari through lush jungles.",
      imageName: "/chitwan.jpeg",
      imageClass: `bg-[url("/chitwan.jpeg")]`,
    },
    {
      name: "Pokhara",
      desc: "Adventure and lakeside serenity.",
      imageName: "/pokhara.jpg",
      imageClass: `bg-[url("/pokhara.jpg")] `,
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
  return (
    <div className="flex justify-center">
      <NavigationMenu className="z-10 flex max-w-max flex-1 items-center justify-center">
        <NavigationMenuList className="group flex flex-1 list-none items-center justify-center space-x-1 p-1 bg-white/50 backdrop-blur-md rounded-full border border-slate-200 shadow-sm">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-slate-100 hover:text-blue-600 focus:bg-slate-100 focus:outline-none"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-slate-100 data-[state=open]:bg-slate-100">
              Destinations
            </NavigationMenuTrigger>
            <NavigationMenuContent className="border-none absolute top-0 left-0 w-full md:w-[500px] lg:w-[600px] rounded-2xl  bg-white p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="mb-4 flex items-center justify-between border-b pb-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Popular Escapes
                </h4>
                <NavigationMenuLink
                  href="/destinations"
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  View all →
                </NavigationMenuLink>
              </div>
              <ul className="grid grid-cols-2 gap-1 ">
                {destinations.map((item) => (
                  <li key={item.name}>
                    <NavigationMenuLink className="hover:bg-slate-200 duration-500 ease-in-out block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all ">
                      <div className="flex items-center flex-col gap-1">
                        <Image
                          className="h-30 w-full"
                          height={1000}
                          width={2000}
                          alt="image"
                          src={item.imageName}
                        ></Image>
                        <div className="text-sm font-bold leading-none text-slate-900 group-hover/item:text-blue-700">
                          {item.name}
                        </div>
                      </div>
                      <p className="line-clamp-1 text-xs leading-snug text-slate-500  mt-1 text-center">
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
            <NavigationMenuContent className="border-none absolute top-0 left-0 w-full md:w-[500px] lg:w-[600px] rounded-2xl  bg-white p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
              <ul className="grid grid-cols-2 gap-2">
                {packages.map((pkg) => (
                  <li key={pkg.name}>
                    <NavigationMenuLink
                    className="hover:bg-slate-200 duration-500 ease-in-out block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all "
                    >
                      <Image
                        height={1000}
                        width={2000}
                        src={pkg.imageName}
                        alt="packageImage"
                        className="h-30 w-full"
                      ></Image>

                      <div className={`text-sm font-bold transition-colors text-center`}>
                        {pkg.name}
                      </div>
                      <div className="text-xs text-slate-500 leading-relaxed text-center">
                        {pkg.desc}
                      </div>
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
