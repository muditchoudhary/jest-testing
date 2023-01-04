function reverseString(word) {
	let reversed = "";
	let n = word.length - 1;
	while (n >= 0) {
		reversed += word[n];
		n--;
	}
	return reversed;
}

module.exports = reverseString;