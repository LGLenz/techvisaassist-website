# TechVisaAssist Website

Marketing & booking website for **TechVisaAssist by Kestura** — a B2C IT consultancy offering personal guidance through German e-government services and visa / residence-permit applications.

Live site → **[techvisaassist.com](https://techvisaassist.com)**

---

## Tech stack

| Layer | What's used |
|---|---|
| Markup | Plain HTML5 (single-page, `index.html`) |
| Styles | Vanilla CSS (`styles.css`) |
| Behaviour | Vanilla JavaScript (`app.js`, `i18n.js`) — zero build tools, zero npm |
| Fonts | General Sans (Fontshare) + Inter (Google Fonts) |
| Hosting | GitHub Pages (custom domain, HTTPS) |
| CI/CD | GitHub Actions (`pages.yml`) — auto-deploys on every push to `main` |

---

## Repository layout

```
techvisaassist-website/
├── index.html          # Main page (all sections in one file)
├── styles.css          # All styles
├── app.js              # Mobile nav, footer year, cookie consent
├── i18n.js             # Vanilla JS i18n (EN / DE / SW)
├── datenschutz.html    # Privacy policy (Datenschutz)
├── impressum.html      # Legal notice (Impressum)
├── assets/             # Section images (hero.png, about.png, booking.png)
├── CNAME               # Custom domain: techvisaassist.com
└── .github/
    └── workflows/
        └── pages.yml   # GitHub Pages deployment workflow
```

---

## i18n (internationalisation)

The site ships with three languages:

| Code | Language | Status |
|---|---|---|
| `en` | English | ✅ Complete |
| `de` | German | ✅ Complete |
| `sw` | Kiswahili | 🚧 Partial (nav, hero, section headings — full translation TODO) |

Language is persisted in `localStorage` under the key `tva_lang`. HTML elements use `data-i18n`, `data-i18n-html`, and `data-i18n-attr` attributes; `i18n.js` resolves them at runtime with an automatic English fallback for any missing key.

---

## Local development

No build step is required. Open the project in any static-file server, for example:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then open [http://localhost:8080](http://localhost:8080).

---

## Deployment

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/pages.yml`), which:

1. Checks out the repository.
2. Configures GitHub Pages.
3. Uploads the entire repository root as the Pages artifact.
4. Deploys to the configured GitHub Pages environment (served at `techvisaassist.com`).

To trigger a manual re-deploy, use **Actions → Deploy to GitHub Pages → Run workflow** in the GitHub UI.

---

## Cookie consent

The banner is controlled entirely by `app.js`. It stores the visitor's choice (`accepted` / `declined`) in `localStorage` under the key `tva_cookie_consent`. Only essential cookies (language + consent preference) are set — no tracking, advertising, or third-party cookies.

---

## Legal pages

- **Impressum** — `impressum.html`
- **Datenschutz** (Privacy Policy) — `datenschutz.html`

Both are linked from the site footer.

---

## Operated by

Elias Lenz · [Kestura UG (haftungsbeschränkt) i.G.](https://kestura.de)
