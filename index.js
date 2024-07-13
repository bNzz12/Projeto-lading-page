
var setaDireita= window.document.getElementById("seta-direita")
var setaEsquerda= window.document.getElementById("seta-esquerda")

var leonardo= window.document.getElementById("leonardo")

var samantha= window.document.getElementById("samantha")

var bruna= window.document.getElementById("bruna")

function RolarParaDireita(){
    leonardo.style="display:none"
    bruna.style="display:flex"
    setaDireita.style="display:none"
    setaEsquerda.style="display:flex; margin-top:75px;"

}

function RolarParaEsquerda(){
    bruna.style="display:none"
    leonardo.style="display:flex"
    setaEsquerda.style="display:none"
    setaDireita.style="display:flex"
}




