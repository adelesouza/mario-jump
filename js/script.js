const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const gameOver = document.querySelector('.game-over-label')
const reset = document.querySelector('.reset')

const loop = setInterval(verifyPosition, 10)

function verifyPosition() {
  const pipePosition = pipe.offsetLeft
  const cloudsPosition = clouds.offsetLeft
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', ' ')

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    clouds.style.animation = 'none'
    clouds.style.left = `${cloudsPosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`
    mario.src = './images/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '40px'

    gameOver.style.display = 'block'
    reset.style.display = 'block'

    clearInterval(loop)
  }
}

function jump() {
  mario.classList.add('jump')

  setTimeout(ground, 500)
}

function ground() {
  mario.classList.remove('jump')
}

document.onclick = () => {
  window.location.reload(true)
}

document.addEventListener('keydown', jump)
document.addEventListener('click', reset)
