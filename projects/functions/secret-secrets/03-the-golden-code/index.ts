// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

type CrackObject = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

type CrackResponse = (test: string) => string | undefined;

export function createCodeCracker({
	attempts,
	makeGuess,
	validateGuess,
}: CrackObject): CrackResponse {
	return function (test) {
		for (let i = 0; i < attempts; i++) {
			let guess = makeGuess(test, i);
			if (validateGuess(guess)) {
				return guess;
			}
		}
		return undefined;
	};
}
