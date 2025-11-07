import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-600/30">
            <Rocket className="h-5 w-5 text-white" />
          </span>
          <span className="font-semibold text-white text-lg tracking-tight">Ping!</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
          <a href="#" className="text-white/80 hover:text-white transition">Docs</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-sm rounded-md text-white/90 hover:text-white transition">Sign in</button>
          <button className="px-4 py-2 text-sm rounded-md bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-md shadow-red-600/30 hover:shadow-red-600/40 transition">Start free</button>
        </div>
      </div>
    </header>
  );
}
