const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

// Atualizar ano corrente
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Header com background dinâmico ao rolar
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// Menu Mobile
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

// Animação de entrada dos elementos
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Expandir / Recolher Especialidades
const toggleSpecialtiesBtn = document.getElementById('toggle-specialties');
const extraSpecialties = document.querySelectorAll('.specialty-extra');

toggleSpecialtiesBtn?.addEventListener('click', () => {
  const isExpanded = toggleSpecialtiesBtn.getAttribute('aria-expanded') === 'true';
  const newExpanded = !isExpanded;
  
  toggleSpecialtiesBtn.setAttribute('aria-expanded', String(newExpanded));
  extraSpecialties.forEach(card => card.classList.toggle('is-open', newExpanded));
  
  const btnText = toggleSpecialtiesBtn.querySelector('.btn-text');
  const chevron = toggleSpecialtiesBtn.querySelector('.chevron-icon');
  
  if (btnText) {
    btnText.textContent = newExpanded ? 'Ver menos especialidades' : 'Ver todas as especialidades (16 áreas)';
  }
  if (chevron) {
    chevron.style.transform = newExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
  }
});

// Expandir / Recolher Profissionais
const toggleTeamBtn = document.getElementById('toggle-team');
const extraTeam = document.querySelectorAll('.team-extra');

toggleTeamBtn?.addEventListener('click', () => {
  const isExpanded = toggleTeamBtn.getAttribute('aria-expanded') === 'true';
  const newExpanded = !isExpanded;
  
  toggleTeamBtn.setAttribute('aria-expanded', String(newExpanded));
  extraTeam.forEach(card => card.classList.toggle('is-open', newExpanded));
  
  const btnText = toggleTeamBtn.querySelector('.btn-text');
  const chevron = toggleTeamBtn.querySelector('.chevron-icon');
  
  if (btnText) {
    btnText.textContent = newExpanded ? 'Ver menos profissionais' : 'Ver mais profissionais da equipe';
  }
  if (chevron) {
    chevron.style.transform = newExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
  }
});
