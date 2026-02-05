# Flowcraft Fulfio

**Professional Apparel Manufacturer & Supplier Website**

A modern, responsive website showcasing sustainable clothing manufacturing services with multilingual support (English, Italian, Dutch) and seamless navigation.

[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://flowcraft-fulfio.vercel.app/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Multilingual Support**: English, Italian (IT), and Dutch (NL) translations
- **Service Pages**: Detailed pages for various manufacturing services
  - Private Label Clothing
  - Sustainable Clothing Manufacturing
  - Cut & Sew Manufacturing
  - Small Batch Production
  - OEM Clothing
  - Embroidery Services
  - Eco-Friendly Packaging
- **Product Categories**: Dedicated pages for different apparel types
  - T-Shirts
  - Hoodies
  - Jeans
  - Leggings
  - Loungewear
  - Activewear
- **Interactive Navigation**: Side menu with smooth animations
- **Modern UI/UX**: Built with Tailwind CSS and AOS (Animate On Scroll)
- **Contact Form**: Easy-to-use get-in-touch page
- **Blog Section**: Read our blog for industry insights

---

## 🚀 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Tailwind CSS for styling
- **JavaScript**: Vanilla JS for interactivity
  - `main.js`: Core navigation and menu functionality
  - `translations.js`: Internationalization (i18n) support
- **Libraries**:
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library

---

## 📁 Project Structure

```
flowcraft.fulfio/
├── css/
│   └── styles.css              # Custom styles
├── js/
│   ├── main.js                 # Main navigation & interactivity
│   └── translations.js         # Language translations
├── i18n/
│   ├── en.json                 # English translations
│   ├── it.json                 # Italian translations
│   └── nl.json                 # Dutch translations
├── index.html                   # Homepage
├── about.html                   # About page
├── menu.html                    # Services menu
├── production.html              # Production page
├── sustainability.html          # Sustainability initiatives
├── get-in-touch.html           # Contact form
├── our-stories.html            # Company stories
├── read-our-blog.html          # Blog listing
│
├── Product Pages:
├── tshirt.html                  # T-shirt manufacturing
├── hoodie.html                  # Hoodie manufacturing
├── jeans.html                   # Jeans manufacturing
├── legging.html                 # Leggings manufacturing
├── loungewear.html             # Loungewear manufacturing
├── activewear.html             # Activewear manufacturing
│
├── Service Pages:
├── private-label-clothing.html
├── sustainable-clothing.html
├── cut-sew.html
├── small-batch.html
├── oem-clothing.html
├── embroidery.html
├── eco-packaging.html
├── apparel-services.html
│
└── README.md                    # This file
```

---

## 🛠️ Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/SaiVinay023/flowcraft.fulfio.git
cd flowcraft.fulfio
```

2. **Open locally**

You can open `index.html` directly in your browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. **Navigate to**

```
http://localhost:8000
```

---

## 🌍 Multi-Language Support

The website supports three languages:

- **English (EN)** - Default
- **Italian (IT)**
- **Dutch (NL)**

Translations are stored in `i18n/` folder and managed through `js/translations.js`. The language preference is saved in browser's `localStorage`.

### Adding a New Language

1. Create a new JSON file in `i18n/` folder (e.g., `fr.json` for French)
2. Copy the structure from `i18n/en.json`
3. Translate all keys
4. Add the language option to the language selector in HTML files
5. Update `js/translations.js` to include the new language

---

## 🎨 Customization

### Changing Colors

Edit the Tailwind CSS classes in your HTML files or add custom CSS in `css/styles.css`.

### Modifying Content

Each HTML page can be edited directly. Key sections:

- **Hero sections**: Top banner with call-to-action
- **Service descriptions**: Middle content sections
- **Contact information**: Footer and get-in-touch page

### Adding New Pages

1. Create a new HTML file
2. Copy the structure from an existing page
3. Update the `<title>` and content
4. Add navigation links in the side menu
5. Update `main.js` if needed for special functionality

---

## 📱 Navigation

The site features:

- **Fixed Top Menu**: Hamburger button to open side menu
- **Side Menu**: Slide-in navigation with all links
- **Language Switcher**: Dropdown to change language
- **Smooth Scrolling**: For anchor links within pages
- **Active Link Highlighting**: Current page is highlighted

---

## 🚢 Deployment

### Vercel (Recommended)

This site is deployed on Vercel:

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with default settings
4. Your site will be live at `https://your-project.vercel.app`

### GitHub Pages

1. Go to repository Settings
2. Navigate to Pages section
3. Select source branch (main)
4. Save and wait for deployment
5. Access at `https://username.github.io/flowcraft.fulfio`

### Other Hosting

Since this is a static site, you can deploy to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static hosting service

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**SaiVinay Manda**

- GitHub: [@SaiVinay023](https://github.com/SaiVinay023)
- Portfolio: [Your Portfolio Link]

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/SaiVinay023/flowcraft.fulfio/issues).

---

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

## 📝 Notes

- All images should be added to an `assets/images/` directory
- The site uses CDN links for Tailwind CSS and AOS library
- For production, consider self-hosting these libraries
- Optimize images before deployment
- Test across different browsers and devices

---

**Made with ❤️ for sustainable apparel manufacturing**
