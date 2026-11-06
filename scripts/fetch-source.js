const { chromium } = require('playwright');

const REALISTIC_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms + Math.random() * 1000));
}

async function fetchSource(url, opts = {}) {
  const { scroll = true, waitMs = 3000, timeout = 30000 } = opts;
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: REALISTIC_UA,
    viewport: { width: 1920, height: 1080 },
    locale: 'en-US',
    timezoneId: 'America/New_York',
    javaScriptEnabled: true,
  });

  const page = await context.newPage();
  // Block heavy resources to speed up, keep JS for anti-bot
  await page.route('**/*.{png,jpg,jpeg,gif,svg,webp,woff,woff2,mp4,mp3}', r => r.abort());

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout });
    await sleep(waitMs);

    if (scroll) {
      for (let i = 0; i < 4; i++) {
        await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.8));
        await sleep(800);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await sleep(500);
    }

    const data = await page.evaluate(() => {
      const title = document.title || '';
      const links = [];
      const seen = new Set();
      document.querySelectorAll('a').forEach(a => {
        const href = a.href;
        const text = (a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 300);
        if (href && text.length > 15 && !seen.has(href)) {
          seen.add(href);
          links.push({ href, text });
        }
      });
      const headings = [];
      document.querySelectorAll('h1, h2, h3, h4').forEach(h => {
        const t = (h.textContent || '').trim().replace(/\s+/g, ' ');
        if (t.length > 5) headings.push({ tag: h.tagName, text: t.slice(0, 300) });
      });
      const metas = {};
      document.querySelectorAll('meta[name], meta[property]').forEach(m => {
        const k = m.getAttribute('name') || m.getAttribute('property');
        const v = m.getAttribute('content');
        if (k && v) metas[k] = v.slice(0, 500);
      });
      return { title, links: links.slice(0, 200), headings: headings.slice(0, 100), metas };
    });

    await browser.close();
    return { url, status: 'ok', ...data };
  } catch (err) {
    await browser.close();
    return { url, status: 'error', error: err.message };
  }
}

async function fetchMultiple(urls) {
  const results = [];
  for (const url of urls) {
    console.error(`[fetch] ${url}`);
    const r = await fetchSource(url);
    console.error(`  → ${r.status} (${r.headings?.length || 0} headings, ${r.links?.length || 0} links)`);
    results.push(r);
    await sleep(2000);
  }
  return results;
}

// If run directly: pass URLs as args or pipe JSON array
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: node fetch-source.js URL [URL ...]');
    process.exit(1);
  }
  fetchMultiple(args).then(r => console.log(JSON.stringify(r, null, 2)));
}

module.exports = { fetchSource, fetchMultiple };
