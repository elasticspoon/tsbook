interface Material {
	name: string;
	cost: number;
}

interface Painter {
	finish(): boolean;
	ownMaterials: Material[];
	paint(painting: string, materials: Material[]): boolean;
}

function paintPaiting(painter: Painter, materials: Material[]): boolean {
	return false;
}

let v: bigint;
let nameElla = Math.random() > 0.5 ? "a" : "b";
