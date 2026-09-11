# Portfolio skeleton

A minimal, editorial-style personal portfolio built with Next.js (App Router).

## Structure

```
app/
  layout.jsx       — fonts (Fraunces + IBM Plex Sans) and page metadata
  page.jsx          — composes all sections
  globals.css       — design tokens + all component styles
components/
  Nav.jsx
  Hero.jsx
  About.jsx
  Projects.jsx       — section wrapper
  ProjectCard.jsx     — single reusable project card (image, title, blurb, stack, links)
  Skills.jsx
  Experience.jsx      — shared timeline for experience + education
  Contact.jsx
  Footer.jsx
lib/
  data.js           — all placeholder content lives here (profile, projects, skills, experience)
```

## To make it yours

1. Run `npm install` then `npm run dev`.
2. Edit `lib/data.js` — every piece of text and every link on the site is pulled from here.
3. Drop real screenshots into `public/projects/` and update the `image` paths in `data.js`. Use consistent aspect ratios (4:3 works well with the current card layout) for visual rhythm across cards.
4. Add a real `resume.pdf` to `public/` and point `profile.resumeHref` at it.
5. Swap in your own social links and email in `profile`.

## Design notes

- Two typefaces only: **Fraunces** (display/serif, used for headings and a few accent labels) and **IBM Plex Sans** (body/UI).
- One accent color (`--accent`, a deep pine green) used sparingly — org names in the timeline, hover states. Everything else is ink, graphite, and paper.
- The only non-interactive motion is a single staggered fade-up on the hero at load. Everything else (project image scale, underline links) only animates in response to a hover.
- Project cards alternate media/text sides down the page instead of sitting in a uniform grid, so the project list reads like an editorial spread rather than a card grid.
