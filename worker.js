/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
	return c.text('Hello World from Hono!!!'); // c.text() や c.json() を使用
});

// 新しいルート: "/about" でクエリパラメータを処理
app.get('/about', (c) => {
	// c.req.query('キー名') を使ってパラメータを取得
	const version = c.req.query('version');

	let responseText = 'This is the About Page of the Hono Worker.';

	return c.json({
		message: responseText,
		version: version || null,
	});
});

// fetch ハンドラで Hono アプリケーションを実行
export default app;
