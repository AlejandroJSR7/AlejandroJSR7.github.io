// Xumak Colombia
// Alejandro Sosa

$('.recent-work').parallax({imageSrc: 'images/bg/bg-parralax-1.1.jpg'});
$('.blog-home').parallax({imageSrc: 'images/bg/bg-parralax-2.jpg'});
$('#testimonialSlider').lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 14
});

$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});