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

let m = Math.random() > 0.5 ? undefined : "b";
let phys = Math.random() > 0.5 ? "Marie Curie" : 84;

typeof phys === "string" ? phys.toUpperCase() : phys.toExponential(2);

const philospher = "Plato";
const bool = false;

let duration: number | "unknown" | null;

duration = 84;
duration = "unknown";

let someString: string;
someString = duration;

// const firstName: string = null;

if (m) {
	m.toUpperCase();
}
m && m.at(1);
