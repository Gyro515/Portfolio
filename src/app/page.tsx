'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
        <main className="flex flex-col items-center justify-center text-center">

          {/* Home Section */}
          <section id="home" className="min-h-screen flex flex-col justify-center items-center">
            <motion.h1
              className="text-black text-5xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hey! I&apos;m Justin Sage
            </motion.h1>

            <motion.p
              className="text-xl max-w-2xl text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              Recent graduate of Applied Computer Science with a Statistics minor from the University of Winnipeg. Specializing in data analytics, full-stack development, and automation. I am passionate about transforming data into data-driven decisions.
            </motion.p>
          </section>
        </main>
  );
}
