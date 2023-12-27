export function shallowDifferences(
	a: string[],
	b: string[]
): (string | undefined)[] | undefined {
	if (a.length != b.length) {
		return;
	}

	return a.map((_, index) => {
		if (a[index] == b[index]) {
			return a[index];
		}
	});
}
