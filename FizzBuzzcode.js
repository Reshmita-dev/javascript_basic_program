onEvent("button1", "click", function( ) {
  printing_fizzbuzz();
});
function printing_fizzbuzz() {
  for (var i = 1; i < 101; i++)
  {
    if(i%3 ==0 && i%5==0)
    console.log("FIZZBUZZ");
     else if(i%3 == 0)
      console.log("FIZZ");
    else if(i%5 ==0)
    console.log("BUZZ");
    else
    console.log(i);
  }
}
