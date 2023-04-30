const jdSort = (aObj, bObj) => {
	// 00-09 becomes 00a
	// 00    becomes 00c
	// 00.00 becomes 00i00.00
	// and then a standard sort works.

	let a = aObj.frontmatter.number.toString();
	let b = bObj.frontmatter.number.toString();
	// console.log("-=-=-=-=-=-=-=-=-=-=-=-");
	// console.log("a", a, "b", b);
	// console.log(typeof a);
	// console.log(typeof b);

	let x, y; // the new a, b

	// If a is an area
	if (a.match(/\d\d-\d\d/)) {
		// Turn it in to '00a'
		x = a.slice(0, 2) + "a";
	}

	// Same for b
	if (b.match(/\d\d-\d\d/)) {
		// Turn it in to '00a'
		y = b.slice(0, 2) + "a";
	}

	// If a is a category
	if (a.match(/^\d\d$/)) {
		// Turn it in to '00c'
		x = a + "c";
	}

	// Same for b
	if (b.match(/^\d\d$/)) {
		// Turn it in to '00c'
		y = b + "c";
	}

	// If a is an ID
	if (a.match(/\d\d\.\d\d/)) {
		// Turn it in to 00i00.00
		x = a.replace(/(\d\d)\.(\d\d)/, "$1i$1.$2");
	}

	// Same for b
	if (b.match(/\d\d\.\d\d/)) {
		// Turn it in to 00i00.00
		y = b.replace(/(\d\d)\.(\d\d)/, "$1i$1.$2");
	}

	// Sort 'em
	// console.log("x", x, "y", y, "localeCompare", x.localeCompare(y));
	return x.localeCompare(y);
};

export { jdSort as default };
