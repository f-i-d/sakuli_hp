import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "株式会社SAKULI - トータルサポートで実現する製品開発",
  description: "商品企画から最終製品化まで、トータルでサポートする製造パートナー",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'