import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.jpg':'image/jpeg', '.png':'image/png', '.pdf':'application/pdf', '.xml':'application/xml', '.txt':'text/plain' };
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const name = pathname === '/' ? 'index.html' : pathname.slice(1);
    if (!['index.html','styles.css','script.js','robots.txt','sitemap.xml'].includes(name) && !/^assets\/[a-zA-Z0-9_.-]+$/.test(name)) {
      res.writeHead(404); res.end('Not found'); return;
    }
    const body = await readFile(resolve(root, name));
    res.writeHead(200, { 'Content-Type': types[extname(name)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(4173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4173'));
