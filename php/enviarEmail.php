<?php

$consulta = "SELECT * FROM buses";
$resultado = mysqli_query($con,$consulta);
$columna = mysqli_fetch_assoc($resultado);
$numColumnas = mysqli_num_rows($resultado);


echo "<table border='1' style='width:100%'>";
	echo "<tr>";
		echo "<td style='font-size:18px; font-weight: bold'>" . "Código" . "</td>";
		echo "<td style='font-size:18px; font-weight: bold'>" . "Nombre" . "</td>";
	echo "</tr>";

while($columnas = mysqli_fetch_assoc($resultado)){
	
	echo "<tr>";
		echo "<td>" . utf8_encode($columnas['id_bus']) . "</td>";
		echo "<td>" . utf8_encode($columnas['nombre_bus']) . "</td>";
	echo "</tr>";
}
echo "</table>";



if($numColumnas == 0){
	echo "<h3>No se encontraron resultados</h3>";
}


mysqli_free_result($resultado);

mysqli_close($con);

?>
