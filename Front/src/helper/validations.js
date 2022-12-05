export const validStringLength = (string) => {
	if (string.trim().length <= 3) {
		return false;
	}
	return true;
};

export const validStringLetters = (string) => {
	return /^[A-Za-z\s]*$/.test(string);
};

export const validStringNumber = (string) => {
	if (string.trim().length < 9) return false;
	return /^[0-9]+$/.test(string);
};

export const validNumberString = (string) => {
	return /^\d+$/.test(string);
};
