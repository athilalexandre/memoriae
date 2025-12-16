'use client';

import { motion } from 'framer-motion';
import LoginButton from '../components/LoginButton';
import ThemeToggle from '../components/ThemeToggle';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-950 relative overflow-hidden transition-colors duration-500">
            <div className="absolute top-6 right-6 z-50">
                <ThemeToggle />
            </div>

            <div className="absolute top-6 left-6 z-50">
                <Link href="/" className="p-2 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black transition-all flex items-center justify-center group">
                    <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                </Link>
            </div>

            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-pink-500/10 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md p-8 bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-white/5 relative z-10"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold font-serif bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        Bem-vindo de volta
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Acesse o painel administrativo para criar novas memórias.
                    </p>
                </div>

                <div className="flex justify-center">
                    <LoginButton />
                </div>
            </motion.div>
        </div>
    );
}
