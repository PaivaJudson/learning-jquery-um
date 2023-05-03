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