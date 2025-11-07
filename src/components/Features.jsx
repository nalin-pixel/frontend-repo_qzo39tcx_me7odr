import { Mic, Sparkles, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voice native',
    desc: 'Real-time, low-latency voice with natural prosody and expressive responses.',
  },
  {
    icon: Sparkles,
    title: 'Personality engine',
    desc: 'Shape tone and style to match your brand—playful, formal, or anything in between.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'SOC2-ready practices, data residency options, and role-based access.',
  },
  {
    icon: Zap,
    title: 'Blazing fast',
    desc: 'Optimized inference pipelines keep conversations snappy and engaging.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-red-600/20 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to launch an AI chatbot</h2>
        <p className="mt-3 text-white/70 max-w-2xl">A modern stack tuned for realtime conversation, safety, and delightful UX.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.075] transition shadow-lg shadow-red-900/5">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-md shadow-red-600/30">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
