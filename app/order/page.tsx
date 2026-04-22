import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MotionH1, MotionP } from "@/components/ClientMotion"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "特定商取引法に基づく表記 - 株式会社SAKULI",
  description: "最高の品質と革新を追求する株式会社SAKULIの特定商取引法に基づく表記"
}

export default function About() {
  return (
    <>
      {/* 企業情報・企業理念＆ビジョンセクション */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="memo"
          >
          </MotionP>

          <div className="">
            {/* 企業情報カード */}
            <Card className="bg-white shadow-lg rounded-lg p-6">
              <CardHeader className="border-b border-gray-200 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 title-c">
                  特定商取引法に基づく表記
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li>
                    <span className="font-semibold order-title">運営会社</span>
                    <span className="ml-4 order">株式会社SAKULI</span>
                  </li>
                  <li>
                    <span className="font-semibold order-title">代表者</span>
                    <span className="ml-4 order">竹内 雅輝</span>
                  </li>
                  <li>
                    <span className="font-semibold order-title">店舗運営責任者</span>
                    <span className="ml-4 order">竹内 雅輝</span>
                  </li>
                  <li>
                    <span className="font-semibold order-title">店舗セキュリティ責任者</span>
                    <span className="ml-4 order">竹内 雅輝</span>
                  </li>
                  <li>
                    <span className="font-semibold order-title">購入履歴からの適格請求書発行</span>
                    <span className="ml-4 order">対応不可</span>
                  </li>
                  <li>
                    <span className="font-semibold order-title">所在地</span>
                    <span className="ml-4 order">930-0822 富山県富山市新屋166-1</span>
                  </li>
                  <li>
                    <span className="font-semibold order-title">問い合わせ</span>
                    <span className="ml-4 order">(TEL)<a href="tel:050-3850-9480">050-3850-9480</a>　(MAIL)<a href="/contact">問い合わせフォーム</a>　(FAX)050-3850-9480</span>
                  </li>
                  <li>
                    <span className="font-semibold order-title">受付時間</span>
                    <span className="ml-4 order">平日AM10:00～PM18:00※お問い合わせには3営業日以内に返信します。※時間外のお問い合わせに関しては翌営業日の受付となります。</span>
                  </li>
                  <li>
                    <span className="font-semibold order-title">お支払について</span>
                    <p className="ml-4 order">
                      <h3>⚫︎クレジットカード</h3>
                      【取扱カード】取り扱いカードは以下のとおりです。すべてのカード会社で、一括払いが可能となっております。<br />
                      <dl>
                        <dt>VISA</dt>
                        <dd>リボ,分割（3,5,6,10,12,15,18,20,24 回が可能です）</dd>
                        <dt>MASTER</dt>
                        <dd>リボ,分割（3,5,6,10,12,15,18,20,24 回が可能です）</dd>
                        <dt>JCB</dt>
                        <dd>リボ,分割（3,5,6,10,12,15,18,20,24 回が可能です）</dd>
                        <dt>Diners</dt>
                        <dd>リボ</dd>
                        <dt>AMEX</dt>
                        <dd>分割（3,5,6,10,12,15,18,20,24 回が可能です）</dd>
                      </dl>
                       【備考】<br />
                       ・お客様のご利用状況などによってクレジットカードがご利用いただけない場合、楽天市場がクレジットカード情報やお支払い方法の変更をご案内、またはご注文をキャンセルいたします。<br />
                       ・クレジットカード情報またはお支払い方法の変更をご案内後、7日間変更いただけない場合、楽天市場が自動でご注文をキャンセルいたします。<br />
                       ・分割払い、リボルビング払い又はボーナス一括払いによるお支払いとなる場合、割賦販売法第30条2の3第4項、同法施行規則第54条1項各号に定められた事項は、注文確認後の自動配信メールにより交付します。<br />
                       ※ご注文の際にお客様の本人確認（電話確認等）をお願いする場合もございます。
                       ※お客様と異なる名義のクレジットカードはご利用いただけません。
                       ※決済システム上、クレジットカード利用控は発行しておりません。
                       ※クレジットカードでのお支払いに関するお問い合わせは楽天市場までご連絡ください。<br />

                      <h3>⚫︎銀行振込</h3>
                      【振込先】<br />
                      楽天銀行（ラクテンギンコウ）楽天市場支店（ラクテンイチバシテン） 普通 3044028 ラクテン（サクリシヨツフ゜ラクテンイチハ゛テン<br />
                      ※この口座の権利は楽天グループ株式会社が保有しています。<br />
                      【備考】<br />
                      ・ご注文後、お支払いに関するご案内メールを楽天市場からお送りいたします。お支払い状況の確認後、発送手続きが開始いたします。<br />
                      ・ショップが金額を変更した場合、お客様のご注文時と楽天市場からのお支払いに関するご案内メール送信時で金額が異なります。<br />
                      ・お支払いに関するご案内メールに記載の金額をご確認のうえ、お支払いください。<br />
                      ・7日以内にお支払いが確認できない場合、楽天市場が自動でご注文をキャンセルいたします。<br />
                      ・振込の取扱時間はご利用される金融機関のホームページなどを予めご確認ください。連休時など、銀行窓口でお振込みができない場合は、ATMやネットバンキングにてお振込みください。<br />
                      ・誠に勝手ながら、振込手数料はお客様のご負担でお願いいたします。<br />
                      ※ご注文者様名義の口座よりお支払いください。ご注文者様以外の名義でお支払いいただいた場合、お支払いの確認ができない場合がございます。<br />
                      ※銀行振込でのお支払いに関するお問い合わせは<a href="https://chat.ichiba.faq.rakuten.co.jp/rnt_chat_ref/100/Payment">楽天市場までご連絡</a>ください。<br />

                      <h3>⚫︎Apple Pay</h3>
                      【備考】Apple Payに対応したiPhoneでお支払いいただけます。<br />
                      ・ご注文を確定する直前に、Apple Payの認証を行っていただきます。<br />
                       <a href="https://ichiba.faq.rakuten.net/detail/000007210">Apple Payでのお支払い方法</a><br />
                      ・Apple Payでご利用できるカードは発行会社によって異なります。詳細は<a href="https://ichiba.faq.rakuten.net/detail/000007210">Apple Payでのお支払い方法</a>よりAppleのサイトをご確認ください。<br />
                      ・お客様のご利用状況などによってApple Payおよびクレジットカードがご利用いただけない場合、楽天市場がお支払い方法の変更をご案内、またはご注文をキャンセルいたします。<br />
                      ・お支払い方法の変更をご案内後、7日間変更いただけない場合、楽天市場が自動でご注文をキャンセルいたします。<br />
                      ・iPhone以外の端末からのご購入時はApple Payをご利用いただくことができません。その他、ショップの設定状況やご注文時の選択内容などによって、Apple Payがご利用いただけない場合がございます。<br />
                      ※Apple Payでのお支払いに関するお問い合わせは<a href="https://chat.ichiba.faq.rakuten.co.jp/rnt_chat_ref/100/Payment">楽天市場までご連絡</a>ください。<br />

                      <h3>⚫︎セブンイレブン（前払）</h3>
                      【備考】セブンイレブンでお支払いいただけます。<br />
                      ・ご注文後に、払込票番号および払込票のURLを記載したメールを楽天市場からお送りいたします。<br />
                       <a href="https://ichiba.faq.rakuten.net/detail/000007064">セブンイレブンでのお支払い方法</a><br />
                      ・お支払い状況の確認後、発送手続きが開始いたします。お受け取り希望日をご指定の場合などは、お早めのお支払いをお願いいたします。<br />
                      ・7日以内にお支払いが確認できない場合、楽天市場が自動でご注文をキャンセルいたします。<br />
                      ・決済手数料は無料です。<br />
                      ※30万円（税込）以上のご注文にはご利用いただけません。<br />
                      ※セブンイレブン（前払）でのお支払いに関するお問い合わせは<a href="https://chat.ichiba.faq.rakuten.co.jp/rnt_chat_ref/100/Payment">楽天市場までご連絡</a>ください。<br />

                      <h3>⚫︎ファミリーマート、ローソン等（前払）</h3>
                      【備考】ローソン、ファミリーマート、ミニストップ、セイコーマートでお支払いいただけます。<br />
                      ・ご注文後に、お支払い受付番号を記載したメールを楽天市場からお送りいたします。<br />
                       <a href="https://ichiba.faq.rakuten.net/detail/000007041">各コンビニでのお支払い方法</a><br />
                      ・お支払い状況の確認後、発送手続きが開始いたします。お受け取り希望日をご指定の場合などは、お早めのお支払いをお願いいたします。<br />
                      ・7日以内にお支払いが確認できない場合、楽天市場が自動でご注文をキャンセルいたします。<br />
                      ・各コンビニでお支払いいただく場合、決済手数料は無料です。<br />
                      ※30万円（税込）以上のご注文にはご利用いただけません。<br />
                      ※ファミリーマート、ローソン等（前払）でのお支払いに関するお問い合わせは<a href="https://chat.ichiba.faq.rakuten.co.jp/rnt_chat_ref/100/Payment">楽天市場までご連絡</a>ください。<br />

                    </p>
                  </li>
                  <li>
                    <span className="font-semibold order-title">メール便について</span>
                    <p className="ml-4 order">
                      【業者】ヤマト運輸<br />
                      【配送サービス名】ネコポス<br />
                      【備考】商品発送のタイミング<br />
                      当店では配送の日時指定を受け付けておりません。<br />
                      前払い決済の場合（例：銀行振込）　⇒ご入金確認後、1～2営業日に発送いたします。（店舗休業日を除く）<br />
                      上記以外の決済の場合（例：クレジットカード）　⇒ご注文確認後、1～2営業日に発送いたします。（店舗休業日を除く）<br />
                      ※前払い決済の場合は、お客様のご入金タイミングにより、お届け予定日が前後することがございます。</p>
                  </li>
                  <li>
                    <span className="font-semibold order-title">送料料金表</span>
                    <span className="ml-4 order">全国一律料金：0円<br />
                    離島他の扱い：離島・一部地域でも追加送料がかかることはありません。</span>
                  </li>
                  <li>
                    <span className="font-semibold order-title">海外配送について</span>
                    <span className="ml-4 order">当店は海外へ発送を行っていません</span>
                  </li>
                  <li>
                    <span className="font-semibold order-title">キャンセル・返品(返金・交換)について</span>
                    <p className="ml-4 order">当店では以下の条件の通りです。詳細は、各リンク先をご確認ください。<br />
                    ※当店では商品等の不具合による返金、ならびにお客様都合による交換、返金は受け付けておりません。<br />

                    <h3>■お客様都合によるキャンセル（商品発送前）</h3>
                    ご注文から30分以内は、理由の有無を問わず<a href="https://login.account.rakuten.com/sso/authorize?client_id=rakuten_purchase_history_a_web&scope=openid&response_type=code&r10_jid_service_id=omnis08&redirect_uri=https%3A%2F%2Forder.my.rakuten.co.jp%2Fpurchasehistoryapi%2Fredirect&state=MzljMjRhZmM2ZjRkYmNkYzdlZTM0Zjk4ZjllNzJjOTk6NzlkYjY4Zjk3YzI4NjhkZTY2NDdiZWI1ZGZlNmRmNDYzMmIzZDA2MmQwMWY3MGU1MDZjMzRjN2VlZGI3OTUwZGNiZGEwM2E2ZDA4MGUxMzU2ZjQ2NTVlMTVhZTY5NzI4YTk1YzRjYTQ2YjgwNDY0OTFkMDM2NzFmYjBkMjMxYjJhODFmMjY5OTg0MGFhOWQ4NGVlYjIzNTA5ZmFkZmY2ZTE2M2EyNzZhNWNmOGMyZTExMTFkNTBjOTE5OTcwMmNmLmVhNzFjYjExOTYyNmRiNmQ0YTcyODg4NWRlNGE1ZjBlYTQyZjlmOTM2ZDZiMjFkYTllZDdkNDZhNGNiY2RjNGY%3D#/sign_in">購入履歴</a>
                    からキャンセルすることが可能です。<br />
                    ただし以下の場合においては、30分以内でもキャンセルできない場合がございます。<br />
                    ・楽天会員登録を利用していない注文<br />
                    ・予約購入/定期購入/頒布会の注文<br />
                    ・配送日時指定で最短お届け日を指定している注文<br />
                    なお、当店では、ご注文から30分以上過ぎた場合、お客様都合によるキャンセルは承っておりません。あらかじめご了承ください。<br />

                    <h3>■お客様都合による返金</h3>
                    当店ではお客様都合による返金は受け付けておりません。<br />
                    【備考】返金を希望する旨、電話もしくはメールにてお申し付けください。<br />

                    <h3>■お客様都合による交換</h3>
                    当店ではお客様都合による交換は受け付けておりません。<br />
                    【備考】同一商品の手配が不可能など交換に応じることができない場合がございます。その際は返金にてご了承ください。<br />

                    <h3>■商品等の不具合による返金</h3>
                    当店では商品等の不具合による返金は受け付けておりません。<br />
                    【備考】返金を希望する旨、電話もしくはメールにてお申し付けください。<br />

                    <h3>■商品等の不具合による交換</h3>
                    以下の条件にあてはまる場合、商品等を交換いたします。<br />
                    【対応条件】商品の使用有無に関わらず、対応期間内に電話もしくはメールにてご連絡いただいたもののみ原則対応いたします。<br />
                    【対応可能期間】商品到着後3日以内にご連絡をいただいた場合<br />
                    【返品送料】店舗負担<br /> 
                    【再送料】店舗負担<br />      
                    【備考】商品が不良・誤配送だった場合 配送中の事故などで破損・汚損が生じた場合、ご注文頂いたものと 異なる商品が届けられた場合のみ「交換」をお受けします。
                    お客様都合によるご返品・ご返金はお受けできません。※商品開封後の交換は出来ません。また、商品の不良等による交換につきましては商品到着から3日以内にご連絡を
                    頂いた場合のみご対応させて頂きます。その際の送料は弊社負担とさせて頂きます。4日以上経過してからご連絡いただいた場合はご対応致しかねます。
                    ※当社との合意なしに、一方的に着払いでお送り頂いてもお受け取り出来ませんのでご注意下さい。 まずはお電話にてご連絡頂きますようお願い致します。<br />                
                    
                    <h3>■キャンセル・返金・交換連絡先</h3>
                    【電話番号】05038509480<br /> 
                    【お問い合わせフォーム】<a href="https://login.account.rakuten.com/sso/authorize?client_id=rakuten_purchase_history_a_web&scope=openid&response_type=code&r10_jid_service_id=omnis08&redirect_uri=https%3A%2F%2Forder.my.rakuten.co.jp%2Fpurchasehistoryapi%2Fredirect&state=MzljMjRhZmM2ZjRkYmNkYzdlZTM0Zjk4ZjllNzJjOTk6NzlkYjY4Zjk3YzI4NjhkZTY2NDdiZWI1ZGZlNmRmNDYzMmIzZDA2MmQwMWY3MGU1MDZjMzRjN2VlZGI3OTUwZGNiZGEwM2E2ZDA4MGUxMzU2ZjQ2NTVlMTVhZTY5NzI4YTk1YzRjYTQ2YjgwNDY0OTFkMDM2NzFmYjBkMjMxYjJhODFmMjY5OTg0MGFhOWQ4NGVlYjIzNTA5ZmFkZmY2ZTE2M2EyNzZhNWNmOGMyZTExMTFkNTBjOTE5OTcwMmNmLmVhNzFjYjExOTYyNmRiNmQ0YTcyODg4NWRlNGE1ZjBlYTQyZjlmOTM2ZDZiMjFkYTllZDdkNDZhNGNiY2RjNGY%3D#/sign_in">購入履歴一覧</a>
                     の「ショップヘの問い合わせ」より店舗にお問い合わせください。<br /> 
                    【返品送料】店舗負担<br /> 
                    【再送料】店舗負担<br />  

                    <h3>■返送先</h3>
                    【住所】9300822　富山県富山市新屋１６６－１<br />
                    【電話番号】05038509480<br />
                    【FAX番号】05038509480<br />
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
} 