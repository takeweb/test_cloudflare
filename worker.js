/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// Hono の場合のコード例 (worker.js など)
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
	return c.text('Hello World from Hono!!!'); // c.text() や c.json() を使用
});

// fetch ハンドラで Hono アプリケーションを実行
export default app;
