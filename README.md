# Sundance Architectural Support

A single-page site for Aki's remote architectural production service, intended for `archsupport.sundance.hu`.

## Preview

Open `index.html` directly, or run `node tools/serve.mjs` and visit http://127.0.0.1:4173. No package installation is needed.

## Build and publish

Run `node tools/build.mjs` (or `npm run build`). This checks local assets and section links and copies the public website to `dist/`. Upload the **contents** of `dist/` to the subdomain's web root. It is also possible to serve the root HTML, CSS, JS, assets, robots.txt and sitemap.xml directly on a static host. No backend or routing configuration is required. No deployment or Git push has been performed.

GitHub repository: https://github.com/somaindiana/archsupport-sundance. For GitHub Pages, select the main branch and / (root) folder in Settings > Pages. The existing CNAME file is preserved. Commit these files and push to publish through the configured host.

## Content and design

- Palette and fonts follow the supplied Sundance source: Fraunces, Archivo, navy, paper and bronze.
- Dorottya Udvar is explicitly credited as a Sundance development, not as Aki's project.
- Service details, experience, contact address and £16/hour regular-block rate come from the supplied CV and service sheet.
- The prospect CSV informed the audience; it is not included in the public site.
- PDF downloads are copies of the supplied documents. Email links open a visitor's email application; no message is sent by the website.
- Confirm that the current contact address, rate and named practice reference remain appropriate when launching. Replace the PDFs alongside any copy changes.
- The site does not claim UK professional registration or offer independent regulatory approval.

## Accessibility and motion

Semantic sections, visible navigation on mobile, keyboard focus outlines, a skip link, readable contrast, and responsive layouts. Decorative motion can be paused and respects the operating system's reduced-motion preference. Content and contact links work with JavaScript disabled. Google Fonts is the only external page resource; local fallback fonts are provided. No analytics, cookies or contact-data storage are included.

## Implementation note

The prescribed Sites initializer failed due to an unresolved `@clack/prompts` dependency. This self-contained static implementation matches the main Sundance site's HTML/CSS/JS structure and requires no runtime packages.
