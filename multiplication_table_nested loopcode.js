onEvent("GenerateButton", "click", function( ) {
  var n = getNumber("tableNumberInput");
  for (var i = 1; i <=n; i++) {
    for (var j = 1; j <=10; j++) {
      var table = i*j;
      console.log(i + ("*" + (j + ("=" + table))));
    }
  }
});
