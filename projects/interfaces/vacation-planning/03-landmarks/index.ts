type Landmark = {
	name: string;
} & (Mountain | Park | LightHouse | River | Waterfall | Lake | Fort);

type Mountain = {
	height: number;
	type: "mountain";
};

type Park = {
	type: "park";
	acres: number;
};

type LightHouse = {
	lit: number;
	height: number;
	type: "lighthouse";
};

type River = {
	type: "river";
	depth: number;
	length: number;
};

type Waterfall = {
	height: number;
	type: "waterfall";
};

type Lake = {
	miles: number;
	type: "lake";
};

type Fort = {
	type: "fort";
};

export function describeLandmark(landmark: Landmark): string {
	let description = `${landmark.name} is a ${landmark.type} in Upstate New York.`;
	switch (landmark.type) {
		case "lake":
			description += `\nIt covers ${landmark.miles} square miles of water.`;
			break;
		case "park":
			description += `\nIt covers ${landmark.acres} square acres.`;
			break;
		case "river":
			description += `\nIt flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`;
			break;
		case "mountain":
			description += `\nIts peak is ${landmark.height} feet high.`;
			break;
		case "waterfall":
			description += `\nIt is ${landmark.height} feet high.`;
			break;
		case "lighthouse":
			description += `\nIt was first lit in ${landmark.lit} and is ${landmark.height} feet high.`;
			break;
	}
	return description;
}
