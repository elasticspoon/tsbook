declare global {
	interface Window {
		passports: {
			[i: string]: Passport | undefined;
		};
	}
}

type Allow = {
	allowed: true;
};
type Deny = {
	allowed: false;
	reason: "No passport found" | "No known name" | "Passport has expired";
};

interface Passport {
	name?: string;
	expires: Date;
}

export function checkPassport(id: string) {
	const passport = window.passports[id];

	if (!passport) {
		return {
			allowed: false,
			reason: "No passport found.",
		};
	}

	if (!passport.name) {
		return {
			allowed: false,
			reason: "No known name.",
		};
	}

	if (passport.expires.getTime() < new Date().getTime()) {
		return {
			allowed: false,
			reason: "Passport has expired.",
		};
	}

	return {
		allowed: true,
	};
}
