export default function Pricing() {
  return (
    <section id="pricing" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Start free and scale as your conversations grow.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Starter</h3>
            <p className="mt-1 text-sm text-white/70">For early experiments</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-white/60">/ mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• 1,000 messages</li>
              <li>• Community support</li>
              <li>• Basic voice</li>
            </ul>
            <button className="mt-6 w-full rounded-lg bg-white/10 px-4 py-2 ring-1 ring-white/20 hover:bg-white/15 transition">Get started</button>
          </div>

          <div className="rounded-2xl border border-red-400/30 bg-gradient-to-b from-red-600/20 to-red-600/5 p-6 shadow-xl shadow-red-900/20">
            <div className="inline-flex items-center rounded-full bg-red-600/20 px-3 py-1 text-xs text-red-200 ring-1 ring-red-400/40">Most popular</div>
            <h3 className="mt-3 text-lg font-semibold">Pro</h3>
            <p className="mt-1 text-sm text-white/80">For growing teams</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-white/60">/ mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/90">
              <li>• 50k messages</li>
              <li>• Advanced voice controls</li>
              <li>• Priority support</li>
            </ul>
            <button className="mt-6 w-full rounded-lg bg-gradient-to-r from-red-500 to-rose-600 px-4 py-2 text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/40 transition">Choose Pro</button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Enterprise</h3>
            <p className="mt-1 text-sm text-white/70">Custom deployments</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• SSO, RBAC, SAML</li>
              <li>• On-prem & VPC options</li>
              <li>• Dedicated support</li>
            </ul>
            <button className="mt-6 w-full rounded-lg bg-white/10 px-4 py-2 ring-1 ring-white/20 hover:bg-white/15 transition">Contact sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
