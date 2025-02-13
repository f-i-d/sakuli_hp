import { execSync } from "child_process"

try {
  console.log("nodemailerをインストールしています...")
  execSync("npm install nodemailer", { stdio: "inherit" })
  console.log("nodemailerが正常にインストールされました。")
} catch (error) {
  console.error("nodemailerのインストール中にエラーが発生しました:", error.message)
}

