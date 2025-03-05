import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MotionH1, MotionP } from "@/components/ClientMotion"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "会社概要 - 株式会社SAKULI",
  description: "最高の品質と革新を追求する株式会社SAKULIの会社概要"
}

export default function About() {
  return (
    <>
      {/* Hero セクション - ヘッダー部分 */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/fv1.png"
          alt="SAKULI - アイデアをカタチに"
          fill
          className="object-cover transform scale-105 animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in-up leading-tight">
           会社概要
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow animate-fade-in-up opacity-90" style={{ animationDelay: "0.2s" }}>
           企業理念に基づく革新的な技術と品質を提供します。お客様と共に未来を創造するパートナーとして、常に最先端を追求します。
          </p>
        </div>
      </section>

      {/* 企業情報・企業理念＆ビジョンセクション */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-lg max-w-3xl mx-auto mb-12 text-gray-700"
          >
            株式会社SAKULIは、最先端の技術と革新的なアプローチで業界をリードする企業です。お客様と共に未来を創造するため、日々新たな挑戦を続けています。
          </MotionP>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 企業情報カード */}
            <Card className="bg-white shadow-lg rounded-lg p-6">
              <CardHeader className="border-b border-gray-200 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 title-c">
                  企業情報
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li>
                    <span className="font-semibold w-32">会社名 : </span>
                    <span className="ml-4">株式会社SAKULI</span>
                  </li>
                  <li>
                    <span className="font-semibold w-32">設　立 : </span>
                    <span className="ml-4">2025年2月</span>
                  </li>
                  <li>
                    <span className="font-semibold w-32">資本金 : </span>
                    <span className="ml-4">1億円</span>
                  </li>
                  <li>
                    <span className="font-semibold w-32">所在地 : </span>
                    <span className="ml-4">富山県富山市上飯野15</span>
                  </li>
                  <li>
                    <span className="font-semibold w-32">代表者 : </span>
                    <span className="ml-4">竹内 雅輝</span>
                  </li>
                  <li>
                    <span className="font-semibold w-32">事業内容 : </span>
                    <span className="ml-4">製品開発、品質管理、コンサルティング</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 企業理念＆ビジョンカード */}
            <Card className="bg-white shadow-lg rounded-lg p-6">
              <CardHeader className="border-b border-gray-200 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 title-c">
                  企業理念 &amp; ビジョン
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-gray-700 text-lg">
                <p>
                SAKULIは、北陸・富山を拠点にサプリメント製造・物流を展開し、
                月間500万円の粗利（年間1億2千万円）を目指す 企業です。<br /><br />

                事業拡大の目安として、自社工場建設やGMP認証取得 を視野に入れ、品質と信頼性の向上を図ります。
                健康食品市場は飽和傾向にあるものの、日本国内で1兆円規模の産業として成長の余地が十分にあります。<br /><br />

                オーガニック路線の導入や、クロスセル・アップセル戦略を活用し、
                新しい価値を提供することで市場競争を勝ち抜く ビジネスモデルを構築します。
                この事業は、「SAKULI」がサプリメント業界に革新をもたらし、持続的成長へ向かう第一歩です。
                </p>
              </CardContent>
            </Card>
          </div>

          {/* フッターメッセージ */}
          <div className="mt-12 text-center">
            <p className="memo interview">
            <i><span className="bold">「SAKULI（サクリ）」 という名前には、<br />
            未来に花開くサプリメントの可能性と、人々の健康を支える使命が込められています。</span><br /><br />

            「SAKURA（桜）」の**「咲く」** という言葉と、<br />
            「SUPPLEMENT（サプリメント）」を掛け合わせたこの造語は、<br />
            「健康と美しさが満開に花開く未来を創る」 という願いを表現しています。<br /><br />

            <span className="bold">「花開く」という想い</span><br />

            私たちは、ただのサプリメントメーカーではなく、<br />「健康という大地に、未来の幸福を咲かせる企業」 でありたいと考えています。<br />

            一粒一粒に込められた成分が、人々の毎日を彩り、やがて大きな花を咲かせるように<br />、健康と幸福を届けることが私たちの使命です。<br /><br />

            「未来に根を張るサプリメント」「今、健康を整えることが、未来の自分を創る。」<br />

            そんな考えのもと、私たちは最新の科学と自然の力を融合し、次世代のサプリメントを生み出します。<br />

            「SAKULI」が象徴するのは、単なる栄養補助ではなく、<br />人々の人生そのものを豊かにする、未来に根付くサプリメントです。</i><br /><br />

            株式会社SAKULI<br />代表取締役社長　竹内 雅輝
            </p>
          </div>
        </div>
      </section>
    </>
  )
} 