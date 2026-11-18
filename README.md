# House of Living Bread website

A small, fast website. Sermons come from YouTube automatically, so the site rarely needs touching.

## Changing church details

Everything that might change lives in one file: `src/site.config.mjs`.
Service times, address, phone, email, social links, the giving link, the pastor and the form key are all there.
Edit the value, save, and the whole site updates.

| To do this | Change this in `src/site.config.mjs` |
| --- | --- |
| Show the Give page and menu item | `giveUrl` |
| Send forms straight to the church inbox | `formKey` (free key from web3forms.com) |
| Show the pastor on the About page | `pastor` |
| Add a midweek service | add a line to `services` |
| Set the real web address | `url` |

Page wording lives in `src/pages/` (one file per page). Colours and fonts are at the top of `src/styles/global.css`.

## Replacing the logo

Put the new square logo (mark on its navy background) at `scripts/logo-source.png` and run `npm run assets`.

## Running it

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # production files go to dist/
```

Any static host works (Vercel, Netlify, Cloudflare Pages). Build command `npm run build`, output folder `dist`.

## Hosting

The site is hosted on Vercel and deploys automatically from the `main` branch of this repository.
Push a change to `main` and the live site updates about a minute later.
