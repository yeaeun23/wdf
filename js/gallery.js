// gallery.js

function loadMoreGallery() {
	// li의 개수 (사진 개수)
	photoNum = $('div.gallery-list>ul>li').length;
	// li의 높이값 (margin 포함)
	liHeight = $('div.gallery-list>ul>li').outerHeight(true);
	// ul의 전체 높이값
	ulTotalHeight = liHeight * Math.ceil(photoNum / 4);

	$('div.gallery-load-btn').on('click', function () {
		var ulHeight = $('div.gallery-list>ul').height();
		var scrollHeight = $('body').scrollTop();

		if (ulHeight < ulTotalHeight) {
			if (ulHeight + (liHeight * 3) <= ulTotalHeight) {
				$('div.gallery-list>ul').css('height', '+=' + (liHeight * 3) + 'px');
				$('html, body').animate({
					scrollTop: scrollHeight + liHeight * 3
				}, 400);
			} else if (ulHeight + (liHeight * 2) <= ulTotalHeight) {
				$('div.gallery-list>ul').css('height', '+=' + liHeight * 2 + 'px');
				$('html, body').animate({
					scrollTop: scrollHeight + liHeight * 2
				}, 400);
			} else if (ulHeight + (liHeight * 1) <= ulTotalHeight) {
				$('div.gallery-list>ul').css('height', '+=' + liHeight * 1 + 'px');
				$('html, body').animate({
					scrollTop: scrollHeight + liHeight * 1
				}, 400);
			}
		} else {
			$('div.gallery-load-btn').css('visibility', 'hidden');
		}
	});
}

function popupGallery() {
	$('div.gallery-list>ul>li').on('click', popupShow);

	$('p.popup-arrow-right').on('click', nextPhotoShow);
	$(document).keydown(function (e) { // 오른쪽 방향키
		if (e.keyCode == 39 && photoNo != photoNum) {
			nextPhotoShow();
		}
	});

	$('p.popup-arrow-left').on('click', prevPhotoShow);
	$(document).keydown(function (e) { // 왼쪽 방향키
		if (e.keyCode == 37 && photoNo != 1) {
			prevPhotoShow();
		}
	});

	$('div#popup-content').on('click', popupClose);
	$(document).keydown(function (e) { // ESC키
		if (e.keyCode == 27) {
			popupClose();
		}
	});
}

function popupShow() {
	photoNo = $(this).children('img').attr('class');

	$('div#gallery-popup').show();
	$('div#popup-content').html('<img src="./img/gallery/photo' + photoNo + '.jpg" alt="PHOTO" class="' + photoNo + '">');

	if (photoNum >= 2) {
		if (photoNo == photoNum) {
			$('p.popup-arrow-right').css('display', 'none');
			$('p.popup-arrow-left').css('display', 'block');
		} else if (photoNo == 1) {
			$('p.popup-arrow-right').css('display', 'block');
			$('p.popup-arrow-left').css('display', 'none');
		} else {
			$('p.popup-arrow-right').css('display', 'block');
			$('p.popup-arrow-left').css('display', 'block');
		}
	} else {
		$('p.popup-arrow-right').css('display', 'none');
		$('p.popup-arrow-left').css('display', 'none');
	}
}

function nextPhotoShow() {
	photoNo = parseInt(photoNo) + 1;
	$('div#popup-content').html('<img src="./img/gallery/photo' + photoNo + '.jpg" alt="PHOTO" class="' + photoNo + '">');

	if (photoNo == photoNum) {
		$('p.popup-arrow-right').css('display', 'none');
	}
	if (photoNo == 2) {
		$('p.popup-arrow-left').css('display', 'block');
	}
}

function prevPhotoShow() {
	photoNo = parseInt(photoNo) - 1;
	$('div#popup-content').html('<img src="./img/gallery/photo' + photoNo + '.jpg" alt="PHOTO" class="' + photoNo + '">');

	if (photoNo == 1) {
		$('p.popup-arrow-left').css('display', 'none');
	}
	if (photoNo == photoNum - 1) {
		$('p.popup-arrow-right').css('display', 'block');
	}
}

function popupClose() {
	$('div#gallery-popup').hide();
}
