"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Target, Scroll, ShoppingBag, User, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Início", href: "/dashboard" },
  { icon: Target, label: "Hábitos", href: "/habits" },
  { icon: Scroll, label: "Quests", href: "/quests" },
  { icon: Trophy, label: "Conquistas", href: "/achievements" },
  { icon: ShoppingBag, label: "Loja", href: "/shop" },
  { icon: User, label: "Perfil", href: "/profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-purple-500/20 z-40 safe-area-pb">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href === "/dashboard" && pathname === "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center py-2 px-3 min-w-[60px]"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
                />
              )}

              <Icon
                className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-purple-400" : "text-gray-500"
                )}
              />

              <span
                className={cn(
                  "text-xs mt-1 transition-colors",
                  isActive ? "text-purple-400" : "text-gray-500"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
