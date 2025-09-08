'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white">

          {/* MAIN CONTENT */}
          <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center px-4 text-center"
          >
            <motion.h1
              className="text-black text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hey, I'm Justin Sage
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

          <motion.div
            className="flex text-black gap-6 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="https://github.com/gyro515" target="_blank">
              <Github className="h-6 w-6 hover:text-black transition" />
            </a>
            <a href="https://linkedin.com/in/justin-briones09" target="_blank">
              <Linkedin className="h-6 w-6 hover:text-blue-600 transition" />
            </a>
            <a href="mailto:jusagebriones@yahoo.com">
              <Mail className="h-6 w-6 hover:text-red-500 transition" />
            </a>
          </motion.div>

          <a
            href="/resume.pdf"
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
            download
          >
            Download Resume
          </a>
        </main>
  );
}
