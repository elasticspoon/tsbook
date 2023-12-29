interface Restaurant {
	city: string;
	name: string;
}

interface RestRecommendations {
	[i: string]: string[];
}

export function groupRestaurants(
	restaurants: Restaurant[]
): RestRecommendations {
	let result: RestRecommendations = {};

	for (let { city, name } of restaurants) {
		if (result[city]) {
			result[city].push(name);
		} else {
			result[city] = [name];
		}
	}

	return result;
}
