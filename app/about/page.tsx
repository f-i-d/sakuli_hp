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
            className="memo"
          >
            株式会社SAKULIは、最先端の技術と革新的なアプローチで業界をリードする企業です。<br className="pc" />お客様と共に未来を創造するため、日々新たな挑戦を続けています。
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
                    <span className="font-semibold w-32">会社名</span>
                    <span className="ml-4">株式会社SAKULI</span>
                  </li>
                  <li>
                    <span className="font-semibold w-32">設　立</span>
                    <span className="ml-4">2025年2月</span>
                  </li>
                  <li>
                    <span className="font-semibold w-32">代表者</span>
                    <span className="ml-4">竹内 雅輝</span>
                  </li>
                  <li>
                    <span className="font-semibold w-32">事業内容</span>
                    <span className="business">⚫︎健康食品・サプリメント(ハードカプセル、茶葉パック等)のOEM・ODM製造<br />⚫︎製剤設計・商品企画支援<br />⚫︎充填・包装・物流まで一貫した製造サービス<br />⚫︎品質管理・品質保証体制の構築と運用</span>
                  </li>
                  <li>
                    <span className="font-semibold w-32">所在地</span>
                    <span className="ml-4">富山県富山市新屋165-1</span>
                  </li>
                  <li>
                    <span className="map">■ご来社の皆さまへ｜所在地に関するご案内<br />
                    当社 株式会社SAKULI（サクリ） は、
                    「〒930-0822 富山県富山市新屋166-1」にございますが、
                    Googleマップで検索すると正確な位置が表示されない場合がございます。
                    実際の所在地は、下記MAPの【ジニアス様】の敷地裏手、大通りから一本入った反対側になります。</span>
                    <span className="ml-4"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.7904839329854!2d137.2519125!3d36.7275928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff799ddb959807f%3A0x29191fb87c2448b1!2z44K444OL44Ki44K5!5e0!3m2!1sja!2sjp!4v1750904652373!5m2!1sja!2sjp" width="100%" height="350" loading="lazy"></iframe></span>
                    <span className="map"><br />【目印】「ジニアス」さんの敷地の裏手
                    大通り（国道41号）側ではなく、一つ奥の道路沿い
                    敷地入口は「こころみ」と同じ敷地内の向かい側が「SAKULI」になります。
                    お越しの際は、ナビで「山口アルク 資材置場」と検索していただくとスムーズです。</span>
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
                ⬛︎ 企業理念<br />
                「私たちは、確かな技術と徹底した品質管理で、人々の健康を支える製品づくりを追求し、社会の安心と豊かさに貢献します。」<br /><br />
                ⬛︎ ビジョン<br />
                「革新的なものづくりを通じて、お客様のビジネスに新たな価値を提供します。私たちは、グローバル市場を見据えた高付加価値製品を供給し、
                社会課題の解決と持続可能な未来の創造に挑戦し続けます。」
                </p>
                <p className="interview"><br /><br />
                      <span className="bold">「SAKULI（サクリ）」 という名前には、
                      未来に花開くサプリメントの可能性と、人々の健康を支える使命が込められています。</span><br />
                      「SAKURA（桜）」の**「咲く」** という言葉と、
                      「SUPPLEMENT（サプリメント）」を掛け合わせたこの造語は、
                      「健康と美しさが満開に花開く未来を創る」 という願いを表現しています。<br /><br />
                      <span className="bold">「花開く」という想い</span><br />
                      私たちは、ただのサプリメントメーカーではなく、「健康という大地に、未来の幸福を咲かせる企業」 でありたいと考えています。
                      一粒一粒に込められた成分が、人々の毎日を彩り、やがて大きな花を咲かせるように、健康と幸福を届けることが私たちの使命です。
                      「未来に根を張るサプリメント」「今、健康を整えることが、未来の自分を創る。」
                      そんな考えのもと、私たちは最新の科学と自然の力を融合し、次世代のサプリメントを生み出します。
                      「SAKULI」が象徴するのは、単なる栄養補助ではなく、人々の人生そのものを豊かにする、未来に根付くサプリメントです。<br /><br />
                      株式会社SAKULI　代表取締役社長　竹内 雅輝
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
} 