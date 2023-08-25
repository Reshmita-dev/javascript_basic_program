onEvent("button1", "click", function( )
{
  var n = getNumber("text_input1");
  setText("labelreversed", revNum(n));
});
function revNum(x) {
  var rev = 0;
  var rem = 0;
  while ((x != 0)){
    rem = x % 10;
    rev =  (rev * 10) + rem;
    x=Math.floor(x/10);
  }
  return rev;
}
