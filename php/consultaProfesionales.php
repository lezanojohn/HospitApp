<?php

require_once("conexion.php");

$hospital = "";
if(isset($_POST['hospital'])){
	$hospital = utf8_decode($_POST['hospital']);
}


$filtro = "";
if(isset($_POST['filtro'])){
	$filtro = utf8_decode($_POST['filtro']);
}



if($filtro == 'todos'){
	$consulta = "SELECT p.nombre_prof, p.especialidad, p.prevision, hp.nombre_recinto FROM hospital_profesional as hp, profesionales as p WHERE hp.nombre_recinto = '$hospital' AND hp.id_prof = p.id_prof";
	$resultado = mysqli_query($con,$consulta);
}else if(utf8_encode($filtro) == 'Médico General' or  utf8_encode($filtro) == 'Traumatólogo' or $filtro == 'Pediatra' or utf8_encode($filtro) == 'Kinesiólogo' or utf8_encode($filtro) == 'Cirugía Adulto'){
	$consulta = "SELECT p.nombre_prof, p.especialidad, p.prevision, hp.nombre_recinto FROM hospital_profesional as hp, profesionales as p WHERE hp.nombre_recinto = '$hospital' AND hp.id_prof = p.id_prof AND p.especialidad = '$filtro'";
	$resultado = mysqli_query($con,$consulta);
}else if($filtro == 'Fonasa' or  $filtro == 'Cruz Blanca' or $filtro == 'Masvida' or $filtro == 'Consalud' or utf8_encode($filtro) == 'Banmédica'){
	$consulta = "SELECT p.nombre_prof, p.especialidad, p.prevision, hp.nombre_recinto FROM hospital_profesional as hp, profesionales as p WHERE hp.nombre_recinto = '$hospital' AND hp.id_prof = p.id_prof AND p.prevision = '$filtro'";
	$resultado = mysqli_query($con,$consulta);
}


$numColumnas = mysqli_num_rows($resultado);


echo "<table border='1' style='width:100%'>";
	echo "<tr>";
		echo "<td style='font-size:18px; font-weight: bold'>" . "Nombre" . "</td>";
		echo "<td style='font-size:18px; font-weight: bold'>" . "Especialidad" . "</td>";
		echo "<td style='font-size:18px; font-weight: bold'>" . "Previsión" . "</td>";
		echo "<td style='font-size:18px; font-weight: bold'>" . "Hospital" . "</td>";
	echo "</tr>";

while($columnas = mysqli_fetch_assoc($resultado)){
	
	echo "<tr>";
		echo "<td>" . utf8_encode($columnas['nombre_prof']) . "</td>";
		echo "<td>" . utf8_encode($columnas['especialidad']) . "</td>";
		echo "<td>" . utf8_encode($columnas['prevision']) . "</td>";
		echo "<td>" . utf8_encode($columnas['nombre_recinto']) . "</td>";
	echo "</tr>";
}
echo "</table>";

if($numColumnas == 0){
	echo "<h3>No se encontraron resultados</h3>";
}

mysqli_free_result($resultado);

mysqli_close($con);

?>
