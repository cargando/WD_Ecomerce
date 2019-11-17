export const tob  = (fn, defaultVal) => { // функция которая пытается вытащить данные из deep nested object
	try {
		return fn();
	} catch (e) {
		return defaultVal;
	}
}
