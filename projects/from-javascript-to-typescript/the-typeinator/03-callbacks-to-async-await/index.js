// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

async function checkEmotion(knownEmotions, emotion) {
	// Simulate database processing time by waiting a second...
	await new Promise((res) => {
		setTimeout(() => {
			res();
		}, 1000);
	});

	return knownEmotions.has(emotion);
}

async function speak(knownEmotions, newEmotion, phrase, callback) {
	let emotion = await checkEmotion(knownEmotions, newEmotion);

	if (!emotion) {
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
	}

	return `"${phrase}" (${newEmotion})`;
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
