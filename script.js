// Замена кавычек

let showError = (errorMessage) => {
	let errorBlock = document.querySelector('.error');
	errorBlock.querySelector('.errorMessage').textContent = errorMessage;
	errorBlock.style.display = 'flex';
}

let closeError = (error) => {
	error.style.display = 'none';
}

let changeQuotes = (text, quotes) => {
	let quoteFlag = false;
	let codeFlag = false;
	let textArr = text.split('');
	if (textArr.reduce((res, sym) => {
		return sym === '\"' ? ++res : res
	}, 0) % 2 !== 0) {
		showError("Где-то пропущена кавычка");
		return text;
	}
	return textArr.map((sym) => {
		if (sym === '\`') {
			codeFlag = !codeFlag;
		}
		if (!codeFlag) {
			if (sym === '\"') {
				quoteFlag = !quoteFlag;
				if (quoteFlag) {
					return quotes[0]
				} else {
					return quotes[1]
				}
			}
		}
		return sym;
	}).join('');
}

// Неразрывные пробелы

let changeSpaces = (text) => {
	let letterCounter = 3;
	return text.split('').map((letter) => {
		if (letter !== ' ') {
			letterCounter++;
		} else if (letterCounter <= 2) {
			letterCounter = 0;
			return ' ';
		} else {
			letterCounter = 0;
		}

		return letter;
	}).join('');
}

// Слушатели

let textContainer = document.querySelector('#text');

document.querySelector('.engQuotes').addEventListener('click', () => {
	textContainer.value = changeQuotes(textContainer.value, '“”')
})

document.querySelector('.rusQuotes').addEventListener('click', () => {
	textContainer.value = changeQuotes(textContainer.value, '«»')
})

document.querySelector('.cross').addEventListener('click', () => {
	document.querySelector('.error').style.display = 'none';
});

document.querySelector('.spaces').addEventListener('click', () => {
	textContainer.value = changeSpaces(textContainer.value);
});
