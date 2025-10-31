export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Portrait Image */}
            <div className="lg:col-span-2 animate-fade-in">
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%95%E3%82%9A%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB-K6tYM60NLUJ1NfeveKv9rfzw33gSAp.jpg"
                  alt="こんとも（勝沼　知世）"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-3 space-y-8 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-serif font-medium">代表メッセージ</h2>
              <div className="space-y-6 text-base leading-relaxed text-foreground/80">
                <p>
                  AIを使って、働き方と暮らし方を変える。
                  <br />
                  教育現場から企業まで、AIの&apos;楽しさ&apos;を伝えています。
                </p>
                <p>
                  テクノロジーは難しいものではなく、誰もが使える道具です。AIを通じて、一人ひとりの可能性を広げ、より自由で創造的な社会を実現したいと考えています。
                </p>
                <div className="pt-6 space-y-2 border-t border-border">
                  <p className="font-medium text-foreground">こんとも（勝沼　知世）</p>
                  <p className="text-sm text-muted-foreground">合同会社NFTオーケストラ代表</p>
                  <p className="text-sm text-muted-foreground">AI Contents Labo運営</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
