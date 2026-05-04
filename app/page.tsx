export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Content Protection
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Check if your content was{' '}
          <span className="text-[#58a6ff]">stolen across the web</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste your URL and we crawl the internet to find unauthorized copies of your blog posts, course content, or marketing materials — then alert you automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Protecting for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['Web-wide crawling', 'Continuous monitoring', 'Instant alerts', 'Similarity scoring', 'DMCA report export'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to protect your content</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Monitor up to 50 URLs',
              'Daily web crawl scans',
              'Email alerts on new copies',
              'Similarity percentage score',
              'One-click DMCA report',
              'Dashboard with match history',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does the plagiarism detection work?',
              a: 'We extract text from your URLs and run fingerprinted searches across the web using crawling APIs. Matches are scored by similarity so you can quickly spot exact copies vs. paraphrased theft.',
            },
            {
              q: 'How often is my content scanned?',
              a: 'On the Pro plan your monitored URLs are scanned daily. You receive an email alert the moment a new unauthorized copy is detected.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no questions asked.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Content Plagiarism Checker. All rights reserved.
      </footer>
    </main>
  )
}
