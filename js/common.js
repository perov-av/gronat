

$(document).ready(function(){
	
	// Аккордеон
	$('.faq__item-qw').click(function(){
		$(this).parent('.faq__item').toggleClass('active');
	});

	$('.sidebar-item').click(function(){
		$('.sidebar-item').removeClass('active');
		$(this).addClass('active');
	});

	// Кнопки сортировки
	$('.content-sort-item').click(function(){
		$('.content-sort-item').removeClass('active');
		$(this).addClass('active');
	});

	// Вызов основной формы
	$('.form_click').click(function () {
		$('.form_toggle').addClass('active')
	});
	$('.close').click(function () {
		$('.form_toggle').removeClass('active')
	});
	// Вывод сайдбара на мобильном
	$('.catalog__sidebar').click(function () {
		$(this).toggleClass('active')
	});


	// Сдайдер на главной
	$('.pop-products__carousel').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:4,
		slidesToScroll:4,
		speed:1000,
		easing:'ease',
		infinite:true,
		autoplay:true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}

			},
			// {
			// 	breakpoint: 500,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1,
			// 	}
			// }
		],
	});

});

$(document).ready(function() {
	$('.product__slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Фотография #%curr%</a> не может быть загружена.'
		}
	});
});


// Меню на мобилке
let toggle = document.querySelector ('.toggle');
let header__nav = document.querySelector ('.header__nav');
toggle.onclick = function() {
	toggle.classList.toggle('active')
	header__nav.classList.toggle('active')
}

// Сортировка по Цене и Рейтингу
document.querySelector('#price_up').onclick = function() {
	priceUp('data-price'); };
	
document.querySelector('#price_low').onclick = function() {
	priceLow('data-price'); };

	document.querySelector('#rate_low').onclick = function() {
	priceLow('data-rate'); };

function priceUp(sortType) {
	let products = document.querySelector ('.catalog__content-items');
	for (let i = 0; i < products.children.length; i++) {
		for (let j = i; j < products.children.length; j++) {
			if (+products.children[i].getAttribute(sortType) > +products.children[j].getAttribute(sortType)){
				replacedNode = products.replaceChild(products.children[j], products.children[i]);
				insertAfter(replacedNode, products.children[i])
			}
		}
	}
}
function priceLow(sortType) {
	let products = document.querySelector ('.catalog__content-items');
	for (let i = 0; i < products.children.length; i++) {
		for (let j = i; j < products.children.length; j++) {
			if (+products.children[i].getAttribute(sortType) < +products.children[j].getAttribute(sortType)){
				replacedNode = products.replaceChild(products.children[j], products.children[i]);
				insertAfter(replacedNode, products.children[i])
			}
		}
	}
}

function insertAfter(elem, refElem){
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}


let containerEl = document.querySelector('.catalog__content-items');
let mixer = mixitup(containerEl);





 