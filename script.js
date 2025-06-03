let btn = document.querySelectorAll(".btn")
let screen = document.getElementById("screen")
let mult = document.getElementById("multiplication")
let totalValue = document.getElementById("totalValue")
let clear = document.getElementById("clear")
btn.forEach(element => {
    element.addEventListener('click', () => {

        let text = element.textContent
        if(text == 'x'){
        text = '*'  
    }      
    screen.textContent += text
        console.log(element); 
    

 
    })
    
})
totalValue.addEventListener("click", () =>{
    const calculate = screen.textContent
try{
    if(calculate){
        screen.textContent = eval(screen.textContent)
    }
} catch(error){
    screen.textContent = 'Error'
}
    

    console.log(screen.textContent);
    

})

clear.addEventListener("click", () =>{
    screen.textContent = ''
})


