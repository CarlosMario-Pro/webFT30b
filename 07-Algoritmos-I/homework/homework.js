'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:    
  var acumulador = [1];
  for (var i = 2; i < num + 1; i++) {//empieza desde 2 porque es el número más pequeño por el que pueda dividir.
    if (num % i === 0) {//num dividido por i da resto 0
      acumulador.push(i);
      num /= i;   //se divide en i porque al obetener el primer resultado, la i incrementa
      i -= 1;
    }
  }return acumulador;
}
console.log(factorear(60));


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let aux;
  let i;
  let j;
  for (i = 0; i < array.length; i++) {
      for (j = 0; j < (array.length - i); j++) {
          if (array[j] > array[j + 1]) {
              aux = array[j];
              array[j] = array[j + 1];
              array[j + 1] = aux;
          }
      }
  }return array;
};
console.log(bubbleSort([1, 5, 7, 6, 4, 3, 2]));


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //si el num es menor que el numero de atrás, num se atrasa de numero y numero pasa al lugar de num.
  let aux;
  let i;
  let j;
  for (i = 1; i < array.length; i++) {
      for (j = 1; j < (array.length + i); j++) {
          if (array[j] < array[j - 1]) {
              aux = array[j];
              array[j] = array[j - 1];
              array[j - 1] = aux;
          }
      }
  }return array;
}



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //  [8, 6, 1, 2, 9, 0]
  //i  
  for(let i = 0; i < array.length - 1; i++){//ciclo for normal con avance hacia adelante
    let min = i;//variable auxiliar
    for (let j = i; j < array.length; j++){//for anidado donde j equivale a la posición del índice actual
      if(array[j] < array[min]){//
        min = j;
      }
    }
    let aux = array[i];//para guardar el valor de i
    array[i] = array[min];
    array[min] = aux;
  }
  return array;
};




/*
for(let i = 0; i < array.length; i++){
  let min = i;
  for (let j = i + 1; j < array.length; j++){
    if(array[j] < array[min]){
      min = j;
    }
  }
  if(i !== min){
    let aux = array[i];
    arry[i] = array[min];
    array[min] = aux;
  }
  return array;


*/




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
