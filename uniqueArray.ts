const uniqueArray = <T>(arr: T[]) => {
	return Array.from(new Set(arr));
};

const result = uniqueArray([1, 2, 3, 1, 2, 31]);
