# The Good Consultant website

A static, responsive website ready for GitHub Pages — a digital calling
card for Dave Sammut, independent technology advisor to founders, investors,
boards, and CTOs. It's built to reinforce reputation, not generate leads:
the homepage is short, Thinking and the Book carry most of the site's
weight, and the "Relationships" section (`#relationships` — deliberately
framed as relationships, not services) is the smallest on the page. It
intentionally does not market architecture, delivery, or transformation
services, and stays clear of anything that could read as competing with
Equal Experts.

## Files

- `index.html` — homepage
- `speaking.html` — talks, podcasts, workshops, and leadership sessions
- `book.html` — the living manuscript for *The Good Consultant*
- `book/` — full chapter drafts (currently `fire-seeking.html`, `storytelling.html`, `kind-is-not-good.html`, and `why-good-developers-behave-badly.html`)
- `styles.css` — all styling
- `script.js` — navigation, animations, and link behaviour
- `site.config.js` — your email, LinkedIn, and GitHub links
- `posts/` — Thinking: short, independent essays (a notebook, not a blog)
- `assets/favicon.svg` — site icon
- `robots.txt`, `sitemap.xml` — search engine discovery

## Placeholder content to replace before publishing

- **Speaking** (`speaking.html`) — illustrative talks, podcasts, and workshops only.

## Thinking vs. the Book

These are deliberately separate:

- **Thinking** (`posts/`) is a collection of short, independent essays —
  observations, stories, and patterns. They are not chapters and don't need
  to connect to each other.
- **The Book** (`book.html` + `book/`) is a single structured manuscript,
  *The Good Consultant*, organised as a six-part journey following the
  lifecycle of a consulting relationship (The Invitation → Joining →
  Understanding → Creating Change → The Human Side of Engineering →
  Leaving), not a reference list. Each chapter
  has a compelling title plus, where the title doesn't already say it, an
  italic subtitle naming the underlying concept (e.g. "Trust Is Your First
  Deliverable" / *Trust*) and a guiding question it answers. Most chapters
  follow the same five-part rhythm: Story → Observation → Principle →
  Approach → Reflection (see `book/fire-seeking.html`) — but that's a
  pattern, not a rule; `book/storytelling.html` and `book/kind-is-not-good.html`
  are straight essays, and that's fine too.
  `book.html` lists all 18 working chapter titles as a living manuscript —
  update each entry's status (`Notes only` → `Early draft` → linked) as
  chapters get written, rather than treating this as a changelog.

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

The Thinking articles and the Fire Seeking chapter are real starter content,
written in the intended voice — expand the notebook and the manuscript over
time rather than treating either as finished.
