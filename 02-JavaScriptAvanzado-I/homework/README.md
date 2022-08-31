
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
   x = 1;                            //1
   var a = 5;                        //5
   var b = 10;                       //10
   var c = function(a, b, c) {
      var x = 10;
      console.log(x);                //10
      console.log(a);                //8
      var f = function(a, b, c) {
         b = a;                          
         console.log(b);             //8
         b = c;                      //10   
         var x = 5;
      }
      f(a,b,c);//(8, 9, 10)da esto porque busca valores de adentro hacia afuera
      console.log(b);
   }
   c(8,9,10);
   console.log(b);                   //10
   console.log(x);                   //1
```

```javascript
console.log(bar);                    //1
console.log(baz);                    //2
foo();                               //"Hola!"
function foo() {console.log('Hola!');  }  
var bar = 1;
baz = 2;                                  //undefined, porque baz no fue definida                                    
```

```javascript
var instructor = "Tony";
if(true) {//si es tru, entra siempre 
    var instructor = "Franco";
}
console.log(instructor);        //Franco, una variable se puede reasignar dentro de un if
```

```javascript
var instructor = "Tony";        
console.log(instructor);                //Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();                                   //Franco
console.log(instructor);                //Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);        //The Flash
    console.log(pm);                //Reverse Flash
}
console.log(instructor);            //The Flash
console.log(pm);                    //Franco, let solo puede ser declarada una sola vez, por eso no toma
                                    //cuenta la reasignación, si borro el let y dejo solo pm = "Reverse Flash",
                                    //si acepta la reasignación, con var si se puede reasignar de esa manera
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"         //2, JS convierte el "3" en número para poderlo dividir, su resultado será en número
"2" * "3"       //6, para poder ejecutar la operación, JS convierte los números tipo string a número
4 + 5 + "px"    //"9px", JS suma los números primero, pero concatena los siguientes datos después del string
                //el resultado lo arroja en string, si después del string pongo - * /, su resultado total será NaN
"$" + 4 + 5     //"$45"
"4" - 2         //2
"4px" - 2       //NaN
7 / 0           //Infinity, en matemáricas no se permite, pero JS lo ejecuta como infinity
{}[0]           //undefined
parseInt("09")  //9
5 && 2          //2, si el último valor es 0, no lo toma por ser false, tomaría el primero
2 && 5          //5
5 || 0          //5
0 || 5          //5, en teor+ia debería ser 0, pero 0 en false, por eso se toma el 5
[3]+[3]-[10]    //23, cuando se usa [] con +, concatena, cuando se usa [] con -, se hace operación matemática
3>2>1           //false
[] == ![]       //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);                  //Yo puse 1, pero es undefined, el console.log no imprime una variable que esté
                                    //definida después de si
   console.log(foo());              //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);                     //undefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());    //Aurelio De Rosa

var test = obj.prop.getFullname;        //Undefined. Cuando se hace esto, se hace una copia del metodo, dejandolo afuera, y como no está definido eso, da undefined

console.log(test());                    //undefined, no sé por qué
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);                                      //1
   setTimeout(function() { console.log(2); }, 1000);    //2
   setTimeout(function() { console.log(3); }, 0);       //3
   console.log(4);                                      //4
}

printing();                                             //1   4   undefined   3   2, las ejecuciones las entendí
                                                        //el por qué en intermedio dió undefined,no.    
```
