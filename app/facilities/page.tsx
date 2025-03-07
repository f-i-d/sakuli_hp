"use client"

import { useState } from "react"
import Image from "next/image"
import "../globals.css"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Maximize2, Minimize2 } from "lucide-react"

type Facility = {
  name: string
  description: string
  specs: string[]
  image: string
}

const facilities: Facility[] = [
  {
    name: "全自動カプセル充填機",
    description:
      "高性能なリキッドドリンク真空ポンプとリサイクル水タンクを採用したカプセル充填機。1分間に最大約830カプセルの生産が可能で、安定した品質を実現します。",
    specs: [
      "生産能力 : 最大20万カプセル/日",
      "適用カプセルサイズ : 1号カプセル対応",
      "真空ポンプ仕様 : 真空度 -0.02～-0.06MPa、流量 250L/h",
    ],
    image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/philosophy1.jpeg",
  },
  {
    name: "V型攪拌機",
    description:
      "粉末や顆粒の均一な混合を実現するV型攪拌機。効率的なブレンドにより、安定した品質を提供します。",
    specs: [
      "ボリューム : 0.15㎡",
      "容量 : 10〜35kg/h",
      "混合時間 : 3〜10分",
      "回転速度 : 13rpm",
      "ブレンド速度 : 280rpm",
    ],
    image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/philosophy2.jpeg",
  },
  {
    name: "包装ライン",
    description:
      "多様な包装形態に対応する半自動充填設備により、パウチ袋、瓶、ボトル対応など、幅広いニーズに応えます。",
    specs: [
      "賞味期限・LOT NO.印字機(インクジェットプリンター)",
      "・漢字、英字（大文字・小文字、記号)",
      "・連続ﾌﾟﾘﾝﾄ回数 : 範囲1-9999回",
      "・連続印刷の感覚 : 0-50000（6mm)",
      "・インクジェット数 : 1-10ドット",
      "・印字速度 : 範囲100-50000（回/秒)",
      "・フォントサイズ : 2-12,7mm/2-25.4mm",
      "・印刷内容 : 中国語・英語、QRコード、バーコード、シリアルナンバー、ロゴ、日付",
      "・速乾インク：黒",
      "・印刷制度 : 600dpi",
      "計数充填機（枚葉式計数機)",
      "・計数範囲 : 1-500PCS/ボトル",
      "・#0-3 最大120錠/回",
      "・計数盤 : 30,45/60粒×2セット",
      "ヒートシール機（プリントシーラー）",
      "・シール速度 : 0-13m/min（可変）",
      "・シール : 13mm",
    ],
    image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/philosophy4.jpeg",
  },
  {
    name: "全自動カプセル検査設備",
    description: "最新のAI技術を搭載した高速カプセル検査機。1時間に最大80,000カプセルの外観検査が可能で、４台のカメラで高精度な検査が可能です。",
    specs: [
      "全自動カプセル検査機",
      "・白黒内部検査：１台",
      "・カプセル長検査：１台",
      "・内部ドーム検査：１台",
      "・外側ドーム検査：１台",
      "コンベアローラー ローラーI : #00,#0,#1",
      "キャパシティ : ６万～８万粒/h",
    ],
    image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/philosophy5.jpeg",
  },
  {
    name: "ティーバッグ包装機",
    description: "高精度な超音波シール・カット方式を採用したティーバッグ包装機。さまざまなサイズの包材に対応し、安定した品質での生産を実現します。",
    specs: [
       "ティーバッグ包装機（超音波シール・カット方式）",
       "・包材料巾 140mm巾 160mm巾 180mm巾",
       "・角コーン : 50-80mm（片側）",
       "・フラットバッグ : 60-90(W)*40",
       "・生産能力 : 30-60袋/分",
       "・ラベル検出 : 光電露出センサー",
       "・計量ホッパー : ４種混合可",
      ],
    image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/philosophy6.jpeg",
  },
]

export default function Facilities() {
  const [expandedFacility, setExpandedFacility] = useState<string | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleExpand = (name: string) => {
    setExpandedFacility(expandedFacility === name ? null : name)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/fv3.png"
          alt="SAKULI - アイデアをカタチに"
          fill
          className="object-cover transform scale-105 animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in-up leading-tight">
          最先端の<br className="sp" />製造設備
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow animate-fade-in-up opacity-90" style={{ animationDelay: "0.2s" }}>
          SAKULIは、最新のテクノロジーを駆使した製造設備を備え、 高品質な製品を効率的に生産します。私たちの設備が、
          お客様の製品を次のレベルへと引き上げます。
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={toggleFullscreen}
                      className="absolute top-2 right-2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300"
                      aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                    >
                      {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                    </button>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-2xl font-bold mb-4 text-primary-700">{facility.name}</h2>
                    <p className="text-gray-600 mb-4">{facility.description}</p>
                    <button
                      onClick={() => toggleExpand(facility.name)}
                      className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300"
                    >
                      {expandedFacility === facility.name ? "詳細を閉じる" : "詳細を見る"}
                      <ChevronDown
                        className={`ml-2 transition-transform duration-300 ${
                          expandedFacility === facility.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedFacility === facility.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-lg font-semibold mt-4 mb-2">主な仕様:</h3>
                          <ul className="list-disc pl-5 text-gray-600">
                            {facility.specs.map((spec, index) => (
                              <li key={index} className="mb-1">
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
            {/* CTA Section - 新規追加 */}
            <section className="py-24 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
            SAKULIの製造力を体験しませんか？
            </h2>
            <p className="text-xl mb-12 opacity-90">
            最先端の設備と熟練のスタッフが、あなたの製品を最高品質で製造します。
            お問い合わせいただければ、詳細な情報と個別のご提案をさせていただきます。
            </p>
            <motion.a
            href="/contact"
            className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-full text-lg hover:bg-primary-100 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            お問い合わせはこちら
          </motion.a>
          </div>
        </div>
      </section>

    </div>
  )
}

