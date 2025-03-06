import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, company, message } = body

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    // Send email
    await transporter.sendMail({
      from: `"SAKULI Website" <${process.env.SMTP_USER}>`,
      to: "suzuki_shizue@f-i-d.jp",
      subject: "新しいお問い合わせ",
      text: `
名前: ${name}
メールアドレス: ${email}
会社名: ${company}
メッセージ:
${message}
      `,
      html: `
        <h2>新しいお問い合わせがありました</h2>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>会社名:</strong> ${company}</p>
        <p><strong>メッセージ:</strong></p>
        <pre style="white-space: pre-wrap; word-wrap: break-word;">${message}</pre>
      `,
    })

    return NextResponse.json({ message: "お問い合わせを受け付けました。" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "エラーが発生しました。" }, { status: 500 })
  }
}

