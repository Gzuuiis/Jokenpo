var jogadaPC = 0
var jogadaPlayer;
var opcoes =  document.getElementsByClassName('escolhasPC')
var PontosPC = 1
var PontoPlayers = 1

function jogar(obj){

    if(jogadaPC != 0){
        opcoes[jogadaPC-1].style.backgroundColor = "rgb(74, 74, 74)"
    }

    if(obj == "pedra"){
        jogadaPlayer = "pedra"
    }
    else if(obj == "papel"){
        jogadaPlayer = "papel"
    }
    else if(obj == "tesoura"){
        jogadaPlayer = "tesoura"
    }
    Escolher_jogadaPC()
}

function Escolher_jogadaPC(){
    var N_random = Math.random()
    jogadaPC = 1 + Math.trunc(3 * N_random)

    resultado()
}

function resultado(){
    var resultbox = document.getElementById('caixaresult')
    var saidaResult = document.getElementById('resultado')

    if(jogadaPlayer == "pedra" && jogadaPC == 1 || jogadaPlayer == "papel" && jogadaPC == 2 || jogadaPlayer == "tesoura" && jogadaPC == 3){
        resultbox.style.backgroundColor = "grey"
        saidaResult.innerHTML = "Empate!"
        opcoes[jogadaPC-1].style.backgroundColor = "rgb(255, 95, 107)"
    }
    else if(jogadaPlayer == "pedra" && jogadaPC == 3 || jogadaPlayer == "papel" && jogadaPC == 1 || jogadaPlayer == "tesoura" && jogadaPC == 2){
        resultbox.style.backgroundColor = "green"
        saidaResult.innerHTML = "Ganhou!"
	    opcoes[jogadaPC-1].style.backgroundColor = "rgb(255, 95, 107)"
        document.getElementById('pontosPlayer').innerHTML = PontoPlayers++
    }
    else{
        resultbox.style.backgroundColor = "rgb(255, 95, 107)"
        saidaResult.innerHTML = "Perdeu!"
        opcoes[jogadaPC-1].style.backgroundColor = "rgb(255, 95, 107)"
        document.getElementById('pontosPC').innerHTML = PontosPC++
    }
}