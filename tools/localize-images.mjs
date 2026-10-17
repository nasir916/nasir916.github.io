// Copies every image still hosted on Wix (static.wixstatic.com) into src/assets/img/
// and points the posts and data files at the local copy, so the site no longer depends on Wix.
// Runs automatically in GitHub Actions; safe to run again (already-local images are skipped).
import { readdir, readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const IMG_DIR = path.join(ROOT, 'src/assets/img');
const RE = /https:\/\/static\.wixstatic\.com\/media\/([A-Za-z0-9_~.\-]+?\.(?:png|jpe?g|gif|webp))/g;

const files = [
  ...(await readdir(path.join(ROOT, 'src/posts'))).filter((f) => f.endsWith('.md')).map((f) => path.join(ROOT, 'src/posts', f)),
  ...(await readdir(path.join(ROOT, 'src/_data'))).filter((f) => f.endsWith('.json')).map((f) => path.join(ROOT, 'src/_data', f)),
];
await mkdir(IMG_DIR, { recursive: true });
const done = new Map();
let changed = 0, failed = 0;
for (const file of files) {
  let text = await readFile(file, 'utf8');
  const urls = [...new Set([...text.matchAll(RE)].map((m) => m[0]))];
  if (!urls.length) continue;
  for (const url of urls) {
    const name = url.split('/').pop().replace(/~mv2(_d_\d+_\d+_s_\d+)?/, '').replace(/[^A-Za-z0-9_.-]/g, '_');
    if (!done.has(url)) {
      const dest = path.join(IMG_DIR, name);
      try { await access(dest); done.set(url, true); }
      catch {
        try {
          const r = await fetch(url);
          if (!r.ok) throw new Error('HTTP ' + r.status);
          await writeFile(dest, Buffer.from(await r.arrayBuffer()));
          done.set(url, true);
          console.log('saved', name);
        } catch (e) { console.warn('could not download', url, e.message); done.set(url, false); failed++; }
      }
    }
    if (done.get(url)) text = text.split(url).join(`/assets/img/${name}`);
  }
  await writeFile(file, text); changed++;
}
console.log(`updated ${changed} files, ${failed} images failed`);
