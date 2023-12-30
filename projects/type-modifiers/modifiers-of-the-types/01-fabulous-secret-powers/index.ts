import { characters } from "./characters";

// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.
interface Character {
	name: string;
	powers: string[];
	side: "good" | "evil";
}
export function announceCharacter(rawChar: string): Character {
	let char = JSON.parse(rawChar) as Character;

	console.log(`I am ${char.name}.`);
	console.log(`My powers are: ${char.powers.join(", ")}.`);
	console.log(`I am ${char.side}.`);

	return char;
}
