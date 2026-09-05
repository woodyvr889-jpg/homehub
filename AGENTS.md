# Smart Hub (homehub)

A static HTML/CSS/JS smart-home dashboard. No build system, no backend, no dependencies.

## Running here
- Served by `nginx:alpine` via `docker-compose.base44.yml`, bind-mounting the repo at `/usr/share/nginx/html`.
- Preview entry: host port 3000 → nginx 80.
- No live-reload dev server (static files). After editing HTML/CSS/JS, call `reload_preview` so the user sees changes.

## Notes
- `style.css` is referenced by every page but was missing from the original repo; it was created here so pages render styled.
- Pages: `index.html` (home), `slideshow.html` (fullscreen display), `settings.html` (theme/reset). Shared logic in `script.js`.
