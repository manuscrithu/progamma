$(document).ready(function(){
    $("#register").mouseenter(function(){
        $("#register").animate({
            width:'50%'
        },500)
    })

    $("#register").mouseleave(function(){
        $("#register").animate({
            width:'25%'
        },500)
    })

    $("#login").mouseenter(function(){
        $("#login").animate({
            width:'50%'
        },500)
    })

    $("#login").mouseleave(function(){
        $("#login").animate({
            width:'25%'
        },500)
    })

    $("#view").mouseenter(function(){
        $("#view").animate({
            width:'50%'
        },500)
    })

    $("#view").mouseleave(function(){
        $("#view").animate({
            width:'25%'
        },500)
    })    
})

function reg()
{
    window.location.href="register.html";
}

function log()
{
    window.location.href="login.html";
}

function view()
{
    window.location.href="view.html";
}