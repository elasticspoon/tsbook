// Write your SplitOn type here! ✨
// You'll need to export it so the tests can run it.
export type SplitOn<
	Text extends string,
	On extends string
> = Text extends `${infer Start}${On}${infer Rest}`
	? [Start, ...SplitOn<Rest, On>]
	: [Text];

type Empty = SplitOn<"", "">;
type TestA = SplitOn<"baby", "a">;
type TestB = SplitOn<"hello my baby", " ">;
