import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { MessageSquare, Calendar, Video, FileText, ArrowRight, Sparkles } from "lucide-react"

export default function CreativePage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="/creative-hero-japanese.jpg" alt="Creative AI Community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up text-white drop-shadow-lg">
            個人・クリエイター向け AI講座＆コミュニティ
          </h1>
          <p
            className="text-xl sm:text-2xl text-white max-w-3xl mx-auto animate-fade-up drop-shadow-lg"
            style={{ animationDelay: "0.1s" }}
          >
            学び × 実践 × 発信で、AIを使いこなすクリエイターに
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AIコンテンツラボ */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <MessageSquare className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-4">AIコンテンツラボ</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Discordコミュニティで、AIを使ったコンテンツ制作を学び、実践し、仲間と共に成長できます。
              </p>
              <Button asChild className="w-full bg-accent hover:bg-accent/90">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                  Discordに参加
                </a>
              </Button>
            </Card>

            {/* 無料ウェビナー */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-4">無料ウェビナー</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                定期的に開催される無料ウェビナーで、最新のAIツールや活用方法を学べます。
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a href="https://peatix.com" target="_blank" rel="noopener noreferrer">
                  Peatixで予約
                </a>
              </Button>
            </Card>

            {/* Udemy講座 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Video className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-4">Udemy講座</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                体系的に学べる動画講座で、AIスキルを基礎から実践まで習得できます。特典ページもあります。
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer">
                  Udemyで見る
                </a>
              </Button>
            </Card>

            {/* noteメンバーシップ */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-4">noteメンバーシップ</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                限定記事やノウハウを定期的に配信。メンバー限定のコンテンツで学びを深められます。
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a href="https://note.com" target="_blank" rel="noopener noreferrer">
                  noteで見る
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Block */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">学び × 実践 × 発信</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              KONTOMOのクリエイティブコミュニティでは、ただ学ぶだけでなく、
              <br />
              実際にAIを使ってコンテンツを作り、世界に発信する力を身につけます。
              <br />
              <br />
              初心者から上級者まで、あなたのペースで成長できる環境が整っています。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">今すぐ始めよう</h2>
            <p className="text-xl text-muted-foreground mb-8">
              AIを使いこなすクリエイターへの第一歩を踏み出しましょう。
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
              <Link href="/contact">
                講座をみる
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
