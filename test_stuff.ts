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

let obj = {
	a: 123,
	b: 456,
};

// obj.c = 20;

type HasLastName = {
	lastName: string;
};
type HasFirstName = {
	firstName: string;
};

const hasBoth = {
	firstName: "jerry",
	lastName: "evans",
};

let withFirstName: HasFirstName = hasBoth;
let withLastName: HasLastName = hasBoth;

type HasLastMaybeFirst = {
	lastName: string;
	firstName?: string;
};

let formalName: HasLastMaybeFirst = {
	lastName: "Dylan",
};

const poem =
	Math.random() > 0.5
		? { name: "the double image", pages: 7 }
		: { name: "her kind", rhymes: true };

type PagesPoem = {
	name: string;
	pages: number;
	type: "pages";
};
type RhymesPoem = {
	name: string;
	rhymes: boolean;
	type: "rhymes";
};

const poem2: PagesPoem | RhymesPoem =
	Math.random() > 0.5
		? { name: "the double image", pages: 7, type: "pages" }
		: { name: "her kind", rhymes: true, type: "rhymes" };

if ("rhymes" in poem2) {
	poem2.rhymes;
}

poem2.type == "pages" ? poem2.pages : poem2.rhymes;
poem2.type;

type Author = {
	author: string;
};

type Kigo = {
	type: "haiku";
	kigo: string;
};

type Meter = {
	type: "villanelle";
	meter: number;
};

type ShortPoem = Author & (Kigo | Meter);

const morningGlory: ShortPoem = {
	author: "fukuda",
	kigo: "morningGlory",
	type: "haiku",
};
