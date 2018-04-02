$(document).ready(function() {
//Создает переменные для кнопки и для меню
	var pull = $("#pull");
	var nav = $("#mobile-nav");

	//Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){

		// Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

		// Открываем/скрываем меню
		$(nav).slideToggle();
	});

	// При изменении размера окна в большую сторону, если меню было скрыто, показываем его
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 720 && nav.is(':hidden')) {
			nav.removeAttr('style');
		}
	});
});