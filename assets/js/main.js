/* ======================================================================
   Salomon Moussinga Formation — interactions
   - header collant (ombre/flou au scroll)
   - menu mobile
   - révélation des sections au scroll (IntersectionObserver)
   - formulaire de devis : démonstration (pas d'envoi réel)
   ====================================================================== */
(function () {
  "use strict";

  /* ---- Header collant --------------------------------------------------- */
  var header = document.querySelector("[data-header]");
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Menu mobile ---------------------------------------------------- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var mobileNav = document.querySelector("[data-mobile-nav]");
  if (toggle && mobileNav) {
    var setNav = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      mobileNav.hidden = !open;
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    };
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
  }

  /* ---- Révélation au scroll ----------------------------------------- */
  var revealTargets = document.querySelectorAll(
    ".section, .hero__copy, .hero__media, .feature, .step, .fcard, .glass-card, .u-underline"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Formulaire de devis (démonstration) ------------------------- */
  var form = document.querySelector("[data-devis-form]");
  var status = document.querySelector("[data-form-status]");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.hidden = false;
      status.textContent =
        "Merci — votre demande est prête. Connectez ce formulaire à votre messagerie pour recevoir les envois.";
      form.reset();
    });
  }
})();
