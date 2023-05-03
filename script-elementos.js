
$(document).ready(
    function(){
        
        $("#um").click(
            function(){
                console.log("elemento foi clicado...")
            }
        );

        $("#dois").dblclick(
            function(){
                alert("elemento foi clicado duas vezes...")
            }
        );

        $("#um").mouseover(
            function(){
                console.log("Passou o mouse em cima...");
            }
        );

        $(".cinza").mouseout(
            ()=>{
                console.log("deixou a regiao da caixa");
            }
        );
        
    }
);



function exibeElementoPorTag(tag){
    $(tag).show();

}


function ocultaElementoPorTag(tag){
    $(tag).hide();
}

function ocultarPorClasse(elemento){
    $('.'+elemento).hide();
}

function mostrarPorClasse(elemento){
    $('.'+elemento).show();
}

function ocultarPorID(elemento){
    $('#'+elemento).hide();
}

function mostrarPorID(elemento){
    $('#'+elemento).show();
}



