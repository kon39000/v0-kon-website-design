import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Building2, Users, ClipboardList, Wand2, ArrowRight } from "lucide-react"

export default function BusinessPage() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="/business-hero-japanese.jpg"
            alt="法人・自治体向けAI活用支援のイメージ（会議室で研修を受ける参加者）"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            法人・自治体向け AI活用支援
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg">
            業務課題に寄り添いながら、実践型AI研修で組織全体の底上げをサポートします。
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">まずは無料相談</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* こんなことができます */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">こんなことができます</h2>
            <p className="text-lg text-muted-foreground">
              事前ヒアリングで課題を整理し、必要なAI活用方法を一緒に考えます。座学より、実際に手を動かしながら身につける「体験型研修」を中心に構成します。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Building2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">企業向け AI活用＆実践研修</h3>
              <p className="text-muted-foreground leading-relaxed">
                ChatGPT / Gemini / Claude / Canva AI などを活用し、業務効率化・企画づくり・情報検索の実務に直結する研修を、職種・部門別にカスタマイズして実施します。
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <ClipboardList className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">自治体主催の超初心者向け ChatGPT セミナー</h3>
              <p className="text-muted-foreground leading-relaxed">
                市民講座・職員向け研修・生涯学習イベントなどに対応。AIの安全な使い方と、暮らしや仕事での具体的な活用例を、はじめての方でも安心の内容でお届けします。
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">親子AIワークショップ</h3>
              <p className="text-muted-foreground leading-relaxed">
                子ども向け・ファミリー向けの楽しいAI体験イベント。画像生成や文章生成などの創作を通じて、遊びながらAIに触れられるプログラムを運営します。
              </p>
            </Card>
          </div>

          <div className="mt-10 flex justify-center">
            <figure className="max-w-4xl w-full">
              <img
                src="/business-service-japanese.jpg"
                alt="実践型AI研修の様子（操作しながら学ぶ受講者）"
                className="rounded-xl w-full h-auto object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 実績 */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">実績</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="p-6">
                <Wand2 className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">企業研修実績</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>ChatGPT初心者向け研修（基礎〜業務ユース）</li>
                  <li>AI活用セミナー（企画・資料・調査の効率化）</li>
                </ul>
              </Card>

              <Card className="p-6">
                <Wand2 className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">自治体講座実績</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>市民向けChatGPT入門（安心・安全な使い方）</li>
                  <li>個人事業主向け活用講座（情報収集・発信・販促）</li>
                </ul>
              </Card>

              <Card className="p-6">
                <Wand2 className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">親子AIワークショップ実績</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>画像生成・文章生成の創作体験</li>
                  <li>学びと遊びがつながるファミリープログラム</li>
                </ul>
              </Card>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-base font-bold mb-4">関連リンク</h4>
              <ul className="grid md:grid-cols-3 gap-3 text-sm">
                <li>
                  <a
                    href="https://aiart2025.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    AIアートコンテスト
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/playlist?list=PLzimknL9cUp3lCj6p0QmyXot-jaGUAenp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    オンラインイベント主催（YouTube再生リスト）
                  </a>
                </li>
                <li>
                  <Link href="/courses" className="text-primary hover:underline">
                    AI活用オンライン講座（Courses）
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 導入の流れ */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">導入の流れ</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
            {[
              { title: "ご相談（無料）", desc: "課題ヒアリング" },
              { title: "研修内容の企画", desc: "目的・レベル・参加対象に合わせて構成" },
              { title: "実施（オンライン／現地）", desc: "体験型・ワーク中心のセミナー" },
              { title: "振り返りとフォローアップ", desc: "アンケート反映／追加サポート提案" },
            ].map((s, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">まずは無料相談</h2>
            <p className="text-lg text-muted-foreground mb-8">AI導入・研修に関するご相談はお気軽にどうぞ。</p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">
                /contact からお問い合わせ
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

