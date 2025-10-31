import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Palette, ArrowRight } from "lucide-react"

export function ServiceSection() {
  return (
    <section id="service" className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: "rgba(168, 230, 207, 0.12)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Business Card */}
          <Link href="/business" className="group">
            <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 hover:border-primary overflow-hidden">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <Image
                  src="/business-service-japanese.jpg"
                  alt="法人・自治体向けAIサービス"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Building2 className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold">Business</CardTitle>
                <CardDescription className="text-base sm:text-lg">法人・自治体向けサービス</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li>• 業務効率化コンサルティング</li>
                  <li>• AI研修・講演</li>
                  <li>• 自治体プロジェクト支援</li>
                </ul>
                <div className="flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-4 transition-all">
                  詳しく見る
                  <ArrowRight className="w-5 h-5" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Creative Card */}
          <Link href="/creative" className="group">
            <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 hover:border-primary overflow-hidden">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <Image
                  src="/creative-service-japanese.jpg"
                  alt="個人・クリエイター向けAIサービス"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Palette className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold">Creative</CardTitle>
                <CardDescription className="text-base sm:text-lg">個人・クリエイター向けサービス</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li>• AI講座（Udemy）</li>
                  <li>• AIコンテンツラボ</li>
                  <li>• noteメンバーシップ</li>
                </ul>
                <div className="flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-4 transition-all">
                  詳しく見る
                  <ArrowRight className="w-5 h-5" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
