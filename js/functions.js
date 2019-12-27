var contador = 0;

function incrementar() {

    contador++;



    document.getElementById("ValorCesta").innerHTML="CESTA: "+contador;

    if(contador == 1)
        {
            alert('Has añadido ' + contador + ' artículo a tu cesta');
        }
        else
        {
            alert('Has añadido ' + contador + ' artículos a tu cesta');
        }
}

