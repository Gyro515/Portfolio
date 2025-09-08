'use client'

export default function Header() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed w-full bg-white text-black p-6 shadow-md border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">JSB</h1>
        <nav className="space-x-5">
          <a onClick={() => scrollToSection('home')} className="hover:underline cursor-pointer">Home</a>
          <a onClick={() => scrollToSection('about')} className="hover:underline cursor-pointer">About</a>
          <a onClick={() => scrollToSection('projects')} className="hover:underline cursor-pointer">Projects</a>
          <a onClick={() => scrollToSection('contact')} className="hover:underline cursor-pointer">Contact</a>
        </nav>
      </div>
    </header>
  )
}
