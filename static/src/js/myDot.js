
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-04-19 10:01:23
 * @version $Id$
 */
 
require(["jquery", "dot"], function($) {
	$(".a").dotdotdot();
	$(".b").dotdotdot({
		wrap: 'letter' //注：中文必须改为letter
	});
	function dot(){
		$(".c").append('<a class="toggle" href="#"><span class="open">[ 展开 ]</span><span class="close">[ 收起 ]</span></a>');
		$(".c").dotdotdot({after: 'a.toggle',wrap: 'letter'});
		$(".c").on('click', 'a.toggle', function() {
			$(".c").toggleClass('opened');
			if ($(".c").hasClass('opened')) {
				$(".c").trigger( 'destroy' );
			} else {
				$(".c").dotdotdot({after: 'a.toggle',wrap: 'letter'});
			}
			return false;
		});
	}
	var height1 = $(".inner").height();
	var height2 = $(".c").height();
	if(height1 > height2){
		dot();
	}
})
