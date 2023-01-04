const capitalize = require("./capitalize");

// CAPITALIZE METHOD TEST
test("amenda to be Amenda", () => {
	expect(capitalize("amenda")).toBe("Amenda");
});

test("Amenda to be Amenda", () => {
	expect(capitalize("Amenda")).toBe("Amenda");
});

test("AMENDA to be AMENDA", () => {
	expect(capitalize("AMENDA")).toBe("AMENDA");
});

test("am to be Am", () => {
	expect(capitalize("am")).toBe("Am");
});

test("a to be A", () => {
	expect(capitalize("a")).toBe("A");
});
