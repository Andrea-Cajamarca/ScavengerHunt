var colors = ["red", "yellow", "blue", "grey"];
var i = 0;
console.log(colors);
$(document).ready(function(){
    $("#colorPrinter").click(function(){
        console.log(colors[i++]);
    });
});