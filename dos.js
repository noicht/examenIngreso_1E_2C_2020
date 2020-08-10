/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{

	let cantProductos = 0;
	let tipoProd;
	let marca;
	let precio = 0;
	let precioMax = 0;

	let peso;
	let pesoMasLiviano;

	let pesoTotal = 0;

	let marcaMasCara;
	let marcaMasLiviana;

	let flagCaro = 0;
	let flagLiviano = 0;
	let respuesta = "si";

	do
	{
	
		do 
		{

	
			tipoProd = prompt("Ingrese tipo de producto (solido/liquido)");



		} while(!(tipoProd == "solido" || tipoProd == "liquido"));

		do 
		{

			precio = parseInt(prompt("Ingrese precio"));
			marca = prompt("Ingrese marca")

			if (flagCaro == 0 || precio > precioMax && tipoProd == "liquido") 
			{
			precioMax = precio;
			marcaMasCara = marca;
			flagCaro = 1;
			}




		} while(!(precio > 0))

		do 
		{

			peso = parseFloat(prompt("Ingrese peso"));

			pesoTotal = pesoTotal + peso;

			if (flagLiviano == 0 || pesoMasLiviano < peso && tipoProd == "solido") 
			{
			pesoMasLiviano = peso;
			marcaMasLiviana = marca;
			flagLiviano = 1;


			}	




		} while(!(peso > 0));










	respuesta = prompt("desea agregar mas? si/no");

} while(respuesta == "si");


document.write("Informe peso total: " + pesoTotal + "kg" + "<br>");
document.write("Marca mas cara de liquidos: " + marcaMasCara + "<br>");
document.write("Marca mas liviana de solidos: " + marcaMasLiviana + "<br>");




}




