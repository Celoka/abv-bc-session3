module.exports = {
reverseString:(str) => {
    var cstr = str.toLowerCase();
	var ccount = 0;
	if(cstr==="") {
		return null;
	}
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
		if (cstr.length === 1) {
			return true;
		} else {
			ccount = (cstr.length - 1) / 2;
		}
	}
	for (var x = 0; x < ccount; x++) {
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			return cstr.split('').reverse().join('');
		}
	}
	return true;
}
}