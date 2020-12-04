import animateBallon from './animateBallon.js'

export default function addBallons(container, handleClick) {
    const x =Math.random()*window.innerWidth

    const ballon = document.createElement('img')
    ballon.setAttribute('class','balloon')
    ballon.setAttribute('src','./imgs/balloon.svg')
    ballon.setAttribute('draggable','false')
    
    ballon.style.left = `${x}px`

    ballon.addEventListener('click',handleClick)

    container.appendChild(ballon)
    window.requestAnimationFrame(timestamp => animateBallon(ballon,timestamp))
}