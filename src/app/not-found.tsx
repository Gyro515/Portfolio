'use client';

/**
 * 404 page displayed when theres no route.
 *
 * @returns The 404 page.
 */
export default function NotFound() {
  return (
    <main className="h-[clamp(500px,calc(100vh-100px),1080px)] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-gray-700">404</h1>
      <p className="mt-5 text-lg text-gray-500 max-w-md">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
    </main>
  );
}
