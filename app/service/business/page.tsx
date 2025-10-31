import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Presentation, TrendingUp, Building2, ArrowRight } from "lucide-react"

export default function BusinessPage() {
  const services = [
    {
      icon: Presentation,
      title: "AI研修・講演",
      description: "経営層から現場スタッフまで、レベルに応じたAI研修を提供。実践的な内容で、すぐに業務に活かせます。",
    },
    {
      icon: TrendingUp,
      title: "業務効率化コンサルティング",
      description:
        "現状分析から導入支援まで、一貫してサポート。AIツールの選定から運用まで、最適なソリューションを提案します。",
    },
    {
      icon: Building2,
      title: "自治体プロジェクト",
      description: "地方自治体のDX推進を支援。住民サービスの向上と業務効率化を両立させるAI活用を実現します。",
    },
  ]

  const process = [
    { step: "01", title: "相談", description: "現状の課題をヒアリング" },
    { step: "02", title: "企画", description: "最適なプランを提案" },
    { step: "03", title: "実施", description: "研修・導入サポート" },
    { step: "04", title: "振り返り", description: "効果測定とフォローアップ" },
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-[#A8E6CF]/20 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              法人・自治体向け
              <br />
              AI活用支援
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              AIで業務を効率化し、働くをもっと自由に。
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
                      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-secondary" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "rgba(168, 230, 207, 0.12)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">導入の流れ</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="text-center space-y-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary">{item.step}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">ご相談・お見積りはこちら</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              貴社の課題に合わせた最適なAI活用プランをご提案します。
              <br />
              まずはお気軽にご相談ください。
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7"
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
