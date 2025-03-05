import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Package, Shield, Truck, Star, ChevronRight } from "lucide-react"
import "./globals.css"
export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - アニメーションを強化 */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/fv.png"
          alt="SAKULI - アイデアをカタチに"
          fill
          className="object-cover transform scale-105 animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in-up leading-tight">
            アイデアを<br className="sp" />カタチに
            <br />
            <span className="text-primary-400">未来</span>を創る
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow animate-fade-in-up opacity-90" style={{ animationDelay: "0.2s" }}>
            商品企画から最終製品化まで、
            <br />
            トータルでサポートする<br className="sp" /><span className="text-primary-300">製造パートナー</span>
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
          <p className="memo">
          <span className="memo-title">SAKULIは、「サプリメントの未来を切り開く企業」 です。</span><br />
          私たちのサプリメントが、一人ひとりの健康という土壌に根を張り、未来に美しい花を咲かせる。<br />
          そんな願いを込めて、革新と信頼のブランドとして成長し続けます。<br />
          「今を満たし、未来を咲かせる」—— SAKULIがあなたの人生に寄り添い、健康と幸福の未来を共に創ります。<br />
          </p>
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
          <p className="memo">
          <span className="memo-title">企業理念に基づく革新的な技術と品質を提供します。<br />お客様と共に未来を創造するパートナーとして、常に最先端を追求します。</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "OEM・ODM受託製造", description: "高品質なカプセルや茶葉パックの製造", icon: Package },
              { title: "品質管理", description: "GMPの基準に準じた厳格な書類管理を実施", icon: Shield },
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
          <h2 className="section-title">製品について</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "富山工場", image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/top.jpeg" },
              { name: "ハードカプセル", image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/supple.jpg" },
              { name: "茶葉パック", image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/tea.jpg" },
            ].map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <Image
                  src={product.image || "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/top.jpeg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <Link href="/facilities" className="text-primary-600 hover:text-primary-700 flex items-center">
                    詳細を見る
                    <ChevronRight size={20} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="memo">
          上記以外の健康補助売食品の製造も提携先工場にてご対応可能です。
          </p>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-24 bg-gradient-radial from-primary-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">製造プロセス</h2>
          <p className="memo">
          商品企画から最終製品化まで、トータルであなたをサポートします。
          </p>
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
                className="flex items-center mb-8 animate-fade-in-up process"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl">
                  {item.icon}
                </div>
                {index < 5 && <div className="w-16 h-1 bg-primary-300 mx-4" />}
                <div className="text-lg font-semibold">{item.step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* News Section */}
      <section className="py-24 bg-gray-50 news">
        <div className="container mx-auto px-6">
          <h2 className="section-title">最新ニュース</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "新製品発表：プレミアムサプリメントシリーズ", date: "準備中", image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/comingsoon.jpg" },
              { title: "製造ライン拡張のお知らせ", date: "準備中", image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/comingsoon.jpg" },
              { title: "国際品質認証を取得しました", date: "準備中", image: "https://shop.yoi-japan.jp/themes/simple_02/p/images/skl_img/comingsoon.jpg" },
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
