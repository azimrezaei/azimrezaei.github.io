// Footer year, light/dark toggle, collapsible abstracts. No dependencies.
(function () {
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- theme ---------- */
  var btn = document.getElementById('themeBtn');
  if (btn) {
    var current = function () {
      var set = document.documentElement.getAttribute('data-theme');
      if (set) return set;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
    var label = function () { btn.textContent = current() === 'dark' ? 'Light' : 'Dark'; };

    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      label();
    });

    label();
  }

  /* ---------- abstracts: clamp to two lines, with a toggle ----------
     Done in JS so that without it the full abstract stays visible. */
  Array.prototype.forEach.call(document.querySelectorAll('.abstract'), function (el) {
    el.classList.add('clamped');

    // Nothing to reveal if it already fits in two lines.
    if (el.scrollHeight <= el.clientHeight + 1) {
      el.classList.remove('clamped');
      return;
    }

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'read-more';
    toggle.textContent = 'Read more';
    toggle.setAttribute('aria-expanded', 'false');
    el.insertAdjacentElement('afterend', toggle);

    toggle.addEventListener('click', function () {
      var expanded = !el.classList.toggle('clamped');
      toggle.textContent = expanded ? 'Show less' : 'Read more';
      toggle.setAttribute('aria-expanded', String(expanded));
    });
  });
})();
