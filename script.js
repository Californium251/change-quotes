let showError = (errorMessage) => {
	let errorBlock = document.querySelector('.error');
	errorBlock.querySelector('.errorMessage').textContent = errorMessage;
	errorBlock.style.display = 'flex';
}

let closeError = (error) => {
	error.style.display = 'none';
}

let changeQuotes = (text) => {
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
					return '“'
				} else {
					return '”'
				}
			}
		}
		return sym;
	}).join('');
}

document.querySelector('#button').addEventListener('click', () => {
	document.querySelector('#text').value = changeQuotes(document.querySelector('#text').value)
})

document.querySelector('.cross').addEventListener('click', () => {
	document.querySelector('.error').style.display = 'none';
});