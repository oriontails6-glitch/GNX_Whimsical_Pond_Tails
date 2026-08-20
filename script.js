/* ============================================================
   SCRIPT.JS — builds the page from characters.js
   You should NOT need to edit this file when adding characters.
   Just edit characters.js instead.
============================================================= */

function cardHTML(person) {
  const backName = person.backName || person.name;
  return `
      <div class="card" tabindex="0">
        <div class="card-inner">
          <div class="card-front">
            <img src="${person.img}" alt="${person.name}" loading="lazy">
            <div class="card-label">
              <span class="card-name">${person.name}</span>
              <span class="card-role">${person.role}</span>
            </div>
            <span class="flip-hint">tap ↻</span>
          </div>
          <div class="card-back">
            <span class="card-name back-name">${backName}</span>
            <p class="card-bio">${person.bio}</p>
            <span class="flip-hint">tap ↩</span>
          </div>
        </div>
      </div>`;
}

function sectionHTML(section) {
  const cards = section.data.map(cardHTML).join("\n");
  return `
    <section class="pond-section" id="sec-${section.id}">
      <h2 class="section-title">${section.label}</h2>
      <div class="card-grid">
        ${cards}
      </div>
    </section>`;
}

// Render all sections
document.getElementById("mainContent").innerHTML =
  SECTIONS.map(sectionHTML).join("\n");

// Render nav buttons
document.getElementById("navBar").innerHTML =
  SECTIONS.map(s => `<button class="nav-btn" data-target="sec-${s.id}">${s.label}</button>`).join("\n");

// Flip interaction
document.querySelectorAll(".card").forEach(function (card) {
  function toggle() { card.classList.toggle("flipped"); }
  card.addEventListener("click", toggle);
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
});

// Nav scroll
var navBtns = document.querySelectorAll(".nav-btn");
navBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var target = document.getElementById(btn.dataset.target);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Highlight active nav section on scroll
var sections = document.querySelectorAll(".pond-section");
if ("IntersectionObserver" in window) {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navBtns.forEach(function (b) { b.classList.remove("active"); });
        var match = document.querySelector('.nav-btn[data-target="' + entry.target.id + '"]');
        if (match) match.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });
  sections.forEach(function (s) { obs.observe(s); });
}