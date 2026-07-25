# The Good Consultant website

A static, responsive website ready for GitHub Pages — the personal advisory
site for Dave Sammut, independent technology advisor to founders, investors,
and CTOs.

## Files

- `index.html` — homepage
- `speaking.html` — talks, podcasts, workshops, and leadership sessions
- `styles.css` — all styling
- `script.js` — navigation, animations, and link behaviour
- `site.config.js` — your email, LinkedIn, and GitHub links
- `posts/` — simple static article pages
- `assets/favicon.svg` — site icon
- `robots.txt`, `sitemap.xml` — search engine discovery

## Placeholder content to replace before publishing

- **Testimonials** (`index.html`, `#testimonials`) — illustrative quotes only.
- **Speaking** (`speaking.html`) — illustrative talks, podcasts, and workshops only.

## Personalise it

Open `site.config.js` and add your real links:

```js
window.SITE_CONFIG = {
  email: "davesammut@gmail.com",
  linkedin: "https://www.linkedin.com/in/dave-sammut-2559453/",
  github: "https://github.com/davesammut"
};
```

Edit the text directly in `index.html`.

## Publish with GitHub Pages

1. Copy all files into the root of your GitHub repository.
2. Commit and push.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save.

Your site will publish at the GitHub Pages URL configured for the repository.

## Custom domain

For `www.thegoodconsultant.com`, add a file named `CNAME` containing:

```text
www.thegoodconsultant.com
```

Then configure your GoDaddy DNS records to point to GitHub Pages. GitHub provides the exact DNS values in the Pages settings.

## Notes

The three article pages are draft starter content. Replace or expand them before publishing.
