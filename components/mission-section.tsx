import { Sparkles, Users } from "lucide-react"

export function MissionSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance animate-fade-up">
            AIで未来をデザインする
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-8">
            <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                AIを怖がるより、楽しもう。AIは新しい学びと創造を支える道具です。
              </p>
            </div>

            <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                仕事も暮らしも、自分らしく。AIを通して&apos;できる&apos;を増やす社会を目指しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
