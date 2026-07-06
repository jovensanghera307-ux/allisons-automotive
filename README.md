# Allison's Automotive — Website

Static website for Allison's Automotive, an auto repair shop at
791 S Dupont Hwy Unit 7, New Castle, DE 19720 — (302) 565-8108.

Built with plain HTML/CSS/JS. No build step, no dependencies — any static
host serves it as-is.

## Structure

```
index.html        Home — hero, services overview, testimonials
about.html        About — story and values
services.html     Services — detailed list + FAQ (with FAQPage schema)
contact.html      Contact — phone, hours, form, Google Map embed
404.html          Not-found page (picked up automatically by Netlify/GitHub Pages)
css/styles.css    Single stylesheet (design tokens in :root at the top)
js/main.js        Mobile nav, scroll reveal, footer year, active nav link
favicon.svg       Favicon
sitemap.xml       Sitemap (placeholder domain — see checklist)
robots.txt        Robots file (placeholder domain — see checklist)
```

## Launch checklist

Do these before the site goes live:

1. **Domain** — search the project for `REPLACE-WITH-DOMAIN.com` and replace
   every occurrence with the real domain (canonical tags, OG tags,
   sitemap.xml, robots.txt, JSON-LD in index.html).
   ⚠ `allisonsautomotive.com` is already taken by an unrelated shop in Los
   Angeles — confirm the client's actual domain before buying anything.
2. **Contact form** — create a free form at https://formspree.io, set the
   client's email as recipient, and replace `YOUR_FORM_ID` in contact.html.
   Until then the form does not send.
3. **Photos** — get originals from the client (shop exterior with signage,
   work in progress, the owner). Do NOT pull photos from the Google listing:
   most of them show other businesses. Drop images in an `images/` folder,
   compress to WebP, and add to the hero (index) and About page.
4. **Claims sign-off** — have the client confirm: "Same Day" service claim
   (home page stat panel), body/collision work offered in-house, and the
   About-page story framing.
5. **After launch** — submit the sitemap in Google Search Console and add
   the website link to the Google Business Profile.

## Editing content

- Colors and fonts are CSS variables at the top of `css/styles.css`
  (`--color-accent` is the red used everywhere).
- Hours appear in four places: topbar, contact page table, footer, and the
  JSON-LD block in index.html. Change all four together.
- Phone number appears as `tel:+13025658108` links throughout — find and
  replace if it ever changes.

## Deploying

Any static host works. Easiest options:

- **Netlify**: drag the project folder onto https://app.netlify.com/drop
  (free, instant staging URL; connect the domain later).
- **GitHub Pages / Vercel / Cloudflare Pages**: push the repo and point the
  host at it. No build command needed.
