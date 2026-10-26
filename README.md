# masakiallwardt

Personal site. Astro, no UI framework, one stylesheet.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Editing

| What | Where |
| --- | --- |
| Name, bio, links | `src/data/site.ts` |
| Experience, education | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Project photos, videos | `src/assets/projects/` |
| Blog posts | `src/content/blog/*.md` |
| Resume | `public/resume.pdf` |
| Styles | `src/styles/global.css` |

Each entry takes `name`, `role`, and a right-hand column: `meta` (dim, for
dates) or `result` (bright, jitters on hover). `ongoing: true` swaps either
for a pulsing marker. Optional `points`, `media`, `stack`, and `links` make the
row open on click.

### Photos and videos

Drop files in `src/assets/projects/<project>/` and list them on the entry:

```ts
media: [
  { src: 'diplomacy/board.png', alt: 'Overseer predictions on a Diplomacy board' },
  { src: 'crf/demo.mp4', alt: 'Correcting the arm out loud', caption: 'Live demo' },
  { src: 'dailybite/walkthrough.mp4', alt: 'App walkthrough', aspect: '9 / 16' },
],
```

Images (png, jpg, webp, avif, gif) are resized and converted to WebP at build
time; GIFs stay animated and come out several times smaller.
Videos (mp4, webm) are served as-is, so keep them short and compressed; they
play muted in the row and open full size with controls on click. Use
`aspect: '9 / 16'` for phone recordings. A missing file fails the build with
its path.

A post needs `title` and `date` front matter; `description` and `draft` are
optional. Math (`$…$`, `$$…$$`) renders with KaTeX.

## Deploying

`npm run build` produces a plain static site in `dist/`, so Vercel, Netlify,
Cloudflare Pages, and GitHub Pages all work with their Astro presets. Set
`site` in `astro.config.mjs` to the final domain.
