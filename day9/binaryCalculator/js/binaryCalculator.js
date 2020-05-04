function addToExpression(input) {
    var res = document.getElementById("res");
    res.innerHTML = res.innerHTML + input;

}

function clearDisplay() {
    document.getElementById("res").innerHTML = '';
}

function evaluateExpression() {
    var resDisplay = document.getElementById("res");
    var result = evalBinaryExp(resDisplay.innerHTML);
    resDisplay.innerHTML = result;
}

function evalBinaryExp(expression) {
	let operand1 = expression.match(new RegExp('^(0|1)+','g'));
	let operator = expression.match('[+|-|*|\/]');
	let operand2 = expression.match(new RegExp('(0|1)+$','g'));

	let result = eval(parseInt(operand1, 2) + operator + parseInt(operand2, 2)); 
	if (operator == '/') {
		result = Math.floor(result);
	}

	return (result >>> 0).toString(2);
	
}