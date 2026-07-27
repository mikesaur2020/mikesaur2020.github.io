/* =============================================================================
   DMSaur  ·  script.js
   Minimal, dependency-free progressive enhancement.
   Everything here is optional: with JavaScript disabled the page is fully
   usable (native <details> menu, static year fallback, real anchor links).
   ========================================================================== */
(function () {
  "use strict";

  // 1) Current year in the footer (falls back to the hard-coded 2026 in HTML).
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // 2) Close the mobile disclosure menu after a link is tapped, so the page
  //    doesn't scroll with an open menu still covering the content.
  var nav = document.getElementById("nav-disclosure");
  if (nav) {
    nav.addEventListener("click", function (e) {
      var link = e.target.closest("a");
      if (link && nav.open) {
        nav.open = false;
      }
    });

    // Close the menu on Escape for keyboard users.
    nav.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.open) {
        nav.open = false;
        var summary = nav.querySelector("summary");
        if (summary) summary.focus();
      }
    });

    // Close the menu when focus or a tap leaves it entirely.
    document.addEventListener("click", function (e) {
      if (nav.open && !nav.contains(e.target)) {
        nav.open = false;
      }
    });
  }
})();
