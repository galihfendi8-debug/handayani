/* ══════════════════════════════════════════════════════════
   Handayani Kemuning — main.js
   ══════════════════════════════════════════════════════════ */


const PHONE = '6281329320305';

/* ── WhatsApp handler (inject wa.me link ke semua [data-wa]) ── */
function openWA(message) {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  if (typeof dataLayer !== 'undefined') {
    dataLayer.push({ event: 'wa_click', wa_phone: PHONE, wa_message: message, wa_url: url });
  }
  window.open(url, '_blank', 'noopener');
}

document.querySelectorAll('[data-wa]').forEach(el => {
  const message = el.getAttribute('data-wa') || 'Halo Handayani Kemuning, saya ingin konsultasi paket wisata.';
  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  el.setAttribute('href', waUrl);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener');
  el.addEventListener('click', e => {
    e.preventDefault();
    openWA(message);
  });
});

/* ── Mobile nav toggle ── */
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  // Tutup menu mobile saat klik link nav
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

/* ── Header scroll effect ── */
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

/* ── Galeri filter ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const galeriItems = document.querySelectorAll('.galeri-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    galeriItems.forEach(item => {
      const show = filter === 'semua' || item.getAttribute('data-cat') === filter;
      item.classList.toggle('hidden', !show);
    });
  });
});

/* ── FAQ accordion ── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-q').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('is-open');
    });
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('is-open');
    }
  });
});

/* ── Testimoni carousel (dots) ── */
const testiTrack = document.getElementById('testi-track');
const testiDots = document.querySelectorAll('#testi-dots .dot');
if (testiTrack && testiDots.length) {
  const cards = testiTrack.querySelectorAll('.testi-card');
  testiDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const i = Math.min(parseInt(dot.getAttribute('data-i'), 10) * 2, cards.length - 1);
      cards[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    });
  });
  let scrollTimeout;
  testiTrack.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const ratio = testiTrack.scrollLeft / (testiTrack.scrollWidth - testiTrack.clientWidth || 1);
      const activeIndex = Math.min(testiDots.length - 1, Math.round(ratio * (testiDots.length - 1)));
      testiDots.forEach((d, i) => d.classList.toggle('active', i === activeIndex));
    }, 80);
  }, { passive: true });
}

/* ── Scroll reveal (CSS-class based) ── */
const revealEls = document.querySelectorAll('.service-card, .pkg-card, .why-item, .testi-card');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        requestAnimationFrame(() => {
          e.target.classList.remove('reveal-hidden');
          e.target.classList.add('reveal-visible');
        });
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el, i) => {
    el.classList.add('reveal-hidden');
    el.style.transitionDelay = `${(i % 6) * 0.06}s`;
  });
  revealEls.forEach(el => io.observe(el));
}

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
if (sections.length && navLinks.length) {
  window.addEventListener('scroll', () => {
    let current = sections[0].id;
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

/* ── Footer year ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
