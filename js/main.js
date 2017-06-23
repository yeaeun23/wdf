// main.js

function mainTimer() {
	setInterval(mainBgFade, 4500);
}

function mainBgFade() {
	$('.main-section-bg>ul>li:last-child').fadeOut(2000, function () {
		$(this).prependTo('.main-section-bg>ul');
		$(this).css('display', 'block');
	});
}

function newsSlide() {
	var swiper = new Swiper('.recent-news-list', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
		paginationType: 'bullets',
		slidesPerView: 3,
		slidesPerGroup: 3,
		autoplay: 5000,
		autoplayDisableOnInteraction: false
	});
}
