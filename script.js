let btn = document.querySelectorAll(".btn")
let screen = document.getElementById("screen")
let mult = document.getElementById("multiplication")
let totalValue = document.getElementById("totalValue")
let clear = document.getElementById("clear")
let text;
btn.forEach(element => {
    element.addEventListener('click', () => {

         text = element.textContent
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
   const evaluated = eval(screen.textContent)
    if (screen.textContent = evaluated){
        screen.textContent = `  ${evaluated}`
    }
 

})

clear.addEventListener("click", () =>{
    screen.textContent = ''
})




