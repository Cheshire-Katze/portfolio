// динамичское меню, выезжающее слева
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');  // объявляем переменные, присваиваем им элементы с помощью document.querySelector('.имя класса')

hamburger.addEventListener('click', () => { //отслеживаем все клики по hamburger, создаем функцию, чтобы сказать, что делать после события "click"
    menu.classList.add('active'); // добавляем классу "menu" класс "active"
});

close.addEventListener('click', () => { //отслеживаем все клики по close (крестику в выезжающем меню), создаем функцию, чтобы сказать, что делать после события "click"
    menu.classList.remove('active'); // удаляем из класса "menu" класс "active"
});

