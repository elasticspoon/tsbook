export function zip<T, U>(a: T[], b: U[]): (T | U)[] {
	const res = [];

	for (let i = 0; i < Math.max(a.length, b.length); i++) {
		if (a[i]) {
			res.push(a[i]);
		}
		if (b[i]) {
			res.push(b[i]);
		}
	}

	return res;
}
