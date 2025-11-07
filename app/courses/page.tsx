import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, Star } from "lucide-react"
import Image from "next/image"

const courses = [
  {
    id: 1,
    title: "もう悩まない！ChatGPTでSNS＆ブログのアイデア出しから記事作成までを時短で実現",
    rating: 4.3,
    price: 14800,
    description: "SNSやブログ運営を効率化したい人／ネタ切れを防ぎたい発信者／ChatGPTでマーケティングを学びたい初心者",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy1-1YMA37lI3wn2EYjNHT4nhrsvySg71L.png",
  },
  {
    id: 2,
    title: "初心者でもできる！ChatGPTでゼロからはじめるKindle出版",
    rating: 4.2,
    price: 9800,
    description: "電子書籍出版に挑戦したい人／ChatGPTで文章構成を学びたい人／在宅で収益化を目指す副業初心者",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy2-R9ebZtOzKGvk6UEyqoNQ9WE8J1TSSG.png",
  },
  {
    id: 3,
    title: "ChatGPT×note活用術！SEOで目立つ記事を効率的に作る講座",
    rating: 4.5,
    price: 9800,
    description: "noteで発信力を高めたい人／SEOを学びたいライター・ブロガー／ChatGPTで記事構成を最適化したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy3-sTb3CaC5g0ZHt6zXwUJ12dB6pmUg0U.png",
  },
  {
    id: 4,
    title: "AI時代のスライド作成！Felo & Canvaで最速資料作成術",
    rating: 4.5,
    price: 15800,
    description:
      "プレゼン資料を短時間で作りたい人／CanvaやAIツールを業務で使いたい人／見やすいスライド構成を学びたい講師",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy4-zZUgXNBWbDqX1gSJJBOYPUV8texD44.png",
  },
  {
    id: 5,
    title: "スマホで簡単ビデオポッドキャスト入門",
    rating: 4.7,
    price: 15800,
    description:
      "スマホだけで動画配信を始めたい人／編集ツールが苦手な初心者／無料で発信力を身につけたい個人クリエイター",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy5-DafJ1ymmgM14wSb00YjeQ60ekiJTFW.png",
  },
  {
    id: 6,
    title: "ChatGPTで始める画像生成デザイン",
    rating: 3.9,
    price: 15800,
    description: "デザイン未経験の方／SNS画像やバナーを自作したい人／ChatGPTやAI画像生成に興味がある人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy6-GYUbAYDR7C2TMmbZQ90kgxRucOgJ8c.png",
  },
  {
    id: 7,
    title: "AI時代のセルフブランディング戦略講座｜強みを言語化し、発信と商品を設計する",
    rating: 4.9,
    price: 15800,
    description: "フリーランスや個人事業主／自分の強みを明確にしたい人／SNS発信を仕事につなげたい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy7-BkCEVw3uTThXDG4ZYr9h4GmK9vUqdg.webp",
  },
  {
    id: 8,
    title: "【2025最新版】Canva AI×SUZURI完全実践｜ゼロから初売上をつくるPOD副業講座",
    rating: 3.5,
    price: 19800,
    description: "デザイン販売を始めたい人／在庫ゼロの副業に興味がある人／Canvaを使って商品化したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy8-PszFco1DCpr0iGNDyzF87fUyJQZ6Je.png",
  },
  {
    id: 9,
    title: "今日から作れる！無料AIツールだけでつくるバイブコーディング超入門",
    rating: 4.4,
    price: 2600,
    description: "費用をかけずにAIを試したい人／ChatGPT以外の無料AIツールに触れたい人／実践的に学びたい初心者",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/udemy9-rJPdaPHxJsVFNz272B5iYMXx0EaGCl.png",
  },
  {
    id: 10,
    title: "WhisperとChatGPTでできる！音声入力×AIで記事作成入門講座",
    rating: 4.8,
    price: 2600,
    description: "音声入力を活用したい人／タイピングが苦手な人／ChatGPTで文章生成を自動化したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy10-o5pSec0rFHfRlHS8jH0g0lAAqKq9yP.png",
  },
  {
    id: 11,
    title: "はじめての生成AIリスク対策｜生成AI導入のセキュリティ対策と企業リスク管理",
    rating: 4.5,
    price: 15800,
    description: "企業でAIを導入する担当者／情報管理やコンプライアンス担当／AIリスクを体系的に理解したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy11-2lIVi3hah7jGVN4Ph6upyl3CW9Tq3Y.png",
  },
  {
    id: 12,
    title: "AIで学びを習慣化！スマホでできる無料リサーチ＆学習術",
    rating: 3.3,
    price: 15800,
    description: "学びを継続したい社会人／AIを活用した情報収集に興味がある人／スマホ中心でスキマ学習したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy12-X1PrgDTlLyPvhposaMdOfGlR90CQpZ.png",
  },
  {
    id: 13,
    title: "Photoshopいらず！NanoBananaで写真合成＆デザイン素材を作ろう",
    rating: 3.1,
    price: 15800,
    description: "デザイン初心者／Photoshopを持っていない人／SNSや広告向けの画像素材を作りたい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy13-KDBw8EtxLhe9zEdwAVtPeABmeIPjNg.webp",
  },
  {
    id: 14,
    title: "Sora2入門｜話題のAI動画生成を体験！無料で試す次世代SNS時代の第一歩",
    rating: 4.4,
    price: 2600,
    description: "動画AIに興味がある人／Soraや生成動画を試してみたい人／SNSで映像表現を強化したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy14-pCXiJYiy7zBvTogE2lGZFWmz3Kk4mq.png",
  },
  {
    id: 15,
    title: "AIが書いた文章を仕事で使える文章に変える技術",
    rating: 4.0,
    price: 7000,
    description: "ChatGPTの出力をそのまま使えない人／文章の「人間らしさ」を整えたい人／業務用ライティングを磨きたい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy15-8IgzvZAPtP83TqGVY1QbFU5dIUqVp2.webp",
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">Udemy講座一覧</h1>
            <p className="text-lg text-foreground/70 font-sans max-w-3xl mx-auto">
              AIを活用して、学び・発信・仕事を変える15の実践講座
            </p>
          </div>

          {/* Courses Table (aligned columns) */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-border bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground w-[160px]">サムネイル</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">評価</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">タイトル</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">おすすめの人</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">金額</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">リンク</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-t border-border">
                    <td className="px-4 py-3 align-top">
                      {course.thumbnail && (
                        <div className="relative w-[140px] h-[80px] bg-gray-100 rounded">
                          <Image
                            src={course.thumbnail || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover rounded"
                            sizes="140px"
                          />
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 align-top">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(course.rating) ? "fill-accent text-accent" : "text-border"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-foreground">{course.rating}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <div className="text-sm font-bold text-foreground">{course.title}</div>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <div className="text-sm text-foreground/70">{course.description}</div>
                    </td>
                    <td className="px-4 py-3 align-top whitespace-nowrap">
                      <span className="text-lg font-bold text-foreground">¥{course.price.toLocaleString()}</span>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group"
                      >
                        <span>→ Udemyで見る</span>
                        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center">
            <p className="text-sm text-foreground/60 font-sans">
              各講座はUdemyプラットフォームで受講可能です。セール期間中は特別価格で受講できます。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
