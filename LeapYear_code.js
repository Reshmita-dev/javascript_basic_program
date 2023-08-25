onEvent("button1", "click", function( ) {
  var x = getNumber("text_input1");
  isLeap(x);
});
function isLeap(n) {
  if (n%400 == 0) {
    setText("label1", "YES");
  } else if (n%4==0 && n%100 != 0) {
    setText("label1", "YES");
  } else {
    setText("label1", "NO");
  }
}
