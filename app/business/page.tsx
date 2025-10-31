import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Building2, Users, Video, Youtube, ArrowRight, Award } from "lucide-react"

export default function BusinessPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="/business-hero-japanese.jpg" alt="Business AI Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up text-white drop-shadow-lg">
            法人・自治体向け AI活用支援
          </h1>
          <p
            className="text-xl sm:text-2xl text-white max-w-3xl mx-auto animate-fade-up drop-shadow-lg"
            style={{ animationDelay: "0.1s" }}
          >
            組織全体でAIを活用し、業務効率化と新しい価値創造を実現
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AI活用セミナー */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">AI活用セミナー</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                法人・自治体向けに、AIツールの基礎から実践的な活用方法まで、カスタマイズされたセミナーを提供します。
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">無料相談はこちら</Link>
              </Button>
            </Card>

            {/* 親子AIワークショップ */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">親子AIワークショップ</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                自治体・企業向けに、親子で楽しく学べるAIワークショップを企画・実施します。
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">無料相談はこちら</Link>
              </Button>
            </Card>

            {/* 動画講座 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Video className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">動画講座（Udemy）</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                いつでもどこでも学べる、実践的なAI活用講座をUdemyで提供しています。
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer">
                  Udemyで見る
                </a>
              </Button>
            </Card>

            {/* YouTube講座 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Youtube className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">YouTube講座</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                無料で学べるAI活用のヒントやチュートリアルをYouTubeで公開しています。
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  YouTubeで見る
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">実績</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              多くの企業・自治体・教育機関でAI活用支援を行ってきました
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: "100+", label: "セミナー開催数" },
                { number: "3,000+", label: "受講者数" },
                { number: "50+", label: "企業・自治体" },
                { number: "4.8/5.0", label: "満足度" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Achievement Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">ChatGPT初心者向けセミナー</h3>
                <p className="text-sm text-muted-foreground">自治体向けに実施</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Building2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">企業向けAI活用研修</h3>
                <p className="text-sm text-muted-foreground">業務効率化を実現</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Video className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">AI活用オンライン講座</h3>
                <p className="text-sm text-muted-foreground">いつでもどこでも学べる</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">AIコンテンツラボ</h3>
                <p className="text-sm text-muted-foreground">オンラインコミュニティ運営</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">親子AIワークショップ</h3>
                <p className="text-sm text-muted-foreground">楽しく学べる体験型イベント</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">AIアートコンテスト</h3>
                <p className="text-sm text-muted-foreground">創造性を引き出すイベント開催</p>
              </Card>
            </div>

            {/* Client Testimonials */}
            <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">お客様の声</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    「実践的な内容で、すぐに業務に活かせる知識が得られました。社員のAIリテラシーが大幅に向上しました。」
                  </p>
                  <p className="text-sm font-semibold">— 製造業A社 人事部長</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    「親子ワークショップは大好評でした。子どもたちが楽しみながらAIを学べる素晴らしい機会になりました。」
                  </p>
                  <p className="text-sm font-semibold">— B市 教育委員会</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">導入の流れ</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "ご相談", description: "まずはお気軽にご相談ください" },
                { step: "02", title: "企画", description: "ニーズに合わせた内容を企画" },
                { step: "03", title: "実施", description: "セミナー・ワークショップを実施" },
                { step: "04", title: "振り返り", description: "効果測定とフォローアップ" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">まずは無料相談から</h2>
            <p className="text-xl text-muted-foreground mb-8">
              AI導入・活用に関するご相談は、お気軽にお問い合わせください。
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">
                無料相談はこちら
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
