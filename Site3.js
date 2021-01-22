
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 150) {
	    $(".navbar").css("background-color" , "#f9f9f9");
		$(".navbar a").css("color" , "black");
	  }

	  else{
		  $(".navbar").css("background-color" , "transparent");
		  $(".navbar a").css("color" , "#f9f9f9");
		  $(".link").css("color","black");
	  }
  })
})