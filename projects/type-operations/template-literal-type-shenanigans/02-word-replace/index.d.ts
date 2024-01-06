export declare type WordReplace<
	Text extends string,
	Original extends string,
	Replacement extends string
> = Text extends `${infer Start}${Original}${infer Rest}`
	? `${Start}${Replacement}${WordReplace<Rest, Original, Replacement>}`
	: Text;
