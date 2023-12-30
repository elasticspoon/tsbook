export class Parrot {
	#name: string;
	#phrases: string[];

	constructor(name: string) {
		this.#name = name;
		this.#phrases = [`${this.#name} wants a cracker!`];
	}

	announce(): string {
		return `Squawk! I'm ${this.#name}!`;
	}

	learn(phrase: string) {
		this.#phrases.push(phrase);
	}

	speak(): string {
		return this.#phrases[Math.floor(Math.random() * this.#phrases.length)];
	}
}
