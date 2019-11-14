const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .digits button, .calc .opers button')
    .forEach( button => button.addEventListener('click', digitOperPressed));

document.querySelector('.calc .equal')
    .addEventListener('click', eqPressed);

document.querySelector('.calc .del')
    .addEventListener('click', deletePressed);

document.querySelector('.calc .back')
    .addEventListener('click', backPressed);

function isOperationSymbol(operator) {
	switch(operator) {
		case '+':
		case '-':
		case '*':
		case '/':
			return true;
	}
	return false;
}

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    if (isOperationSymbol(btnText)) {
    	const lastCharacter = display.value[display.value.length - 1];
    	if (lastCharacter != btnText) {
			if (isOperationSymbol(lastCharacter)) {
				display.value = display.value.slice(0, -1) + btnText;
			} else {
				display.value += btnText;
			}
    	}
    } else {
    	display.value += btnText;
	}
}

function deletePressed() {
	display.value = "";
}

function backPressed() {
	display.value = display.value.slice(0, -1);
}

function eqPressed() {
    display.value = eval(display.value);
}

