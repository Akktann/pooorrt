// Находим элементы по id
var nav = document.getElementById("nav");
var themeBtn = document.getElementById("themeBtn");

// Функция 1: мобильное меню
// Нажали на кнопку «Меню» - показать или спрятать меню (класс open)
document.getElementById("menuBtn").onclick = function () {
  nav.classList.toggle("open");
};
// Нажали внутри меню - меню закрывается
nav.onclick = function () {
  nav.classList.remove("open");
};

// Функция 2: тёмная и светлая тема
themeBtn.onclick = function () {
  // включить или выключить класс dark у body
  document.body.classList.toggle("dark");

  // сменить надпись на кнопке
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Светлая тема";
  } else {
    themeBtn.textContent = "Тёмная тема";
  }
};
