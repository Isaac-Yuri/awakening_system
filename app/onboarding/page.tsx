"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sword, Wand2, Crosshair, Target, Heart, ChevronRight, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import EnergyRain from './EnergyRain';

const classes = [
  { id: 'warrior', name: 'Guerreiro', icon: Sword, color: 'from-red-500 to-orange-500', desc: 'Disciplina física, resistência mental e constância' },
  { id: 'mage', name: 'Mago', icon: Wand2, color: 'from-blue-500 to-purple-500', desc: 'Conhecimento, aprendizado e clareza mental' },
  { id: 'archer', name: 'Arqueiro', icon: Target, color: 'from-green-500 to-emerald-500', desc: 'Foco, execução precisa e controle do tempo' },
  { id: 'support', name: 'Suporte', icon: Heart, color: 'from-pink-500 to-rose-500', desc: 'Comunicação, empatia e influência' }
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [hunterName, setHunterName] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activating, setActivating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const renderStep = () => {
    switch(step) {
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
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                delay: 0.3,
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-32 h-32 mx-auto mb-8 flex items-center justify-center"
            >
              
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 blur-2xl opacity-70"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-50 animate-pulse" />

              
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.9)]">
                <Sparkles className="w-16 h-16 text-white drop-shadow-xl " />
              </div>
            </motion.div>

            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              <span className="text-purple-400">SISTEMA DESPERTAR</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Você Despertou
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 text-lg mb-8 max-w-md mx-auto"
            >
              Uma energia desconhecida pulsa em seu corpo. O Sistema detectou seu potencial como Caçador.
            </motion.p>

            <motion.div
              className="relative inline-block"
              initial="rest"
              animate={activating ? "activate" : "rest"}
              whileHover="hover"
            >
              <motion.div
                variants={{
                  rest: { opacity: 0, scale: 0.9 },
                  hover: { opacity: 0.6, scale: 1.15 },
                  activate: { opacity: 1, scale: 1.6 }
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 blur-2xl"
              />

              <motion.div
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 0.4 },
                  activate: { opacity: 1 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-xl bg-purple-600 blur-xl"
              />

              <Button
                size="lg"
                onClick={() => {
                  setActivating(true);
                  setTimeout(() => setStep(1), 900);
                }}
                className="
                  relative z-10
                  bg-gradient-to-r from-purple-600 to-violet-600
                  px-10 py-6
                  text-lg
                  transition-transform duration-300
                  hover:scale-105
                "
              >
                Aceitar o Despertar
                <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
          
        );
      
      case 1:
        return (
          <motion.div
            key="name"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-md mx-auto"
          >
            <p className="text-purple-400 text-sm uppercase tracking-widest mb-2">SISTEMA DESPERTAR</p>
            <h2 className="text-3xl font-bold text-white mb-2">Identifique-se, Caçador</h2>
            <p className="text-gray-400 mb-8">Como você deseja ser chamado?</p>

            <div className="space-y-6">
              <Input
                value={hunterName}
                onChange={(e) => setHunterName(e.target.value)}
                placeholder="Digite seu nome de caçador"
                className="bg-gray-800/50 border-purple-500/30 text-white text-lg py-6 px-4 focus:border-purple-500"
              />

              <Button
                onClick={() => setStep(2)}
                disabled={!hunterName.trim()}
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 py-6"
              >
                Confirmar
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            key="class"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-lg mx-auto"
          >
            <p className="text-purple-400 text-sm uppercase tracking-widest mb-2">SISTEMA DESPERTAR</p>
            <h2 className="text-3xl font-bold text-white mb-2">Escolha sua Classe</h2>
            <p className="text-gray-400 mb-8">Cada classe define seu caminho de evoluçãoQual aspecto da sua vida você quer evoluir agora?</p>

            <div className="grid grid-cols-1 gap-4 mb-8">
              {classes.map((cls) => {
                const Icon = cls.icon;
                return (
                  <motion.button
                    key={cls.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={()=>{
                      setSelectedClass(cls.id)
                    }}
                    className={`p-4 rounded-xl border transition-all flex items-center gap-4 ${
                      selectedClass === cls.id
                        ? 'bg-gradient-to-r ' + cls.color + ' border-transparent'
                        : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      selectedClass === cls.id ? 'bg-white/20' : 'bg-gradient-to-br ' + cls.color
                    }`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-bold text-lg">{cls.name}</h3>
                      <p className="text-gray-300 text-sm">{cls.desc}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <Button
              disabled={!selectedClass || isLoading}
              onClick={() => setIsLoading(true)}
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 py-6"
            >
              {isLoading ? 'Iniciando...' : 'Iniciar Jornada'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {/* Animated background */}
      {mounted && <EnergyRain />}

      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  );
}