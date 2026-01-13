"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Sword,
  Wand2,
  Crosshair,
  Target,
  Heart,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const classes = [
  { id: "warrior", name: "Guerreiro", icon: Sword, color: "from-red-500 to-orange-500", desc: "Força física e resistência" },
  { id: "mage", name: "Mago", icon: Wand2, color: "from-blue-500 to-purple-500", desc: "Conhecimento e sabedoria" },
  { id: "assassin", name: "Assassino", icon: Crosshair, color: "from-purple-500 to-pink-500", desc: "Agilidade e precisão" },
  { id: "archer", name: "Arqueiro", icon: Target, color: "from-green-500 to-emerald-500", desc: "Foco e disciplina" },
  { id: "support", name: "Suporte", icon: Heart, color: "from-pink-500 to-rose-500", desc: "Carisma e liderança" }
];

export default function OnboardingPage() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [hunterName, setHunterName] = useState("");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = async () => {
    if (!hunterName || !selectedClass) return;

    setIsLoading(true);

    // 🔒 Supabase / banco (futuro)
    /*
    await supabase.from("hunters").insert({
      hunter_name: hunterName,
      class: selectedClass
    });
    */

    setTimeout(() => {
      router.push("/dashboard");
    }, 800);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center"
            >
              <Sparkles className="w-16 h-16 text-white" />
            </motion.div>

            <h1 className="text-4xl font-bold mb-4">
              <span className="text-purple-400">[SISTEMA DESPERTAR]</span><br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Você Despertou
              </span>
            </h1>

            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Uma energia desconhecida pulsa em seu corpo.
            </p>

            <Button
              size="lg"
              onClick={() => setStep(1)}
              className="bg-gradient-to-r from-purple-600 to-violet-600 px-8 py-6"
            >
              Aceitar o Despertar
              <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            key="name"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="max-w-md w-full"
          >
            <h2 className="text-3xl font-bold mb-4">Identifique-se</h2>

            <Input
              value={hunterName}
              onChange={(e) => setHunterName(e.target.value)}
              placeholder="Nome do Caçador"
              className="mb-6"
            />

            <Button
              disabled={!hunterName}
              onClick={() => setStep(2)}
              className="w-full"
            >
              Confirmar
            </Button>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="class"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="max-w-lg w-full"
          >
            <h2 className="text-3xl font-bold mb-6">Escolha sua Classe</h2>

            <div className="space-y-4 mb-8">
              {classes.map((cls) => {
                const Icon = cls.icon;
                return (
                  <button
                    key={cls.id}
                    onClick={() => setSelectedClass(cls.id)}
                    className={cn(
                      "w-full p-4 rounded-xl flex gap-4 items-center border transition-all duration-300",
                      "bg-gradient-to-r",
                      cls.color,
                      selectedClass === cls.id
                        ? "scale-[1.02] border-white/40 shadow-lg"
                        : "border-white/10 opacity-80 hover:opacity-100"
                    )}
                  >
                    <Icon className="text-white" />
                    <div className="text-left">
                      <p className="font-bold">{cls.name}</p>
                      <p className="text-sm opacity-80">{cls.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <Button
              onClick={handleComplete}
              disabled={!selectedClass || isLoading}
              className="w-full"
            >
              {isLoading ? "Iniciando..." : "Iniciar Jornada"}
            </Button>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  );
}
