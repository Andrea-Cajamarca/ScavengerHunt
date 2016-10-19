$(function() {
    console.log('this loaded!');
$( "#disappear" ).click(function() {
    console.log('I got clicked!');
  $( "#magicTrick" ).hide(function() {
    alert( "Complete." );
  });
});    
});

