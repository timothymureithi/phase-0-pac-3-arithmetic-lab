var number;
function add(a, b){
  number = a + b;
  return number;
}

var number;
function subtract(a,b){
  number = a - b;
  return number;
}

function multiply(a,b){
  number = a * b;
  return number;
}

function divide(a,b){
  number = a / b;
  return number;
}

function increment(a){
  number = a + 1;
  return number;
}

function decrement(a){
  number = a - 1;
  return number;
}

function makeInt(a){
  number = parseInt(a, 10);
  return number;
}

function makeInt(a){
  number = parseFloat(a, 10);
  return number;
}

function preserveDecimal(a){
  number = makeInt("2.222");
  return number;
}

function preserveDecimal(a){
  number = makeInt(a, 10);
  return number;
}