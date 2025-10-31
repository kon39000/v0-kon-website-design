import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { FileText, Download } from "lucide-react"

export default function DownloadPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="/download-hero-japanese.jpg" alt="Download Resources" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up text-white drop-shadow-lg">
            資料ダウンロード
          </h1>
          <p
            className="text-xl sm:text-2xl text-white max-w-3xl mx-auto animate-fade-up drop-shadow-lg"
            style={{ animationDelay: "0.1s" }}
          >
            AI活用に役立つ資料を無料でダウンロードいただけます
          </p>
        </div>
      </section>

      {/* Download Cards */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 法人向けAI導入資料 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">法人向けAI導入資料</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                法人・自治体向けのAI活用事例や導入ステップをまとめた資料です。
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">
                  <Download className="mr-2 w-4 h-4" />
                  資料を取得
                </Link>
              </Button>
            </Card>

            {/* ワークショップ事例集 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">ワークショップ事例集</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                親子AIワークショップの実施事例や参加者の声をまとめた資料です。
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">
                  <Download className="mr-2 w-4 h-4" />
                  資料を取得
                </Link>
              </Button>
            </Card>

            {/* メディア掲載PDF */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">メディア掲載PDF</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                各種メディアでの掲載記事や取材内容をまとめたPDFです。
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">
                  <Download className="mr-2 w-4 h-4" />
                  資料を取得
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">資料のご請求について</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              フォームにご記入いただくと、すぐに資料をダウンロードいただけます。
              <br />
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
