/* Crossfade Slider */

$('.about-carousel div').eq('0').addClass('active');

(function(window) {

  SlideCrossFade = {
    container: 'about-carousel',
    displayTime: 5000,
    fadeTime: 1500,

    start: function() {
      var self = this;
      $('.' + this.container + ' *').show();
      setInterval(function() { self.next(); }, this.displayTime);
    },

    next: function() {
      var $active = $('.' + this.container + ' .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('.' + this.container + ' *:first');
      $next.css('z-index', 2); 

      $active.fadeOut(this.fadeTime, function() {
        $active.css('z-index', 1).show().removeClass('active'); 
        $next.css('z-index', 3).addClass('active');
      });
    }
  };

  window.SlideCrossFade = SlideCrossFade;

})(this);

$(window).load(function() {
  SlideCrossFade.start();
});


$(document).ready(function(){ // Ready Start
	
	/* Scroll top on reload */	
	
	 $(this).scrollTop(0);
	 
	 /* TOP HEADER WHITE */
			
	function fadeout(){
		var ypos = window.pageYOffset;
		var header = $("#header");
		if( ypos > 150){
			header.addClass("solid");		
		}
		else if(ypos < 60){
			header.removeClass("solid");
		}
	}
	window.addEventListener('scroll', fadeout);
	
	/* Banner Parallax */

	function parallax(){
		var ypos = window.pageYOffset;
		$("#banner img").css('margin-top', (ypos * .5) + 'px');
	}
	window.addEventListener('scroll', parallax);

    /* X Symbol Spinner */

	function spinner(){
		var ypos = window.pageYOffset;
		if(ypos == 0){
			$("#banner .symbol").css('transform', 'rotate(0deg)' + ' scale(1)');
		}
		else if(ypos > 0){
			$("#banner .symbol").css('transform', 'rotate('+ (ypos * .5) +'deg)' + ' scale(0.'+ parseInt((100 - (ypos * .1))) +')');
		}
		$("#banner .symbol").css('opacity', (1 - (ypos * .006)));
		console.log((1 - (ypos * .5)) + " " + ypos);
	}
	window.addEventListener('scroll', spinner);

	/* Banner Text Effect */

	function textEffect(){
		var ypos = window.pageYOffset;
		if(ypos == 0){
			$("#banner h2").css('transform', 'scale(1)');
		}
		if(ypos > 0 && ypos < 180){
			$("#banner h2").css('transform', 'scale(' + (1 + (ypos * .01)) + ')');
		}
		$("#banner h2").css('opacity', (1 - (ypos * .006)));
	}
	window.addEventListener('scroll', textEffect);

	/* Other Videos OWL */

	$(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

/* Other Videos Fancybox */

$(".owl-carousel").on("click", ".fancy-box", function(e) {
	$.fancybox.open({
		href : $(this).attr("href"),
		type : 'iframe',
		padding : 5,
		margin : 30,
		helpers: {
            media: true
        }, 
		youtube: {
            autoplay: 1
        }
	});
	e.preventDefault();
});

// Adding overlay on About
	
}); // Ready End

// Window Load Start

$(window).load(function(){
	$("#banner").height($("#banner .slide").height());

	/* About Carousel */
	SlideCrossFade.start();

}); // Window Load End



// Resize Start

$(window).resize(function(){
	$("#banner").height($("#banner .slide").height());
}); // Resize End