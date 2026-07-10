// Allison's Automotive — site scripts

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Header depth on scroll
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Highlight current page in nav
  var page = window.location.pathname.split("/").pop() || "index.html";
  if (page.indexOf(".") === -1) {
    page += ".html";
  }
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    if (link.getAttribute("href") === page) {
      link.classList.add("active");
    }
  });

  // Rotating review quote in the hero
  var quoteEl = document.getElementById("hero-quote");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (quoteEl && !reducedMotion) {
    var quotes = [
      '"HANDS DOWN the most knowledgeable mechanic in the area."',
      '"The nicest, most professional, honest businessman I have ever met." — Peggy M.',
      '"Nobody could even look at my car for two weeks — then I found Allison\'s." — Lily H.',
      '"All my warning lights came on — Allison\'s knew exactly what to do." — Tara C.'
    ];
    var quoteIndex = 0;
    setInterval(function () {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      quoteEl.classList.add("fading");
      setTimeout(function () {
        quoteEl.textContent = quotes[quoteIndex];
        quoteEl.classList.remove("fading");
      }, 400);
    }, 5000);
  }

  // Scroll-reveal animation
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("visible");
    });
  }
});
