import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MotionH1, MotionP } from "@/components/ClientMotion"

export const metadata = {
  title: "会社概要 - 株式会社SAKULI",
  description: "最高の品質と革新を追求する株式会社SAKULIの会社概要"
}

export default function About() {
  return (
    <>
      {/* Hero セクション - ヘッダー部分 */}
      <section className="bg-primary-600 text-white py-24 px-6">
        <div className="container mx-auto text-center">
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            会社概要aaaaa
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            企業理念に基づく革新的な技術と品質を提供します。お客様と共に未来を創造するパートナーとして、常に最先端を追求します。。。
          </MotionP>
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
                <CardTitle className="text-2xl font-bold text-gray-900">
                  企業情報
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex">
                    <span className="font-semibold w-32 text-right">会社名:</span>
                    <span className="ml-4">株式会社SAKULI</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32 text-right">設立:</span>
                    <span className="ml-4">2000年4月</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32 text-right">資本金:</span>
                    <span className="ml-4">1億円</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32 text-right">所在地:</span>
                    <span className="ml-4">東京都渋谷区〇〇町1-2-3</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32 text-right">代表者:</span>
                    <span className="ml-4">山田 太郎</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32 text-right">事業内容:</span>
                    <span className="ml-4">製品開発、品質管理、コンサルティング</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 企業理念＆ビジョンカード */}
            <Card className="bg-white shadow-lg rounded-lg p-6">
              <CardHeader className="border-b border-gray-200 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  企業理念 &amp; ビジョン
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-gray-700 text-lg">
                <p>
                  当社は「イノベーションで未来を切り拓く」という理念の下、
                  お客様の期待を超えるソリューションを提供しています。技術と情熱を融合し、
                  常に新たな価値の創造に挑戦しています。
                </p>
                <p>
                  今後も、グローバル展開を視野に入れた事業戦略と先進技術の融合により、
                  より高い成長を実現してまいります。
                </p>
              </CardContent>
            </Card>
          </div>

          {/* フッターメッセージ */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              ※ 上記の内容はサンプル情報です。
            </p>
          </div>
        </div>
      </section>
    </>
  )
} 