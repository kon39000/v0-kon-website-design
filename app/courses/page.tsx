import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, Check } from "lucide-react"
import Image from "next/image"

type Course = {
  id: number
  title: string
  rating: number
  price: number
  description: string
  link: string
  thumbnail: string
  originalPrice?: number
  ratingCount?: number
  badge?: string
  hours?: string
  lectures?: string
  level?: string
}

const courses: Course[] = [
  {
    id: 1,
    title: "もう悩まない！ChatGPTでSNS＆ブログのアイデア出しから記事作成までを時短で実現",
    rating: 4.3,
    price: 14800,
    description: "SNSやブログ運営を効率化したい人／ネタ切れを防ぎたい発信者／ChatGPTでマーケティングを学びたい初心者",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy1-1YMA37lI3wn2EYjNHT4nhrsvySg71L.png",
    ratingCount: 14,
    hours: "合計 2.5時間",
    lectures: "41本",
    level: "初級",
  },
  {
    id: 2,
    title: "初心者でもできる！ChatGPTでゼロからはじめるKindle出版",
    rating: 4.2,
    price: 9800,
    description: "電子書籍出版に挑戦したい人／ChatGPTで文章構成を学びたい人／在宅で収益化を目指す副業初心者",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy2-R9ebZtOzKGvk6UEyqoNQ9WE8J1TSSG.png",
    ratingCount: 334,
    badge: "ベストセラー",
    hours: "合計 3時間",
    lectures: "40本",
    level: "初級",
  },
  {
    id: 3,
    title: "ChatGPT×note活用術！SEOで目立つ記事を効率的に作る講座",
    rating: 4.5,
    price: 9800,
    description: "noteで発信力を高めたい人／SEOを学びたいライター・ブロガー／ChatGPTで記事構成を最適化したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy3-sTb3CaC5g0ZHt6zXwUJ12dB6pmUg0U.png",
    ratingCount: 44,
    hours: "合計 3時間",
    lectures: "30本",
    level: "初級",
    hours: "合計 2時間",
    lectures: "32本",
    level: "すべてのレベル",
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
    hours: "合計 1.5時間",
    lectures: "22本",
    level: "初級",
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
    hours: "合計 2.5時間",
    lectures: "48本",
    level: "すべてのレベル",
  },
  {
    id: 6,
    title: "ChatGPTで始める画像生成デザイン",
    rating: 3.9,
    price: 15800,
    description: "デザイン未経験の方／SNS画像やバナーを自作したい人／ChatGPTやAI画像生成に興味がある人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy6-GYUbAYDR7C2TMmbZQ90kgxRucOgJ8c.png",
    hours: "合計 3時間",
    lectures: "52本",
    level: "すべてのレベル",
  },
  {
    id: 7,
    title: "AI時代のセルフブランディング戦略講座｜強みを言語化し、発信と商品を設計する",
    rating: 4.9,
    price: 15800,
    description: "フリーランスや個人事業主／自分の強みを明確にしたい人／SNS発信を仕事につなげたい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy7-BkCEVw3uTThXDG4ZYr9h4GmK9vUqdg.webp",
    hours: "合計 2時間",
    lectures: "31本",
    level: "すべてのレベル",
  },
  {
    id: 8,
    title: "【2025最新版】Canva AI×SUZURI完全実践｜ゼロから初売上をつくるPOD副業講座",
    rating: 3.5,
    price: 19800,
    description: "デザイン販売を始めたい人／在庫ゼロの副業に興味がある人／Canvaを使って商品化したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy8-PszFco1DCpr0iGNDyzF87fUyJQZ6Je.png",
    hours: "合計 1.5時間",
    lectures: "22本",
    level: "初級",
  },
  {
    id: 9,
    title: "今日から作れる！無料AIツールだけでつくるバイブコーディング超入門",
    rating: 4.4,
    price: 2600,
    description: "費用をかけずにAIを試したい人／ChatGPT以外の無料AIツールに触れたい人／実践的に学びたい初心者",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/udemy9-rJPdaPHxJsVFNz272B5iYMXx0EaGCl.png",
    hours: "合計 1時間",
    lectures: "15本",
    level: "すべてのレベル",
  },
  {
    id: 10,
    title: "WhisperとChatGPTでできる！音声入力×AIで記事作成入門講座",
    rating: 4.8,
    price: 2600,
    description: "音声入力を活用したい人／タイピングが苦手な人／ChatGPTで文章生成を自動化したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy10-o5pSec0rFHfRlHS8jH0g0lAAqKq9yP.png",
    hours: "合計 3.5時間",
    lectures: "28本",
    level: "すべてのレベル",
  },
  {
    id: 11,
    title: "はじめての生成AIリスク対策｜生成AI導入のセキュリティ対策と企業リスク管理",
    rating: 4.5,
    price: 15800,
    description: "企業でAIを導入する担当者／情報管理やコンプライアンス担当／AIリスクを体系的に理解したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy11-2lIVi3hah7jGVN4Ph6upyl3CW9Tq3Y.png",
    hours: "合計 2.5時間",
    lectures: "27本",
    level: "すべてのレベル",
  },
  {
    id: 12,
    title: "AIで学びを習慣化！スマホでできる無料リサーチ＆学習術",
    rating: 3.3,
    price: 15800,
    description: "学びを継続したい社会人／AIを活用した情報収集に興味がある人／スマホ中心でスキマ学習したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy12-X1PrgDTlLyPvhposaMdOfGlR90CQpZ.png",
    hours: "合計 2時間",
    lectures: "17本",
    level: "すべてのレベル",
  },
  {
    id: 13,
    title: "Photoshopいらず！NanoBananaで写真合成＆デザイン素材を作ろう",
    rating: 3.1,
    price: 15800,
    description: "デザイン初心者／Photoshopを持っていない人／SNSや広告向けの画像素材を作りたい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy13-KDBw8EtxLhe9zEdwAVtPeABmeIPjNg.webp",
    hours: "合計 2時間",
    lectures: "17本",
    level: "すべてのレベル",
  },
  {
    id: 14,
    title: "Sora2入門｜話題のAI動画生成を体験！無料で試す次世代SNS時代の第一歩",
    rating: 4.4,
    price: 2600,
    description: "動画AIに興味がある人／Soraや生成動画を試してみたい人／SNSで映像表現を強化したい人",
    link: "https://www.udemy.com/user/kon-101/",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udemy14-pCXiJYiy7zBvTogE2lGZFWmz3Kk4mq.png",
    hours: "合計 3時間",
    lectures: "47本",
    level: "すべてのレベル",
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
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-24 pb-12 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Udemy講座一覧</h1>
            <p className="text-base md:text-lg text-muted-foreground">AIを活用して、学び・発信・仕事を変える実践講座</p>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            各講座はUdemyで受講できます。価格・割引はUdemy側の表示に準じます。
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function CourseCard({ course }: { course: Course }) {
  const filledStars = Math.floor(course.rating ?? 0)
  const points = (course.description || "")
    .split("／")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4)

  return (
    <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-all">
      <div className="relative aspect-[16/9] bg-black">
        {course.badge && (
          <div className="absolute left-3 top-3 z-10 text-xs font-semibold bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full shadow">
            {course.badge}
          </div>
        )}
        <Image
          src={course.thumbnail || "/placeholder.jpg"}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="p-5 md:p-6">
        <div
          className="mb-2 text-lg font-bold"
          style={{ display: "-webkit-box", WebkitLineClamp: 2 as any, WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {course.title}
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <img src="/placeholder-user.jpg" alt="instructor" className="w-6 h-6 rounded-full object-cover" />
          <span>AI Contents Labo</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < filledStars ? "text-accent fill-current" : "text-muted-foreground/40"}`} />
            ))}
          </div>
          <span className="text-sm font-semibold">{course.rating.toFixed(1)}</span>
          {course.ratingCount ? <span className="text-xs text-muted-foreground">({course.ratingCount}件)</span> : null}
        </div>

        <div className="grid grid-cols-3 gap-3 text-xs text-muted-foreground mb-4">
          <div>
            <div className="text-muted-foreground">学習時間</div>
            <div className="mt-0.5">{course.hours ?? "—"}</div>
          </div>
          <div>
            <div className="text-muted-foreground">レクチャー数</div>
            <div className="mt-0.5">{course.lectures ?? "—"}</div>
          </div>
          <div>
            <div className="text-muted-foreground">レベル</div>
            <div className="mt-0.5">{course.level ?? "—"}</div>
          </div>
        </div>

        {points.length > 0 && (
          <ul className="space-y-2 mb-5">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t border-border pt-4">
          <div className="flex items-end gap-3 mb-4">
            {course.originalPrice ? (
              <>
                <div className="text-sm text-muted-foreground line-through">¥{course.originalPrice.toLocaleString()}</div>
                <div className="text-2xl font-extrabold">¥{course.price.toLocaleString()}</div>
              </>
            ) : (
              <div className="text-2xl font-extrabold">¥{course.price.toLocaleString()}</div>
            )}
          </div>
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-primary text-primary-foreground font-bold rounded-lg py-3 hover:bg-primary/90 transition"
          >
            セール価格で申し込む
          </a>
        </div>
      </div>
    </div>
  )
}
