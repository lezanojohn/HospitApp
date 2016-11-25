$(document).ready(function(){
	
	hospitalSeleccionado = "";
	
	$.ajax({
		type: 'POST',
		url: 'php/consultaBuses.php',
		success: function(resp){
			$('#tablaBuses').html(resp);
		}
	});

	// PRIMER NIVEL
	//boton usar mi posicion
	$('#btnGeolocalizame').click(function(){
		$('#btnGeolocalizame').hide();
		$('#btnDireccion').hide();
		$('#tituloUno').hide();
		$('#tituloDos').show();
		$('#btnPorCercania').show();
		$('#btnPorEspecialidad').show();
		$('#btnPorPrevision').show();
		$('#btnMostrarTodos').show();
		
	});
	
	// boton usar mi direccion
	$('#btnDireccion').click(function(){
		$('#tituloUno').hide();
		$('#tituloIntermedioUno').show();
		$('#btnGeolocalizame').hide();
		$('#btnDireccion').hide();
		$('.form').show();
		$('#textoDir').focus();
	});
	
	
	
	// NIVEL INTERMEDIO 1-2
	// cuadro texto: ingresar direccion
	$('#search_form').submit(function(event){
	  event.preventDefault();
    })
	
	// boton buscar
	$('#btnBuscarDir').click(function(event){
		if($('#textoDir').val()!=''){
			$('#tituloIntermedioUno').hide();
			$('#tituloDos').show();
			$('.form').hide();
			$('#btnPorCercania').show();
			$('#btnPorEspecialidad').show();
			$('#btnPorPrevision').show();
			$('#btnMostrarTodos').show();
		}
	});
	
	
	
	// SEGUNDO NIVEL
	//boton por cercania
	$('#btnPorCercania').click(function(){
		$('#btnPorCercania').hide();
		$('#btnPorEspecialidad').hide();
		$('#btnPorPrevision').hide();
		$('#btnMostrarTodos').hide();
		$('#tituloDos').hide();
		$('#tituloCuatro').show();
		$('#btnOtraBusqueda').show();
		
		$('html,body').animate({
        scrollTop: $("#seccionMapa").offset().top-20
    }, 500);
	});
	
	//boton por especialidad
	$('#btnPorEspecialidad').click(function(){
		$('#tituloDos').hide();
		$('#tituloIntermedioDos').show();
		$('#btnPorCercania').hide();
		$('#btnPorEspecialidad').hide();
		$('#btnPorPrevision').hide();
		$('#btnMostrarTodos').hide();
		$('#btnCirugiaAdultos').show();
		$('#btnKinesiologia').show();
		$('#btnMedicinaGeneral').show();
		$('#btnPediatriaGeneral').show();
		$('#btnTraumatologia').show();
	});
	
	//boton por afiliacion
	$('#btnPorPrevision').click(function(){
		$('#tituloDos').hide();
		$('#tituloIntermedioTres').show();
		$('#btnPorCercania').hide();
		$('#btnPorEspecialidad').hide();
		$('#btnPorPrevision').hide();
		$('#btnMostrarTodos').hide();
		$('#btnFonasa').show();
		$('#btnCruzBlanca').show();
		$('#btnMasvida').show();
		$('#btnConsalud').show();
		$('#btnBanmedica').show();
	});
	
	//boton por nombre
	$('#btnMostrarTodos').click(function(){
		$('#tituloDos').hide();
		$('#tituloTres').show();
		$('#btnPorCercania').hide();
		$('#btnPorEspecialidad').hide();
		$('#btnPorPrevision').hide();
		$('#btnMostrarTodos').hide();
		$('#btnCBB').show();
		$('#btnCT').show();
		$('#btnHH').show();
	});
	
	
	
	// NIVEL INTERMEDIO 2-3
	//boton cirugia adultos
	$('#btnCirugiaAdultos').click(function(){
		$('#tituloIntermedioDos').hide();
		$('#tituloTres').show();
		$('#btnCirugiaAdultos').hide();
		$('#btnKinesiologia').hide();
		$('#btnMedicinaGeneral').hide();
		$('#btnPediatriaGeneral').hide();
		$('#btnTraumatologia').hide();
		$('#btnCBB').show();
		$('#btnHH').show();
	});
	
	//boton kine
	$('#btnKinesiologia').click(function(){
		$('#tituloIntermedioDos').hide();
		$('#tituloTres').show();
		$('#btnCirugiaAdultos').hide();
		$('#btnKinesiologia').hide();
		$('#btnMedicinaGeneral').hide();
		$('#btnPediatriaGeneral').hide();
		$('#btnTraumatologia').hide();
		$('#btnCBB').show();
		$('#btnCT').show();
		$('#btnHH').show();
	});
	
	//boton medicina general
	$('#btnMedicinaGeneral').click(function(){
		$('#tituloIntermedioDos').hide();
		$('#tituloTres').show();
		$('#btnCirugiaAdultos').hide();
		$('#btnKinesiologia').hide();
		$('#btnMedicinaGeneral').hide();
		$('#btnPediatriaGeneral').hide();
		$('#btnTraumatologia').hide();
		$('#btnCBB').show();
		$('#btnCT').show();
		$('#btnHH').show();
	});
	
	//boton pediatria
	$('#btnPediatriaGeneral').click(function(){
		$('#tituloIntermedioDos').hide();
		$('#tituloTres').show();
		$('#btnCirugiaAdultos').hide();
		$('#btnKinesiologia').hide();
		$('#btnMedicinaGeneral').hide();
		$('#btnPediatriaGeneral').hide();
		$('#btnTraumatologia').hide();
		$('#btnCBB').show();
		$('#btnCT').show();
		$('#btnHH').show();
	});
	
	//boton traumatologia
	$('#btnTraumatologia').click(function(){
		$('#tituloIntermedioDos').hide();
		$('#tituloTres').show();
		$('#btnCirugiaAdultos').hide();
		$('#btnKinesiologia').hide();
		$('#btnMedicinaGeneral').hide();
		$('#btnPediatriaGeneral').hide();
		$('#btnTraumatologia').hide();
		$('#btnCBB').show();
		$('#btnHH').show();
	});
	
	//boton fonasa
	$('#btnFonasa').click(function(){
		$('#tituloIntermedioTres').hide();
		$('#tituloTres').show();
		$('#btnFonasa').hide();
		$('#btnCruzBlanca').hide();
		$('#btnMasvida').hide();
		$('#btnConsalud').hide();
		$('#btnBanmedica').hide();
		$('#btnCBB').show();
		$('#btnCT').show();
		$('#btnHH').show();
	});
	
	//boton cruz blanca
	$('#btnCruzBlanca').click(function(){
		$('#tituloIntermedioTres').hide();
		$('#tituloTres').show();
		$('#btnFonasa').hide();
		$('#btnCruzBlanca').hide();
		$('#btnMasvida').hide();
		$('#btnConsalud').hide();
		$('#btnBanmedica').hide();
		$('#btnCT').show();
		$('#btnHH').show();
	});
	
	//boton masvida
	$('#btnMasvida').click(function(){
		$('#tituloIntermedioTres').hide();
		$('#tituloTres').show();
		$('#btnFonasa').hide();
		$('#btnCruzBlanca').hide();
		$('#btnMasvida').hide();
		$('#btnConsalud').hide();
		$('#btnBanmedica').hide();
		$('#btnCBB').show();
	});
	
	//boton consalud
	$('#btnConsalud').click(function(){
		$('#tituloIntermedioTres').hide();
		$('#tituloTres').show();
		$('#btnFonasa').hide();
		$('#btnCruzBlanca').hide();
		$('#btnMasvida').hide();
		$('#btnConsalud').hide();
		$('#btnBanmedica').hide();
		$('#btnHH').show();
	});
	
	//boton banmedica
	$('#btnBanmedica').click(function(){
		$('#tituloIntermedioTres').hide();
		$('#tituloTres').show();
		$('#btnFonasa').hide();
		$('#btnCruzBlanca').hide();
		$('#btnMasvida').hide();
		$('#btnConsalud').hide();
		$('#btnBanmedica').hide();
		$('#btnCBB').show();
		$('#btnHH').show();
	});
	
	
	// TERCER NIVEL
	$('#btnCBB').click(function(){
		$('#tituloTres').hide();
		$('#tituloCuatro').show();
		$('#btnCBB').hide();
		$('#btnCT').hide();
		$('#btnHH').hide();
		$('#btnOtraBusqueda').show();
		$('#avisoUno').hide();
		$('#avisoDos').hide();
		$('#btnMostrarPersonal').show();
		$('#info').show();
		$('#accesos').html("<img src='img/p1.jpg' style='width:95%; margin-top: 10px;'>");
		$('#accesos').show();
		
		
		$('html,body').animate({
        scrollTop: $("#seccionMapa").offset().top-20
    }, 500);
		
		
		hospitalSeleccionado = "Clínica Bio Bio";
		
		$.ajax({
			type: 'POST',
			url: 'php/consultaHospitales.php',
			data: {hospital:hospitalSeleccionado},
			success: function(resp){
				$('#info').html(resp);
			}
		});
		
		$.ajax({
			type: 'POST',
			data: {hospital:hospitalSeleccionado, filtro: 'todos'},
			url: 'php/consultaProfesionales.php',
			success: function(resp){
				$('#tabla').html(resp);
			}
		});
	});
	
	$('#btnCT').click(function(){
		$('#tituloTres').hide();
		$('#tituloCuatro').show();
		$('#btnCBB').hide();
		$('#btnCT').hide();
		$('#btnHH').hide();
		$('#btnOtraBusqueda').show();
		$('#avisoUno').hide();
		$('#avisoDos').hide();
		$('#btnMostrarPersonal').show();
		$('#info').show();
		$('#accesos').html("<img src='img/p2.jpg' style='width:95%; margin-top: 10px;'>");
		$('#accesos').show();
		
		
		hospitalSeleccionado = "Consultorio Integral CESFAM Tucapel";
		
		$.ajax({
			type: 'POST',
			url: 'php/consultaHospitales.php',
			data: {hospital:hospitalSeleccionado},
			success: function(resp){
				$('#info').html(resp);
			}
		});
		
		$.ajax({
			type: 'POST',
			data: {hospital:hospitalSeleccionado, filtro: 'todos'},
			url: 'php/consultaProfesionales.php',
			success: function(resp){
				$('#tabla').html(resp);
			}
		});
		
		$('html,body').animate({
        	scrollTop: $("#seccionMapa").offset().top-20
    	}, 500);
	});
	
	$('#btnHH').click(function(){
		$('#tituloTres').hide();
		$('#tituloCuatro').show();
		$('#btnCBB').hide();
		$('#btnCT').hide();
		$('#btnHH').hide();
		$('#btnOtraBusqueda').show();
		$('#avisoUno').hide();
		$('#avisoDos').hide();
		$('#btnMostrarPersonal').show();
		$('#info').show();
		$('#accesos').html("<img src='img/p3.jpg' style='width:95%; margin-top: 10px;'>");
		$('#accesos').show();
		
		
		hospitalSeleccionado = "Hospital Las Higueras";
		
		$.ajax({
			type: 'POST',
			url: 'php/consultaHospitales.php',
			data: {hospital:hospitalSeleccionado},
			success: function(resp){
				$('#info').html(resp);
			}
		});
		
		$.ajax({
			type: 'POST',
			data: {hospital:hospitalSeleccionado, filtro: 'todos'},
			url: 'php/consultaProfesionales.php',
			success: function(resp){
				$('#tabla').html(resp);
			}
		});
		
		$('html,body').animate({
        scrollTop: $("#seccionMapa").offset().top-20
    }, 500);
	});
	
	
	
	
	// CUARTO NIVEL
	$('#btnOtraBusqueda').click(function(){
		document.location.href = 'index.html';
	});
	

});