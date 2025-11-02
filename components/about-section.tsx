import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/ai-contents-labo-team.jpg"
                  alt="AIコンテンツラボのチームメンバー"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-serif font-medium">AIコンテンツラボ</h2>
              <div className="space-y-6 text-base leading-relaxed text-foreground/80">
                <p>
                  オンラインで繋がり、共に学び、成長するコミュニティ。
                  <br />
                  AIを使ったコンテンツ制作を実践的に学べます。
                </p>
                <p>
                  初心者から上級者まで、あなたのペースで学べる環境を提供。週1回の無料講座や、メンバー同士の交流を通じて、AIスキルを着実に身につけることができます。
                </p>
                <div className="pt-6">
                  <a
                    href="https://ai-contents-labo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-[#A8E6CF] hover:bg-[#8FD9B6] text-slate-900 font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    AIコンテンツラボについて
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
