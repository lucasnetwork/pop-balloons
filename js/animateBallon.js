export default function animateBallon(ballon,timestamp,bottom = 0){
    bottom +=4
    ballon.style.bottom = `${bottom}px`

    if(ballon.offsetTop+100 > 0){
        window.requestAnimationFrame((timestamp) => animateBallon(ballon,timestamp,bottom))
    }else{
        ballon.parentNode.removeChild(ballon)
    }
}