import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export function DownloadCTASection() {
  return (
    <section id="download" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">サービス資料ダウンロード</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            KONTOMOのサービス内容や導入事例をまとめた資料をご用意しています。
            <br />
            ぜひダウンロードしてご覧ください。
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-base sm:text-lg px-8 py-6 gap-2">
            <FileDown className="w-5 h-5" />
            資料をダウンロード
          </Button>
        </div>
      </div>
    </section>
  )
}
