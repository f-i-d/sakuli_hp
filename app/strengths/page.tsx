"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, CheckCircle, Zap, Cog, Users, TrendingUp, Shield } from "lucide-react"

export default function Strengths() {
  const [activeTab, setActiveTab] = useState(0)

  const strengths = [
    {
      title: "一貫した製造プロセス",
      description: "原料調達から最終製品化まで、すべての工程を自社で管理。品質と効率を最大化します。",
      icon: Cog,
      image: "/strength-manufacturing.jpg",
    },
    {
      title: "最先端の品質管理",
      description: "AI搭載の検査システムと熟練の目による二重チェック体制で、最高品質を保証します。",
      icon: Shield,
      image: "/strength-quality.jpg",
    },
    {
      title: "柔軟な生産体制",
      description: "小ロットから大量生産まで、お客様のニーズに合わせた生産体制を整えています。",
      icon: Zap,
      image: "/strength-flexibility.jpg",
    },
    {
      title: "エキスパートチーム",
      description: "経験豊富な専門家チームが、製品開発から販売戦略までトータルサポートします。",
      icon: Users,
      image: "/strength-team.jpg",
    },
    {
      title: "持続可能な取り組み",
      description: "環境に配慮した製造プロセスと、地域社会への貢献を重視しています。",
      icon: TrendingUp,
      image: "/strength-sustainability.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-24 px-6">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            私たちの強み
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SAKULIは、革新的な技術と豊富な経験を組み合わせ、お客様のビジョンを現実のものとします。
            私たちの強みが、あなたのビジネスの成功を支えます。
          </motion.p>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="bg-white rounded-xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={strengths[activeTab].image || "/placeholder.svg"}
                  alt={strengths[activeTab].title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            </div>
            <div>
              <motion.h2
                className="text-3xl font-bold mb-6 text-primary-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                SAKULIの5つの強み
              </motion.h2>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeTab === index ? "bg-primary-100 shadow-md" : "bg-white hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveTab(index)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <strength.icon
                        className={`w-6 h-6 mr-3 ${activeTab === index ? "text-primary-600" : "text-gray-400"}`}
                      />
                      <h3
                        className={`text-lg font-semibold ${activeTab === index ? "text-primary-800" : "text-gray-700"}`}
                      >
                        {strength.title}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 ml-auto transition-transform duration-300 ${activeTab === index ? "rotate-180 text-primary-600" : "text-gray-400"}`}
                      />
                    </div>
                    {activeTab === index && (
                      <motion.p
                        className="mt-2 text-gray-600"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {strength.description}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-primary-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SAKULIを選ぶメリット
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "時間とコストの削減",
                description: "一貫した製造プロセスにより、製品化までの時間とコストを大幅に削減できます。",
              },
              { title: "品質の安定性", description: "厳格な品質管理システムにより、常に高品質な製品を提供します。" },
              {
                title: "カスタマイズの自由度",
                description: "お客様のニーズに合わせて、製品仕様や生産量を柔軟に調整します。",
              },
              {
                title: "専門知識の活用",
                description: "豊富な経験を持つ専門家チームが、製品開発から販売戦略までサポートします。",
              },
              {
                title: "リスク軽減",
                description: "製造に関するリスクを当社が管理することで、お客様のリスクを軽減します。",
              },
              {
                title: "ブランド価値の向上",
                description: "高品質な製品と持続可能な取り組みにより、お客様のブランド価値向上に貢献します。",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary-700">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
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
            SAKULIの強みを活かしませんか？
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            製品開発から製造、販売サポートまで。SAKULIがあなたのビジネスの成功をトータルでサポートします。
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

