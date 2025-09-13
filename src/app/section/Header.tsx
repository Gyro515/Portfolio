"use client"

import { useState} from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    if (pathname === "/"){
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center"});
    } else {
      sessionStorage.setItem("scroll-target", id);
      router.push("/", { scroll: false });
    }
  };

  return (
    <header className="w-full sticky md:fixed top-0 inset-x-0 bg-white shadow-md border-b z-50">
      <div className="mx-auto md:max-w-screen-xl flex items-center justify-between px-5 h-[10vh]">

        <div className="flex flex-row items-center gap-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image src="/favicon.ico" alt="Logo" height={48} width={48} onClick={() => scrollToSection("home")} className="brightness-50 hover:scale-110 transition-transform cursor-pointer"/>
          </div>

          {/* Desktop Navigation */}
          <nav className="sticky hidden md:flex gap-10 text-lg">
            <a onClick={() => scrollToSection('technologies')} className="hover:scale-110 transition-transform cursor-pointer">Technologies</a>
            <a onClick={() => scrollToSection('projects')} className="hover:scale-110 transition-transform cursor-pointer">My Projects</a>
            <a onClick={() => scrollToSection('about')} className="hover:scale-110 transition-transform cursor-pointer">About Me</a>
          </nav>
        </div>

        {/* Social Media */}
        <div className="hidden md:flex justify-end gap-10">
          <a href="https://github.com/gyro515" target="_blank"><Github className="h-6 w-6 hover:text-green-400 hover:scale-110 transition-transform " /></a>
          <a href="https://linkedin.com/in/justin-briones09" target="_blank"><Linkedin className="h-6 w-6 hover:text-blue-600 hover:scale-110 transition-transform" /></a>
          <a href="mailto:jusagebriones@yahoo.com"><Mail className="h-6 w-6 hover:text-red-500 hover:scale-110 transition-transform" /></a>
        </div>

        {/* Mobile */}
        <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6"/>}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <>
          <div className="fixed bg-black md:hidden" onClick={() => setIsOpen(false)}/>
          <div className="absolute inset-x-0 bg-white md:hidden shadow-md border-t px-5 py-4 space-y-4">
            <a onClick={() => scrollToSection('technologies')} className="block hover:underline cursor-pointer">Technologies</a>
            <a onClick={() => scrollToSection('projects')} className="block hover:underline cursor-pointer">My Projects</a>
            <a onClick={() => scrollToSection('about')} className="block hover:underline cursor-pointer">About Me</a>

          <div className="flex gap-6 pt-4 border-t">
            <a href="https://github.com/gyro515" target="_blank"><Github className="h-6 w-6 hover:text-green-400 hover:scale-110 transition" /></a>
            <a href="https://linkedin.com/in/justin-briones09" target="_blank"><Linkedin className="h-6 w-6 hover:text-blue-600 hover:scale-110 transition" /></a>
            <a href="mailto:jusagebriones@yahoo.com"><Mail className="h-6 w-6 hover:text-red-500 hover:scale-110 transition" /></a>
          </div>
          </div>
        </>
      )}
    </header>
  )
}
