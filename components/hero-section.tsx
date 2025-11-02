"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const heroImages = [
  { src: "/hero-japanese-team-collaboration.jpg", alt: "日本人チームがAIで協働する様子" },
  { src: "/work-family-workshop-jp.jpg", alt: "親子AIワークショップの様子" },
  { src: "/work-corporate-training-jp.jpg", alt: "企業向けAI研修の様子" },
  { src: "/hero-japanese-team-collaboration.jpg", alt: "日本人チームがAIで協働する様子" },
  { src: "/work-art-contest-jp.jpg", alt: "AIアートコンテストの様子" },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 7000) // Changed to 7 seconds for slower transitions

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-25">
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="text-center space-y-8 animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-relaxed text-balance text-slate-900">
            AIで未来を
            <br />
            デザインする。
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-slate-700">
            学びを<span className="text-[#A8E6CF] font-semibold">&quot;実績&quot;</span>に変える。
            <br />
            実践型AI講座。
          </p>

          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/business"
              className="inline-block px-8 py-4 bg-[#A8E6CF] hover:bg-[#8FD9B6] text-slate-900 font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              無料相談する
            </Link>
            <Link
              href="/courses"
              className="inline-block px-8 py-4 bg-white/80 hover:bg-white text-slate-900 font-medium rounded-lg transition-all duration-300 hover:shadow-lg border border-slate-200 hover:border-[#A8E6CF]"
            >
              講座を見る
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
