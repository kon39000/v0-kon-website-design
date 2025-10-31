import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
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
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Journey</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: "2015", title: "子育て期", description: "育児をしながらフリーランスとしてのキャリアをスタート" },
              { year: "2018", title: "フリーランス", description: "Web制作・デザイン・ライティングなど幅広く活動" },
              { year: "2022", title: "AI教育者", description: "AIツールの可能性に気づき、教育活動を開始" },
              { year: "2024", title: "法人設立", description: "NFT Orchestra LLC設立、KONTOMOブランドを立ち上げ" },
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
                <div className="font-bold">所在地</div>
                <div className="col-span-2">東京都</div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <div className="font-bold">設立</div>
                <div className="col-span-2">2024年</div>
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

      <Footer />
    </main>
  )
}
