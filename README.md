# 株式会社SAKULIのホームページ

株式会社SAKULIのホームページ構築プロジェクトです。
本プロジェクトは Next.js を用いて作成されています。

## 必要環境

- macOS
- Node.js (推奨：最新の LTS バージョン)
- npm (Node.js インストール時に含まれます)

## Node.js のインストール

### 1. 公式サイトからのインストール

1. [Node.js の公式サイト](https://nodejs.org/) にアクセスして、最新の LTS バージョンのインストーラーをダウンロード
2. インストーラーに従ってインストールを進める

### 2. Homebrew を利用する場合

ターミナルで以下のコマンドを実行：

```bash
brew update
brew install node
```

## プロジェクトのセットアップ

1. プロジェクトのクローン

```bash
git clone https://github.com/f-i-d/sakuli_hp.git #リモートリポジトリをクローン
git remote add origin https://github.com/f-i-d/sakuli_hp.git #リモートリポジトリを設定
``` 

2. 依存パッケージのインストール

```bash
npm install
```

3. 開発サーバーの起動

```bash
npm run dev
```

4. ブラウザで確認

ブラウザで `http://localhost:3000` にアクセスして、プロジェクトが正常に表示されることを確認します。

5. 更新・編集処理の後

```bash
git add .
git commit -m "更新内容のコメント" # ログとして残るので、何を更新したかを記載する
git push origin master # 本番環境に反映
```

6. 本番環境の確認

自動的にVercelにデプロイされるので、https://v0-sakuli-website.vercel.app/ にアクセスして確認します。
