<?php

require_once("conexion.php");

$hospital = "";
if(isset($_POST['hospital'])){
	$hospital = utf8_decode($_POST['hospital']);
}

$consulta = "SELECT * FROM hospitales WHERE nombre_recinto = '$hospital'";
$resultado = mysqli_query($con,$consulta);
$columna = mysqli_fetch_assoc($resultado);
$numColumnas = mysqli_num_rows($resultado);


if(utf8_encode($hospital) == "Clínica Bio Bio"){
	echo "<img src='img/CBB3.jpg'>";
}else if($hospital == "Consultorio Integral CESFAM Tucapel"){
	echo "<img src='img/CT1.jpg'>";
}else if($hospital == "Hospital Las Higueras"){
	echo "<img src='img/HH3.jpg'>";
}


echo "<p>" . utf8_encode($columna['nombre_recinto']) . "<br>" . utf8_encode($columna['direccion']) . "<br>" . "Fono " . utf8_encode($columna['telefono']) . "<br>" . utf8_encode($columna['tipo_recinto']) . "</p>";


if($numColumnas == 0){
	echo "<h3>No se encontraron resultados</h3>";
}


mysqli_free_result($resultado);

mysqli_close($con);

?>









































