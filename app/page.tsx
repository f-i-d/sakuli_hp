import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Package, Shield, Truck, Star, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-12%2015.37.32-fCf7RqPa6Q2ARVC0jjedHHY6lIb7GU.png"
          alt="MOTENASU - 心に届くおもてなしの接客"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" /> {/* オーバーレイを追加して可読性を向上 */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-6 text-shadow animate-fade-in-up">
            アイデアをカタチに、
            <br />
            未来を創る
          </h1>
          <p className="text-2xl mb-8 text-shadow animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            商品企画から最終製品化まで、
            <br />
            トータルでサポートする製造パートナー
          </p>
          <Link href="/contact" className="btn text-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            お問い合わせ
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="section-title">事業内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "OEM受託製造", description: "高品質なカプセルや茶葉パックの製造", icon: Package },
              { title: "品質管理", description: "最新技術を駆使した高精度の検査体制", icon: Shield },
              { title: "販売・物流サポート", description: "グループ企業による一気通貫サービス", icon: Truck },
            ].map((item, index) => (
              <div
                key={item.title}
                className="card p-8 text-center animate-fade-in-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <item.icon className="w-16 h-16 text-primary-500 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-primary-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Samples Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="section-title">製品サンプル</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "プレミアムサプリメント", image: "/product-1.jpg" },
              { name: "有機茶葉パック", image: "/product-2.jpg" },
              { name: "美容ドリンク", image: "/product-3.jpg" },
            ].map((product, index) => (
              <div
                key={product.name}
                className="card overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <Link href="/products" className="text-primary-600 hover:text-primary-700 flex items-center">
                    詳細を見る
                    <ChevronRight size={20} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-24 bg-gradient-radial from-primary-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">製造プロセス</h2>
          <div className="flex flex-wrap justify-center items-center">
            {[
              { step: "原料調達", icon: "🌿" },
              { step: "品質検査", icon: "🔬" },
              { step: "製造", icon: "🏭" },
              { step: "パッケージング", icon: "📦" },
              { step: "出荷", icon: "🚚" },
            ].map((item, index) => (
              <div
                key={item.step}
                className="flex items-center mb-8 animate-fade-in-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl">
                  {item.icon}
                </div>
                {index < 4 && <div className="w-16 h-1 bg-primary-300 mx-4" />}
                <div className="text-lg font-semibold">{item.step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="section-title">お客様の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "山田 太郎",
                company: "株式会社ヘルシーライフ",
                comment: "SAKULIさんのOEM製造サービスのおかげで、高品質な製品を迅速に市場に投入できました。",
              },
              {
                name: "佐藤 花子",
                company: "グリーンティー株式会社",
                comment: "茶葉パックの品質が素晴らしく、お客様からの評判も上々です。細やかなサポートに感謝しています。",
              },
              {
                name: "鈴木 一郎",
                company: "ビューティーケア株式会社",
                comment: "製造から物流まで一貫してサポートしていただき、業務効率が大幅に向上しました。",
              },
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card p-6 animate-fade-in-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl mr-4">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
                <div className="mt-4 flex text-primary-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="section-title">最新ニュース</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "新製品発表：プレミアムサプリメントシリーズ", date: "2023年6月15日", image: "/news-1.jpg" },
              { title: "製造ライン拡張のお知らせ", date: "2023年5月22日", image: "/news-2.jpg" },
              { title: "国際品質認証を取得しました", date: "2023年4月10日", image: "/news-3.jpg" },
            ].map((news, index) => (
              <div
                key={news.title}
                className="card overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <Link href="/news" className="text-primary-600 hover:text-primary-700 flex items-center">
                    続きを読む
                    <ChevronRight size={20} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">製品開発のパートナーをお探しですか？</h2>
          <p className="text-xl mb-12">SAKULIが、アイデアから製品化までトータルでサポートいたします。</p>
          <Link href="/contact" className="btn btn-secondary text-lg">
            お問い合わせはこちら
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

