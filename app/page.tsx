export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Is Your Cookie Banner<br />
          <span className="text-[#58a6ff]">Actually Legal?</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Scan your website's cookie banner against the latest GDPR requirements. Get a detailed compliance report with flagged violations and actionable fixes — in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Compliance Check — $12/mo
          </a>
          <span className="text-[#8b949e] text-sm">Cancel anytime. No credit card lock-in.</span>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            ["GDPR Articles", "Checked"],
            ["Violations", "Flagged"],
            ["Fixes", "Suggested"]
          ].map(([label, sub]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-lg">{label}</div>
              <div className="text-[#8b949e] text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited website scans",
              "Full GDPR article-by-article check",
              "Violation detection & severity rating",
              "Actionable fix recommendations",
              "PDF compliance report export",
              "Priority email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Secure payment via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What does the GDPR Cookie Banner Checker actually scan?",
              a: "It crawls your website, detects your cookie consent banner, and checks it against key GDPR requirements: prior consent before non-essential cookies, granular opt-in controls, no pre-ticked boxes, easy withdrawal of consent, and clear privacy policy links."
            },
            {
              q: "Who needs this tool?",
              a: "Any website serving EU users — including e-commerce stores, SaaS products, blogs, and agencies managing client sites. Non-compliance can result in fines up to €20 million or 4% of global annual turnover."
            },
            {
              q: "How quickly will I get my compliance report?",
              a: "Most scans complete within 30–60 seconds. You'll receive a detailed report highlighting each violation, the relevant GDPR article, and a specific recommended fix."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} GDPR Cookie Banner Legal Checker. Not legal advice.
      </footer>
    </main>
  );
}
