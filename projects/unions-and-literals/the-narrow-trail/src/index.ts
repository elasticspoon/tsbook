function getRandomInt(max: number): number {
	return Math.floor(Math.random() * max) + 1;
}
export function runCommands(): boolean {
	let food = 5;
	let water = 5;
	let availResource: "food" | "water" | undefined;

	for (let i = 1; i < 8; i++) {
		let roll = getRandomInt(6);

		if (roll == 1) {
			availResource = "food";
		} else if (roll == 2) {
			availResource = "water";
		} else {
			if (availResource) {
				availResource == "food" ? (food += roll) : (water += roll);
				availResource = undefined;
			} else {
				roll % 2 == 0 ? (availResource = "food") : (availResource = "water");
			}
		}

		food--;
		water--;
		if (food <= 0 || water <= 0) {
			return false;
		}
	}

	return true;
}
