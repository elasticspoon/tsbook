export declare let isTrick: (section: Section) => section is Trick;

export declare let isVolunteerIllusion: (
	illusion: Illusion
) => section is VolunteerIllusion;

export declare let getAudienceMemberFor: (input: {
	duration: number;
	title: string;
}) => Promise<AudienceMember>;

export interface Trick {
	gimmick: string;
}

export interface AudienceMember {
	name: string;
}

export interface Act {
	performer: string;
	name: string;
	sections: Section[];
}

export interface Illusion {
	introduction: () => string;
	flair: () => string;
	payoff: () => string;
}

export type Section = Illusion | Trick;

export interface VolunteerIllusion extends Illusion {
	duration: number;
	title: string;
}
