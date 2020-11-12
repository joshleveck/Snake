import { onSnake, expandSnake, upSpeed } from './snake.js'
import { randomGridPosition } from './grid.js'
import { updateScore, finalScore } from './web.js'

let food = getRandomFoodPosition()
let currentScore = 0
const EXPANSION_RATE = 1

export function update() {
  if (onSnake(food)) {
    currentScore++
    if (currentScore % 5 === 0) upSpeed()
    expandSnake(EXPANSION_RATE)
    updateScore(currentScore)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}

export function finish() {
    finalScore(currentScore)
    food = getRandomFoodPosition()
    currentScore = 0
}

