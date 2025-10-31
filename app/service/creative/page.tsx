import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { GraduationCap, Users, Lightbulb, ArrowRight } from "lucide-react"

export default function CreativePage() {
  const services = [
    {
      icon: GraduationCap,
      title: "Udemy講座",
      description: "AI画像生成、ChatGPT活用など、実践的なオンライン講座を多数開講。自分のペースで学べます。",
      link: "https://udemy.com",
    },
    {
      icon: Users,
      title: "AIコンテンツラボ",
      description: "クリエイター同士が学び合い、創作活動を支援するコミュニティ。定期的なワークショップも開催。",
      link: "#",
    },
    {
      icon: Lightbulb,
      title: "noteメンバーシップ",
      description: "最新のAI情報、活用事例、ノウハウを定期配信。メンバー限定のQ&Aも実施しています。",
      link: "https://note.com",
    },
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-[#FFB347]/20 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              個人・クリエイター向け
              <br />
              AI講座＆コミュニティ
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              AIを使って、創ることを楽しもう。
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">提供サービス</h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
                      >
                        詳しく見る
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "rgba(255, 179, 71, 0.12)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">学び × 実践 × 発信</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              AIの基礎から応用まで体系的に学び、実際に作品を制作。
              <br />
              コミュニティで共有することで、さらなる成長につながります。
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-primary">01</div>
                <h3 className="text-xl font-bold">学ぶ</h3>
                <p className="text-sm text-muted-foreground">オンライン講座で基礎を習得</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-accent">02</div>
                <h3 className="text-xl font-bold">実践する</h3>
                <p className="text-sm text-muted-foreground">実際に作品を制作</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-secondary">03</div>
                <h3 className="text-xl font-bold">発信する</h3>
                <p className="text-sm text-muted-foreground">コミュニティで共有</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">講座をみる</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              あなたの創造力を、AIで広げよう。
              <br />
              今すぐ学びを始めましょう。
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7"
            >
              <Link href="/contact">
                お問い合わせ
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
