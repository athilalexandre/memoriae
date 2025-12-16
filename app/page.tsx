'use client';

import { motion } from 'framer-motion';
import { Heart, Camera, Music, Sparkles } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './components/ThemeToggle';

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-primary-50 dark:bg-dark-950 transition-colors duration-500">
      {/* Background Decor Shapes */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 dark:bg-purple-900/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-pink-400/20 dark:bg-pink-900/20 blur-[100px] pointer-events-none" />

      {/* Navbar / Top Actions */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-5xl mx-auto text-center z-10">

          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-8 relative">
              <div className="relative">
                <Heart className="w-20 h-20 text-pink-500 dark:text-pink-400 animate-pulse-slow drop-shadow-lg" />
                <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-3 -right-3 animate-bounce" />
              </div>
            </div>

            <h1 className="text-7xl md:text-9xl font-bold font-serif mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 dark:from-purple-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent drop-shadow-sm">
              Memoriae
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              Transforme momentos em eternidade. Crie experiências únicas com fotos, música e mensagens personalizadas.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Camera, color: "text-purple-500", title: "Fotos Especiais", desc: "Suas memórias em alta resolução" },
              { icon: Music, color: "text-pink-500", title: "Trilha Sonora", desc: "A música que marcou o momento" },
              { icon: Heart, color: "text-red-500", title: "Amor Compartilhado", desc: "Envie para quem você ama" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-8 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-xl dark:shadow-2xl transition-all"
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 font-serif">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center space-y-6"
          >
            <Link
              href="/create"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Criar Nova Memória
            </Link>

            <p className="text-sm text-gray-500 dark:text-gray-500">
              Totalmente gratuito e sem login
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-400 dark:text-gray-600"
          >
            Feito com ❤️ por Athila Alexandre
          </motion.div>

        </div>
      </div>
    </div>
  );
}