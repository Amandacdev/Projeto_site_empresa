$(document).ready(function(){

    //Inserindo mensagem personalizada para usuário
    const usuario = localStorage.getItem("usuario");
    $("h2").html("Bem vindo, " + usuario + "!");

    //Código JQuery para butons do header
    $("p").hide();
    
    $("#btn-col1").click(function(){
        $("#p-col1").slideToggle();
    });

    $("#btn-col2").click(function(){
        $("#p-col2").slideToggle();
    });
    $("#btn-col3").click(function(){
        $("#p-col3").slideToggle();
    });

    $("#btn-col4").click(function(){
        $(window).attr('location','index.html')
    });

    $("#btn-col6").click(function(){
        $(window).attr('location','pag2.html')
    })
});