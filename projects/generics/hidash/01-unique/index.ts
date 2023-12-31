export function unique<T>(...arrays: T[][]) {
	const set = new Set<T>();

	for (let array of arrays) {
		for (let v of array) {
			set.add(v);
		}
	}

	return [...set.keys()];
}
