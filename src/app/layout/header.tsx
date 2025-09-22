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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
    <header className="w-full fixed top-0 inset-x-0 z-50 bg-white shadow-xl pt-[env(safe-area-inset-top)]">
      <div className="mx-auto md:max-w-screen-lg px-5">
        <div className="flex h-20 items-center">
          {/* Logo and Navigation */}
          <div
            className="
              flex items-center
              space-x-10
              supports-[gap:2.5rem]:space-x-0 supports-[gap:2.5rem]:gap-10
            "
          >
            <button
              type="button"
              onClick={() => scrollToSection('home', pathname, router)}
              className="flex items-center space-x-4 cursor-pointer"
              aria-label="Go to Home"
            >
              <Image
                src="/favicon.ico"
                alt="Logo"
                height={48}
                width={48}
                className="brightness-50 hover:scale-110 transition-transform"
              />
            </button>

            <nav
              className="
                hidden md:flex text-lg
                space-x-10
                supports-[gap:2.5rem]:space-x-0 supports-[gap:2.5rem]:gap-10
              "
            >
              <a
                onClick={() => scrollToSection('projects', pathname, router)}
                className="cursor-pointer hover:scale-110 transition-transform"
              >
                My Projects
              </a>
              <a
                onClick={() => scrollToSection('technologies', pathname, router)}
                className="cursor-pointer hover:scale-110 transition-transform"
              >
                Technologies
              </a>
              <a
                onClick={() => scrollToSection('about', pathname, router)}
                className="cursor-pointer hover:scale-110 transition-transform"
              >
                About Me
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div
            className="
              ml-auto hidden md:flex items-center
              space-x-8
              supports-[gap:2rem]:space-x-0 supports-[gap:2rem]:gap-8
            "
          >
            <a
              href="https://github.com/gyro515"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex"
            >
              <Github className="h-6 w-6 hover:text-green-400 hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/justin-briones09"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex"
            >
              <Linkedin className="h-6 w-6 hover:text-blue-600 hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:jusagebriones@yahoo.com" aria-label="Email" className="inline-flex">
              <Mail className="h-6 w-6 hover:text-red-500 hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Mobile */}
          <button
            className="ml-auto md:hidden rounded p-2 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
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
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
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

              <div
                className="
                  flex items-center border-t px-5 py-4
                  space-x-8
                  supports-[gap:2rem]:space-x-0 supports-[gap:2rem]:gap-8
                "
              >
                <a
                  href="https://github.com/gyro515"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex"
                >
                  <Github className="h-6 w-6 hover:text-green-400 hover:scale-110 transition" />
                </a>
                <a
                  href="https://linkedin.com/in/justin-briones09"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex"
                >
                  <Linkedin className="h-6 w-6 hover:text-blue-600 hover:scale-110 transition" />
                </a>
                <a href="mailto:jusagebriones@yahoo.com" aria-label="Email" className="inline-flex">
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
