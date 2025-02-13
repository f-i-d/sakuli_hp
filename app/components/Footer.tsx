import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary-400">株式会社SAKULI</h3>
            <p className="flex items-center">
              <Mail size={18} className="mr-2 text-primary-400" /> info@sakuli.co.jp
            </p>
            <p className="flex items-center">
              <Phone size={18} className="mr-2 text-primary-400" /> 03-1234-5678
            </p>
            <p className="flex items-center">
              <MapPin size={18} className="mr-2 text-primary-400" /> 〒123-4567 東京都○○区××町1-2-3
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary-400">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary-400 transition-colors">
                  ニュース
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary-400 transition-colors">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary-400">フォローする</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <form className="mt-4">
              <label htmlFor="email" className="sr-only">
                メールアドレス
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 text-gray-900 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="ニュースレター登録"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-primary-600 rounded-r-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  登録
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2023 株式会社SAKULI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

