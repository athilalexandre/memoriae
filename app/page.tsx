'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Camera, Music, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Memoriae
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            Crie experiências únicas e memoráveis com fotos, música e mensagens personalizadas
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="flex flex-col items-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
            <Camera className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Fotos Especiais</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Compartilhe seus momentos mais preciosos</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
            <Music className="w-12 h-12 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Música & Som</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Adicione suas músicas favoritas</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
            <Heart className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Compartilhe Amor</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Crie e compartilhe experiências únicas</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/admin/login"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Entrar
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-500 dark:text-gray-400 text-sm"
        >
          <p className="mb-2">
            Feito com ❤️ por{' '}
            <a
              href="https://github.com/athilalexandre"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-purple-600 hover:text-purple-700 transition-colors underline decoration-2 underline-offset-2"
            >
              Athila Alexandre
            </a>
          </p>
          <p className="text-xs mb-3">
            Inspirado no projeto{' '}
            <a
              href="https://github.com/Crawfordcorp/BioLove"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors underline decoration-2 underline-offset-2"
            >
              BioLove
            </a>{' '}
            de{' '}
            <a
              href="https://github.com/Crawfordcorp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-600 hover:text-green-700 transition-colors underline decoration-2 underline-offset-2"
            >
              David Aleixo
            </a>
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/athilalexandre/memoriae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors font-medium"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 