function foo(a,b){
  a = parseInt(a);
  b = parseInt(b);
  return a+b;}
console.log(foo(1, "1")); // output: 2

function foo(a,b){
  a = parseFloat(a);
  b = parseFloat(b);
  return a-b;}
console.log(foo(1, "1")); // output: 0

function foo(a,b){
  a = parseInt(a);
  b = parseInt(b);
  return a*b;}
console.log(foo(1, "1")); // output: 1

function foo(a,b){
  a = parseFloat(a);
  b = parseFloat(b);
  return a/b;}
console.log(foo(1, "1")); // output: 1