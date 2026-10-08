// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? 'CLOSE' : 'MENU';
});
nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'MENU';
  })
);

// Live Eastern-time clock in hero
const clock = document.getElementById('clock');
const tick = () => {
  clock.textContent = new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false
  });
};
tick();
setInterval(tick, 30000);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// YouTube facades: show a thumbnail, load the player only on click
document.querySelectorAll('.yt').forEach(btn =>
  btn.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.id}?autoplay=1&rel=0&playsinline=1`;
    iframe.title = btn.getAttribute('aria-label').replace(/^Play: /, '');
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    btn.replaceWith(iframe);
  })
);
