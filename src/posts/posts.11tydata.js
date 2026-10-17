// Shared settings for every blog post in this folder.
export default {
  layout: 'post.njk',
  eleventyComputed: {
    permalink: (data) => `/blog/${data.slug || data.page.fileSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '')}/`,
  },
};
