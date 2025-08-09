"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Lucide React Icons
// React Icons as alternatives
import { RiSunFill } from "react-icons/ri";
import { GiStarsStack } from "react-icons/gi"; // For 'New Arrival' filled style
import { BsHouseDoorFill, BsSnow, BsStarFill } from "react-icons/bs";
import { Home, Moon, Sparkles, Sun, TrendingUp } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      icon: <Home className="w-5 h-5" />,
      path: "/",
    },
    {
      name: "Summer",
      icon: <Sun className="w-5 h-5" />,
      path: "/summer-collection",
    },
    {
      name: "Winter",
      icon: <Moon className="w-5 h-5" />,
      path: "/winter-collection",
    },
    {
      name: "New Arrival",
      icon: <Sparkles className="w-5 h-5" />,
      path: "/new-arrival",
    },
    {
      name: "Trending",
      icon: <TrendingUp className="w-5 h-5" />,
      path: "/trending",
    },
  ];

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
