const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
const langBtn = document.getElementById('langToggle');

const i18n = {
  en: {
    logo: 'JMH',
    title: 'JMH',
    tagline: 'Rocks',
    navBand: 'The Band',
    navContact: 'Contact',
    bandLabel: 'The Band',
    memberEdward: 'Edward',
    memberDino: 'Dinaz',
    guitar: 'Guitar',
    keys: 'Keys & Vocals',
    drums: 'Drums',
    copyright: '\u00a9 2026 JMH',
  },
  ru: {
    logo: 'ЖМЫХ',
    title: 'ЖМЫХ',
    tagline: 'Жжот',
    navBand: 'Группа',
    navContact: 'Контакт',
    bandLabel: 'Группа',
    memberEdward: 'Эдуард',
    memberDino: 'Диназар',
    guitar: 'Гитара',
    keys: 'Клавиши и вокал',
    drums: 'Ударные',
    copyright: '\u00a9 2026 ЖМЫХ',
  },
};

function setLang(lang) {
  const strings = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (strings[key] != null) el.textContent = strings[key];
  });
  document.documentElement.lang = lang;
  langBtn.textContent = lang === 'en' ? 'RU' : 'EN';
  localStorage.setItem('lang', lang);
}

const savedLang = localStorage.getItem('lang') || 'ru';
setLang(savedLang);

langBtn.addEventListener('click', () => {
  setLang(document.documentElement.lang === 'en' ? 'ru' : 'en');
});

// Scroll
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});
