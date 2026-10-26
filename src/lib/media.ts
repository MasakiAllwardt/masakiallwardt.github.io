import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { Media } from '../data/types';

const ROOT = '/src/assets/projects/';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/**/*.{png,jpg,jpeg,webp,avif,gif}',
  { eager: true },
);
const videos = import.meta.glob<string>('/src/assets/projects/**/*.{mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export type ResolvedMedia = Media &
  ({ kind: 'image'; image: ImageMetadata; full: string } | { kind: 'video'; url: string });

export async function resolveMedia(media: Media): Promise<ResolvedMedia> {
  const key = ROOT + media.src;
  if (key in images) {
    const image = images[key].default;
    const full = await getImage({ src: image, width: Math.min(image.width, 1800) });
    return { ...media, kind: 'image', image, full: full.src };
  }
  if (key in videos) return { ...media, kind: 'video', url: videos[key] };
  throw new Error(
    `Media "${media.src}" not found in src/assets/projects/ (images: png/jpg/webp/avif/gif, videos: mp4/webm).`,
  );
}
