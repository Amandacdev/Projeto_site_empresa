$(document).ready(function(){

    //Armazendo login e senha em localStorage
    localStorage.setItem("usuario","admin");
    localStorage.setItem("password","123");
    
    const login= localStorage.getItem("usuario");
    const senha= localStorage.getItem("password");

    //Código JQuery para verificação de login

    $("#btn-login").click(function(){
        var usuario = $("#exempleInput").val();
        var pass = $("#exampleInputPassword1").val();

        //Verificando se os campos foram preenchidos
        if(usuario.length == "" && pass.length == ""){
            $("#p1").text("Por favor informe o usuario.");
            $("#exempleInput").focus();

            $("#p2").text("Por favor insira sua senha.");
            $("#exampleInputPassword1").focus();

            return false;
        }

        else if(usuario.length == ""){
            $("#p1").text("Por favor informe o email.");
            $("#p2").text("");
            $("#exempleInput").focus();

            return false;
        }

        else if(pass.length == ""){
            $("#p2").text("Por favor insira sua senha.");
            $("#p1").text("");
            $("#exampleInputPassword1").focus();
            return false;
        }
        
        else if(usuario==login && pass==senha){
            $(window).attr('location','pag1.html')
            return false;
        }
        else{
            alert("Login/senha incorretos.");
        }
    })   
})