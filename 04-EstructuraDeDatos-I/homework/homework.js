// 'use strict'

const { normalizeIgnoreContent } = require("@11ty/eleventy/src/EleventyFiles");
const { listenerCount } = require("@11ty/eleventy/src/Util/AsyncEventEmitter");

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...55 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if(n < 0) return "Solo se permite con números positivos";
  if(n === 1) return 1;
  return n * nFactorial(n - 1);
}
console.log(nFactorial(5))



//Secuencia:  0,  1,  1,  2,  3,  5,  8,  13,  21,  34, ...55 
//Posición    0   1   2   3   4   5   6   7     8    9     10
function nFibonacci(n) {
  //fib(n) = fib(n-1) + fib(n-2)
  if (n === 0 || n === 1)return n
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }

console.log(nFibonacci(5));//15


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

/*function Queue() {*/
 
 class Queue{
  constructor (){
    this.arr = [];
  }
  enqueue (elemento){
    this.arr.push(elemento);
  }
  dequeue(){
    if (this.arr.length == 0){
    return undefined;
    }
    return this.arr.shift();
  }
  size(){
    return this.arr.length;
  }
 }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};

function List() {
  this.length = 0;
  this.head = null;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

List.prototype.add = function(data){
  var node = new Node(data);
  console.log(node);
}