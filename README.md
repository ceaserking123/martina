# Martina Uremu Eghwrudjakpor: Portfolio

A Next.js (App Router) build of the portfolio site, with GSAP for the hero
entrance, the scroll reveals, and the animated nav menu. White background
throughout, on purpose. See `app/globals.css`.

The visual language (full-bleed cover images, mono captions, a numbered work
list, spec-list detail rows) follows the Plywood Framer template as a
reference, restructured around Dr. Eghwrudjakpor's actual practice: a
printmaker and educator, not a shop.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

`npm run build && npm start` runs it the way it will run in production.

## Adding photographs

Every image on the site is an honest placeholder ("Image pending" /
"Photograph pending") until you add a real one. All the content, including
the project list, timeline, publications, bio text, and contact details,
lives in one file: **`lib/data.ts`**. See `public/projects/README.md` and
`public/about/README.md` for exactly how to drop in photos and wire them up.
You don't need to touch any component code to add images or new project
entries. Just edit `lib/data.ts`.

## Wiring up the contact form

The contact form is fully built (client form to `/api/contact` to email),
but it needs one piece from you before it can actually send anything: an
email provider. It's already wired for [Resend](https://resend.com) (they
have a free tier and a five-minute signup):

1. Create a Resend account and an API key.
2. Create a file called `.env.local` in the project root:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_TO_EMAIL=martinaokoro562@gmail.com
   ```
3. Restart the dev server (or redeploy).

Until those two variables are set, the form honestly tells visitors it isn't
connected yet and points them to the email address directly. It never
pretends to send something it didn't.

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the Next.js team):
push this project to a GitHub repo, import it on vercel.com, add the two
environment variables above in the project's Settings, Environment
Variables, and deploy. Any other Node host that runs `npm run build` /
`npm start` works too.

## Project structure

```
app/
  layout.tsx          Root layout, loads the Google Fonts stylesheet
  globals.css          All design tokens and component styles
  page.tsx              Home: hero, work strip, projects, path, practice, contact
  about/page.tsx        About page
  research/page.tsx     Research/publications page
  api/contact/route.ts   Contact form to Resend
components/           One component per section (Nav, Hero, WorkStrip,
                       ProjectsGrid, Timeline, Practice, ContactForm, Footer)
lib/data.ts            All copy and content. Edit this, not the components
public/projects/       Work photos go here
public/about/           About-page photos go here
```

## Notes

- `npm audit` will flag a low-severity issue in `postcss` (a build-time
  dependency of Next.js 14 itself, not something this project depends on
  directly). It's a source-map path-traversal issue that only matters if you
  run the dev server against untrusted CSS files, which isn't a concern for
  this site. It clears once you're ready to move to Next.js 15/16.
- The site is a deliberate single (white/light) theme with no dark mode
  toggle.
