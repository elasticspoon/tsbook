export abstract class SmallFurryPet {
	readonly species: string;
	protected happiness: number;

	constructor(species: string) {
		this.species = species;
		this.happiness = 0;
	}

	abstract eats(food: SmallPetFood): boolean;

	isHappy() {
		return this.happiness > 0;
	}
}

export class Gerbil extends SmallFurryPet {
	constructor() {
		super("Gerbil");
	}

	dig() {
		this.happiness++;
	}
	eats(food: SmallPetFood) {
		return food !== "bugs" && food !== "fruits";
	}
}

export class Hamster extends SmallFurryPet {
	constructor() {
		super("Hamster");
	}
	eats(): boolean {
		return true;
	}
	run() {
		this.happiness++;
	}
}

export type SmallPetFood =
	| "bugs"
	| "fruits"
	| "insects"
	| "plants"
	| "seeds"
	| "vegetables";
