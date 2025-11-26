// YEAR FOOTER
document.getElementById("year").textContent = new Date().getFullYear();

// THEME TOGGLE
const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  toggleButton.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggleButton.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  toggleButton.textContent = next === "dark" ? "☀️" : "🌙";
});
