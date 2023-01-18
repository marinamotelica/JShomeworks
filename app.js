function double(n) {
    if (n > 13) {

        return (n - 13) * 2
    }
    else {
        return (n - 13)
    }
}
// console.log(double(12))

let sayHelloTo = function (name) {
    console.log("hello " + name)

}
// sayHelloTo("maxim")

function isNegativ(x, y) {
    if (x < 0 || y < 0) return true
    else return false

}
// console.log(isNegativ(3,2))

let firstNumber = document.getElementById("fnumber")
let secondNumber = document.getElementById("snumber")
let result = document.getElementById("result")
let multiply = document.getElementById('*')
let devide = document.getElementById('/')
let plusButton = document.getElementById("plus")
let minusButton = document.getElementById("-")

function sum(nr1, nr2) {
    return nr1 + nr2
}

function sumAction() {

    result.innerText = (sum(firstNumber.value * 1, secondNumber.value * 1))
}

plusButton.addEventListener("click", sumAction)

function minus(nr1, nr2) {
    return nr1 - nr2
}

function minusAction() {
    result.innerText = minus(firstNumber.value * 1, secondNumber.value * 1)
}

minusButton.addEventListener("click", minusAction)

//Homework20
function typeAngel(degree) {
    if ((degree > 0) && (degree < 90)) {
        return "Acute"
    } else if (degree === 90) {
        return "Right"
    } else if ((degree > 90) && (degree < 180)) {
        return "Obtuse"
    } else if (degree === 180) {
        return "Straight"
    } else { return "is not a angel" }

}
//typeAngel(179)

function checkType(value) { // 5
    let typeOfValue = typeof (value) // "number"
    switch (typeOfValue) { // "number"
        case "number": return "number"
        case "string": return "string"
        case "boolean": return "boolean"
        case "undefined": return "undefined"
        case "object": return "null" // rypeof(null) => object

    }
}

function getPhonePrefixByCountry(contry) {
    switch (contry) {
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

function separateArray(array, separator) { // [1,2,3]  *   "1*2*3"
    return array.join(separator)

}
// console.log(separateArray([1,2,3],"*"))


function revers(value) {
    let typeOfValue = typeof (value)
    if (typeOfValue === "string") {
        let arrayFromString = 1
    }
}

//homework22
function uniqNums(arrOfNums) {
    let nums = {}
    for (let i = 0; i < arrOfNums.length; i++) {
        if (nums[arrOfNums[i]]) {
            nums[arrOfNums[i]] = nums[arrOfNums[i]] + 1
        }
        else {

            nums[arrOfNums[i]] = 1
        }
    }
    const uniquesArray = Object.keys(nums) // [1,2,4,5]
    const oftenNumberValue =  Object.values(nums).sort((a,b) => b - a )[0]
    const oftenNumber = uniquesArray.find((key) => nums[key] === oftenNumberValue)
    return {uniquesArray, oftenNumber}

}

console.log(uniqNums([1,2,1,4,5,1]))

//homework22 number2
function minMax(numbers) {
    let min = numbers[0];
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return { min: min, max: max };
  }
  
  let resultMinMax = minMax([1, 2, 3, 4, 5]);
  console.log(`Minimum: ${resultMinMax.min}, Maximum: ${resultMinMax.max}`);



  //homework 23 nr4
let form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
        let field1 = document.getElementById("field1");
        let field2 = document.getElementById("field2");
        let field3 = document.getElementById("field3");
        let field4 = document.getElementById("field4");
        let field5 = document.getElementById("field5");
        if (field1.value.trim() === "" || field2.value.trim() === "" || field3.value.trim() === "" || field4.value.trim() === "" || field5.value.trim() === "") {
            alert("Please complete all fields before submitting the form.");
            return;
        }
        form.submit();
    });

    //number 3
    let button = document.getElementById("myButton");
    let count = 0;
    button.addEventListener("click", function () {
        count++;
        console.log("Button clicked " + count + " times");
    });
   //homework 24 nr1
   const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'red',
    start: function() {
        console.log("The car is starting");
    },
    drive: function() {
        console.log("The car is driving");
    }
    
};

//homework 24 nr2
const recipe = {
    title: "Spaghetti and Meatballs",
    servings: "4",
    ingredients: ["1 kg spaghetti", "1 kg ground beef", "1 egg", "1/4 cup bread crumbs", "1/4 cup grated Parmesan cheese", "1/4 cup chopped parsley", "1 clove garlic, minced", "Salt and pepper", "1 can (28 oz) crushed tomatoes", "1/4 cup chopped basil"]
};

console.log("Title: " + recipe.title);
console.log("Servings: " + recipe.servings);
console.log("Ingredients: ");
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}
//homework 26 nr1
function getMonthName(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[date.getMonth()];
}
let date = new Date();
console.log(getMonthName(date));

//homework 26 nr2
function sameWeekday(date1, date2) {
    return date1.getDay() === date2.getDay();
}
let date1 = new Date("January 8, 2021");
let date2 = new Date("January 8, 2021");
console.log(sameWeekday(date1, date2));

//homework 26 nr5
function getMinDate(dates) {
    return new Date(Math.min(...dates.map(date => date.getTime())));
}
let dates = [new Date("January 1, 2023"), new Date("January 8, 2023"), new Date("January 5, 2023")];
console.log(getMinDate(dates));

//clock
setInterval(() => {
    const currentDate = new Date();
    document.getElementById("date").innerHTML = currentDate.toLocaleString();
}, 1000);















