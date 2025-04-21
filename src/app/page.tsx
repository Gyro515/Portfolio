export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md w-full py-4 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Justin Sage</h1>
          <nav className="space-x-4">
            <a href="#projects" className="text-gray-700 hover:text-black">Projects</a>
            <a href="#about" className="text-gray-700 hover:text-black">About</a>
            <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold mb-4">Hey, I&apos;m Justin Sage 👋</h1>
        <p className="text-xl text-center max-w-xl mb-6">
          Developer crafting clean, fast, and modern web apps. BRUh
        </p>

        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="mailto:you@example.com" className="text-blue-500 hover:underline">Email</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Justin Sage • Built with Next.js + Tailwind CSS
      </footer>
    </div>
  );
}
