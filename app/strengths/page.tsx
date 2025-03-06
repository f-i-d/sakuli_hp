"use client"
import "../globals.css"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, CheckCircle, Zap, Cog, Users, TrendingUp, Shield } from "lucide-react"

export default function Strengths() {
  const [activeTab, setActiveTab] = useState(0)

  const strengths = [
    {
      title: "健康の「種」をまき、未来に「花」を咲かせる",
      description: "私たちは、サプリメントを単なる健康補助食品ではなく、「未来の自分をつくるための種」 と考えています。一人ひとりが健康で輝く未来を手に入れられるよう、最高品質の製品をお届けします。",
      icon: Cog,
      image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/philosophy2-1.jpg",
    },
    {
      title: "科学と自然の調和で、革新を生み出す",
      description: "伝統的な自然由来の知恵と、最先端の科学技術を融合させ、新たな可能性を切り開きます。私たちは常に研究を重ね、「本当に良いものだけ」を提供し続けます。",
      icon: Zap,
      image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/philosophy2-2.jpg",
    },
    {
      title: "安全・信頼・誠実なものづくり",
      description: "お客様の健康を支える企業として、透明性のある製品開発 を徹底し、信頼されるブランドを築きます。品質管理はもちろん、成分の安全性、効果の裏付けを明確にし、誠実なものづくりを行います。",
      icon: Users,
      image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/philosophy2-3.jpg",
    },
    {
      title: "環境と社会にやさしい企業であり続ける",
      description: "健康だけでなく、地球環境にも配慮したサプリメントを開発し、持続可能な社会に貢献します。パッケージのエコ素材使用、環境保護活動への参加など、企業としての社会的責任を果たします。",
      icon: Shield,
      image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/philosophy2-4.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/fv4.png"
          alt="SAKULI - アイデアをカタチに"
          fill
          className="object-cover transform scale-105 animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in-up leading-tight">
          「未来を咲かせる、次世代サプリメント」</h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow animate-fade-in-up opacity-90" style={{ animationDelay: "0.2s" }}>健康とは人生の「土台」
          </p>
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
                className="text-3xl font-bold mb-6 text-primary-800 poricy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                企業理念
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
            className="text-3xl font-bold mb-12 text-center text-primary-800 poricy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SAKULIが目指すもの
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "科学 × 自然の融合",
                description: "最新の研究と天然素材を組み合わせ、効果のある製品を提供",
              },
              { title: "安全性と品質へのこだわり", description: "厳格な品質管理で、安心して続けられるサプリメントを追求" },
              {
                title: "持続可能な社会への貢献",
                description: "環境に配慮した製品開発と、サステナブルな企業運営",
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
                <h3 className="text-2xl font-semibold mb-4 text-primary-700">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center question poricy">よくあるご質問</h2>
          <div className="space-y-6">
            {[
              {
                q: "最小ロット数はありますか？",
                a: "はい、製品によって異なりますが、一般的に1000個からの受注が可能です。詳細はお問い合わせください。",
              },
              {
                q: "納期はどのくらいですか？",
                a: "標準的な製品で約4〜6週間です。ただし、製品の複雑さや数量によって変動する場合があります。",
              },
              {
                q: "サンプル製作は可能ですか？",
                a: "はい、可能です。サンプル製作にかかる費用と時間は、製品によって異なります。お気軽にご相談ください。",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg p-6 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <h3 className="text-lg font-semibold mb-2 question">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
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
            SAKULIの強みを活かしませんか？
            </h2>
            <p className="text-xl mb-12 opacity-90">
            製品開発から製造、販売サポートまで。SAKULIがあなたのビジネスの成功をトータルでサポートします。
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

