export declare type SplitOn<
	Text extends string,
	On extends string
> = Text extends `${infer Start}${On}${infer Rest}`
	? [Start, ...SplitOn<Rest, On>]
	: [Text];
