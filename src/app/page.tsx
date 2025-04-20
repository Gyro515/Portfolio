export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-4">Hey, I'm Justin Sage 👋</h1>
      <p className="text-xl text-center max-w-xl mb-6">
        Developer crafting clean, fast, and modern web apps.
      </p>

      <div className="flex space-x-4">
        <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" className="text-blue-500 hover:underline">LinkedIn</a>
        <a href="mailto:you@example.com" className="text-blue-500 hover:underline">Email</a>
      </div>
    </main>
  );
}
