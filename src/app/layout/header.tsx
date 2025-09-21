'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Image from 'next/image';

/**
 * Smoothly scrolls to a specific section on the page.
 *
 * @param id The DOM element ID.
 * @param pathname Route path.
 * @param router Next.js router instance.
 */
export const scrollToSection = (id: string, pathname: string, router: AppRouterInstance) => {
  if (pathname === '/') {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  } else {
    sessionStorage.setItem('scroll-target', id);
    router.push('/', { scroll: false });
  }
};

/**
 * Header that includes logo, navigation, social links, and a mobile hamburger menu.
 *
 * @returns Header component for the site.
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-xl pt-[env(safe-area-inset-top)]">
      <div className="mx-auto md:max-w-screen-lg px-5">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex flex-row items-center gap-10">
            <div className="flex items-center gap-4">
              <Image
                src="/favicon.ico"
                alt="Logo"
                height={48}
                width={48}
                onClick={() => scrollToSection('home', pathname, router)}
                className="brightness-50 hover:scale-110 transition-transform cursor-pointer"
              />
            </div>
            <nav className="sticky hidden md:flex gap-10 text-lg">
              <a
                onClick={() => scrollToSection('projects', pathname, router)}
                className="hover:scale-110 transition-transform cursor-pointer"
              >
                My Projects
              </a>
              <a
                onClick={() => scrollToSection('technologies', pathname, router)}
                className="hover:scale-110 transition-transform cursor-pointer"
              >
                Technologies
              </a>
              <a
                onClick={() => scrollToSection('about', pathname, router)}
                className="hover:scale-110 transition-transform cursor-pointer"
              >
                About Me
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="hidden md:flex justify-end gap-10">
            <a href="https://github.com/gyro515" target="_blank" rel="noreferrer">
              <Github className="h-6 w-6 hover:text-green-400 hover:scale-110 transition-transform " />
            </a>
            <a href="https://linkedin.com/in/justin-briones09" target="_blank" rel="noreferrer">
              <Linkedin className="h-6 w-6 hover:text-blue-600 hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:jusagebriones@yahoo.com">
              <Mail className="h-6 w-6 hover:text-red-500 hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden rounded hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div className="fixed inset-0 md:hidden" onClick={() => setIsOpen(false)} />
            <motion.div
              className="absolute inset-x-0 bg-white md:hidden shadow-xl border-t origin-top overflow-y-hidden"
              initial={{ y: 0, height: 0 }}
              animate={{ y: 0, height: 'auto' }}
              exit={{ y: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <a
                onClick={() => scrollToSection('projects', pathname, router)}
                className="block w-full px-5 py-4 active:bg-gray-100 cursor-pointer"
              >
                My Projects
              </a>
              <a
                onClick={() => scrollToSection('technologies', pathname, router)}
                className="block w-full px-5 py-4 active:bg-gray-100 cursor-pointer"
              >
                Technologies
              </a>
              <a
                onClick={() => scrollToSection('about', pathname, router)}
                className="block w-full px-5 py-4 active:bg-gray-100 cursor-pointer"
              >
                About Me
              </a>

              <div className="flex items-center gap-8 px-5 py-4 border-t ">
                <a href="https://github.com/gyro515" target="_blank" rel="noreferrer">
                  <Github className="h-6 w-6 hover:text-green-400 hover:scale-110 transition" />
                </a>
                <a href="https://linkedin.com/in/justin-briones09" target="_blank" rel="noreferrer">
                  <Linkedin className="h-6 w-6 hover:text-blue-600 hover:scale-110 transition" />
                </a>
                <a href="mailto:jusagebriones@yahoo.com">
                  <Mail className="h-6 w-6 hover:text-red-500 hover:scale-110 transition" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
