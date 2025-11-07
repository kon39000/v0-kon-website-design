import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
})

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-shippori-mincho",
})

export const metadata: Metadata = {
  title: 'KONTOMO | AIで"人の力"を支える',
  description: "静かな熱量で、AIと人の共創を支援します。",
  generator: "v0.app",
  openGraph: {
    title: 'KONTOMO | AIで"人の力"を支える',
    description: "静かな熱量で、AIと人の共創を支援します。",
    type: "website",
    siteName: "KONTOMO",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KONTOMO | AIで\"人の力\"を支える",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'KONTOMO | AIで"人の力"を支える',
    description: "静かな熱量で、AIと人の共創を支援します。",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${shipporiMincho.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
