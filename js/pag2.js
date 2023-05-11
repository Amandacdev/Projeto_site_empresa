$(document).ready(function(){

    //Código JQuery para butons do header
    
    $("#btn-col1").click(function(){
        $(window).attr('location','pag1.html')
    });

    $("#btn-col2").click(function(){
        $(window).attr('location','index.html')
    });

    //Código JQuery para lista de taredas

    $('#atividades').html(localStorage.content);

    $("#btn-add").click(function(){
        var input = $('#input-atividade').val();

        $('#atividades').append('<li><i class="bi bi-trash-fill"></i><i class="bi bi-check-circle-fill"></i>' + input + '</li>');
        $(this).val('');
        
        //Armazenando atividades
        localStorage.content = $('#atividades').html();
    });


    $('ul').on('click','.bi-trash-fill',function(){

        $(this).parent("li").remove();
     
        //Armazenando atividades
        localStorage.content = $('#atividades').html();
        
    });

    $('ul').on('click','.bi-check-circle-fill',function(){
        $(this).parent('li').toggleClass('checked');

        //Armazenando atividades
        localStorage.content = $('#atividades').html();

    });
})