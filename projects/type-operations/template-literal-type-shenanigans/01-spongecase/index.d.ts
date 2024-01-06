export declare type SpOnGeCaSe<
	Text,
	FirstTransform extends "upper" | "lower" = "upper"
> = Text extends `${infer FirstChar}${infer Rest}`
	? FirstTransform extends "upper"
		? `${Capitalize<FirstChar>}${SpOnGeCaSe<Rest, "lower">}`
		: `${Uncapitalize<FirstChar>}${SpOnGeCaSe<Rest, "upper">}`
	: Text;
