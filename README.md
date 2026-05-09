# TechWithChizi — React + Vite Website

## Stack
- **Vite 5** — fast dev server & build tool
- **React 18** — UI
- **React Router v6** — multi-page routing
- **Tailwind CSS v3** — styling
- **EmailJS** — contact form delivery

## Folder structure
```
techwithchizi/
├── index.html               ← Vite root entry
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env                     ← your EmailJS keys (never commit this)
├── .gitignore
└── src/
    ├── main.jsx             ← React entry point
    ├── App.jsx              ← Router + layout
    ├── index.css            ← Tailwind + global styles
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── PageHero.jsx
    │   ├── CTABanner.jsx
    │   └── ServiceCard.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        └── Contact.jsx
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # preview the build locally
```

## Deploying to Vercel

1. Push to GitHub (the .env is gitignored — your keys stay local)
2. Import repo on vercel.com
3. Add these Environment Variables in Vercel dashboard → Settings → Environment Variables:

| Key                        | Value               |
|----------------------------|---------------------|
| VITE_EMAILJS_SERVICE_ID    | service_blc9w0l     |
| VITE_EMAILJS_TEMPLATE_ID   | template_ce00lwg    |
| VITE_EMAILJS_PUBLIC_KEY    | Brw86Ublrw_yTEfyM   |

4. Deploy ✅

## Customisation checklist
- [ ] Logo — replace SVG in Navbar.jsx & Footer.jsx with `<img src="/logo.png" />`
- [ ] WhatsApp — update the wa.me link in Footer.jsx and Contact.jsx
- [ ] Leadership photo — replace SVG placeholder in About.jsx with `<img src="/covenant.jpg" />`
- [ ] Portfolio — swap gradient placeholders in Home.jsx with real screenshots
- [ ] Social links — update hrefs in Footer.jsx
