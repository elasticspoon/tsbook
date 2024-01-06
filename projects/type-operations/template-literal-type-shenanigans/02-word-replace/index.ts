// Write your WordReplace type here! ✨
// You'll need to export it so the tests can run it.
export type WordReplace<
	Text extends string,
	Original extends string,
	Replacement extends string
> = Text extends `${infer Start}${Original}${infer Rest}`
	? `${Start}${Replacement}${WordReplace<Rest, Original, Replacement>}`
	: Text;

type Empty = WordReplace<"", "", "">;

type SOne = WordReplace<"apple", "p", "!">;
type STwo = WordReplace<"banana!", "na", "NA">;
