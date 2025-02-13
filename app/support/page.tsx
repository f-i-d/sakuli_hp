"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Mail, MessageCircle, FileText, ChevronDown, ChevronRight } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "製品の最小ロット数はいくつですか？",
    answer:
      "製品によって異なりますが、一般的に1,000個からの受注が可能です。ただし、カスタム製品の場合は、より大きなロット数が必要になる場合があります。詳細については、お問い合わせください。",
  },
  {
    question: "納期はどのくらいですか？",
    answer:
      "標準的な製品で約4〜6週間です。ただし、製品の複雑さや数量によって変動する場合があります。カスタム製品や大量注文の場合は、より長い納期が必要になることがあります。",
  },
  {
    question: "サンプル製作は可能ですか？",
    answer:
      "はい、可能です。サンプル製作にかかる費用と時間は、製品によって異なります。通常、少量のサンプル製作には2〜3週間かかります。サンプル製作のご要望は、お問い合わせフォームからご連絡ください。",
  },
  {
    question: "製品の品質保証はどのようになっていますか？",
    answer:
      "当社では、ISO 9001:2015認証の品質管理システムを導入しています。すべての製品は厳格な品質検査を経て出荷されます。また、製品に対して1年間の品質保証を提供しています。不良品が見つかった場合は、速やかに交換または返金対応いたします。",
  },
  {
    question: "海外への出荷は可能ですか？",
    answer:
      "はい、世界中への出荷が可能です。国際輸送の経験が豊富で、各国の規制に準拠した梱包・輸送を行います。ただし、輸送コストや通関手続きにより、納期が国内出荷より長くなる場合があります。",
  },
]

export default function Support() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
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
            サポート & カスタマーケア
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SAKULIは、お客様の成功を第一に考えます。 製品開発から製造、アフターサポートまで、
            専門チームが全力でサポートいたします。
          </motion.p>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-primary-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            充実のサポートサービス
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "技術サポート",
                description: "製品開発から製造まで、専門エンジニアがサポートします。",
                icon: FileText,
              },
              {
                title: "カスタマーサービス",
                description: "お問い合わせに迅速・丁寧に対応いたします。",
                icon: MessageCircle,
              },
              { title: "品質保証", description: "厳格な品質管理と1年間の製品保証を提供します。", icon: ChevronRight },
              { title: "アフターサポート", description: "製品納品後も継続的なサポートを提供します。", icon: Phone },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <service.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary-700">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-primary-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            よくあるご質問
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-primary-700">{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${expandedFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white px-4 pb-4 rounded-b-lg shadow-md"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-primary-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            お問い合わせ方法
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "電話", description: "0120-123-456", icon: Phone, link: "tel:0120123456" },
              { title: "メール", description: "support@sakuli.co.jp", icon: Mail, link: "mailto:support@sakuli.co.jp" },
              { title: "チャット", description: "オンラインチャット", icon: MessageCircle, link: "#chat" },
            ].map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <method.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary-700">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources Section */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-primary-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            サポートリソース
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "ユーザーマニュアル",
                description: "製品の詳細な使用方法をご覧いただけます。",
                link: "/manuals",
              },
              {
                title: "チュートリアル動画",
                description: "製品の使い方を動画で分かりやすく解説します。",
                link: "/tutorials",
              },
              {
                title: "トラブルシューティング",
                description: "一般的な問題の解決方法をご紹介します。",
                link: "/troubleshooting",
              },
              {
                title: "ナレッジベース",
                description: "よくある質問と回答のデータベースです。",
                link: "/knowledge-base",
              },
              {
                title: "サポートフォーラム",
                description: "ユーザー同士で情報交換ができるコミュニティです。",
                link: "/forum",
              },
              {
                title: "ソフトウェアアップデート",
                description: "最新のソフトウェアとファームウェアをダウンロードできます。",
                link: "/updates",
              },
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-primary-700">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link
                  href={resource.link}
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                >
                  詳細を見る
                  <ChevronRight className="ml-1" size={20} />
                </Link>
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
            お困りの点はございませんか？
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SAKULIの専門スタッフが、あなたの疑問やお困りの点に丁寧にお答えします。 お気軽にお問い合わせください。
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

