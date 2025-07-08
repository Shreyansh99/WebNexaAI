import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-accent text-white p-8">
      <div className="text-6xl font-bold mb-4">404</div>
      <div className="text-2xl font-semibold mb-2">Page Not Found</div>
      <p className="mb-6 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.<br />
        At <span className="text-accent font-bold">WebNexaAI</span>, we help businesses scale and automate with AI. Let's get you back on track!
      </p>
      <Link href="/" className="px-6 py-3 bg-accent text-black rounded-lg font-semibold shadow hover:bg-accent/80 transition">
        Go to Homepage
      </Link>
      <div className="mt-8 opacity-70 text-sm">&copy; {new Date().getFullYear()} WebNexaAI. All rights reserved.</div>
    </div>
  );
} 