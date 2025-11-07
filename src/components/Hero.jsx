import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/XuAg4PYWfzmy0iW1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          Live voice AI • Red & vibrant
        </span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Ping! Your playful AI chatbot for modern teams
        </h1>
        <p className="mt-5 max-w-2xl text-white/80 text-lg">
          Spin up a delightful, voice-enabled AI assistant that feels human. Designed for speed, reliability, and a splash of personality.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#pricing" className="px-5 py-3 rounded-lg bg-gradient-to-r from-red-500 to-rose-600 text-white font-medium shadow-lg shadow-red-600/30 hover:shadow-red-600/40 transition">Start free</a>
          <a href="#features" className="px-5 py-3 rounded-lg bg-white/10 text-white/90 hover:bg-white/15 transition font-medium ring-1 ring-white/20">See features</a>
        </div>
      </div>
    </section>
  );
}
