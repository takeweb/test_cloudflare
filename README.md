# test_cloudflare

## Wranglerをグローバルインストール
```
npm install -g wrangler
```

### Wranglerにログイン
```
wrangler login
```

### プロジェクトの初期化
```
wrangler init --from-dash test_cloudflare
```

### Honoの導入
```
npm install hono
```

# 開発サーバーを起動し、http://localhost:8787 などでアクセス可能になります
```
npm run dev
```

# Workerのコードをビルドし、Cloudflareにデプロイします
```
npm run deploy
```

以上
