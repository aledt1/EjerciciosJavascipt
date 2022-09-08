/* ## Ejercicio #1
Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
Ejemplo del arreglo : [3, 5, 7, 1, 6] */
let conjuntoM = [3,5,7,1,6];
console.log(conjuntoM);
// se hace la comparación del arreglo con el 0 y despues del ciclo determinamos el mayor de las comparaciones
function numMax(c1){
	let m1 = c1[0];
	for (let i = 0; i < c1.length; i++) {
		if (c1[i] > m1){ 
			m1 = c1[i]; // m almacena el numero mayor de cada iteración hasta llegar al num maximo
		}
	}
	return m1;
}
console.log("Numero mayor:");
console.log(numMax(conjuntoM));