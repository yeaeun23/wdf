// news.js

function liFilter() {
	$('dl.news-category-list>dd>a').on('click', function () {
		// 카테고리 선택
		$('dl.news-category-list>dd>a').removeClass('on');
		$(this).addClass('on');

		// 뉴스 필터링
		var category = $(this).attr('name');
		var filterName = '.' + category;
		$('div.news-list>ul>li').css('display', 'none').filter(filterName).css('display', 'block');

		// 페이지 출력
		var liNum = $('div.news-list>ul>li' + filterName).length;
		var pageNum = Math.ceil(liNum / 9);
		switch (pageNum) {
			case 1:
				$('div.news-page').html('<p class="arrow-pre">◀</p><p class="on"><a href="#" name="1">1</a></p><p class="arrow-next">▶</p>');
				$('div.news-list>ul').css('margin-top', '0');
				break;
			case 2:
				$('div.news-page').html('<p class="arrow-pre">◀</p><p class="on"><a href="#" name="1">1</a></p><p><a href="#" name="2">2</a></p><p class="arrow-next">▶</p>');
				$('div.news-list>ul').css('margin-top', '0');
				break;
			case 3:
				$('div.news-page').html('<p class="arrow-pre">◀</p><p class="on"><a href="#" name="1">1</a></p><p><a href="#" name="2">2</a></p><p><a href="#" name="3">3</a></p><p class="arrow-next">▶</p>');
				$('div.news-list>ul').css('margin-top', '0');
				break;
			case 4:
				$('div.news-page').html('<p class="arrow-pre">◀</p><p class="on"><a href="#" name="1">1</a></p><p><a href="#" name="2">2</a></p><p><a href="#" name="3">3</a></p><p><a href="#" name="4">4</a></p><p class="arrow-next">▶</p>');
				$('div.news-list>ul').css('margin-top', '0');
				break;
		}
		return false;
	});

	$('div.news-page').on('click', 'a', function () {
		// 페이지 선택
		$('div.news-page>p').removeClass('on');
		$(this).parent().addClass('on');

		// 페이지 넘기기
		var page = $(this).attr('name');
		var liHeight = $('div.news-list>ul>li').height();
		switch (page) {
			case '1':
				$('div.news-list>ul').css('margin-top', '0px');
				break;
			case '2':
				$('div.news-list>ul').css('margin-top', '-' + liHeight * 3 + 'px');
				break;
			case '3':
				$('div.news-list>ul').css('margin-top', '-' + liHeight * 6 + 'px');
				break;
			case '4':
				$('div.news-list>ul').css('margin-top', '-' + liHeight * 9 + 'px');
				break;
		}
		return false;
	});
}
