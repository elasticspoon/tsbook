export type Buried<T> = NextArea<T> | Treasure<T> | Buried<T>[];

type NextArea<T> =
	| { inside: Buried<T>; type: "catacomb" }
	| { entrances: Buried<T>[]; type: "tunnels" };

interface Treasure<T> {
	type: "treasure";
	content: T;
}

export function collectTreasure<
	Content,
	Real extends Content,
	Fake extends Content
>(
	buried: Buried<Content>,
	isFake: (data: Content) => data is Fake,
	isReal: (data: Content) => data is Real
) {
	let res: {
		fake: Fake[];
		real: Real[];
		scrap: Content[];
	} = {
		fake: [],
		real: [],
		scrap: [],
	};

	let treasures = findTreasure(buried, []);

	for (const treasure of treasures) {
		if (isFake(treasure)) {
			res.fake.push(treasure);
		} else if (isReal(treasure)) {
			res.real.push(treasure);
		} else {
			res.scrap.push(treasure);
		}
	}

	return res;
}

function findTreasure<T>(area: Buried<T>, treasure: T[]): T[] {
	if (area instanceof Array) {
		for (const singleArea of area) {
			findTreasure(singleArea, treasure);
		}
		return treasure;
	}

	switch (area.type) {
		case "tunnels":
			for (const tunnel of area.entrances) {
				findTreasure(tunnel, treasure);
			}
			break;
		case "treasure":
			treasure.push(area.content);
			break;
		case "catacomb":
			findTreasure(area.inside, treasure);
			break;
	}

	return treasure;
}
