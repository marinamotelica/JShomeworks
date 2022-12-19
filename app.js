function double(n) {
    if(n>13){

        return (n-13)*2
    } 
    else{
        return(n-13)
    }
}
// console.log(double(12))

let sayHelloTo = function (name){
    console.log("hello " + name)
    
}
// sayHelloTo("maxim")

function isNegativ (x,y){
    if (x<0 || y<0) return true
    else return false

}
// console.log(isNegativ(3,2))

let firstNumber= document.getElementById("fnumber")
let secondNumber= document.getElementById("snumber")
let result= document.getElementById("result")
let multiply= document.getElementById('*')
let devide= document.getElementById('/')
let plusButton= document.getElementById("plus")
let minusButton= document.getElementById("-")

function sum(nr1,nr2){
    return nr1+nr2
}

function sumAction(){
    
    result.innerText=(sum(firstNumber.value * 1, secondNumber.value * 1))
}

plusButton.addEventListener("click",  sumAction)

function minus(nr1, nr2){
    return nr1-nr2
}

function minusAction(){
    result.innerText= minus(firstNumber.value *1, secondNumber.value * 1)
}

minusButton.addEventListener("click", minusAction)

