const caeserCipher = require('./caeserCipher');
// CAESARCIPHER METHOD TESTS
test("amenda to be frjsif", () => {
	expect(caeserCipher("amenda")).toBe("frjsif");
});

test("AMENDA to be FRJSIF", () => {
	expect(caeserCipher("AMENDA")).toBe("FRJSIF");
});

test("AMENDA to be FRJSIF", () => {
	expect(caeserCipher("AMENDA")).toBe("FRJSIF");
});

test("aMEnDa to be fRJsIf", () => {
	expect(caeserCipher("aMEnDa")).toBe("fRJsIf");
});

test("amenda!! to be frjsif!! ", () => {
	expect(caeserCipher("amenda!!")).toBe("frjsif!!");
});

test("aME,-nD??!a to be fRJ,-sI??!f", () => {
	expect(caeserCipher("aME,-nD??!a")).toBe("fRJ,-sI??!f");
});

test("Your secret code is - The Earth is flat to be Ymj Jfwym nx kqfy", () => {
	expect(caeserCipher("Your secret code is: The Earth is flat.")).toBe(
		"Dtzw xjhwjy htij nx: Ymj Jfwym nx kqfy."
	);
});

test("Your secret code is - The Earth is flat to be Ymj Jfwym nx kqfy", () => {
	expect(caeserCipher(" ")).toBe(" ");
});

test("Your mom is a bitch!! to be Dtzw rtr nx f gnyhm!!", () => {
	expect(caeserCipher("Your mom is a bitch!!")).toBe(
		"Dtzw rtr nx f gnyhm!!"
	);
});
