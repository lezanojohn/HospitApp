$(document).ready(function(){
	
	$('#btnMostrarPersonal').click(function(){
		$('#btnMostrarPersonal').hide();
		$('#btnMostrarAccesos').show();
		$('#accesos').hide();
		$('#panelMostrarInfoExtra').show();
		$('#tabla').show();
	});
	
	$('#btnMostrarAccesos').click(function(){
		$('#btnMostrarAccesos').hide();
		$('#btnMostrarPersonal').show();
		$('#tabla').hide();
		$('#panelMostrarInfoExtra').hide();
		$('#accesos').show();
	});
	
	
	$('#opcion').change(function(){
		var opcionSeleccionada = $(this).find("option:selected");
		var valorSeleccionado = opcionSeleccionada.val();
		
		$.ajax({
			type: 'POST',
			data: {hospital:hospitalSeleccionado, filtro: valorSeleccionado},
			url: 'php/consultaProfesionales.php',
			success: function(resp){
				$('#tabla').html(resp);
			}
		});
	})
	
});