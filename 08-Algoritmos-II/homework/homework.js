'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //array  = [1, 2, 5, 4, 7, 9, 6, 4, 9, 1, 4];
  //indices   0  1  2  3  4  5  6  7  8  9  10
   if(array.length <= 1){
    return array;
  }

  let aleatorio = Math.floor(Math.random() * array.length);//genera el número aleatorio
  let pivot = array[aleatorio];//guarda en variable el numero aleatorio
  let left = [];
  let right = [];
  let repeatPivot = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] < pivot){
      left.push(array[i]);
    }
    else if (array[i] > pivot){
      right.push(array[i]);
    }
    else if(array[i] === pivot){
      repeatPivot.push(array[i]);
    }
  }
  return quickSort(left). concat(repeatPivot). concat(quickSort(right));//se concatenan en este orden para arrojar left, repeatPivot y right, el concat concatena más no ordena, si cambio este orden, quedaría mal ordenado el arreglo resultante. La razón del por qué en el left y right se dan como argumentos de lo que arroje la recursión de quickSort, es porque estos dos arrays son los que se organizan, el repeatPivot no hubo necesidad de ordenar porque fue el pivote escogido aleatoriamente.
}
console.log(quickSort([1, 2, 5, 4, 7, 9, 6, 4, 9, 1, 4]));




function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var len = array.length;

  if( len <= 1) {
  	return array;
  }

  var middle = Math.floor(len/2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  right = mergeSort(right);
  left = mergeSort(left);

  	var arr = [];

	while (left.length && right.length) {
		if(left[0] < right[0]) {
			arr.push(left.shift());
		} else {
			arr.push(right.shift());
		}
	}
	return arr.concat(left, right);

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
