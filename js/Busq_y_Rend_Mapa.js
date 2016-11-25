$(document).ready(function(){
	initMap();
});



function initMap() {
		  //inicialización del mapa
		  var map = new google.maps.Map(document.getElementById('mapa'), {
			 zoom: 12,
			 center: {lat: -36.8027784, lng: -73.0574241} //concepcion
		  });
		  

			//posición de los centros médicos			
			var destinos = {
					posClinicaBioBio    :  new google.maps.LatLng(-36.7892393, -73.0635425),
					posCesfamTucapel    :  new google.maps.LatLng(-36.8104306, -73.0543823),
					posHospitalHigueras :  new google.maps.LatLng(-36.7406175, -73.1088863)
			}
			
			var directionsDisplay = new google.maps.DirectionsRenderer;
			var directionsService = new google.maps.DirectionsService;
			
			
			// EVENTOS: BUSCAR CON GEOLOCALIZACIÓN
			document.getElementById('btnGeolocalizame').addEventListener('click', function() {
		
				// lugar mas cercano
				document.getElementById('btnPorCercania').addEventListener('click', function(){
					
					directionsDisplay.setMap(map);
					GenerarRutaHospMasCercanoGeo(directionsService, directionsDisplay, destinos);
					document.getElementById('modo').addEventListener('change', function() {
						GenerarRutaHospMasCercanoGeo(directionsService, directionsDisplay, destinos);
					});	
				});
				
				// Clínica Bio Bio
				document.getElementById('btnCBB').addEventListener('click', function() {
					directionsDisplay.setMap(map);
					GenerarRutaGeo(directionsService, directionsDisplay, destinos.posClinicaBioBio);
					document.getElementById('modo').addEventListener('change', function() {
						GenerarRutaGeo(directionsService, directionsDisplay, destinos.posClinicaBioBio);
					});	
				});

				// CESFAM Tucapel
				document.getElementById('btnCT').addEventListener('click', function() {
					directionsDisplay.setMap(map);
					GenerarRutaGeo(directionsService, directionsDisplay, destinos.posCesfamTucapel);
					document.getElementById('modo').addEventListener('change', function() {
						GenerarRutaGeo(directionsService, directionsDisplay, destinos.posCesfamTucapel);
					});	

				});

				// Hospital Las Higueras
				document.getElementById('btnHH').addEventListener('click', function() {
					directionsDisplay.setMap(map);
					GenerarRutaGeo(directionsService, directionsDisplay, destinos.posHospitalHigueras);
					document.getElementById('modo').addEventListener('change', function() {
						GenerarRutaGeo(directionsService, directionsDisplay, destinos.posHospitalHigueras);
					});	

				});
		
			});
			
			
			
			// EVENTOS: BUSCAR CON UNA DIRECCIÓN
		  	document.getElementById('btnBuscarDir').addEventListener('click', function() {
					
				// lugar mas cercano
				document.getElementById('btnPorCercania').addEventListener('click', function(){
					directionsDisplay.setMap(map);
					GenerarRutaHospMasCercanoDir(directionsService, directionsDisplay, destinos);
					document.getElementById('modo').addEventListener('change', function() {
						GenerarRutaHospMasCercanoDir(directionsService, directionsDisplay, destinos);
					});	
				});
				
				// Clínica Bio Bio
				document.getElementById('btnCBB').addEventListener('click', function() {
					directionsDisplay.setMap(map);
					GenerarRutaDir(directionsService, directionsDisplay, destinos.posClinicaBioBio);
					document.getElementById('modo').addEventListener('change', function() {
						GenerarRutaDir(directionsService, directionsDisplay, destinos.posClinicaBioBio);
					});	
				});
				
				// CESFAM Tucapel
				document.getElementById('btnCT').addEventListener('click', function() {
					directionsDisplay.setMap(map);
					GenerarRutaDir(directionsService, directionsDisplay, destinos.posCesfamTucapel);
					document.getElementById('modo').addEventListener('change', function() {
						GenerarRutaDir(directionsService, directionsDisplay, destinos.posCesfamTucapel);
					});	
				});
				
				// Hospital Las Higueras
				document.getElementById('btnHH').addEventListener('click', function() {
					directionsDisplay.setMap(map);
					GenerarRutaDir(directionsService, directionsDisplay, destinos.posHospitalHigueras);
					document.getElementById('modo').addEventListener('change', function() {
						GenerarRutaDir(directionsService, directionsDisplay, destinos.posHospitalHigueras);
					});	
				});
				
		  	});
	
			
			
}// fin initMap()

		//FUNCION: CALCULAR DISTANCIA
		function CalcDistacia(posOrigen, destinos){		
			
			var distancias = [
								google.maps.geometry.spherical.computeDistanceBetween(posOrigen, destinos.posClinicaBioBio), 
						   		google.maps.geometry.spherical.computeDistanceBetween(posOrigen, destinos.posCesfamTucapel), 
						   		google.maps.geometry.spherical.computeDistanceBetween(posOrigen, destinos.posHospitalHigueras)
						  	];
			
			var menor = Math.min.apply(Math,distancias);
			var index = distancias.indexOf(menor);
	
			$('#avisoUno').hide();
			$('#avisoDos').hide();
			$('#btnMostrarPersonal').show();
			$('#info').show();
			
			if(index == 0){
				var destinoMasCercano = destinos.posClinicaBioBio; 
				hospitalSeleccionado = "Clínica Bio Bio";
				$('#accesos').html("<img src='img/p1.jpg' style='width:95%; margin-top: 10px;'>");
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
				
			}
			else if(index == 1){
				var destinoMasCercano = destinos.posCesfamTucapel; 
				hospitalSeleccionado = "Consultorio Integral CESFAM Tucapel";
				$('#accesos').html("<img src='img/p2.jpg' style='width:95%; margin-top: 10px;'>");
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
				
			}
			else if(index == 2){
				var destinoMasCercano = destinos.posHospitalHigueras; 
				hospitalSeleccionado = "Hospital Las Higueras";
				$('#accesos').html("<img src='img/p3.jpg' style='width:95%; margin-top: 10px;'>");
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
			}
			
			$('#accesos').show();
			
			return destinoMasCercano;
		}


		//FUNCION: GENERAR RUTA AL HOSPITAL MAS CERCANO (con geolocalizacion)
		function GenerarRutaHospMasCercanoGeo(directionsService, directionsDisplay, destinos){		
			var selectedMode = document.getElementById('modo').value;
			
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var posOrigen = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};
					
					var posOrigin = new google.maps.LatLng(posOrigen.lat,posOrigen.lng);
					
					var destinoMasCercano = CalcDistacia(posOrigin,destinos);
					
					directionsService.route({
						 origin: posOrigin,  
						 destination: destinoMasCercano,
						 travelMode: google.maps.TravelMode[selectedMode]
					  }, function(response, status) {
						 if (status == google.maps.DirectionsStatus.OK) {
							directionsDisplay.setDirections(response);
						 } else {
							window.alert('La solicitud de ruta falló por: ' + status);
						 }
					  });
					
					
				}, function() {
					alert('no fue posible encontrar su posicion, intente nuevamente')
					});
				} else {
		 			// buscador no soporta geolocalizacion
		 			alert('navegador no soporta geolocalizacion')
  				}
			
			
		}
		

		//FUNCION: GENERAR RUTA AL HOSPITAL MAS CERCANO (con direccion)
		function GenerarRutaHospMasCercanoDir(directionsService, directionsDisplay, destinos) {
			
			var geocoder = new google.maps.Geocoder();
			var address = document.getElementById('textoDir').value;
			var selectedMode = document.getElementById('modo').value;
			
		   geocoder.geocode({'address': address}, function(results, status) {
				if (status === google.maps.GeocoderStatus.OK) {
				
					var posOrigin = results[0].geometry.location;
					
					var destinoMasCercano = CalcDistacia(posOrigin,destinos);
					
				 directionsService.route({
						 origin: posOrigin,  
						 destination: destinoMasCercano,
						 travelMode: google.maps.TravelMode[selectedMode]
					  }, function(response, status) {
						 if (status == google.maps.DirectionsStatus.OK) {
							directionsDisplay.setDirections(response);
						 } else {
							window.alert('La solicitud de ruta falló por: ' + status);
						 }
					  });
				
			 } else {
				alert('no fue posible encontrar la direccion ingresada, intente nuevamente');
			 }
		  });

		}
		

		// FUNCIÓN: GENERAR RUTA (con geolocalización)
		function GenerarRutaGeo(directionsService, directionsDisplay, posDestino) {
			var selectedMode = document.getElementById('modo').value;
			
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var posOrigen = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};
					
					directionsService.route({
						 origin: {lat: posOrigen.lat, lng: posOrigen.lng},  
						 destination: posDestino,
						 travelMode: google.maps.TravelMode[selectedMode]
					  }, function(response, status) {
						 if (status == google.maps.DirectionsStatus.OK) {
							directionsDisplay.setDirections(response);
						 } else {
							window.alert('La solicitud de ruta falló por: ' + status);
						 }
					  });
					
					
				}, function() {
					alert('no fue posible encontrar su posicion, intente nuevamente')
					});
				} else {
		 			// buscador no soporta geolocalizacion
		 			alert('navegador no soporta geolocalizacion')
  				}

		}
		
		
		// FUNCIÓN: GENERAR RUTA (con dirección)
		function GenerarRutaDir(directionsService, directionsDisplay, posDestino) {
			
			var geocoder = new google.maps.Geocoder();
			var address = document.getElementById('textoDir').value;
			var selectedMode = document.getElementById('modo').value;
			
		   geocoder.geocode({'address': address}, function(results, status) {
				if (status === google.maps.GeocoderStatus.OK) {
				
				 
				 directionsService.route({
						 origin: results[0].geometry.location,  
						 destination: posDestino,
						 travelMode: google.maps.TravelMode[selectedMode]
					  }, function(response, status) {
						 if (status == google.maps.DirectionsStatus.OK) {
							directionsDisplay.setDirections(response);
						 } else {
							window.alert('La solicitud de ruta falló por: ' + status);
						 }
					  });
				
			 } else {
				alert('no fue posible encontrar la direccion ingresada, intente nuevamente');
			 }
		  });

		}




		
		// FUNCIÓN: GEOLOCALIZAR
		function geolocalizacion(infoWindow, map) {
  			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};

					var marker = new google.maps.Marker({
				  		map: map,
				  		position: pos
					});
					map.setZoom(16);
					map.setCenter(pos);
				}, function() {
					handleLocationError(true, infoWindow, map.getCenter());
					});
				} else {
		 			// Browser doesn't support Geolocation
		 			handleLocationError(false, infoWindow, map.getCenter());
  				}
		}
		
		// FUNCION: BUSCAR POR DIRECCIÓN
		function geocodeAddress(geocoder, resultsMap) {
		  var address = document.getElementById('textoDir').value;
		  geocoder.geocode({'address': address}, function(results, status) {
			 if (status === google.maps.GeocoderStatus.OK) {
				resultsMap.setCenter(results[0].geometry.location);
				resultsMap.setZoom(16);
				var marker = new google.maps.Marker({
				  map: resultsMap,
				  position: results[0].geometry.location
				});
			 } else {
				alert('Geocode no funciono por la siguiente razon: ' + status);
			 }
		  });
		}
		
		function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  			infoWindow.setPosition(pos);
  			infoWindow.setContent(browserHasGeolocation ?
                        'Error: El servicio de geolocalización ha fallado.' :
                        'Error: Su buscador no soporta geolocalización.');
		}


