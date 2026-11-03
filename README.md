# ndrarendra.github.io

Personal site of Adyan Marendra Ramadhani: data, AI and full stack engineer in Seoul.
Live at https://ndrarendra.github.io/

## How this repository is laid out

- `site/` is the source: a Next.js app with Tailwind CSS and Framer Motion.
- Everything else at the top level (`index.html`, `about/`, `projects/`, `contact/`, `_next/`, `images/`) is the built site that GitHub Pages serves. Don't edit those files by hand; they are replaced on every deploy.

## Updating the site

1. Edit the text in `site/src/data/site.js` (headline, biography, skills, experience, education, certifications, projects).
2. Build and copy the site to the top level:
   ```bash
   cd site
   npm install      # first time only
   npm run deploy
   ```
3. Commit and push. GitHub Pages publishes the change within a minute or two.

To preview while editing, run `npm run dev` inside `site/` and open http://localhost:3000.

- **Photo:** add a square photo as `site/public/images/profile/ramadhani.jpg`. Until it exists, the site shows your initials.
- **Resume:** add a PDF as `site/public/resume.pdf` and set `resume: "/resume.pdf"` in `site/src/data/site.js`. Until then, the hero button opens LinkedIn.

## Credits

- Design and starter assets: [CodeBucks, Next.js Developer Portfolio Starter Code](https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code)
- Light bulb illustration: [Lukasz Adam](https://lukaszadam.com/illustrations)
- Icons: [Iconify](https://iconify.design/)
- Font: Montserrat, self-hosted through [Fontsource](https://fontsource.org/)
