import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Package, Shield, Truck, Star, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - アニメーションを強化 */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-12%2015.37.32-fCf7RqPa6Q2ARVC0jjedHHY6lIb7GU.png"
          alt="SAKULI - アイデアをカタチに"
          fill
          className="object-cover transform scale-105 animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in-up leading-tight">
            アイデアをカタチに、
            <br />
            <span className="text-primary-400">未来</span>を創る
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow animate-fade-in-up opacity-90" style={{ animationDelay: "0.2s" }}>
            商品企画から最終製品化まで、
            <br />
            トータルでサポートする<span className="text-primary-300">製造パートナー</span>
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full text-lg transition-all transform hover:scale-105 animate-fade-in-up shadow-lg"
            style={{ animationDelay: "0.4s" }}
          >
            お問い合わせ
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section - 新規追加 */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            <span className="text-primary-600">SAKULI</span>が選ばれる理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Package className="w-12 h-12 text-primary-500" />,
                title: "一貫した製造体制",
                description: "企画から製造、品質管理まで、すべての工程を一貫して管理します。",
              },
              {
                icon: <Shield className="w-12 h-12 text-primary-500" />,
                title: "品質へのこだわり",
                description: "厳格な品質管理システムにより、安全で高品質な製品を提供します。",
              },
              {
                icon: <Star className="w-12 h-12 text-primary-500" />,
                title: "豊富な実績",
                description: "多様な業界での製造実績により、お客様のニーズに柔軟に対応します。",
              },
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="inline-block p-4 bg-primary-50 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
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
      <section className="py-24 bg-gray-50">
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
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
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
      <section className="py-24 bg-white">
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
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <p className="text-gray-700 mb-4">{testimonial.comment}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
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

      {/* CTA Section - 新規追加 */}
      <section className="py-24 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              製品開発のパートナーをお探しですか？
            </h2>
            <p className="text-xl mb-12 opacity-90">
              SAKULIは、お客様の製品開発における課題解決をサポートします。
              まずはお気軽にご相談ください。
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
            >
              無料相談を始める
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

