# Harihar Medical Store Website

A premium React + Vite website for a trusted local pharmacy in Bilaspur, built with a clean healthcare aesthetic and modern mobile-first design.

## Project overview

This site is a static, client-side React application for a local pharmacy. It includes:

- a branded homepage with hero, trust stats, and service features
- about, services, inquiry, and contact pages
- animated UI motion and premium mobile polish
- WhatsApp quick inquiry and direct call actions
- centralized site content in a single data module

## Tech stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons
- React Router DOM

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal.

## Edit shop details

All editable store information is located in `src/data/siteData.js`.

Key fields to update:

- `heroData.phone`
- `heroData.whatsappLink`
- `contactInfo.phone`
- `contactInfo.whatsappLink`
- `contactCards` address, hours, and support details
- service cards, testimonials, FAQ items, and about copy

Any brand-wide text or links in the app come from this centralized module.

## Deployment

### Build for production

```bash
npm run build
```

### Deploy to Vercel

1. Connect your repository to Vercel.
2. Set the project root to this folder.
3. Configure the build command:

```bash
npm run build
```

4. Configure the output directory:

```bash
dist
```

The site is fully static and does not require a backend.

## Deployment-ready checks

- Real contact details are configured in `src/data/siteData.js`
- WhatsApp and call links are built from the same data file
- SEO title and meta description are set in `index.html`
- Routing uses React Router with pages for Home, About, Services, Inquiry, and Contact
- The app builds successfully with `npm run build`
- Mobile and desktop layouts are polished for premium UX

## EmailJS integration

This project supports EmailJS form submission without a backend. To enable it:

1. Install EmailJS browser SDK:
   ```bash
   npm install @emailjs/browser
   ```
2. Copy `.env.example` to `.env` and set your keys:
   ```bash
   cp .env.example .env
   ```
3. Add your EmailJS credentials to `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```
4. Configure your EmailJS template with fields:
   - `form_type`
   - `subject`
   - `name`
   - `phone`
   - `email`
   - `medicine`
   - `message`
   - `prescription_notes`

The form logic is implemented in `src/components/ContactForm.jsx` and the reusable EmailJS helper is in `src/utils/emailService.js`.
