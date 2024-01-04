import { Color } from "./colors";
import { rhymes } from "./rhymes";

export function makeRhyme(color: keyof typeof Color) {
	const value = Color[color];
	const [third, fourth] = rhymes[value];

	console.log(`Roses are red,`);
	console.log(`\tviolets are ${value}.`);
	console.log(`${third},`);
	console.log(`\t${fourth}.`);
	console.log("");
}

makeRhyme("Blue");
makeRhyme("Red");
makeRhyme("Yellow");
