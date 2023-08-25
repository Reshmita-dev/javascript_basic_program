onEvent("button1", "click", function( ) {
  var x = getNumber("text_input1");
  console.log(isFactorial(x));
});
function isFactorial(n) {
  var fact = 1;
  for (var i = 1; i <= n; i++) {
    fact = fact*i;
  }
  return("Factorial of number is =" +fact);
}
