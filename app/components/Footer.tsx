import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary-400"><img src="https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/logo1.png" width="200px"></img></h3>
            <nav>
              <ul className="space-y-2">
              <li>
                  <Link href="/" className="hover:text-primary-400 transition-colors">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary-400 transition-colors">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="/strengths" className="hover:text-primary-400 transition-colors">
                    私たちについて
                  </Link>
                </li>
                <li>
                  <Link href="/facilities" className="hover:text-primary-400 transition-colors">
                    製造設備
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary-400 transition-colors">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-400" /> info@sakuli.co.jp
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-400" /> 050-3850-9480
              </p>
              <p className="flex items-center">
                <MapPin size={18} className="mr-2 text-primary-400" /> 〒930-0827 富山県富山市上飯野15
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto text-center text-sm text-gray-500">
          © {new Date().getFullYear()} 株式会社SAKULI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

