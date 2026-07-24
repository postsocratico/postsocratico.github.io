document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".line");
  const lnEl = document.querySelector("[data-ln]");
  if (lnEl) lnEl.textContent = `Ln 1, Col 1`;

  lines.forEach((line, i) => {
    line.addEventListener("click", () => {
      lines.forEach(l => l.classList.remove("hl"));
      line.classList.add("hl");
      if (lnEl) lnEl.textContent = `Ln ${i + 1}, Col 1`;
    });
  });
});
