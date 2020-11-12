import { reset as resetSnake } from "./snake.js"
import { reset as resetInput } from "./input.js"


var modal = document.getElementById("myModal")
var again = document.getElementsByClassName("again")[0]
var nope = document.getElementsByClassName("close")[0]

var current = document.getElementById("current")
var time = document.getElementById("time")
var final = document.getElementById("final")

var highscore = 0

function initial() {
    time.innerHTML = "All Time Score: " + highscore
    current.innerHTML = "Current Score: 0"
}

export function showModal() {
    modal.style.display = "block"
    resetInput()
    resetSnake()
}

export function updateScore(score) {
    if (score > highscore) {
        current.innerHTML = "Current Score: " + score
        time.innerHTML = "All Time Score: " + score
    }
    else {
        current.innerHTML = "Current Score: " + score
    }
    
}

export function finalScore(score) {
    if (score > highscore) {
        final.innerHTML = "New High Score: " + score + "!"
        highscore = score
    }
    else {
        final.innerHTML = "Final Score: " + score + "!"
    } 
    
}

again.onclick = function() {
    modal.style.display = "none"
    initial()
}


initial()


