var myIndex = 0;
carousel();
function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
	x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 5000); // Change image every 2 seconds
}

$(function(){
	var nav = $('#menuHeader');   
	$(window).scroll(function () {
		if ($(this).scrollTop() >50) {
			nav.addClass("menu-fixo");
			$('body').css('padding-top', this.style.height);
		} else { 
			nav.removeClass("menu-fixo"); 
			$('body').css('padding-top', 0);
		} 
	});  
});