const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#computer-score')

let humanPoints = 0
let machinePoints = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber);
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine);

    if (human === machine) {
        result.innerHTML = 'Empate'
    } else if (
        (human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanPoints++
        humanScore.innerHTML = humanPoints
        result.innerHTML = 'Você ganhou'
    } else {
        machinePoints++
        machineScore.innerHTML = machinePoints
        result.innerHTML = 'Você perdeu'
    }

}