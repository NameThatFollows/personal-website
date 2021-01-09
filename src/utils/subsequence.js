export default function isSubsequence(value, fullText) {
	value = value.trim().toLowerCase();
	fullText = fullText.trim().toLowerCase();
	let fullTextPos = 0;
	let valuePos = 0;
	while (fullTextPos < fullText.length && valuePos < value.length) {
		if (fullText.charAt(fullTextPos++) === value.charAt(valuePos)) {
			valuePos++;
		}
	}
	return valuePos === value.length;
}