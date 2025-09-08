'use client'

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 bg-white shadow-md border-b border-gray-200 z-50">
      <div className="mx-auto max-w-screen-xl grid grid-cols-2 items-center p-4">

        {/* Logo & Navigation */}
        <div className="flex items-center gap-12">
          <h1 className=" text-xl font-bold">JSB</h1>

          <nav className="flex flex-wrap gap-10 text-lg">
            <a onClick={() => scrollToSection('home')} className="hover:underline cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('about')} className="hover:underline cursor-pointer">About</a>
            <a onClick={() => scrollToSection('projects')} className="hover:underline cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="hover:underline cursor-pointer">Contact</a>
          </nav>
        </div>

        {/* Social Media */}
        <div className="flex justify-end gap-4">
          <a href="https://github.com/gyro515" target="_blank"><Github className="h-6 w-6 hover:text-green-400 transition" /></a>
          <a href="https://linkedin.com/in/justin-briones09" target="_blank"><Linkedin className="h-6 w-6 hover:text-blue-600 transition" /></a>
          <a href="mailto:jusagebriones@yahoo.com"><Mail className="h-6 w-6 hover:text-red-500 transition" /></a>
        </div>

      </div>
    </header>
  )
}
