interface ConsumedHorror {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	protected abstract readonly name: string;
	#consumedHorrors: ConsumedHorror[];

	constructor() {
		this.#consumedHorrors = [];
	}

	doBattle(horror: Horror) {
		if (this.getPower() < horror.getPower()) return;

		this.#consumedHorrors.push({
			name: horror.name,
			power: horror.getPower(),
			evil: horror.isEvil(),
		});
	}

	getPower(): number {
		let power = this.#consumedHorrors.length;
		for (const horror of this.#consumedHorrors) {
			power += this.getPowerFrom(horror);
		}
		return power;
	}

	protected abstract getPowerFrom(horror: ConsumedHorror): number;
	protected abstract isEvil(): boolean;
}

export class Demon extends Horror {
	protected name: string = "Demon";

	getPowerFrom({ power, evil }: ConsumedHorror) {
		return evil ? power / 2 : power * 2;
	}

	isEvil() {
		return true;
	}
}

export class Sorcerer extends Horror {
	public name: string;
	#evil: boolean;

	constructor(name: string, evil: boolean) {
		super();
		this.name = name;
		this.#evil = evil;
	}

	protected getPowerFrom({ power, evil }: ConsumedHorror): number {
		return this.#evil === evil ? power * 2 : power;
	}

	protected isEvil(): boolean {
		return this.#evil;
	}
}
