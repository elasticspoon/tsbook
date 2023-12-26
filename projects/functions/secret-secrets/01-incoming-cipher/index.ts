// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.
type Cipher = (text: string) => string;
type CipherCaller = (string: string) => string;

export function createCipher(cipher: Cipher): CipherCaller {
	return function (input) {
		let result = "";
		for (let c of input) {
			result += cipher(c);
		}

		return result;
	};
}
