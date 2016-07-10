$(document).ready(function(){

  var modal = document.getElementById("modal-contact");
  var btnOpen = document.getElementById("openModalContact");
  var btnClose = document.getElementById("closeModalContact");

  btnOpen.onclick = function () {
    modal.style.display = "block";
  }

  btnClose.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function () {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});

$(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate({scrollTop: targetOffset}, 500);
          return false;
        }
      }
   });
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
		$('html, body').animate({scrollTop : 0}, 500);
		return false;
	});
	
});