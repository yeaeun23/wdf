// faq.js

function showAnswer() {
	$('div.question').on('click', function () {
		var display = $(this).next('div.answer').css('display');
		if (display == 'none') {
			$('div.answer').slideUp();
			$(this).children('span.q-arrow').html("▼");
			$(this).next('div.answer').slideDown();
		} else if (display == 'block') {
			$(this).children('span.q-arrow').html("▲");
			$(this).next('div.answer').slideUp();
		}
	});
}
