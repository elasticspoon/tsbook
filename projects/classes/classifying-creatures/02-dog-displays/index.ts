export interface PuppyInTheWindow {
	readonly colors: string[];
	readonly furriness: number;
	readonly owner?: string;
}

export class Puppy implements PuppyInTheWindow {
	colors: string[];
	furriness: number;
	owner?: string;

	constructor(colors: string[], furriness: number) {
		this.colors = colors;
		this.furriness = furriness;
	}

	adopt(owner: string) {
		this.owner = owner;
	}
}
