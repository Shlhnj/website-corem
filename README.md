# CoREM website (Jekyll)

Site for the Center for Coastal Rehabilitation and Disaster Mitigation Studies
(CoREM / PKMBRP), Universitas Diponegoro. Built as a static Jekyll site so it
can be deployed directly on GitHub Pages, no build server required.

## Structure

```
_config.yml         Site settings (title, url, nav data, etc.)
_data/               Content as YAML — edit these instead of the templates
  nav.yml            Top navigation links
  research.yml        Research program cards
  publications.yml    Publication list
  team.yml            Team member cards
_layouts/            Page templates (default, page, post)
_includes/           Shared header/footer/head partials
_posts/              News items — one Markdown file per post
assets/css/style.scss  All site styling
assets/js/main.js      Scroll-reveal + mobile nav behavior
index.html, about.md, research.md, publications.md, team.md, contact.md
news/index.html      News listing page
```

Most day-to-day edits (adding a publication, a team member, a news post)
only require editing a YAML file in `_data/` or dropping a new file in
`_posts/` — no HTML/Liquid knowledge needed.

## Run it locally

Requires Ruby (3.x) and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Deploy on GitHub Pages

**Option A — user/organization site** (repo named `your-username.github.io`):

1. Create a GitHub repo named exactly `your-username.github.io`.
2. Push this project to it.
3. In `_config.yml`, set `baseurl: ""` and `url: "https://your-username.github.io"`.
4. In the repo's Settings → Pages, set the source to the `main` branch (root).
5. The site will be live at `https://your-username.github.io` within a minute or two.

**Option B — project site** (any other repo name, e.g. `corem-site`):

1. Create a GitHub repo, e.g. `corem-site`, and push this project to it.
2. In `_config.yml`, set `baseurl: "/corem-site"` (match your repo name) and
   `url: "https://your-username.github.io"`.
3. In the repo's Settings → Pages, set the source to the `main` branch (root).
4. The site will be live at `https://your-username.github.io/corem-site`.

GitHub Pages builds Jekyll sites automatically on every push, using the
`github-pages` gem pinned in the `Gemfile` — no GitHub Actions workflow is
needed for this setup.

## Adding a news post

Create a file in `_posts/` named `YYYY-MM-DD-title.md`:

```markdown
---
title: "Your headline"
---

Body text in Markdown.
```

It will appear automatically on the homepage and the News page, newest first.

## Content status

The publication list, team list, and program descriptions were assembled from
public journal records and the university research portal, since CoREM did
not previously have a public website. Review `_data/publications.yml`,
`_data/team.yml`, and `_data/research.yml` and correct anything before
treating this as the lab's official record.
