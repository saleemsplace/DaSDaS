const sounds=['Barz', 'GetEm','Doom', 'Man','Perish','Toasted']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
   
    btn.innerText = sound
    btn.addEventListener('click', () => {
      stopSongs()
    

        document.getElementById(sound).play()
          
   let x = event.target.tagName
    })
    
    document.getElementById('buttons').appendChild(btn)
   
})

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
