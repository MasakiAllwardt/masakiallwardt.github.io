import { getCollection } from 'astro:content';

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date, style: 'short' | 'long' = 'short') {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: style === 'long' ? 'numeric' : undefined,
    timeZone: 'UTC',
  });
}

export function readingTime(body = '') {
  return Math.max(1, Math.round(body.split(/\s+/).length / 230));
}
