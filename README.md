# mikesaur2020.github.io

Personal website for **Mike Saur (DMSaur)** — a builder who turns real problems into
practical tools and ships them.

> Ideas are easy. Shipping is the adventure.

A single-page, static site: hand-written HTML, modern CSS, and a few lines of
vanilla JavaScript. **No frameworks, no build step, no dependencies, no
analytics, no cookies, no tracking.**

---

## Live

- Currently deployed via **GitHub Pages** at: <https://mikesaur2020.github.io/>
- Eventual primary custom domain: **https://dmsaur.com/** (see *Custom domain* below)

---

## Project structure

```
.
├── index.html            # The whole site (one page, anchored sections)
├── styles.css            # Design tokens + all styling (light/dark, responsive, a11y)
├── script.js             # Minimal progressive enhancement (footer year, mobile menu)
├── favicon.svg           # Scalable favicon (mountain mark)
├── 404.html              # Custom not-found page (GitHub Pages serves this automatically)
├── robots.txt            # Allows all crawlers; points to the sitemap
├── sitemap.xml           # Single-URL sitemap for the homepage
├── assets/
│   └── social-preview.svg  # Open Graph / Twitter card image
└── README.md
```

There is **nothing to install or build.** Open `index.html` in a browser, or serve
the folder with any static server.

### Preview locally

```bash
python3 -m http.server 8080
```

Then visit <http://localhost:8080/>.

---

## Deploy to GitHub Pages

This repository is named `mikesaur2020.github.io`, which GitHub serves as your
**user site** at the repository root.

1. Create a public repo named **`mikesaur2020.github.io`** under your account.
2. Push this folder's contents to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: “Deploy from a
   branch”**, branch **`main`**, folder **`/ (root)`**.
4. Wait for the Pages build, then open <https://mikesaur2020.github.io/>.

No workflow file, CNAME, or `docs/` folder is required for the default root deploy.

---

## Changing the site URL (one place to look)

Every absolute URL that must change when the domain moves is marked with a
`SITE URL` comment. When you move from `mikesaur2020.github.io` to `dmsaur.com`,
update the host in these five spots:

| File | What to change |
|------|----------------|
| `index.html` | `<link rel="canonical">` |
| `index.html` | `og:url` and `twitter:url` |
| `index.html` | `og:image` and `twitter:image` |
| `sitemap.xml` | `<loc>` |
| `robots.txt` | `Sitemap:` line |

A block comment at the top of `index.html` restates this list.

### Custom domain (dmsaur.com) — do this deliberately

This repo does **not** include a `CNAME` file and does **not** configure DNS.
When you're ready to switch to `dmsaur.com`:

1. Add your DNS records at your domain registrar (an `A`/`ALIAS` or `CNAME` to
   GitHub Pages, per GitHub's current docs).
2. In **Settings → Pages → Custom domain**, enter `dmsaur.com` (this creates the
   `CNAME` file), and enable **Enforce HTTPS**.
3. Update the five `SITE URL` spots above.

Nothing on DNS or the custom domain has been set up for you — those steps are
intentionally left in your hands.

---

## Adding your links (optional)

The Contact section contains a **commented-out** block of optional profile links
(GitHub, LinkedIn, App Store). They are comments on purpose so the page never
renders a broken or `#` placeholder link.

To add one:

1. Open `index.html`, find `OPTIONAL LINK CONFIG` in the Contact section.
2. Replace the placeholder URL with your real profile URL.
3. Delete the `<!--` / `-->` around the `<ul class="social-links">` block.

Do **not** ship those links with placeholder (`YOUR_USERNAME`, `#`, …) URLs.

The Generator Power Advisor App Store listing link can go in that same block once
the app is live.

---

## Generator Power Advisor links

The featured project points to its own subdomain (unchanged by this site's domain):

- App: <https://gpa.dmsaur.com>
- Privacy: <https://gpa.dmsaur.com/privacy/>
- Support: <https://gpa.dmsaur.com/support/>

The iPhone app's status is stated only as **“submitted to the App Store.”** If/when
that changes, update the status line in the Featured Project section and the
"Out the door" timeline entry in `index.html`.

---

## Social preview image

`assets/social-preview.svg` is a hand-made Open Graph / Twitter card.

**Compatibility note:** some social networks (notably X/Twitter) do not render
**SVG** preview images. For the widest support, export a **1200×630 PNG** from the
SVG and point `og:image` / `twitter:image` at it. For example:

```bash
# with rsvg-convert (brew install librsvg) or any SVG->PNG tool
rsvg-convert -w 1200 -h 630 assets/social-preview.svg -o assets/social-preview.png
```

Then change the two `og:image` / `twitter:image` lines in `index.html` to the
`.png`.

---

## Accessibility

Built to target **WCAG 2.1 AA**:

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a logical
  heading order.
- A skip-to-content link.
- Visible keyboard focus styles (`:focus-visible`).
- Color contrast checked against AA for body and meta text in light and dark modes.
- Respects `prefers-reduced-motion` (disables smooth scroll and transitions).
- Respects `prefers-color-scheme` for automatic light/dark.
- The mobile menu uses a native `<details>` disclosure, so it works **without
  JavaScript** and is keyboard-operable.

---

## Privacy

No analytics, cookies, tracking pixels, fonts loaded from third parties, or
external requests of any kind. Everything is served from this origin.

---

## License / content

Site content and design © Mike Saur. Code is straightforward static HTML/CSS/JS;
reuse the structure freely as a reference.
