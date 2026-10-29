// === 1. Тема (localStorage #1) ===
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);
updateThemeButton();

themeBtn?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeButton();
});

function updateThemeButton() {
  if (!themeBtn) return;
  themeBtn.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
}

// === 2. Мобильное меню ===
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

// === 3. Поиск по блогу + сохранение запроса (localStorage #2) ===
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  const posts = document.querySelectorAll('.post');
  const noResults = document.getElementById('noResults');
  const lastQuery = localStorage.getItem('lastSearch') || '';
  searchInput.value = lastQuery;
  filterPosts(lastQuery);

  searchInput.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    localStorage.setItem('lastSearch', q);
    filterPosts(q);
  });

  function filterPosts(q) {
    let visible = 0;
    posts.forEach(post => {
      const text = (post.dataset.title + ' ' + post.textContent).toLowerCase();
      const match = text.includes(q);
      post.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    noResults.hidden = visible > 0;
  }
}

// === 4. Форма обратной связи ===
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name.length < 2 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || message.length < 10) {
      status.textContent = '❌ Проверьте поля: имя (≥2), корректный email, сообщение (≥10 символов).';
      status.style.color = '#ef4444';
      return;
    }
    status.textContent = `✅ Спасибо, ${name}! Сообщение отправлено (демо).`;
    status.style.color = '';
    form.reset();
    // Бонус: сохраним имя в localStorage
    localStorage.setItem('lastName', name);
  });
}