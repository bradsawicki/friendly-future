$(document).ready(function () {

	$(window).on('resize', function() {
	    hero_height();
	});
	hero_height();

    $("select").change(function () {
        var str = "";
        str = $(this).find(":selected").text();
        $(this).next(".out").text(str);
    }).trigger('change');
    
    
    function hero_height() {
        var y = $(window).height();
        if(y > 780) {
            $('.hero').css('height', y);
        }
    }

})