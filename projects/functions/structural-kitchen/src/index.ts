type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: Recipe) => boolean;
};

type Ingredients = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

type Recipe = (
	ingredients: Ingredients
) => { succeeded: false } | { succeeded: true; newStock: any };

export type Cleaner = (dirt: number, time?: number) => number;
export type Supplier = (expense: number) => Ingredients;

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen {
	let stock: Ingredients = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};
	let dirt = 0;

	let kitchen: Kitchen = {
		announce: function () {
			return `I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;
		},

		clean: function (time?: number) {
			dirt = cleaner(dirt, time);
		},

		purchase: function (expense: number) {
			if (expense > budget) {
				return false;
			}

			const newIngredients = supplier(expense);
			stock.sauces += newIngredients.sauces;
			stock.fruits += newIngredients.fruits;
			stock.breads += newIngredients.breads;
			stock.vegetables += newIngredients.vegetables;
			budget -= expense;

			return true;
		},

		prepare: function (recipe: Recipe) {
			if (dirt >= 100) {
				return false;
			}

			let result = recipe(stock);
			dirt++;

			if (!result.succeeded) {
				return false;
			}

			stock = result.newStock;

			return true;
		},
	};

	return kitchen;
}
