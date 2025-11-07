import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, MessageSquare, Twitter, Youtube, GraduationCap, FileText, Radio, Mic, Music } from "lucide-react"

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img src="/about-hero-japanese.jpg" alt="About KONTOMO" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up text-white drop-shadow-lg">
            AIを、もっと身近に、もっと楽しく。
          </h1>
          <p
            className="text-xl sm:text-2xl text-white max-w-3xl mx-auto animate-fade-up drop-shadow-lg"
            style={{ animationDelay: "0.1s" }}
          >
            KONTOMOは、AIの力で未来をデザインする
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary">Mission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                AIは難しくない。AIは怖くない。AIは、もっと自由で、もっと楽しい。
                <br />
                私たちは、AIを「使いこなす力」を、すべての人に届けます。
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary">Vision</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                大人も子どもも、仕事でも暮らしでも。
                <br />
                AIの力で「できること」を広げ、一人ひとりの可能性を解き放つ未来を創ります。
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary">Value</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">実践主義</h3>
                  <p className="text-muted-foreground">まずやってみる。小さな一歩を積み重ね、価値へとつなげる。</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">オープン</h3>
                  <p className="text-muted-foreground">誰でも学べる・試せる環境づくり。情報は分かりやすく、シェアフレンドリーに。</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">伴走</h3>
                  <p className="text-muted-foreground">学び合い・育て合うコミュニティで、一人では届かない成果へ。</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">創造</h3>
                  <p className="text-muted-foreground">AIと人の共創で、新しい表現と仕事のかたちを切り開く。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Journey</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: "2021", title: "開業", description: "育休中にフリーランスを目指し開業" },
              {
                year: "2022",
                title: "NFT Marketing Orchestra開設",
                description: "NFTを会員権としたオンラインサロン「NFT Marketing Orchestra」開設",
              },
              { year: "2022", title: "法人設立", description: "合同会社NFTオーケストラ設立" },
              {
                year: "2024",
                title: "AI Contents Laboリニューアル",
                description: "「NFT Marketing Orchestra」を「AI Contents Labo」にリニューアル",
              },
              {
                year: "2024",
                title: "講師活動拡大",
                description: "自治体主催セミナー、法人研修、親子AIワークショップなど様々な分野で講師を務める",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-2xl font-bold text-primary">{item.year}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%95%E3%82%9A%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB-K6tYM60NLUJ1NfeveKv9rfzw33gSAp.jpg"
                  alt="こんとも（勝沼　知世）"
                  className="rounded-2xl w-full max-w-sm"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">代表プロフィール</h2>
                <div className="space-y-2 mb-4">
                  <p className="text-xl font-bold">こんとも（勝沼　知世）</p>
                  <p className="text-muted-foreground">合同会社NFTオーケストラ代表</p>
                  <p className="text-muted-foreground">AI Contents Labo運営</p>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  子育てをしながらフリーランスとして活動を開始。Web制作、デザイン、ライティングなど幅広い分野で経験を積む。
                  <br />
                  <br />
                  2022年、AIツールの可能性に気づき、教育活動を開始。法人・自治体向けのAI活用支援から、個人向けのAI講座まで、幅広く展開。
                  <br />
                  <br />
                  「AIは難しくない、楽しい」をモットーに、すべての人がAIを使いこなせる未来を目指す。
                </p>
                <div className="flex gap-4 pt-4">
                  <Button asChild variant="outline">
                    <Link href="/contact">お問い合わせ</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Company</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <div className="font-bold">会社名</div>
                <div className="col-span-2">合同会社NFTオーケストラ</div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <div className="font-bold">代表</div>
                <div className="col-span-2">こんとも（勝沼　知世）</div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <div className="font-bold">設立</div>
                <div className="col-span-2">2022年6月</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="font-bold">事業内容</div>
                <div className="col-span-2">
                  AI活用支援・教育事業
                  <br />
                  法人・自治体向けAIセミナー
                  <br />
                  個人向けAI講座・コミュニティ運営
                  <br />
                  AI Contents Labo運営
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">発信プラットフォーム</h2>
              <p className="text-lg text-muted-foreground">
                さまざまな媒体で、AI・働き方・クリエイティブの実践を発信しています。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* VibeCoding メルマガ */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">VibeCoding初心者向け動画解説つきメルマガ</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      ChatGPTとVibeCodingを学びながら、ステップ形式でAI活用を身につけるメルマガ。
                    </p>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <Link href="https://nmo1.com/p/r/DfDZJpzk" target="_blank" rel="noopener noreferrer">
                        → 登録する
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* ACL Discord */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">ACL Discord（無料チャンネル）</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      無料で参加できるAIコンテンツラボの交流スペース。週1回の無料講座を開催中。
                    </p>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <Link href="https://discord.gg/nmo" target="_blank" rel="noopener noreferrer">
                        → 参加する
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* X (Twitter) */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Twitter className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">X（旧Twitter）</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      日々の実験・気づき・制作過程をリアルタイムで発信しています。
                    </p>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <Link href="https://twitter.com/kon39000" target="_blank" rel="noopener noreferrer">
                        → 見てみる
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* YouTube */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Youtube className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">YouTube</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      AI講座やイベントのアーカイブ、使い方解説を配信中。
                    </p>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <Link href="https://www.youtube.com/@nsc-nmo" target="_blank" rel="noopener noreferrer">
                        → 見てみる
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Udemy */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Udemy</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      初心者でも実践できるAI活用講座を15本以上公開中。
                    </p>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <Link href="https://www.udemy.com/user/kon-101/" target="_blank" rel="noopener noreferrer">
                        → 見てみる
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* note */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">note</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      日々の気づきや実践記録、裏側を綴るブログ的発信。
                    </p>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <Link href="https://note.com/kon39000" target="_blank" rel="noopener noreferrer">
                        → 見てみる
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* stand.fm */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Radio className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">stand.fm</h3>
                    <p className="text-sm text-muted-foreground mb-4">日常の出来事や思考の整理を気軽に話す音声配信。</p>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <Link
                        href="https://stand.fm/channels/5fd9a8143147b7f1382167e2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        → 聴いてみる
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Voicy */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Voicy</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      フリーランスママのリアルを語るトーク番組「AIで家計を支えるラジオ」。
                    </p>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <Link href="https://voicy.jp/channel/821951" target="_blank" rel="noopener noreferrer">
                        → 聴いてみる
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Spotify */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Music className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Spotify</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      ビデオポッドキャスト版「18の時に聞きたかったハナシ。」を配信中。
                    </p>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <Link
                        href="https://open.spotify.com/show/2HKE3Dth7Vsro6s89AGwXt?si=8e90c1048eff4631"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        → 聴いてみる
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              どのプラットフォームからでも、AIを使って自分らしく働くヒントをお届けしています。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
