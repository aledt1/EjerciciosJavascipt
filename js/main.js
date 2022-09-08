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

// Ejercicio 2
let conjuntom = [3,5,7,1,6];
console.log(conjuntom)
// se hace la comparación del arreglo con el 0 y despues del ciclo determinamos el menor de las comparaciones
function numMin(c2){
	let m2 = c2[0];
	for (let i = 0; i < c2.length; i++) {
		if (c2[i] < m2){ 
			m2 = c2[i]; // m almacena el numero menor de cada iteración hasta llegar al num minimo
		}
	}
	return m2;
}
console.log("Número menor:");
console.log(numMax(conjuntoM));

/*## Ejercicio #3
Escribir una función que permita saber si un número se repite dentro de un arreglo.

> Blockquote
**Casos de prueba**:

_Caso 1_: Resultado esperado: El número 5 se encuentra más de una vez
[1, 22, 5, 17, 10, 5, 40, 5]

_Caso 2_: Resultado esperado: El número 7 se encuentra más de una vez
[7, 41, 5, 7, 10, 13, 2]

_Caso 3_: Resultado esperado: No hay números repetidos
[1, 22, 5, 14, 24, 31, 27, 15, 105]*/

let conjuntoR = [1,22,5,17,10,5,40,5];
console.log(conjuntoR);

function numRep (c3) {
	for (let i = 0; i < c3.length; i++) {
		let m3 = 0;
		for (let j = 0; j < c3.length; j++) {
			if (c3[i] == c3[j]){
            m3 ++;
			} 
		}
		console.log(`el numero ${c3[i]} se repite ${m3}`);
    }
}
console.log(numRep(conjuntoR));

/*## Ejercicio #4
Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado
Entrada: [1, 2, 5, 14, 24, 31, 50, 105]
Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]*/

let conjuntoD = [1, 2, 5, 14, 24, 31, 50, 105];
console.log(conjuntoD);

function numDes(c4){
    let ary = new Array(); // se define un arrego vacio para definir el nuevo orden
    for (let i = 0; iv < c4.length; i++){
        ary[c4.length - i] = c4[i++];    // se define la posicion de los elementos desfasados a un elemento de conjuntoD
    }
    return ary;
}
console.log("nuevo conjunto");
console.log(numDes(conjuntoD));