import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Gift } from "lucide-react"

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
            <Card className="p-8 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RwZS3hEqSsezFHWEv6B51j8aPbo1ul.png"
                  alt="AIコンテンツラボのチームメンバー"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">AIコンテンツラボ</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Discordコミュニティで、AIを使ったコンテンツ制作を学び、実践し、仲間と共に成長できます。
              </p>
              <Button asChild className="w-full bg-accent hover:bg-accent/90">
                <a href="https://ai-contents-labo.com/" target="_blank" rel="noopener noreferrer">
                  詳しく見る
                </a>
              </Button>
            </Card>

            {/* 無料ウェビナー */}
            <Card className="p-8 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                <Image
                  src="/webinar-japanese-people.jpg"
                  alt="オンラインウェビナーに参加する人々"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">無料ウェビナー</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                定期的に開催される無料ウェビナーで、最新のAIツールや活用方法を学べます。
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a href="https://nmo-event.peatix.com?type=owner" target="_blank" rel="noopener noreferrer">
                  Peatixで予約
                </a>
              </Button>
            </Card>

            {/* Udemy講座 */}
            <Card className="p-8 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                <Image
                  src="/udemy-learning-home.jpg"
                  alt="自宅でラップトップで学習する人"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Udemy講座</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                体系的に学べる動画講座で、AIスキルを基礎から実践まで習得できます。全15講座をご用意しています。
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/courses">講座一覧を見る</Link>
              </Button>
            </Card>

            {/* noteメンバーシップ */}
            <Card className="p-8 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                <Image
                  src="/note-creator-working.jpg"
                  alt="クリエイターがタブレットで作業する様子"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">noteメンバーシップ</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                限定記事やノウハウを定期的に配信。メンバー限定のコンテンツで学びを深められます。
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a href="https://note.com/kon39000/membership" target="_blank" rel="noopener noreferrer">
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

      <section className="py-16 sm:py-24 bg-[#F9FBFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Gift className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">無料で始めたい方へ</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              まずは気軽にAIの世界に触れてみませんか？
              <br />
              無料ウェビナーやメルマガで、学びの第一歩をサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <a href="https://nmo-event.peatix.com?type=owner" target="_blank" rel="noopener noreferrer">
                  無料ウェビナーに参加する
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white hover:bg-accent/10 border-2 border-accent shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <a href="https://nmo1.com/p/r/DfDZJpzk" target="_blank" rel="noopener noreferrer">
                  無料メルマガを購読する
                </a>
              </Button>
            </div>
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
              <Link href="/courses">
                講座を見る
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
