var p;
var r;
var t;
onEvent("button_SI", "click", function( ) {
  p = getNumber("text_input_principal_SI");
  r = getNumber("text_input_rate_SI");
  t = getNumber("text_input_time_SI");
  setText("label_result", (p*r*t)/100);
});
onEvent("button_CI", "click", function( ) {
  p = getNumber("text_input_principal_SI");
  r = getNumber("text_input_rate_SI");
  t = getNumber("text_input_time_SI");
  setText("label_result", p*([Math.pow((1+r),t)]/100-1));
});
