const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#computer-score')

let humanPoints = 0
let machinePoints = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber);
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine);

    if (human === machine) {
        result.innerHTML = 'Empate'
    } else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
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