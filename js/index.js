console.log("it's Loaded");

$(document).ready(function(){

$("button").hover(
    function(){
        $(this).addClass("hover")
},
    function(){
        $(this).removeClass("hover");
})

$(".heroSection img").hover(
function(){
    $(this).addClass("radius")
},
function(){
    $(this).removeClass("radius");
})


})