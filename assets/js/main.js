const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = siteNav ? [...siteNav.querySelectorAll('a[href^="#"]')] : [];
const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sections = navLinks
  .map((link) => {
    const id = link.getAttribute("href");
    return id ? document.querySelector(id) : null;
  })
  .filter(Boolean);

if (navLinks.length && sections.length) {
  const setActiveLink = () => {
    const currentSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= 140 && rect.bottom >= 140;
    });

    navLinks.forEach((link) => {
      const isActive = currentSection && link.getAttribute("href") === `#${currentSection.id}`;
      link.classList.toggle("is-active", Boolean(isActive));
    });
  };

  setActiveLink();
  window.addEventListener("scroll", setActiveLink, { passive: true });
}
