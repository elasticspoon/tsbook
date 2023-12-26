// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.
type Cipher = (text: string) => string;

export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPunctuation: Cipher
): Cipher {
	return function (text: string) {
		let result = "";
		for (const c of text) {
			let vowel = c.match(/[aeiou]/i);
			let consonant = c.match(/[bcdfghjklmnpqrstvwxyz]/i);
			if (vowel) {
				result += onVowel(c);
			} else if (consonant) {
				result += onConsonant(c);
			} else {
				result += onPunctuation(c);
			}
		}
		return result;
	};
}
