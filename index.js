document.getElementById("container").style.color = "blue";
document.getElementById("container").style.backgroundColor = "yellow"

document.getElementById("text").innerHTML = 'My name is Lucky'
let child = document.getElementById("container").childNodes;
console.log({child});

let children = document.getElementById("container").children;
console.log({children});

let p = document.createElement('p');
document.getElementById("container").appendChild()
p.innerHTML= 'I am new'
document.getElementById('container').appendChild(p);
p.setAttribute('class', 'paragraph');
p.setAttribute('id','paragraph');

let button = document.getElementById('button')
button.addEventListener('click', function(){
    button.innerHTML= 'clicked'
    button.style.padding = '10px'
    button.style.borderRadius = '5px'
    button.style.border = 'none'
})