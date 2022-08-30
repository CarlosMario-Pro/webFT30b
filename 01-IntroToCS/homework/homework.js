'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let binario = 0;
  for(var i = 0; i < num.length; i ++){
      binario += num[i] * 2 **(num.length - 1 - i);
  }
  return binario;
};
console.log(BinarioADecimal("1110011"));


function DecimalABinario(num) {
  // tu codigo aca
  if (num <= 0) {
    return 0;}
  var array = [];
  while (num > 0) {
  array.unshift(num % 2);
  num = Math.floor(num / 2);
  }
  return array.join("")
};
console.log(DecimalABinario("15"));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}