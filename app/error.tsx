"use client";
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-accent text-white p-8">
      <div className="text-6xl font-bold mb-4">500</div>
      <div className="text-2xl font-semibold mb-2">Something went wrong</div>
      <p className="mb-6 text-center max-w-md">
        Sorry, an unexpected error occurred.<br />
        The WebNexaAI team has been notified. Please try again or return to the homepage.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-accent text-black rounded-lg font-semibold shadow hover:bg-accent/80 transition mb-2"
      >
        Try Again
      </button>
      <Link href="/" className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold shadow hover:bg-white/20 transition">
        Go to Homepage
      </Link>
      <div className="mt-8 opacity-70 text-sm">&copy; {new Date().getFullYear()} WebNexaAI. All rights reserved.</div>
    </div>
  );
} 