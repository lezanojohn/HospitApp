$(document).ready(function(){
	
	var contador = 1;
	var altura = $('.barraNavResponsive').offset().top;
	
	
	$('.btnMenuResponsive').click(function(){
		if(contador == 1){
			$('.ctdMenuResponsive').animate({
				left: '-40px'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.ctdMenuResponsive').animate({
				left: '-100%'
			});
		}

	});
	
	$('.btnBarraNavResp').click(function(){
		if(contador == 1){
			$('.ctdMenuResponsive').animate({
				left: '-40px'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.ctdMenuResponsive').animate({
				left: '-100%'
			});
		}

	});
	
	
	
/*	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.barraNavResponsive').css({
				'background-color': 'rgba(0,128,255,.8)'
			});
		} else {
			$('.barraNavResponsive').css({
				'background-color': 'rgba(74,74,74,.5)'
			});
		}
	});*/
	
	$('.recargarPagina').on('click', function(){
		document.location.href = 'index.html';
	});
	
});
 

 
