// router.js - SPA Router for Flowcraft

// Page content definitions
const pageContent = {
  'home': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-5xl md:text-6xl font-bold mb-6" data-i18n="heroTitle">Welcome to FlowCraft</h1>
      <p class="text-xl mb-8" data-i18n="heroSubtitle">Your trusted B2B clothing manufacturing partner</p>
      <button class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Get Started</button>
    </section>
  `,
  'private-label': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4" data-i18n="privateLabel">Private Label Clothing Manufacturer</h1>
      <p class="text-lg" data-i18n="privateLabelSubtitle">Custom branding for your clothing line</p>
    </section>
    <section class="py-20 container mx-auto px-6">
      <h2 class="text-3xl font-bold mb-6">Why Choose Private Label?</h2>
      <p class="text-gray-700 mb-4">Build your own brand with our comprehensive private label manufacturing services.</p>
    </section>
  `,
  'sustainable': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Sustainable Clothing Manufacturer</h1>
      <p class="text-lg">Eco-friendly production for a better tomorrow</p>
    </section>
    <section class="py-20 container mx-auto px-6">
      <h2 class="text-3xl font-bold mb-6">Our Sustainability Commitment</h2>
      <p class="text-gray-700">We use organic materials and ethical manufacturing practices.</p>
    </section>
  `,
  'cut-sew': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Cut and Sew Manufacturer</h1>
      <p class="text-lg">Custom patterns and precision manufacturing</p>
    </section>
  `,
  'small-batch': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Small Batch Clothing Manufacturer</h1>
      <p class="text-lg">Perfect for startups and boutique brands</p>
    </section>
  `,
  'oem': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">OEM Clothing Manufacturer</h1>
      <p class="text-lg">Custom manufacturing for brands under your own label</p>
    </section>
  `,
  'embroidery': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Embroidery Manufacturer</h1>
      <p class="text-lg">High-quality embroidery services</p>
    </section>
  `,
  'eco-packaging': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Eco-Friendly Apparel Packaging</h1>
      <p class="text-lg">Sustainable packaging solutions</p>
    </section>
  `,
  'tshirt': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">T-shirt Manufacturer</h1>
      <p class="text-lg">Quality t-shirt production at scale</p>
    </section>
  `,
  'activewear': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Activewear Manufacturer</h1>
      <p class="text-lg">Performance clothing for active lifestyles</p>
    </section>
  `,
  'hoodie': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Hoodie Manufacturer</h1>
      <p class="text-lg">Premium hoodies and sweatshirts</p>
    </section>
  `,
  'legging': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Legging Manufacturer</h1>
      <p class="text-lg">Comfortable and stylish leggings</p>
    </section>
  `,
  'jeans': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Jeans Manufacturer</h1>
      <p class="text-lg">Quality denim production</p>
    </section>
  `,
  'loungewear': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Loungewear Manufacturer</h1>
      <p class="text-lg">Comfortable home and leisure wear</p>
    </section>
  `,
  'stories': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Stories</h1>
      <p class="text-lg">Learn about our journey and values</p>
    </section>
  `,
  'contact': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
      <p class="text-lg">Contact us for manufacturing inquiries</p>
    </section>
    <section class="py-20 container mx-auto px-6">
      <form class="max-w-2xl mx-auto">
        <input type="text" placeholder="Name" class="w-full border p-3 rounded mb-4" />
        <input type="email" placeholder="Email" class="w-full border p-3 rounded mb-4" />
        <textarea placeholder="Message" class="w-full border p-3 rounded mb-4 h-32"></textarea>
        <button class="bg-indigo-600 text-white px-8 py-3 rounded-lg">Send Message</button>
      </form>
    </section>
  `,
  'sustainability': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Sustainability Initiative</h1>
      <p class="text-lg">Our commitment to the environment</p>
    </section>
  `,
  'blog': `
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-64 flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Read Our Blog</h1>
      <p class="text-lg">Industry insights and updates</p>
    </section>
  `
};

// Router function
function loadPage(page) {
  const content = pageContent[page] || pageContent['home'];
  const appContent = document.getElementById('app-content');
  if (appContent) {
    appContent.innerHTML = content;
    // Re-initialize AOS animations
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
    // Scroll to top
    window.scrollTo(0, 0);
  }
}

// Handle hash changes
function handleRoute() {
  const hash = window.location.hash.slice(1); // Remove #
  loadPage(hash || 'home');
}

// Initialize router
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);
