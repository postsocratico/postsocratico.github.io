# site

Static personal site. No build step — plain HTML/CSS, ready for GitHub Pages.

## Structure

```
site/
├── index.html          home
├── curriculum.html      cv
├── logs.html            tiny feed
├── music.html            compositions
├── writings.html         essays index
├── writings/            (optional) one .html per long piece, linked from writings.html
├── assets/
│   ├── css/style.css
│   ├── img/favicon.svg
│   ├── audio/            .mp3 files for the music page
│   └── files/cv.pdf      your actual CV, referenced by curriculum.html
└── README.md
```

## Deploy on GitHub Pages

1. Create a repo, e.g. `yourhandle.github.io` (for a root domain) or any name (for a project page at `yourhandle.github.io/reponame`).
2. Put everything inside `site/` at the **root** of that repo (not nested — `index.html` must sit next to the repo's own root, or in `/docs` if you prefer that setting).
3. Push:
   ```
   git init
   git add .
   git commit -m "site"
   git branch -M main
   git remote add origin https://github.com/yourhandle/yourhandle.github.io.git
   git push -u origin main
   ```
4. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)` (or `/docs` if you used that).
5. Live in a minute or two at `https://yourhandle.github.io` (or `.../reponame` for a project page).

## To fill in

- `[Apellido]` and contact links in every page's sidebar
- `assets/files/cv.pdf` — your actual CV
- `assets/audio/*.mp3` — your recordings
- Log entries in `logs.html` — replace with real ones, newest on top
- Writings in `writings.html` — link out to postsocratico.com or add local pages under `writings/`

## Custom domain (optional)

Add a file `CNAME` at the repo root containing just your domain, e.g. `postsocratico.com`, and point your DNS `A`/`CNAME` records at GitHub Pages per their docs.
