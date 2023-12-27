export function deepDifferences(
	a: string[][],
	b: string[][]
): ((string | undefined)[] | undefined)[] | undefined {
	if (a.length != b.length) {
		return undefined;
	}

	return a.map((_, i) => {
		return shallowDiff(a[i], b[i]);
	});
}

function shallowDiff(
	a: string[],
	b: string[]
): (string | undefined)[] | undefined {
	if (a.length != b.length) {
		return undefined;
	}

	return a.map((_, i) => {
		if (a[i] === b[i]) {
			return a[i];
		}
	});
}
