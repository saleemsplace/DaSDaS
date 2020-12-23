const button= document.getElementById('button')
const toats= document.getElementById('toasts')


const messages =[
    'Error',
    'Submitted',
    'Try Again',
    'You Won',
]

button.addEventListener('click',()=> createNotifications())




addEventListener("keydown", function(event) {
    if (event.keyCode == 13)
    createNotifications()
  });


function createNotifications(){
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText= getRandomMessage()
    toasts.appendChild(notif)

    setTimeout(()=>{
    notif.remove()
},3000)
}
function getRandomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}


