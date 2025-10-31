import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactCTASection() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            AI導入・講座・取材の
            <br />
            ご相談はこちら
          </h2>
          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            お気軽にお問い合わせください。
            <br />
            あなたのビジネスや学びをAIでサポートします。
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-secondary hover:bg-primary hover:text-white text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 transition-all duration-300"
          >
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
