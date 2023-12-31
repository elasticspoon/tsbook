// Write your SpOnGeCaSe type here! ✨
// You'll need to export it so the tests can run it.
type Transform = "upper" | "lower";
export type SpOnGeCaSe<
	Text,
	FirstTransform extends "upper" | "lower" = "upper"
> = Text extends `${infer FirstChar}${infer Rest}`
	? FirstTransform extends "upper"
		? `${Capitalize<FirstChar>}${SpOnGeCaSe<Rest, "lower">}`
		: `${Uncapitalize<FirstChar>}${SpOnGeCaSe<Rest, "upper">}`
	: Text;

type Empty = SpOnGeCaSe<"">;
type HasSpace = SpOnGeCaSe<"abc def">;
type StartLower = SpOnGeCaSe<"hello", "lower">;
