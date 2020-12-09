const sounds=['Barz', 'GetEm','Doom', 'Man','Perish','Toasted']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    btn.addEventListener('click', () => {
      stopSongs()
    

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
 let current = sound
 return current
})

let currentSong = current

function stopSongs() {
    sounds.forEach(sound => {
     const song = document.getElementById(sound)

        song.pause()
        song.currentTime =0;
       

    })
}
function playPausedSongs() {
    sounds.forEach(sound => {
     const song = document.getElementById(sound)

        song.pause()
       

    })
}


const control = document.getElementById('control')
const controlPlay = document.getElementById('controlPlay')
const audio = document.getElementsByClassName('audio')


function ControlSongs() {
    sounds.forEach(sound => {
     const song = document.getElementById(sound)

        song.pause()
      

    })
}



control.addEventListener('click',() =>{
    ControlSongs()
})
controlPlay.addEventListener('click',() =>{
 currentSong.play()
  
})
