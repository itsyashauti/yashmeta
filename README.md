# metaruleX

Production website for the metaruleX portfolio. Built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Run locally

1. Install Node.js (LTS).
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env.local` and fill in the EmailJS values.
4. Start the development server:

   ```bash
   npm run dev
   ```

## Production checks

```bash
npm run lint
npm run build
npm run start
```

Next.js builds the site into `.next`. Vercel uses this output directly; this project does not need a manually generated `index.html` or a static export.

## Deploy with Vercel

1. Push this project to a GitHub repository. `.env`, `.env.local`, and other environment files are ignored by Git; `.env.example` contains only the required variable names.
2. Import the repository into Vercel and keep the detected Next.js framework settings and default build output.
3. Add these environment variables in the Vercel project settings for Production (and Preview if needed):
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Redeploy after saving environment variables, then assign the purchased domain in Vercel and follow its DNS instructions.

The project images and videos are kept in `public/` and served as static assets. Video elements use on-demand loading where configured.
