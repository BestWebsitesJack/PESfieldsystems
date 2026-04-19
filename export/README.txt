PES FIELD SYSTEMS WEBSITE - EXPORT PACKAGE (UPDATED WITH OPTION 5!)
=====================================================================

This folder contains all the code for the PES Field Systems website with the NEW Option 5 showcase design integrated!

MAIN FILE:
----------
App.tsx - This is the complete website in a single React component file.

🆕 WHAT'S NEW - OPTION 5 INTEGRATION:
--------------------------------------
✨ The services section now features a stunning FULL-WIDTH SHOWCASE DESIGN with:
- Large immersive hero images (500px tall cards)
- Parallax hover effects (images scale on hover)
- Gradient overlays in PES brand colors
- 4 major service categories instead of 8 small cards:
  1. Adaptive Fields (Blue gradient) - Miracle League focus
  2. Professional Athletic Fields (Green gradient) - Football, Soccer, Baseball, Lacrosse
  3. Custom Projects (Cyan gradient) - Golf, Training Facilities
  4. Parks & Recreation (Emerald gradient) - Playgrounds, Daycare, Community
- Feature bullets with colored dots
- Large, bold typography
- Strong call-to-action buttons
- Bottom CTA section for consultations

WHAT THIS WEBSITE INCLUDES:
---------------------------
✓ Home Page with:
  - Hero section with patented technology badge
  - Benefits section (4 key advantages)
  - 🆕 NEW SERVICES SHOWCASE (Option 5 full-width cards)
  - Board members section
  - Google reviews (5-star rating)
  - Instagram feed
  - FAQ accordion
  - Architect specs download section
  - "Around the Field" CTA for playground business

✓ Gallery Page with:
  - Project portfolio with filtering tabs (All/Baseball/Soccer/Football/Adaptive)
  - Stats bar (100+ projects, 15 states, 25 Miracle League fields)
  - Before & After transformations section

✓ Contact Page with:
  - Professional quote request form
  - Contact information with icons
  - Social media links
  - Map placeholder section

✓ Navigation:
  - Sticky header with PES logo
  - Mobile-responsive menu
  - Footer with quick links and social media

DESIGN FEATURES:
----------------
- Athletic, bold, high-energy aesthetic (Design Option 3 style)
- PES brand colors: Blue-to-cyan gradients, green CTAs
- Full-width immersive service cards with background images
- Hover animations and parallax effects
- Professional sports photography from Unsplash
- Responsive design for all devices

DEPENDENCIES REQUIRED:
----------------------
This code uses the following packages that need to be installed:

- react
- lucide-react (for icons - including ArrowRight)
- Tailwind CSS (for styling)
- shadcn/ui components (Button, Card, Badge, Input, Textarea, Tabs, Accordion)

HOW TO USE THIS CODE:
---------------------
1. Copy the App.tsx file to your React project's /src/app/ directory
2. Make sure you have all the required UI components installed (or install shadcn/ui)
3. Ensure Tailwind CSS is configured in your project
4. Install lucide-react for icons: npm install lucide-react
5. The website uses state-based navigation (no React Router required)

CUSTOMIZATION:
--------------
To customize for your needs:
- Update contact information (email, phone, address)
- Replace placeholder images from Unsplash with actual project photos
  * Adaptive Fields: Line 324 (currently Miracle League field)
  * Professional Athletics: Line 350 (currently football field)
  * Custom Projects: Line 376 (currently golf course)
  * Parks & Recreation: Line 402 (currently soccer field)
- Update board member information
- Modify feature bullets in each service card
- Add real social media links
- Connect the contact form to your backend/email service

COLOR SCHEME:
-------------
Option 5 uses these gradient overlays:
- Adaptive Fields: Blue (#1e40af to #0e7490) - from-blue-900 to-blue-800
- Professional Athletic: Green (#14532d to #065f46) - from-green-900 to-green-800
- Custom Projects: Cyan (#164e63 to #155e75) - from-cyan-900 to-cyan-800
- Parks & Recreation: Emerald (#064e3b to #047857) - from-emerald-900 to-emerald-800

All CTAs use white buttons with the overlay color as text for consistency.

TECHNICAL NOTES:
----------------
- Each card is 500px tall for maximum impact
- Background images use `backgroundPosition: 'center 40%'` or 'center 50%'
- Parallax effect: `transform group-hover:scale-105 transition-transform duration-700`
- Gradient overlays: 95% opacity on left, 80% in middle, transparent on right
- Feature bullets use 2px colored dots with flex layout
- Bottom CTA has a subtle border and slate-50 background

MOBILE RESPONSIVE:
------------------
- Cards stack vertically on mobile
- Text remains readable with gradient overlays
- Buttons remain full-width and accessible
- Feature grid collapses to 2 columns then 1 column

For questions or support, refer to the original Figma Make project.

© 2025 PES Field Systems. All rights reserved.
Founded 2021 | U.S. Patent Pending
