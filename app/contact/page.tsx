"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    category: "",
    message: "",
  })
  const [turnstileToken, setTurnstileToken] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [turnstileLoaded, setTurnstileLoaded] = useState(false)

  useEffect(() => {
    // Load Cloudflare Turnstile script
    const script = document.createElement("script")
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
    script.async = true
    script.defer = true
    script.onload = () => setTurnstileLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          "cf-turnstile-response": turnstileToken,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({
          name: "",
          company: "",
          email: "",
          category: "",
          message: "",
        })
        // Reset Turnstile
        if (window.turnstile) {
          window.turnstile.reset()
        }
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0">
          <img src="/contact-hero-japanese.jpg" alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Mail className="w-16 h-16 text-white mx-auto mb-6 animate-fade-up drop-shadow-lg" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-up drop-shadow-lg">
            CONTACT / お問い合わせ
          </h1>
          <p
            className="text-xl sm:text-2xl text-white max-w-3xl mx-auto animate-fade-up drop-shadow-lg"
            style={{ animationDelay: "0.1s" }}
          >
            AI導入・講座・取材・コラボなど、お気軽にご相談ください。
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-8 sm:p-12 pb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  お名前 <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="山田 太郎"
                  required
                  className="w-full"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  会社名・組織名
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="株式会社〇〇"
                  className="w-full"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  メールアドレス <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                  className="w-full"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  お問い合わせ種別 <span className="text-destructive">*</span>
                </label>
                <select
                  id="category"
                  required
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="">選択してください</option>
                  <option value="法人・自治体案件について">法人・自治体案件について</option>
                  <option value="講座・登壇依頼について">講座・登壇依頼について</option>
                  <option value="取材・メディア掲載について">取材・メディア掲載について</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  お問い合わせ内容 <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="お問い合わせ内容をご記入ください"
                  required
                  className="w-full min-h-[150px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex justify-center">
                <div className="cf-turnstile mb-6" data-sitekey={process.env.NEXT_PUBLIC_CF_SITE_KEY} />
              </div>

              {status === "loading" && <div className="text-center text-muted-foreground">送信中…</div>}

              {status === "success" && (
                <div className="text-center text-secondary font-medium">✅ 送信しました。ありがとうございます！</div>
              )}

              {status === "error" && (
                <div className="text-center text-destructive font-medium">
                  ❌ エラーが発生しました。再度お試しください。
                </div>
              )}

              <button
                type="submit"
                className="relative z-10 w-full bg-[#A8E6CF] text-gray-800 py-3 rounded hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg font-medium"
                disabled={status === "loading" || !turnstileToken}
              >
                <Send className="w-5 h-5" />
                送信する
              </button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

declare global {
  interface Window {
    turnstile: {
      reset: () => void
    }
  }
}
