"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./../components/navigation/ButtonNav";

import { ReactNode } from "react";

import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Oculta navegação no onboarding
  const hideNav = pathname.startsWith("/onboarding");

  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-950 text-white">
        {/* Variáveis globais + animações */}
        <style>{`
          :root {
            --color-primary: #8b5cf6;
            --color-primary-dark: #7c3aed;
            --color-secondary: #06b6d4;
            --color-accent: #f59e0b;
            --color-danger: #ef4444;
            --color-success: #22c55e;
          }

          body {
            background: linear-gradient(
              180deg,
              #0a0a0f 0%,
              #1a1025 50%,
              #0a0a0f 100%
            );
            background-attachment: fixed;
          }

          .safe-area-pb {
            padding-bottom: env(safe-area-inset-bottom, 16px);
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
            }
          }

          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
        `}</style>

        {/* Background decorativo */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
        </div>

        {/* Conteúdo */}
        <main className={`relative z-10 ${hideNav ? "" : "pb-24"}`}>
          {children}
        </main>

        {/* Navegação inferior */}
        {!hideNav && <BottomNav />}
      </body>
    </html>
  );
}
