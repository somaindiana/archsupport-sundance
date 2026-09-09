import { mkdir, copyFile, cp, readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
if (new Set(ids).size !== ids.length) throw new Error('Duplicate HTML IDs');
for (const [, link] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (link.startsWith('#')) {
    if (!ids.includes(link.slice(1))) throw new Error(`Missing section: ${link}`);
  } else if (!/^[a-z]+:/i.test(link)) {
    await access(resolve(root, link));
  }
}
await mkdir(resolve(root, 'dist'), { recursive: true });
for (const name of ['index.html', 'styles.css', 'script.js', 'robots.txt', 'sitemap.xml']) {
  await copyFile(resolve(root, name), resolve(root, 'dist', name));
}
await cp(resolve(root, 'assets'), resolve(root, 'dist/assets'), { recursive: true });
console.log('Static site built in dist/. All local links and section targets verified.');
