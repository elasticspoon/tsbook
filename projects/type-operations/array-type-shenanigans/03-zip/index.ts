// Write your Zip type here! ✨
// You'll need to export it so the tests can run it.
export type Zip<T extends any[], U extends any[]> = T extends [
	infer FirstT,
	...infer RestT
]
	? U extends [infer FirstU, ...infer RestU]
		? [FirstT, FirstU, ...Zip<RestT, RestU>]
		: T
	: U;

type ZippedEQ = Zip<["a", "b", "c"], [1, 2, 3]>;

type ZippedT = Zip<["b", "c"], [1, 2, 3]>;

type ZippedU = Zip<["a", "b", "c"], [2, 3]>;
