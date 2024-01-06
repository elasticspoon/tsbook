export declare type Reverse<T extends any[]> = T extends [
	infer First,
	...infer Rest
]
	? Reverse<Rest> extends any[]
		? [...Reverse<Rest>, First]
		: [First]
	: T;
