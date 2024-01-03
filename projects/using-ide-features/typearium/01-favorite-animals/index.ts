// Refactor here! ✨

export function checkIsAnyAnimalFavorite(...animals: string[]) {
	const favoriteAnimalsUnique = new Set(animalsList);

	return animals.some((animal) => favoriteAnimalsUnique.has(animal));
}

const animalsList = [
	"parakeet",
	"macaw",
	"cat",
	"monkey",
	"elephant",
	"alpaca",
	"fox",
];

export function getFavoriteAnimals(max = Infinity) {
	return animalsList.slice(0, max);
}

export function logFavoriteAnimals() {
	animalsList.forEach((animal, i) => {
		console.log(`I like ${animal} number ${i}!`);
	});
}
