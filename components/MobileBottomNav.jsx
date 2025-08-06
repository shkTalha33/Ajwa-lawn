"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Lucide React Icons
import { Home, Sun, Snowflake, Sparkles } from "lucide-react";
// React Icons as alternatives
import { BsHouseDoor, BsSun, BsSnow, BsStars, BsStar } from "react-icons/bs";
import { RiSunLine, RiSnowflakeLine } from "react-icons/ri";
import { TbSun, TbSnowflake, TbSparkles } from "react-icons/tb";

export default function MobileBottomNav() {
  const pathname = usePathname();

  // const navItems = [
  //   {
  //     name: "Home",
  //     icon: <Home className="w-6 h-6" />, // Perfect for home
  //     path: "/",
  //   },
  //   {
  //     name: "Summer Collection",
  //     icon: <Sun className="w-6 h-6" />, // Sun icon for summer
  //     path: "/summer-collection",
  //   },
  //   {
  //     name: "Winter Collection",
  //     icon: <Snowflake className="w-6 h-6" />, // Snowflake for winter
  //     path: "/winter-collection",
  //   },
  //   {
  //     name: "New Arrival",
  //     icon: <Sparkles className="w-6 h-6" />, // Sparkles for new/special items
  //     path: "/new-arrival",
  //   },
  // ];

  // Alternative icon sets you can use:

  // Option 2: React Icons (BS)
  const navItems = [
    {
      name: "Home",
      icon: <BsHouseDoor className="w-5 h-5" />,
      path: "/",
    },
    {
      name: "Summer",
      icon: <RiSunLine className="w-5 h-5" />,
      path: "/summer-collection",
    },
    {
      name: "Winter",
      icon: <BsSnow className="w-5 h-5" />,
      path: "/winter-collection",
    },
    {
      name: "New Arrival",
      icon: <BsStars className="w-5 h-5" />,
      path: "/new-arrival",
    },
    {
      name: "Top seller",
      icon: <BsStar className="w-5 h-5" />,
      path: "/top-seller",
    },
  ];

  // Option 3: Tabler Icons (TB)
  // const navItems = [
  //   {
  //     name: "Home",
  //     icon: <BsHouseDoor className="w-6 h-6" />,
  //     path: "/",
  //   },
  //   {
  //     name: "Summer Collection",
  //     icon: <TbSun className="w-6 h-6" />,
  //     path: "/summer-collection",
  //   },
  //   {
  //     name: "Winter Collection",
  //     icon: <TbSnowflake className="w-6 h-6" />,
  //     path: "/winter-collection",
  //   },
  //   {
  //     name: "New Arrival",
  //     icon: <TbSparkles className="w-6 h-6" />,
  //     path: "/new-arrival",
  //   },
  // ];

  // Option 4: Remix Icons (RI)
  // const navItems = [
  //   {
  //     name: "Home",
  //     icon: <BsHouseDoor className="w-6 h-6" />,
  //     path: "/",
  //   },
  //   {
  //     name: "Summer Collection",
  //     icon: <RiSunLine className="w-6 h-6" />,
  //     path: "/summer-collection",
  //   },
  //   {
  //     name: "Winter Collection",
  //     icon: <RiSnowflakeLine className="w-6 h-6" />,
  //     path: "/winter-collection",
  //   },
  //   {
  //     name: "New Arrival",
  //     icon: <BsStars className="w-6 h-6" />,
  //     path: "/new-arrival",
  //   },
  // ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-white dark:bg-brand-black border-t border-gray-200 dark:border-gray-600 z-50 sm:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
              pathname === item.path
                ? "text-brand-primary"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1 roboto_medium text-center">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
