const calculatorScreen = document.querySelectorAll(`.calculator-screen`)
const updateScreen= (number) => {
	calculatorScreen.value=number
}

const numbers = document.querySelectorAll(".number")

numbers.forEarch((number)=> {
	number.addEventListener("click", () => {
		console.log("number is pressed")
	})
})

let prevNumber=``
let calculatorOperator = ''
let currentNumber =`0`

;
