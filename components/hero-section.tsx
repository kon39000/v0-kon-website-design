"use client"

import { useState, useEffect } from "react"

const heroImages = [
  { src: "/hero-japanese-people-ai.jpg", alt: "AIを使う人々の自然な姿" },
  { src: "/work-family-workshop-jp.jpg", alt: "親子AIワークショップの様子" },
  { src: "/work-corporate-training-jp.jpg", alt: "企業向けAI研修の様子" },
  { src: "/work-content-lab-jp.jpg", alt: "AI Contents Laboの活動" },
  { src: "/work-art-contest-jp.jpg", alt: "AIアートコンテストの様子" },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000) // 6秒ごとに切り替え

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
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
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-relaxed text-balance text-white">
            AIで&quot;人の力&quot;を支える。
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed text-white/90 max-w-2xl">
            静かな熱量で、AIと人の共創を支援します。
          </p>
        </div>
      </div>
    </section>
  )
}
