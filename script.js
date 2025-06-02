let btn = document.querySelectorAll(".btn")
let input = document.getElementById("input")
let mult = document.getElementById("multiplication")
btn.forEach(element => {
    element.addEventListener('click', () => {

        let text = element.textContent
        if(text == 'x'){
        text = '*'  
    }      
    input.textContent += text
        console.log(element); 
    })
    
})

