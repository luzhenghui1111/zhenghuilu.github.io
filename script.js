function setLanguage(lang) {
  const body = document.body;

  body.classList.remove("lang-en-mode", "lang-zh-mode");

  if (lang === "zh") {
    body.classList.add("lang-zh-mode");
    document.documentElement.lang = "zh-CN";
  } else {
    body.classList.add("lang-en-mode");
    document.documentElement.lang = "en";
  }

  const enButtons = document.querySelectorAll('[data-lang="en"]');
  const zhButtons = document.querySelectorAll('[data-lang="zh"]');

  enButtons.forEach((button) => {
    button.classList.toggle("active", lang === "en");
  });

  zhButtons.forEach((button) => {
    button.classList.toggle("active", lang === "zh");
  });

  localStorage.setItem("preferredLanguage", lang);
}

document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage =
    localStorage.getItem("preferredLanguage") || "en";

  setLanguage(savedLanguage);

  const languageButtons = document.querySelectorAll("[data-lang]");

  languageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedLanguage = this.getAttribute("data-lang");

      setLanguage(selectedLanguage);
    });
  });
});
