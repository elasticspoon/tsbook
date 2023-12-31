export function pickMany<C, K extends keyof C>(container: C, keys: K[]) {
	return keys.map((key) => container[key]);
}
