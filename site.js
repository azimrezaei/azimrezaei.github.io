// Footer year + light/dark toggle. No dependencies.
(function () {
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  var btn = document.getElementById('themeBtn');
  if (!btn) return;

  function current() {
    var set = document.documentElement.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function label() { btn.textContent = current() === 'dark' ? 'Light' : 'Dark'; }

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });

  label();
})();
