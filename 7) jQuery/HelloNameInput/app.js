$(function () {
    $( "#prompt" ).click(function() {
        var name = $(".name").val();                
        $( ".greeting" ).text("Hello " + name);
    });
});