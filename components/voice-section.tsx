import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "田中様",
    role: "製造業・経営者",
    comment:
      "AI研修を受けて、社内の業務効率が大幅に改善しました。従業員のAIへの抵抗感もなくなり、積極的に活用しています。",
    image: "/professional-business-person.png",
  },
  {
    name: "佐藤様",
    role: "フリーランスデザイナー",
    comment:
      "AI講座を受講してから、制作スピードが2倍になりました。クリエイティブな時間が増えて、仕事が楽しくなりました。",
    image: "/creative-designer-portrait.png",
  },
  {
    name: "鈴木様",
    role: "自治体職員",
    comment: "AIの導入により、住民サービスの質が向上しました。丁寧なサポートで、スムーズに導入できました。",
    image: "/government-official-portrait.png",
  },
]

export function VoiceSection() {
  return (
    <section id="voice" className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: "rgba(168, 230, 207, 0.09)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">VOICE</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">参加者の声</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-rotate-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 space-y-4">
                <Quote className="w-10 h-10 text-primary/30" />
                <p className="text-sm sm:text-base leading-relaxed text-foreground">{testimonial.comment}</p>
                <div className="flex items-center gap-4 pt-4 border-t">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
