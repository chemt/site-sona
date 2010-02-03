
  //  Cufon - Font replacement settings 
  Cufon.replace('#slogan h2', {
    textShadow: '#f2f2f2 1px 1px'
  });
  Cufon.replace('.home-col-title h2');
  Cufon.replace('#ft-content h2');
  Cufon.now();

  // Match heights on homepage 2cols (disabled)
  // var h = $("#recent-work").height();
  // var newHeight = h - 929;
  // newHeight = 48 + newHeight;
  // $("#from-the-blog .home-col-header").css("padding-bottom",newHeight);

$(document).ready(function(){

  // Cloud shifting animation on all page backgrounds
  var shift = -330;
  function shiftClouds() {
    $('#clouds').css({
      backgroundPosition: '' + shift + 'px 0'
    });
    shift -= 1;
  }
  var timer = setInterval(shiftClouds, 100);


  //  Setting up the main picture on the  Portfolio Detail pages 
  $('.frame-406x430 img').eq(0).css("display","inline");

  //  Load links with "rel" of "external" in new window and stay valid. 
  $('a[rel="external"]').click(function() {
    this.target = "_blank";
    return true;
  });

});


//dropdown menu
$(document).ready(function(){
	$("ul.subnav")
		.prepend("<div class='top'> </div>")
		.parent().hover(function() {
			if ($(this).children("ul.subnav").is(":hidden")) {
				$(this).children("ul.subnav").slideDown('fast').show();
				$(this).hover(
					function() {}, 
					function(){
						if (! ($(this).children("ul.subnav").is(":hidden"))) {
							$(this).children("ul.subnav").fadeOut('slow'); //When the mouse hovers out of the subnav, move it back up
						}
					}
				);
			}
		})
	;
});