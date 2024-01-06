// Write your Reverse type here! ✨
// You'll need to export it so the tests can run it.
export type Reverse<T extends any[]> = T extends [infer First, ...infer Rest]
	? Reverse<Rest> extends any[]
		? [...Reverse<Rest>, First]
		: [First]
	: T;

type ArrayLength<T extends any[]> = T["length"];

// Type: number
type LengthOfStringArray = ArrayLength<string[]>;

// Type: 3
type LengthOfTupleTrio = ArrayLength<["a", "b", "c"]>;

type Unshift<Rest extends any[], Item> = [Item, ...Rest];

// Type: ["First!", "a", "b", "c"]
type PrefixFirst = Unshift<["a", "b", "c"], "First!">;

type Pop<T extends any[]> = T extends [infer First, ...infer Rest]
	? Pop<Rest> extends any[]
		? [...Pop<Rest>, First]
		: [First]
	: T;

// Type: ["b", "c"]
type PopFirst = Pop<["a", "b", "c"]>;
