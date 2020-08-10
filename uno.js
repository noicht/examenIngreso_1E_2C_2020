/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	
	let nombre;
	let peso;
	let sexo;
	let edad;

	let cantHom = 0;
	let cantMuj = 0;
	let cantIteracionesProm = 0;

	let edadPromedio;
	let acumEdad = 0;
	let respuesta = "si";
	let hombreMayorPeso;
	let nombreHombreMayorPeso;

	let flagHombre = 0;

	for (let i = 1; i <= 5; i++) 
	{
		do 
		{
			nombre = prompt("Ingrese nombre");
			peso = parseFloat(prompt("Ingrese peso"));
		
		} while(!(peso > 0));

		do 
		{
			sexo = prompt("Ingrese sexo (H/M)").toUpperCase();

			switch(sexo) 
			{
				case "H":
					cantHom++;
					break;
				case "M":
					cantMuj++;
					break;
				default:
					alert("error, sexo no definido");
					break;		
			}

			if(flagHombre == 0 || peso > hombreMayorPeso && sexo == "H") 
			{
				hombreMayorPeso = peso;
				nombreHombreMayorPeso = nombre;
				flagHombre = 1;
			}

		} while(!(sexo == "H" || sexo == "M"));

		do 
		{
			edad = parseInt(prompt("Ingrese edad"));
			acumEdad = acumEdad + edad;

		} while(!(edad > 0));


	}

	edadPromedio = acumEdad / 5;

	document.write("Cantidad de mujeres: " + cantMuj + "<br>");

	document.write("Promedio de edades: " + edadPromedio + "<br>");

	document.write("Hombre mas pesado: " + nombreHombreMayorPeso + " con " + hombreMayorPeso + "kg");









}
