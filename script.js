document.addEventListener("DOMContentLoaded", () => {
  const config = window.SITE_CONFIG || {};
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".menu-toggle");

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".site-nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll("[data-link]").forEach(link => {
    const key = link.dataset.link;
    const value = config[key];
    if (!value) {
      link.addEventListener("click", event => {
        event.preventDefault();
        alert(`Update ${key} in site.config.js`);
      });
      return;
    }
    link.href = key === "email" ? `mailto:${value}` : value;
    if (key !== "email") {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
