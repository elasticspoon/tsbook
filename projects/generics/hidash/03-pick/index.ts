export function pick<C, K extends keyof C>(container: C, key: K) {
	return container[key];
}
