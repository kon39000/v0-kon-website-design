import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const works = [
  {
    title: "ChatGPT初心者向けセミナー（自治体）",
    description: "地方自治体向けにChatGPTの基礎から実践的な活用方法まで丁寧に指導。参加者の満足度95%以上を達成。",
    image: "/work-chatgpt-seminar-jp.jpg",
  },
  {
    title: "企業向けAI活用研修",
    description: "大手企業から中小企業まで、業種に合わせたAI活用研修を実施。業務効率化と生産性向上を実現。",
    image: "/work-corporate-training-jp.jpg",
  },
  {
    title: "AI活用オンライン講座",
    description: "Udemyなどのプラットフォームで展開するオンライン講座。受講者1,000名以上、高評価多数。",
    image: "/work-online-course-jp.jpg",
  },
  {
    title: "オンラインコミュニティ運営",
    description: "クリエイター向けオンラインコミュニティを運営。メンバー同士の学び合いと創作活動を支援。",
    image: "/work-content-lab-jp.jpg",
  },
  {
    title: "親子AIワークショップ開催",
    description: "子どもから大人まで楽しく学べるAIワークショップを定期開催。家族で学ぶAIの魅力を提供。",
    image: "/work-family-workshop-jp.jpg",
  },
  {
    title: "AIアートコンテスト開催",
    description: "AI生成アートのコンテストを企画・運営。クリエイターの創造性を引き出す場を提供。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%AC%AC2%E5%9B%9EAI%E3%82%A2%E3%83%BC%E3%83%88%E3%82%B3%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88-rGOXoOCJBUolSUpAQxhixvWlzbc0ys.png",
  },
]

export function WorksSection() {
  return (
    <section id="works" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">PROJECTS</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">実績紹介</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {works.map((work, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">{work.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base leading-relaxed">{work.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
