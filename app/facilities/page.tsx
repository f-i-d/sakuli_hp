"use client"

import { useState } from "react"
import Image from "next/image"
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
    name: "高速カプセル充填機",
    description:
      "最新のAI技術を搭載した高速カプセル充填機。1分間に最大1000カプセルの生産が可能で、99.9%の精度を誇ります。",
    specs: [
      "生産能力: 最大60,000カプセル/時",
      "適用カプセルサイズ: 00, 0, 1, 2, 3, 4",
      "AI画像認識による品質管理システム搭載",
      "自動洗浄システム内蔵",
    ],
    image: "/capsule-machine.jpg",
  },
  {
    name: "多機能ブレンダー",
    description:
      "粉末、顆粒、液体など多様な原料に対応する多機能ブレンダー。均一な混合を実現し、製品の品質を安定させます。",
    specs: [
      "容量: 100L〜5,000L",
      "混合方式: リボン型、パドル型、スクリュー型",
      "CIP（定置洗浄）システム搭載",
      "タッチパネル式操作インターフェース",
    ],
    image: "/blender.jpg",
  },
  {
    name: "クリーンルーム",
    description: "ISO Class 7（10,000）規格のクリーンルーム。厳格な衛生管理のもと、高品質な製品製造を可能にします。",
    specs: ["面積: 1,000㎡", "空気清浄度: ISO Class 7（10,000）", "HEPA フィルター搭載", "温湿度管理システム完備"],
    image: "/clean-room.jpg",
  },
  {
    name: "自動包装ライン",
    description:
      "多様な包装形態に対応する自動包装ライン。ブリスター包装、ボトル充填、ピロー包装など、幅広いニーズに応えます。",
    specs: [
      "処理速度: 最大300パック/分",
      "対応包装形態: ブリスター、ボトル、ピロー、スティック",
      "インライン重量チェッカー搭載",
      "日付印字システム内蔵",
    ],
    image: "/packaging-line.jpg",
  },
  {
    name: "品質管理ラボ",
    description: "最新の分析機器を備えた品質管理ラボ。原料から最終製品まで、徹底した品質チェックを行います。",
    specs: [
      "HPLC（高速液体クロマトグラフィー）",
      "GC-MS（ガスクロマトグラフ質量分析計）",
      "ICP-MS（誘導結合プラズマ質量分析計）",
      "微生物検査設備",
    ],
    image: "/quality-lab.jpg",
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
      <section className="bg-primary-600 text-white py-24 px-6">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            最先端の製造設備
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SAKULIは、最新のテクノロジーを駆使した製造設備を備え、 高品質な製品を効率的に生産します。私たちの設備が、
            お客様の製品を次のレベルへと引き上げます。
          </motion.p>
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

      {/* Virtual Tour Section */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8 text-primary-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            バーチャル工場見学
          </motion.h2>
          <motion.p
            className="text-xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            最新のVR技術を使用して、SAKULIの製造施設をバーチャルで体験できます。
            実際の製造プロセスを間近でご覧いただけます。
          </motion.p>
          <motion.a
            href="/virtual-tour"
            className="inline-flex items-center bg-primary-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-primary-700 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            バーチャルツアーを開始
            <ChevronRight className="ml-2" />
          </motion.a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary-600 text-white">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SAKULIの製造力を体験しませんか？
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            最先端の設備と熟練のスタッフが、あなたの製品を最高品質で製造します。
            お問い合わせいただければ、詳細な情報と個別のご提案をさせていただきます。
          </motion.p>
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
      </section>
    </div>
  )
}

