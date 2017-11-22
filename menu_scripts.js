$(document).ready(function(){
	$('.toggledmenu').click(function(e){
		if($(".nav-wrapper").css('display') == 'none') {
			$(".footernav-wrapper>ul").appendTo(".nav-wrapper>nav");
			$(".nav-wrapper").css('display', 'block');
			$(".nav-wrapper").addClass('bgcolor');
		} else {
		    $(".nav-wrapper>nav>ul:nth-child(2)").appendTo(".footernav-wrapper");
			$(".nav-wrapper").css('display', 'none');
			$(".footernav-wrapper").css('display', 'none');
			$(".nav-wrapper").removeClass('bgcolor');
		}
	});
	
	$( '.dropdown' ).click(function(e){
		if($(this).children('.sub-menu').css('display') == "block") { //its already down and been clicked again
			//console.log('open');
			$(this).children('.sub-menu').slideUp(200);
		} else {
			//console.log('closed');
			$('.dropdown').children('.sub-menu').slideUp(200); //slide all of them up		
    		$(this).children('.sub-menu').slideToggle(200);	//and the one we want down		
		}
    	e.stopPropagation();
    });
    
    $("body").click(function () {
    	$('.dropdown').children('.sub-menu').slideUp(200);
    });
    
    $('.container').height($( document ).height());
});
