// Eleventy configuration for the My Inference website.
// You normally never need to edit this file: add posts in src/posts/ and edit the JSON files in src/_data/.
const PREFIX = (process.env.PATH_PREFIX || '/').replace(/\/?$/, '/');

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });

  // All blog posts, newest first.
  eleventyConfig.addCollection('posts', (api) =>
    api.getFilteredByGlob('src/posts/*.md').sort((a, b) => b.date - a.date));

  // Every category used by at least one post.
  eleventyConfig.addCollection('categories', (api) => {
    const set = new Set();
    api.getFilteredByGlob('src/posts/*.md').forEach((p) => (p.data.categories || []).forEach((c) => set.add(c)));
    return [...set].sort();
  });

  eleventyConfig.addFilter('readableDate', (d) =>
    new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kuala_Lumpur' }));
  eleventyConfig.addFilter('isoDate', (d) => new Date(d).toISOString());
  eleventyConfig.addFilter('excerpt', (html = '', n = 160) => {
    const t = String(html).replace(/<[^>]+>/g, ' ').replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim();
    return t.length > n ? t.slice(0, n).replace(/\s\S*$/, '') + '…' : t;
  });
  eleventyConfig.addFilter('readingTime', (html = '') => Math.max(1, Math.round(String(html).replace(/<[^>]+>/g, ' ').split(/\s+/).length / 200)));
  eleventyConfig.addFilter('slugify2', (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
  eleventyConfig.addFilter('limit', (arr, n) => (arr || []).slice(0, n));

  // A YouTube link on its own line becomes an embedded video; paragraphs with Arabic get dir="auto".
  eleventyConfig.addTransform('embeds', function (content) {
    if (!(this.page.outputPath || '').endsWith('.html')) return content;
    return content
      .replace(/<p>\s*(?:<a [^>]*>)?\s*https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})[^<\s]*\s*(?:<\/a>)?\s*<\/p>/g,
        (m, id) => `<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`)
      .replace(/<p>(?=[^<]*[؀-ۿ])/g, '<p dir="auto">');
  });

  return {
    dir: { input: 'src', includes: '_includes', data: '_data', output: '_site' },
    markdownTemplateEngine: false,
    htmlTemplateEngine: 'njk',
    pathPrefix: process.env.PATH_PREFIX || '/',
  };
}
