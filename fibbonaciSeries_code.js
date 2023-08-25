onEvent("button1", "click", function( ) {
  var x = getNumber("text_input1");
  fibboSeries(x);
});
function fibboSeries(n) {
  var a = 0;
  var b = 1;
  var c = 0;
  if (n<1) {
    console.log("Invalid");
  } else if ((n == 1)) {
    console.log(a);
  } else if (n==2) {
    console.log(a);
    console.log(b);
  } else {
    for (var i = 1; i <= n; i++) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
      }
  }
}
