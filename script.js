let changeQuotes = (text) => {
	let regex = /"(.+?)"/gmi;
	return text.split("\n").map((line) => {
		if (!line.startsWith("        ")) {
			return line.replace(regex, "\“$1\”")
		} else {
			return line;
		}
	}).join("\n");
}

document.querySelector('#button').addEventListener('click', () => {
	document.querySelector('#text').value = changeQuotes(document.querySelector('#text').value)
})