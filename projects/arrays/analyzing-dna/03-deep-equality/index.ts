export function deepEquality(a: string[][], b: string[][]): boolean {
	if (a.length != b.length) {
		return false;
	}

	for (let i = 0; i < a.length; i++) {
		if (!shallowEqual(a[i], b[i])) {
			return false;
		}
	}

	return true;
}

function shallowEqual(a: string[], b: string[]): boolean {
	if (a.length != b.length) {
		return false;
	}

	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}

	return true;
}
