// Full-screen menu
(function () {
  var menu = document.getElementById('menu'), open = document.querySelector('[data-menu-open]');
  if (!menu || !open) return;
  var close = menu.querySelector('[data-menu-close]');
  function show(v) {
    menu.hidden = !v;
    document.body.classList.toggle('menu-open', v);
    open.setAttribute('aria-expanded', v);
    (v ? close : open).focus();
  }
  open.addEventListener('click', function () { show(true); });
  close.addEventListener('click', function () { show(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) show(false); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) { menu.hidden = true; document.body.classList.remove('menu-open'); } });
})();

// "Next table": works out the coming Sunday in Vancouver time, so the date is always right without anyone updating it.
(function () {
  var el = document.querySelector('[data-next]');
  if (!el) return;
  try {
    var parts = {};
    new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Vancouver', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', hourCycle: 'h23', weekday: 'short' })
      .formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });
    var dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday);
    var target = Number(el.dataset.day), endHour = Number(el.dataset.end);
    var days = (target - dow + 7) % 7;
    if (days === 0 && Number(parts.hour) >= endHour) days = 7;
    var d = new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day) + days));
    var date = d.toLocaleDateString('en-CA', { timeZone: 'UTC', weekday: 'long', month: 'long', day: 'numeric' });
    var away = days === 0 ? 'That’s today.' : days === 1 ? 'That’s tomorrow.' : 'That’s ' + days + ' days from now.';
    el.querySelector('strong').textContent = date + ', ' + el.dataset.time;
    el.querySelector('[data-away]').textContent = away;
  } catch (e) {}
})();

// Forms without a form key open the visitor's email app with the message filled in.
document.querySelectorAll('form[data-mailto]').forEach(function (f) {
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var lines = [];
    f.querySelectorAll('input:not([type=hidden]):not(.hp), select, textarea').forEach(function (el) {
      if (el.value) lines.push(el.dataset.label + ': ' + el.value);
    });
    location.href = 'mailto:' + f.dataset.mailto + '?subject=' + encodeURIComponent(f.dataset.subject) + '&body=' + encodeURIComponent(lines.join('\n'));
  });
});

// Cookie notice: shown until the visitor presses OK. Information only; nothing is blocked.
(function () {
  var note = document.querySelector('[data-cookie-note]');
  if (!note) return;
  var key = 'holb-cookie-notice-ok';
  try { if (localStorage.getItem(key)) return; } catch (e) {}
  note.hidden = false;
  note.querySelector('[data-cookie-ok]').addEventListener('click', function () {
    note.hidden = true;
    try { localStorage.setItem(key, '1'); } catch (e) {}
  });
})();

// Home page header: clear over the photo, solid once the visitor scrolls.
(function () {
  var h = document.querySelector('.site-header.over');
  if (!h) return;
  function update() { h.classList.toggle('scrolled', window.scrollY > 40); }
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

// Special services (Christmas and so on) hide themselves the day after they happen.
(function () {
  var today;
  try { today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Vancouver' }).format(new Date()); } catch (e) { return; }
  document.querySelectorAll('[data-until]').forEach(function (el) {
    if (today > el.dataset.until) el.hidden = true;
  });
})();
