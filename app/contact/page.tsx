import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
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

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-8 sm:p-12">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  お名前 <span className="text-destructive">*</span>
                </label>
                <Input id="name" type="text" placeholder="山田 太郎" required className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  メールアドレス <span className="text-destructive">*</span>
                </label>
                <Input id="email" type="email" placeholder="example@email.com" required className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  お問い合わせ種別 <span className="text-destructive">*</span>
                </label>
                <select
                  id="category"
                  required
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">選択してください</option>
                  <option value="business">法人・自治体</option>
                  <option value="individual">個人・クリエイター</option>
                  <option value="media">メディア・取材</option>
                  <option value="other">その他</option>
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
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg py-6 bg-secondary hover:bg-primary hover:text-secondary transition-colors"
              >
                <Send className="mr-2 w-5 h-5" />
                送信する
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
