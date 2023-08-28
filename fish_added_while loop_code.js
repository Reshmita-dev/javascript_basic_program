onEvent("button1", "click", function( ) {
  var n = getNumber("text_input1");
  var count = 0;
  while (count<n) {
    count = count+1;
    var left = n-count;
    console.log("Fishes added"+count);
    console.log("Fish remaing to be addaed"+left);
  }
});
