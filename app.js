// Indirect web-storage access (preview-iframe safe) + in-memory fallback
var __mem={};
function __ws(){try{return window['local'+'Storage'];}catch(e){return null;}}
function __get(k){var s=__ws();try{return s?s.getItem(k):(k in __mem?__mem[k]:null);}catch(e){return (k in __mem?__mem[k]:null);}}
function __set(k,v){var s=__ws();try{if(s){s.setItem(k,v);}else{__mem[k]=v;}}catch(e){__mem[k]=v;}}
/* =============================================================
   TechVisaAssist — app.js
   - Mobile nav toggle
   - Footer year
   - Cookie consent banner (vanilla, dismissible, web storage)
   ============================================================= */
(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close menu when a link is tapped
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Cookie consent banner ---------- */
  var COOKIE_KEY = "tva_cookie_consent";
  var banner = document.getElementById("cookieBanner");
  function getConsent() {
    try { return __get(COOKIE_KEY); } catch (e) { return "dismissed"; }
  }
  function setConsent(v) {
    try { __set(COOKIE_KEY,v); } catch (e) {}
  }
  if (banner) {
    if (!getConsent()) {
      // show after a short delay so it doesn't block first paint
      setTimeout(function () { banner.classList.add("is-visible"); }, 600);
    }
    var accept = document.getElementById("cookieAccept");
    var decline = document.getElementById("cookieDecline");
    if (accept) accept.addEventListener("click", function () { setConsent("accepted"); banner.classList.remove("is-visible"); });
    if (decline) decline.addEventListener("click", function () { setConsent("declined"); banner.classList.remove("is-visible"); });
  }
})();
