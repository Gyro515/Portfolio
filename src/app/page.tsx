'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white">

          {/* Home Section */}
          <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
            <motion.h1
              className="text-black text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>{"Hey, I'm Justin Sage"}</p>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Web developer crafting clean, fast, and modern websites with a focus on user experience.
            </motion.p>
          </section>

          <section id="about" className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
            <motion.h1
              className="text-black text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>{"Hey, I'm Justin Sage"}</p>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              ABOUT developer crafting clean, fast, and modern websites with a focus on user experience.
            </motion.p>
          </section>

        </main>
  );
}
