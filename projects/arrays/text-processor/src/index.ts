export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function alignTexts(
	texts: string[],
	options: AlignmentOptions
): string[][] {
	return texts.map((s) => {
		return alignText(s.split(" "), options);
	});
}

function alignText(
	texts: string[],
	{ align = "left", width }: AlignmentOptions
): string[] {
	let result: string[] = [];
	let temp = "";

	while (texts.length > 0) {
		if (temp.length == 0) {
			temp += texts.shift();
		} else if (temp.length + texts[0].length + 1 > width) {
			result.push(alignWord(temp, { align, width }));
			temp = "";
		} else {
			temp += " " + texts.shift();
		}
	}
	result.push(alignWord(temp, { align, width }));

	return result;
}

function alignWord(
	word: string,
	{ align = "left", width }: AlignmentOptions
): string {
	switch (align) {
		case "left":
			return word.padEnd(width, " ");
		case "right":
			return word.padStart(width, " ");
		default:
			return word.padStart(width / 2 + word.length / 2, " ").padEnd(width, " ");
	}
}
