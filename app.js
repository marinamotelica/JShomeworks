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

//Homework20
function typeAngel(degree){
    if ((degree > 0) && (degree < 90)){
      return "Acute"
      } else if (degree === 90){
      return "Right"
      } else if ((degree > 90)&& (degree < 180)){
      return "Obtuse"
      } else if (degree === 180){
      return "Straight"
      } else { return "is not a angel"}
     
    }
    //typeAngel(179)

    function checkType(value){ // 5
        let typeOfValue = typeof(value) // "number"
          switch(typeOfValue){ // "number"
          case "number": return "number"
            case "string": return "string"
          case "boolean": return "boolean"
          case "undefined": return "undefined"
          case "object": return "null" // rypeof(null) => object
        
          }
        }

        function getPhonePrefixByCountry(contry){
            switch(contry){
              case "Moldova": return "+373"
              case "Romania": return "+40"
              case "Moldova": return "+373"
              case "Moldova": return "+373"
              case "Moldova": return "+373"
              case "Moldova": return "+373"
              case "Moldova": return "+373"
              case "Moldova": return "+373"
              case "Moldova": return "+373"
              case "Moldova": return "+373"
              case "Moldova": return "+373"
            default: return "Unknown contry"
              }
            }

            //Homework21
            