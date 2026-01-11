(function(){
  const LANG_KEY = 'immi-lang';
  const select = document.getElementById('lang-select');
  const labels = { en: 'English', zh: '中文', fr: 'Français', hi: 'हिन्दी' };

  function setValue(lang){
    if (!select) return;
    select.value = lang;
  }

  function applyLang(lang){
    try { localStorage.setItem(LANG_KEY, lang); } catch(e){}
    if (window.translatePage) window.translatePage(lang);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const saved = (function(){ try { return localStorage.getItem(LANG_KEY) || 'en'; } catch(e){ return 'en'; }})();
    // populate select if missing options
    if (select) {
      // ensure options exist (in case HTML omitted some)
      Object.keys(labels).forEach(code => {
        if (![...select.options].some(o => o.value === code)) {
          const o = document.createElement('option');
          o.value = code; o.textContent = labels[code];
          select.appendChild(o);
        }
      });
      setValue(saved);
      select.addEventListener('change', (e) => {
        applyLang(e.target.value);
      });
    }

    // ensure page honour saved language on load
    applyLang(saved);
  });
})();
