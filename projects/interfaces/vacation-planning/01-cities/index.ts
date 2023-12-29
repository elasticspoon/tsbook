interface City {
	coordinates: {
		north: CoordTuple;
		west: CoordTuple;
	};
	name: string;
	catchphrase?: string;
}

type CoordTuple = [number, number, number];

export function describeCity(city: City): string {
	let desciption = `${city.name}, New York\n`;
	if (city.catchphrase) {
		desciption += `* "${city.catchphrase}"\n`;
	}
	desciption += `* Located at ${coordToString(
		city.coordinates.north
	)}N ${coordToString(city.coordinates.west)}W`;

	return desciption;
}

function coordToString(coords: CoordTuple): string {
	let coord = coords.map((v) => v.toString().padStart(2, "0"));
	return `${coord[0]}°${coord[1]}'${coord[2]}"`;
}
