$(document).ready(function(){
//make drop down menu drop down/show when hovered over
$(".nav-link.dropdown-toggle").mouseenter(function(){
    $(".dropdown-menu").css("display","contents")
})
//make drop down menu roll up when it leaves
$(".nav-link.dropdown-toggle").mouseleave(function(){
    $(".dropdown-menu").css("display","none")
})

})