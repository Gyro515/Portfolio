// src/app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white font-sans">
      {/* Header */}
      <header className="bg-white text-black shadow-md py-4 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Justin Sage</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Hey, I'm Justin Sage 👋
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-6">
          Recent Applied Computer Science graduate with a passion for data analytics, clean code, and building modern web experiences.
        </p>

        {/* CTA Links */}
        <div className="flex space-x-4 text-sm">
          <a
            href="https://github.com/gyro515"
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/justin-briones09"
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jsagebriones@yahoo.com"
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
          >
            Email Me
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-center py-4 text-sm">
        © {new Date().getFullYear()} Justin Sage • Built with Next.js + Tailwind CSS
      </footer>
    </div>
  );
}
