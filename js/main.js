/* ## Ejercicio #1
Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
Ejemplo del arreglo : [3, 5, 7, 1, 6] 
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
[1, 22, 5, 14, 24, 31, 27, 15, 105]

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
Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

let conjuntoD = [1, 2, 5, 14, 24, 31, 50, 105];
console.log(conjuntoD);

function numDes(c4){
    let ary = new Array(); // se define un arrego vacio para definir el nuevo orden
    for (let iv = 0; iv < c4.length; iv++){
        ary[(c4.length + 1) - iv] = c4[iv];    // se define la posicion de los elementos desfasados a un elemento de conjuntoD
    }
    return ary;
}
console.log("nuevo conjunto");
console.log(numDes(conjuntoD));

// Ejercicio 5.1
//1. Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor

/*boton.addEventListener("click", function(e){
    e.preventDefault();
    let n1 = parseInt(campo1);
    let n2 = parseInt(campo2);
    let n3 = parseInt(campo3);
    let a = new Array();
    a.push(n1);
    a.push(n2);
    a.push(n3);
    let v = 0;
    if (((campo1.length && campo2.length) && campo3.length) < 3){
        for (let i = 0; i < a.length; i++){
            if (a[i] > v){
                v = a[i];
                resultado.innerHTML = "el número menor es " + v;
            }
        }
    } else{
        resultado.innerHTML = "DIJE NÚMEROS ENTRE EL 1 Y EL 100 >w<";
    }


    /*console.log(campo1, campo2, campo3);
    console.log(typeof(campo1), typeof(campo2), typeof(campo3));
    console.log(campo1.length, campo2.length, campo3.length);*/

    /*if (campo1.length < 3) {
        console.log("Válido :) | el número es menor que 100");
    } else{
        console.log("Inválido :( | el número es mayor de 100");
    }
    if (campo2.length < 3) {
        console.log("Válido :)| el número es menor que 100");
    } else{
        console.log("Inválido :( | el número es mayor de 100");
    }
    if (campo3.length < 3) {
        console.log("Válido :)| el número es menor que 100");
    } else{
        console.log("Inválido :( | el número es mayor de 100");
    }
//})

//Ejercicio 5.2
//Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números
let n4 = parseInt(document.getElementById("cmp4").value);
let n5 = parseInt(document.getElementById("cmp4").value);
let n6 = parseInt(document.getElementById("cmp4").value);
let boton3 = document.getElementById("btn3"); // verificar
let boton4 = document.getElementById("btn4"); // limpiar
let resultado1 = document.getElementById("alt2");

boton3.addEventListener("click", function(e){
    e.preventDefault();
    if ((n4 <= n5) && (n4 <= n6)){
        resultado1.innerHTML = n4 +  "es el menor :)";
    } else{ 
        if ((n5 <= n4) && (n5 <= n6)){
            resultado1.innerHTML = n5 +  "es el menor :)";
        } else{
           if ((n6 <= n5) && (n6 <= n4)){
                resultado1.innerHTML = n6 + "es el menor :)";
        } else{
            if ((n4 == n5) && (n4 == n6)){
                resultado1.innerHTML = "los números son iguales :|";
        }}}}
})
*/
//ejercicio 5.3
//Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
let campoMultiplo = document.getElementById("multiplo");
let botonmV = document.getElementById("btn5");
let botonmL = document.getElementById("btn6");
let res3 = document.getElementById("alt3");

botonmV.addEventListener("click", function(e){
    e.preventDefault();
    console.log(campoMultiplo);
    let m3 = parseInt(campoMultiplo.value);
    let residuo = (m3 %= 3);
    if (m3 <= 200){
        campoMultiplo.classList.add("is-valid");
        if (residuo == 0){
            res3.innerHTML = campoMultiplo.value + " es múltiplo de 3";
        } else{
            res3.innerHTML = campoMultiplo.value + " no es múltiplo de 3";
        }
    } else{
        campoMultiplo.classList.remove("is-valid");
        campoMultiplo.classList.add("is-invalid");
        res3.innerHTML = "Agregue un número entre 1 y 200";
    }
});









