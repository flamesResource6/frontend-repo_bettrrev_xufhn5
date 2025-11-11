import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-sm" style={{ backgroundColor: '#B388EB' }} />
            <span className="font-semibold tracking-tight text-lg">Impulse Media</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:opacity-70">Work</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#about" className="hover:opacity-70">About</a>
          </nav>
          <a
            href="#quote"
            className="px-4 py-2 rounded-md font-semibold shadow-sm transition-transform active:scale-95"
            style={{ backgroundColor: '#DCFF63', color: '#000' }}
          >
            Start a project
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
            {/* Headlines on lilac block to keep white words visible */}
            <div className="relative">
              <div
                className="rounded-3xl p-8 md:p-10 shadow-sm"
                style={{ backgroundColor: '#B388EB' }}
              >
                <h1 className="text-5xl md:text-7xl leading-[0.95] font-extrabold tracking-tight">
                  <span className="block">
                    Gifts <span className="text-white">for</span> life
                  </span>
                  <span className="block mt-4">
                    Gifts <span className="text-white">with</span> love
                  </span>
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-prose text-black/80">
                  We craft thoughtful corporate merchandise and turnkey gift sets that make brands feel human. Minimal, modern, and unmistakably yours.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#quote"
                    className="px-5 py-3 rounded-lg font-semibold shadow-sm transition-transform active:scale-95"
                    style={{ backgroundColor: '#DCFF63', color: '#000' }}
                  >
                    Get a quote
                  </a>
                  <a
                    href="#work"
                    className="px-5 py-3 rounded-lg font-semibold border hover:bg-black hover:text-white transition-colors"
                    style={{ borderColor: '#000' }}
                  >
                    See our work
                  </a>
                </div>
              </div>
            </div>

            {/* Mockup cluster */}
            <div className="relative h-[520px] md:h-[560px]">
              {/* Backdrop lilac patch */}
              <div
                className="absolute inset-6 rounded-3xl -z-10"
                style={{ backgroundColor: '#B388EB' }}
              />

              {/* Tote bag */}
              <div className="absolute left-4 top-6 w-40 md:w-48 aspect-[3/4] bg-white rounded-xl shadow-2xl border border-black/5 flex flex-col items-center justify-between p-4 rotate-[-6deg]">
                <div className="h-6 w-14 rounded-sm" style={{ backgroundColor: '#B388EB' }} />
                <div className="text-center">
                  <div className="text-xs tracking-wide uppercase">Impulse</div>
                  <div className="text-sm font-semibold">Tote</div>
                </div>
                <div className="h-2 w-16 rounded-full" style={{ backgroundColor: '#DCFF63' }} />
              </div>

              {/* Mug */}
              <div className="absolute right-6 top-16 w-44 md:w-52 h-44 md:h-52 bg-white rounded-[28px] shadow-2xl border border-black/5 flex items-center justify-center rotate-3">
                <div className="relative w-24 h-24 rounded-full shadow-inner" style={{ backgroundColor: '#B388EB' }}>
                  <div className="absolute -right-6 top-6 w-10 h-16 rounded-r-[20px] bg-white border border-black/5" />
                  <div className="absolute inset-3 rounded-full" style={{ backgroundColor: '#DCFF63' }} />
                </div>
              </div>

              {/* Gift box */}
              <div className="absolute left-20 bottom-8 w-64 h-40 bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden rotate-2">
                <div className="absolute inset-x-0 top-0 h-10" style={{ backgroundColor: '#B388EB' }} />
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-8" style={{ backgroundColor: '#DCFF63' }} />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="text-sm font-semibold">Brand Gift Set</div>
                </div>
              </div>

              {/* Sticker */}
              <div
                className="absolute right-10 bottom-6 px-4 py-2 rounded-full text-sm font-semibold shadow"
                style={{ backgroundColor: '#DCFF63', color: '#000' }}
              >
                Custom-made
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section id="services" className="mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="rounded-2xl p-6 md:p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ backgroundColor: '#B388EB' }}
          >
            {[
              'Turnkey design',
              'Sourcing & production',
              'Custom packaging',
              'Worldwide shipping',
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-5 shadow-sm border border-black/5">
                <div className="h-2 w-10 rounded-full mb-3" style={{ backgroundColor: '#DCFF63' }} />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase grid */}
      <section id="work" className="mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Selected sets</h2>
            <a
              href="#quote"
              className="px-4 py-2 rounded-md font-semibold shadow-sm hidden sm:inline-block"
              style={{ backgroundColor: '#DCFF63', color: '#000' }}
            >
              Plan yours
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm">
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0" style={{ backgroundColor: '#B388EB' }} />
                  <div className="absolute inset-4 rounded-xl bg-white flex items-center justify-center shadow-xl">
                    <div className="w-24 h-24 rounded-lg" style={{ backgroundColor: '#DCFF63' }} />
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Brand Kit 0{i}</p>
                    <p className="text-sm text-black/60">Mug, tote, notes</p>
                  </div>
                  <div className="h-2 w-10 rounded-full" style={{ backgroundColor: '#DCFF63' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="mt-20 mb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-black/5 shadow-sm" style={{ backgroundColor: '#B388EB' }}>
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Ready to make gifts people keep?
              </h3>
              <p className="mt-2 text-black/80 max-w-xl">
                Tell us about your team, event, or campaign. We’ll design, source, and ship the full set — end to end.
              </p>
            </div>
            <a
              href="mailto:hello@impulse.media?subject=Project%20Inquiry%20—%20Impulse%20Media"
              className="px-6 py-3 rounded-lg font-semibold shadow-sm"
              style={{ backgroundColor: '#DCFF63', color: '#000' }}
            >
              hello@impulse.media
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/60">© {new Date().getFullYear()} Impulse Media. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-sm">Gifts <span className="text-white px-1 rounded" style={{ backgroundColor: '#B388EB' }}>for</span> life · Gifts <span className="text-white px-1 rounded" style={{ backgroundColor: '#B388EB' }}>with</span> love</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
