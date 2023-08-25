onEvent("button1", "click", function( ) {
  var temp_cel = getText("text_input1");
  celsius_to_Fara(temp_cel);
});
onEvent("button2", "click", function( ) {
  var temp_fara = getNumber("text_input1");
  Fara_to_celsius(temp_fara);
});
function celsius_to_Fara(n) {
  setText("label_result", (n*9/5)+32);
}
function Fara_to_celsius(n) {
  setText("label_result", (n-32)*5/9);
}
