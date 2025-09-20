let translations = {};
const langSelector = document.getElementById('language-select');

fetch('i18n/translations.json')
  .then(res => res.json())
  .then(data => {
    translations = data;
    applyTranslations('en'); // default
  });

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

if(langSelector){
  langSelector.addEventListener('change', e => applyTranslations(e.target.value));
}
