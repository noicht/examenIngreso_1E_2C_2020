/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexoTitular; 

	let lugar; // bariloche, cataratas o salta
	let temporada; // otoño,invierno,verano o primavera

	let cantPersonasViajantes = 0;
	let cantMasPasajeros = 0;

	let cantPersonasViajantesInvierno = 0;
	let cantViajes = 0;

	let lugarMasElegido = 0;
	let barilocheMayor = 0;
	let cataratasMayor = 0;
	let saltaMayor = 0;


	let sexoTitularMayor;

	let promedioPersonasInvierno;

	let flagMasPasajeros = 0;

	let respuesta = "si";



	do 
	{

		do 
		{
			lugar = prompt("Ingrese destinacion").toLowerCase();

			switch(lugar) 
			{
				case "bariloche":
					barilocheMayor++;
					break;
				case "cataratas":
					cataratasMayor++;
					break;
				case "salta":
					saltaMayor++;
					break;
				default:
					alert("error, destinacion no disponible");
					break;		
			}

		} while(!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"));



		do 
		{
			temporada = prompt("Ingrese temporada a viajar");

		}while(!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera"));
		
		do 
		{
			sexoTitular = prompt("Ingrese sexo del titular").toUpperCase();



		} while(!(sexoTitular == "H" || sexoTitular == "M"));

		do 
		{
			cantPersonasViajantes = parseInt(prompt("Cantidad de personas que viajan"));

			if(temporada == "invierno")
			{
				cantPersonasViajantesInvierno = cantPersonasViajantesInvierno + cantPersonasViajantes;
			}



			if(flagMasPasajeros == 0 || cantPersonasViajantes > cantMasPasajeros) 
			{
				cantMasPasajeros = cantPersonasViajantes;
				sexoTitularMayor = sexoTitular;
				flagMasPasajeros = 1;
			}


		}while(!(cantPersonasViajantes > 0))

		cantViajes++;

		respuesta = prompt("desea agregar mas? si/no");


	} while(respuesta == "si");


	if (barilocheMayor > cataratasMayor && barilocheMayor > saltaMayor)
	{
		document.write("lugar mas elegido: bariloche" + "<br>");
	}
	else if (cataratasMayor > barilocheMayor && cataratasMayor > saltaMayor)
	{
		document.write("lugar mas elegido: cataratas" + "<br>");
	}
	else
	{
		document.write("lugar mas elegido: salta" + "<br>");
	}

	promedioPersonasInvierno = cantPersonasViajantesInvierno / cantViajes;

	document.write("Promedio de personas que viajan en invierno: " + promedioPersonasInvierno.toFixed(2) + "<br>")

	document.write("Sexo de titular con mas pasajeros: " + sexoTitularMayor + " con " + cantMasPasajeros);



}
