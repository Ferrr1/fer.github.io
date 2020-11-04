const numbers = document.querySelectorAll(".number");
console.log(numbers);

numbers.forEach((number) => {
	console.log(number);
	number.addEventListener("click",(event) => {
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});

const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
	calculatorScreen.value = number;
}

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number;
	} else {
		currentNumber += number;
	}
	
}

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		console.log(event.target.value);
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) => {
	if(calculationOperator === ''){
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber = '';
}

const samaDengan = document.querySelector('.sama-dengan');

samaDengan.addEventListener("click", () => {
	calculate();
	updateScreen(currentNumber);
});

const calculate = () => {
	let result = '';
	switch (calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case "-":
			result = prevNumber - currentNumber;
			break;
		case "*":
			result = prevNumber * currentNumber;
			break;
		case "/":
			result = prevNumber / currentNumber;
			break;
			default:
				return;

	}
	currentNumber = result;
	calculationOperator = '';
}

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
	clearAll();
	updateScreen(currentNumber);
})
const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
}

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
})

const inputDecimal = (dot) => {
	if(currentNumber.includes('.')){
		return;
	}
	currentNumber += dot;
}

