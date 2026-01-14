"use client";

import { usePathname } from "next/navigation";
import BottomNav from "@/components/navigation/ButtonNav";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNav = pathname.startsWith("/onboarding");

  return (
    <>
      {/* Background + efeitos */}
      <style>{`
        :root {
          --color-primary: #8b5cf6;
          --color-primary-dark: #7c3aed;
          --color-secondary: #06b6d4;
          --color-accent: #f59e0b;
          --color-danger: #ef4444;
          --color-success: #22c55e;
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 pb-24">
        {children}
      </main>

      <BottomNav />
    </>
  );
}
