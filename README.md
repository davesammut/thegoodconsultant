# The Good Consultant website

A static, responsive website ready for GitHub Pages — the professional
home and body of work of Dave Sammut: technology consultant, practitioner,
writer, and speaker. It's deliberately not a services or advisory sales
site — there is no services list, no "hire me" CTA, and no commercial
enquiry channel. The homepage flow is Hero → Thinking (Notebook) → Book →
Speaking → About → Elsewhere (LinkedIn only). The governing principle:
show the experience, don't sell it. It intentionally does not market
architecture, delivery, or transformation services, and stays clear of
anything that could read as competing with Equal Experts.

**Note on scope**: an earlier iteration of this site had an explicit
"Relationships" section (Founder Advisor, Board & NED Advisor, VC Advisor,
Executive Thinking Partner) as its commercial core, and a separate task
had deliberately unlisted `speaking.html` from all navigation pending
review. Both were reversed by explicit instruction in a later session —
Relationships was removed entirely, and Speaking was made discoverable
again via nav, footer, and a homepage section. `speaking.html`'s own
content still contains literal "Placeholder event · Placeholder date"
labels throughout — it was never actually curated before being re-exposed.
Worth cleaning up before treating the site as finished.

## Files

- `index.html` — homepage
- `speaking.html` — talks, podcasts, workshops, and leadership sessions
- `book.html` — the living manuscript for *The Good Consultant*
- `book/` — full chapter drafts (currently `why-they-called-you.html`, `fire-seeking.html`, `storytelling.html`, `kind-is-not-good.html`, and `why-good-developers-behave-badly.html`)
- `styles.css` — all styling
- `script.js` — navigation, animations, and link behaviour
- `site.config.js` — your LinkedIn and GitHub links
- `posts/` — Thinking: short, independent essays (a notebook, not a blog)
- `assets/favicon.svg` — site icon
- `robots.txt`, `sitemap.xml` — search engine discovery

## Placeholder content to replace before publishing

- **Speaking** (`speaking.html`) — illustrative talks, podcasts, and workshops only.

## Notebook curation

`posts/index.html` deliberately lists only 3 posts at a time — currently a
single developing thread (`organisation-decide-as-fast-as-ai.html` →
`reversibility.html` → `judgement-becomes-expensive.html`), not an archive
of every post ever written. Seven earlier posts still exist as real files
(`organisational-story.html`, `workshop-that-failed.html`,
`architecture-diagrams-lie.html`, `fracture-planes.html`,
`ai-adoption.html`, `technical-due-diligence.html`,
`good-consulting.html`) and are reachable by direct link, but are
intentionally unlisted — some may return to the Notebook, some may become
Book material instead. Don't delete them; just leave them unlisted unless
asked to bring one back. Note: the homepage's Thinking teaser (`index.html`)
still references three of the now-unlisted posts — that's a known,
deliberate gap since this curation pass was scoped to `posts/index.html`
only.

## Thinking vs. the Book

These are deliberately separate:

- **Thinking** (`posts/`) is a collection of short, independent essays —
  observations, stories, and patterns. They are not chapters and don't need
  to connect to each other.
- **The Book** (`book.html` + `book/`) is a single structured manuscript,
  *The Good Consultant*, organised as a six-part journey following the
  lifecycle of a consulting relationship (Before the Contract → Joining →
  Understanding → Helping People Think → Creating Change → Leaving), not a
  reference list. Each chapter has a compelling title plus, where the title
  doesn't already say it, an italic subtitle naming the underlying concept
  (e.g. "Trust Is Your First Deliverable" / *Trust*) and a guiding question
  it answers. Most chapters follow the same five-part rhythm: Story →
  Observation → Principle → Approach → Reflection (see
  `book/fire-seeking.html`) — but that's a pattern, not a rule;
  `book/storytelling.html` and `book/kind-is-not-good.html` are straight
  essays, and that's fine too.
  `book.html` lists 25 entries as a living manuscript: 5 with a full online
  chapter drafted and linked (`why-they-called-you.html`, `fire-seeking.html`,
  `storytelling.html`, `kind-is-not-good.html`,
  `why-good-developers-behave-badly.html`), 19 still "Notes only" — including
  three added to give Part I a complete pre-sales arc (Promises and
  Guarantees, The Discovery Before Discovery, plus Why They Called You
  before it was drafted) and three newer placeholders elsewhere
  (Comfortable Being Uncomfortable, Finding the Space to Contribute,
  Reputation Compounds) — and one deliberate crossover: the Thinking essay
  "Every Organisation Tells Itself a Story" is also listed in Part III,
  linked back to `posts/organisational-story.html` and labelled "Published
  in Thinking" rather than a book-specific status. That crossover was
  requested explicitly; if it turns out not to be wanted, it's a one-line
  removal. Note also that the online chapters are deliberately abbreviated
  versions of the eventual book chapters — principle, selected observation,
  and reflection, not the full stories, Field Notes, and worked examples
  the print book will contain (see `book/why-they-called-you.html` for the
  clearest example of that restraint). Update each entry's status
  (`Notes only` → `Early draft` → linked) as chapters get written, rather
  than treating this as a changelog. Also introduces a recurring
  **Field Note** device
  (`.field-note` in `styles.css`) — short, standalone observations distinct
  from ordinary chapter prose; see `book/why-good-developers-behave-badly.html`
  for the pattern, and the explainer section on `book.html` itself.

## Personalise it

Open `site.config.js` and add your real links:

```js
window.SITE_CONFIG = {
  linkedin: "https://www.linkedin.com/in/dave-sammut-2559453/",
  github: "https://github.com/davesammut"
};
```

There's deliberately no `email` field — the site doesn't present a direct
commercial enquiry channel. LinkedIn is the sole external contact route
(see the closing "Continue the conversation" section in `index.html`).

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
