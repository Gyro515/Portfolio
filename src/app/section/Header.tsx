"use client"

import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth"})
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 bg-white shadow-md border-b z-50">
      <div className="mx-auto max-w-screen-xl grid grid-cols-2 items-center px-5 py-4">

        {/* Logo & Navigation */}
        <div className="flex items-center gap-10">
          <img src="/favicon.ico" alt="Logo" height={48} width={48} onClick={() => scrollToSection('home')} className="brightness-50 cursor-pointer hover:scale-110 transition-transform"/>

          <nav className="flex flex-wrap gap-10 text-lg">
            <a onClick={() => scrollToSection('technologies')} className="hover:underline cursor-pointer">Technologies</a>
            <a onClick={() => scrollToSection('projects')} className="hover:underline cursor-pointer">My Projects</a>
            <a onClick={() => scrollToSection('about')} className="hover:underline cursor-pointer">About Me</a>
          </nav>
        </div>

        {/* Social Media */}
        <div className="flex justify-end gap-10">
          <a href="https://github.com/gyro515" target="_blank"><Github className="h-6 w-6 hover:text-green-400 hover:scale-110 transition" /></a>
          <a href="https://linkedin.com/in/justin-briones09" target="_blank"><Linkedin className="h-6 w-6 hover:text-blue-600 hover:scale-110 transition" /></a>
          <a href="mailto:jusagebriones@yahoo.com"><Mail className="h-6 w-6 hover:text-red-500 hover:scale-110 transition" /></a>
        </div>

      </div>
    </header>
  )
}
