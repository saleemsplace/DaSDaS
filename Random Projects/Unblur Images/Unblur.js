const loading= document.querySelector('.loading-text')
const bg= document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 20)

function blurring(){
    load++
    if(load > 99){
        clearInterval(int)
    }
loading.innerText = `${load}%`
loading.style.opacity = scale(load,0, 100, 1, 0)
bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}







// fade from (number) when it goes 0 to 100 you map opacity from 1 to 0 to dissapear
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }