"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { ArrowRight, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

type FormData = {
  name: string
  email: string
  company: string
  message: string
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error("送信に失敗しました")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("お問い合わせの送信中にエラーが発生しました。後でもう一度お試しください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Header Section */}
      <section className="bg-primary-600 text-white py-24 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">お問い合わせ</h1>
          <p className="text-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            製品開発やOEM製造についてのご質問、ご相談をお待ちしております。
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-xl rounded-lg p-8 animate-fade-in-up">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  お名前 *
                </label>
                <input
                  {...register("name", { required: "お名前は必須です" })}
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="山田 太郎"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  メールアドレス *
                </label>
                <input
                  {...register("email", {
                    required: "メールアドレスは必須です",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "有効なメールアドレスを入力してください",
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
                  会社名
                </label>
                <input
                  {...register("company")}
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="株式会社サンプル"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  お問い合わせ内容 *
                </label>
                <textarea
                  {...register("message", { required: "お問い合わせ内容は必須です" })}
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <div className="text-center">
                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting ? "送信中..." : "送信する"}
                  <Send className="ml-2" size={20} />
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white shadow-xl rounded-lg p-8 text-center animate-fade-in">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">お問い合わせありがとうございます</h2>
              <p className="mb-6">内容を確認の上、担当者より折り返しご連絡させていただきます。</p>
              <Link href="/" className="btn">
                トップページに戻る
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">よくあるご質問</h2>
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
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

