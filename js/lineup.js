// lineup.js

function scrollTop() {
	$('.top').click(function () {
		$('html, body').animate({
			scrollTop: 320
		}, 250);
		return false;
	});
}
