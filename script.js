let changeQuotes = (text) => {
	let regex = /"(.+?)"/gmi;
	return text.replace(regex, "\“$1\”")
}

document.querySelector('#button').addEventListener('click', () => {
	document.querySelector('#text').value = changeQuotes(document.querySelector('#text').value)
})