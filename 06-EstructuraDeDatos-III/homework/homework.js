"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

//Implementat la clase BinarySearchTree
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null
}


//size: retorna la cantidad total de nodos del árbol
BinarySearchTree.prototype.size = function(){
  if(this.right === null && this.left === null) return 1;
  if(this.right === null && this.left !== null) return 1 + this.left.size();
  if(this.right !== null && this.left === null) return 1 + this.right.size();
  if(this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size();
};


BinarySearchTree.prototype.insert = function(value){ // recibe un nodo y lo inserta en la posición correspondiente
  //chequear si el value el mayor o menor que el value del nodo
  //el insert se llama sobre un nodo no creado:
  //let arbol =new BinarySearchTree(10)
  //this.insert(5)
  if(value > this.value){
    if(this.right === null){ // rama vacia
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  if(value <= this.value){ // engancha los menos o iguales
    if(this.left === null){ // o tbn !this.left 
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
 }


 BinarySearchTree.prototype.contains = function(value) { // buscar e indicar true o false
  if(value === this.value) return true 
  if(value < this.value){
    if(!this.left) return false;
    else { 
       return this.left.contains(value)
    }
  }
  else {
    if(!this.right) return false;
    else {
      return this.right.contains(value);
   }
  }
 }
 

 BinarySearchTree.prototype.depthFirstForEach = function (cb,variante){
  if (variante === 'in-order' || variante === undefined){ // izq - root - der
     if(this.left) this.left.depthFirstForEach(cb,variante);
     cb(this.value);
     if(this.right) this.right.depthFirstForEach(cb,variante);
  }
  if (variante === 'post-order'){ // izq - der - root
     if(this.left) this.left.depthFirstForEach(cb,variante);
     if(this.right) this.right.depthFirstForEach(cb,variante);
     cb(this.value);
  }
  if (variante === 'pre-order'){ // root - izq - der
    cb(this.value); // ejecuta la funcion en el mismo orden
    if(this.left) this.left.depthFirstForEach(cb,variante);
    if(this.right) this.right.depthFirstForEach(cb,variante);
  } 
 
 
 }
 BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]){ 
  //var array = [], si lo declarmos dentro de la funcion, no podemos hacer recursion porque lo estamos reiniciando, 
  // en cambio si lo creamos como parametro cada vez que ejecuta la funcion empieza con un array vacio.
  //si tiene ramas
  if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);
  cb(this.value);
  while(array.length > 0) array.shift().breadthFirstForEach(cb, array); // shift remueve el primer elemento del array y lo devuelve,
  //si tiene elementos el array vuelvo a hacer lo mismo.
 }
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
