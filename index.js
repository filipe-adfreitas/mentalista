var numeroSecreto = parseInt(Math.random() * 11);

function chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "voce acertou";
    } else if (chute > 10) {
        elementoResultado.innerHTML ="voce deve digitar um numero de 0 a 10";
    } else if (chute < 0) {
        elementoResultado.innerHTML = "voce deve digitar um numero de 0 a 10";
    } else {
        elementoResultado.innerHTML = "Errou, o numero secreto era " + numeroSecreto;
    }
}



// se o chute for igual ao numero secreto acertou 

