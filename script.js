document.body.addEventListener('keyup', (event) => {
    tocarSom(event.code);
    console.log(event.code);
})// evento pra ouvir no body

function tocarSom(numKills){ 
    if(numKills.length == 6){
        numKills = numKills.charAt(5);
    } else {
        numKills = numKills.charAt(6);
    } // condicional pra uso em qualquer teclado numérico, NumPad ou Digit
    console.log(numKills);
    let audioElement = document.querySelector(`#s_${numKills}kill`); // template pra achar o som
    let keyElement = document.querySelector(`div[data-key="${numKills}kill"]`) //acha a classe da key no html 
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if (keyElement) {
        keyElement.classList.add('active') //adiciona a classe com o evento de mostrar oq tocou, no html
        setTimeout(()=>{
            keyElement.classList.remove('active'); //remove a class após 300ms
        }, 300)
    }
    console.log(audioElement);
}
