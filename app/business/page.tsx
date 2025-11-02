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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
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
                <a href="https://www.udemy.com/user/kon-101/" target="_blank" rel="noopener noreferrer">
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
                <a href="https://www.youtube.com/@nsc-nmo" target="_blank" rel="noopener noreferrer">
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
            <div className="mb-12 bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">企業研修・セミナー実績</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>企業研修（ChatGPTメイン／初心者向け）</span>
                  <span className="font-semibold text-foreground">約40名</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>企業研修（バイブコーディング中心／初心者向け）</span>
                  <span className="font-semibold text-foreground">約40名</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>自治体主催スキルアップ講座（ChatGPT初心者向け）</span>
                  <span className="font-semibold text-foreground">約30名</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>自治体主催スキルアップ講座（AIセキュリティ・リサーチ活用）</span>
                  <span className="font-semibold text-foreground">約30名</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>自治体主催個人事業者向けセミナー（ChatGPT初心者向け）</span>
                  <span className="font-semibold text-foreground">約5名</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>親子AIワークショップ主催（ChatGPTでぬりえを作ろう）</span>
                  <span className="font-semibold text-foreground">約5組</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Udemy Stats */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Video className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Udemy講座</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">講座数</span>
                    <span className="font-semibold">15講座</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">受講生数</span>
                    <span className="font-semibold">1,650人</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">評価</span>
                    <span className="font-semibold text-primary">4.3/5.0</span>
                  </div>
                </div>
              </div>

              {/* Peatix Stats */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Peatix</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">イベント数</span>
                    <span className="font-semibold">133件</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">フォロワー数</span>
                    <span className="font-semibold">5,245名</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">申込者総数</span>
                    <span className="font-semibold">23,503件</span>
                  </div>
                </div>
              </div>

              {/* Overall Impact */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">総合実績</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">延べ参加者</span>
                    <span className="font-semibold">25,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">企業・自治体</span>
                    <span className="font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">満足度</span>
                    <span className="font-semibold text-primary">4.5/5.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Cards - kept for visual variety */}
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
              <h3 className="text-2xl font-bold mb-8 text-center">お客様の声</h3>
              <p className="text-center text-muted-foreground mb-8">企業研修参加者からのコメント</p>
              <div className="space-y-8">
                {/* Testimonial 1 */}
                <div className="border-l-4 border-primary pl-6 py-4">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      今回の研修では、AIの利便性と留意点を学ぶことができ、正しく恐れながら使うことで、業務効率化を進めることができそうだと感じました。ChatGPTに「情報源を示して」と付け加えるだけでリンクを示してくれることを知り、今後活用していきたいと思いました。
                    </p>
                    <p>
                      バイブコーディングを初めて体験し、複雑なプログラミングが必要だと思っていたサイトやアプリ作成が、明確に伝えるだけで実現できることに驚きました。一見難しい指示でも、プロンプトを工夫すれば一発で出力できることを実感しました。
                    </p>
                    <p>
                      AIにもできる作業が増える中、「この会社だから、この人だから依頼したい」と思ってもらえるような個性を見出すことが大切だと学びました。今回の研修で学んだ技術を活かし、部署全体でAI活用の方法を共有し、できるところから効率化を進めていきたいです。
                    </p>
                  </div>
                  <p className="text-sm font-semibold mt-4 text-foreground">— 企業研修参加者A様</p>
                </div>

                {/* Testimonial 2 */}
                <div className="border-l-4 border-primary pl-6 py-4">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      今回のAI研修を通じて、最新の技術動向から具体的なツールの活用方法、そして安全に使うための考え方まで、幅広く学ぶことができました。ChatGPTだけでなく、ClaudeやGeminiなど数多くのツールがあり、場面ごとに使い分けられていることを知り、視野が大きく広がりました。
                    </p>
                    <p>
                      AI活用におけるセキュリティや倫理についても学び直す機会となりました。便利さに頼るあまり、安易に情報を入力してしまう危うさや、著作権・プライバシーへの配慮の必要性は、日々の業務で常に意識しておくべきだと感じています。
                    </p>
                    <p>
                      実践演習ではCanvaを使ったデザイン作成がとても印象的でした。専門的な知識がなくても実用的なものを形にできるのは、新しい発想を素早く試す上で非常に大きな強みになると感じました。今後は、AIを単なる効率化の道具としてだけでなく、企画やアイデアを形にする際の"発想のパートナー"としても取り入れ、学んだことを周囲とも共有していきたいと思います。
                    </p>
                  </div>
                  <p className="text-sm font-semibold mt-4 text-foreground">— 企業研修参加者B様</p>
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
