function jogar(botao){
    var comemoracao = window.document.getElementById("comemoracao")
    var resp = window.document.getElementById("resp")
    var incentivo = window.document.getElementById("incentivo")
    
    var jogadaCli = botao.getAttribute("value")

   

    var jogadaComp = Math.floor(Math.random() * 3) + 1

    if (jogadaCli == 1 && jogadaComp == 2 ){
            comemoracao.style.color = " rgb(218, 0, 0)"
            comemoracao.innerText = "Você perdeu!";
            resp.innerText=`Seu adversario ganhou, pois ele jogou papel e embrulhou a pedra que você jogou!`
            incentivo.innerText=`Escolha outra para continuar!` 
        //se for pedra 1 e papel 2, papel ganha
    }else if(jogadaCli == 1 && jogadaComp == 3){
        comemoracao.style.color = " rgb(11, 109, 28)"
             comemoracao.innerText = "Você ganhou!";
             resp.innerText=`Você ganhou, pois jogou pedra e esmagou a tesoura que seu adversario jogou!`
             incentivo.innerText=`Escolha outra para continuar!` 
         //se for pedra 1 e tesoura 3, pedra ganha
    
        }else if (jogadaCli == 2 && jogadaComp == 3){
            comemoracao.style.color = " rgb(218, 0, 0)"
            comemoracao.innerText = "Você perdeu!";
            resp.innerText=`Seu adversario ganhou, pois ele jogou tesoura e cortou o papel que você jogou!`
            incentivo.innerText=`Escolha outra para continuar!` 
        //se for papel 2 e tesoura 3, tesoura 3 ganha
        }else if(jogadaCli == 2 && jogadaComp == 1){
            comemoracao.style.color = " rgb(11, 109, 28)"
            comemoracao.innerText = "Você ganhou!";
            resp.innerText=`Você ganhou, pois jogou papel e embrulhou a pedra que seu adversario jogou!`
            incentivo.innerText=`Escolha outra para continuar!` 
        // se for papel 2 com pedra 1, papel 2 ganha
    
        }else if (jogadaCli == 3 && jogadaComp == 1){
            comemoracao.style.color = " rgb(218, 0, 0)"
            comemoracao.innerText = "Você perdeu!";
            resp.innerText=`Seu adversario ganhou, pois ele jogou pedra e esmagou a tesoura que você jogou!`
            incentivo.innerText=`Escolha outra para continuar!` 
        // se for tesoura 3 com pedra 1, pedra 1 ganha
        }else if (jogadaCli == 3 && jogadaComp == 2){
            comemoracao.style.color = " rgb(11, 109, 28)"
            comemoracao.innerText = "Você ganhou!";
            resp.innerText=`Você ganhou, pois jogou tesoura e cortou o papel que seu adversario que jogou!`
            incentivo.innerText=`Escolha outra para continuar!` 
             // se for tesoura 3 com papel 2, tesoura 3 ganha
        }else{
            comemoracao.style.color = " rgb(0, 0, 0)"
             comemoracao.innerText = "Empate!";
             resp.innerText=`Empate, vocês jogaram o mesmo!`
             incentivo.innerText=`Escolha outra para continuar!` 
        }
}
     
