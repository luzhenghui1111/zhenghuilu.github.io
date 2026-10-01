function applyLanguage(lang) {
  const isChinese = lang === "zh";

  document.documentElement.lang = isChinese ? "zh-CN" : "en";

  document.querySelectorAll(".lang-en").forEach((el) => {
    el.hidden = isChinese;
  });

  document.querySelectorAll(".lang-zh").forEach((el) => {
    el.hidden = !isChinese;
  });

  document.querySelectorAll('[data-lang="en"]').forEach((button) => {
    button.classList.toggle("active", !isChinese);
    button.setAttribute("aria-pressed", String(!isChinese));
  });

  document.querySelectorAll('[data-lang="zh"]').forEach((button) => {
    button.classList.toggle("active", isChinese);
    button.setAttribute("aria-pressed", String(isChinese));
  });

  localStorage.setItem("preferredLanguage", isChinese ? "zh" : "en");
}

document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("preferredLanguage") || "en";

  applyLanguage(savedLanguage);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", function () {
      applyLanguage(this.getAttribute("data-lang"));
    });
  });
});
