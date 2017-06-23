// common.js

function headerBgFade() {
	$('div#header-background div:gt(0)').hide();
	setInterval(function () {
		$('div#header-background :first-child').fadeOut(3000).next('div').fadeIn(3000).end().appendTo('div#header-background');
	}, 3000);
}
