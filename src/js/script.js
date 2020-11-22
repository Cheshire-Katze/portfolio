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

const percents = document.querySelectorAll('.skills__level-percent'), // объявили переменную и присвоили ей все указанные классы
    indicators = document.querySelectorAll('.skills__level-indicator span'); // объявили переменную и присвоили ей все span'ы
//console.log(indicators); // в консоле видно, что в переменную percents мы добавили 6 классов skills__level-percent

percents.forEach((item, i) => { //forEach - метод перебора; item - аргумент. Каждый элемент, который перебирается;  i - счетчик (1, 2, 3 и т.д)=> - стрелочная функция; {} - тело функции
    indicators[i].style.width = item.innerHTML; // indicators[i].style.width - присваиваем width число (содержимое элемента) взятое из элемента skills__level-percent с помощью innerHTML. innerHTML - позволяет "вытащить" из элемента его содержимое, в данном случае, число из skills__level-percent
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});