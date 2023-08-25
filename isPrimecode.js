onEvent("button1", "click", function( ) {
  var x = getNumber("text_input1");
  setText("label1", isPrime(x));
});
function isPrime(n) {
  if (n<=1) {
    setText("label1", "NOT A PRIME NUMBER");
  } else if (n==2) {
    setText("label1", "PRIME NUMBER");
  } else if (n>2) {
    for (var i = 2; i < n; i++) {
      if (n%i == 0) 
        return ("NOT A PRIME NUMBER");
    }
   return ("PRIME NUMBER");
  }
}
