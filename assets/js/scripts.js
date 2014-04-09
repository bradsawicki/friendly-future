$(document).ready(function () {

	$(window).on('resize', function() {
	    hero_height();
	});
	hero_height();
	nav_scroll();
	fixed_header();
	$(window).scroll(fixed_header);

    function hero_height() {
        var y = $(window).height();
        if(y > 780) {
            $('.hero').css('height', y);
        }
    }

    // Fixed Header
    function fixed_header() {
        var body = $('body');
        var header = $('.header');
        var header_height = header.height();
        var help = $('.help');
        var help_top = help.offset().top;
        var window_top = $(window).scrollTop();

        if (window_top > header_height) {
            body.addClass('scrolling');
        }else{
            body.removeClass('scrolling');
        }

        if (window_top > help_top) {
            header.addClass('show');
        }else{
            header.removeClass('show');
        }

        console.log(header_height);
    }

	// Nav Scroll
	function nav_scroll() {
        $('.logo a, .main-nav a[href*=#]:not([href=#]), .back-to-top a').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                || location.hostname == this.hostname) {
            
              var target = $(this.hash);
              var header = $('.header').height();
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top + 1
                }, 1000);
                return false;
              }
            }
        });
    }

    $("select").change(function () {
        var str = "";
        str = $(this).find(":selected").text();
        $(this).next(".out").text(str);
    }).trigger('change');
    

})