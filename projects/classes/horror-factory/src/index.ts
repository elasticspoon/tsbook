interface ConsumedHorror {
	evil: boolean;
	name: string;
	power: number;
}

interface HorrorOptions {
	name: string;
	isEvil(): boolean;
	getPowerFrom(horror: ConsumedHorror): number;
}

export class Horror {
	name: string;
	protected getPowerFrom: (horror: ConsumedHorror) => number;
	isEvil: () => boolean;
	#consumedHorrors: ConsumedHorror[];

	constructor({ name, isEvil, getPowerFrom }: HorrorOptions) {
		this.#consumedHorrors = [];
		this.name = name;
		this.getPowerFrom = getPowerFrom;
		this.isEvil = isEvil;
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
}

export function createDemon(): Horror {
	return new Horror({
		name: "Demon",
		isEvil() {
			return true;
		},
		getPowerFrom({ power, evil }: ConsumedHorror) {
			return evil ? power / 2 : power * 2;
		},
	});
}

export function createSorcerer(name: string, isEvil: boolean): Horror {
	return new Horror({
		name: name,
		isEvil() {
			return isEvil;
		},
		getPowerFrom({ power, evil }: ConsumedHorror): number {
			return isEvil === evil ? power * 2 : power;
		},
	});
}
