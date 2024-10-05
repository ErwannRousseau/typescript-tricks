const requiresUppercase = (str: Uppercase<string>) => {
	return console.log(str);
};

requiresUppercase("HELLO");
requiresUppercase("hELLO"); // Error
