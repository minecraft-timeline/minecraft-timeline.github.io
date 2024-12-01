export type VersionType = "major" | "minor" | "event" | "memory";

export type NaiveVersion = {
    title?: string;
    subtitle?: string;
    description?: string;
    longDescription?: string[];
    type: VersionType;
    possibleDate?: string;
    icon?: string;
    video?: string;
    learnMore?: string;
    mainFeatures?: { text: string }[];
    minorFeatures?: { text: string }[];
    funFact?: string;
};

export type Version = NaiveVersion & { date: string };

export type Edition = {
    title: string;
    description: string;
    firstMessage: string;
    logo: string;
    versions: Version[];
    upcomings: NaiveVersion[];
};