let text = document.getElementById('text')
let bg = document.getElementById('body')

bg.style.color = white
text.style.color = black

if(bg.style.background === 'white'){
    text.style.color = 'black'
    text.innerText = text.style.color

}else{
    text.style.color = 'white'
    text.innerText = text.style.color

}
