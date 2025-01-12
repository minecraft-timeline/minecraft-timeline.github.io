export type VersionType = "major" | "minor" | "drop" | "event";

export type NaiveVersion = {
    title?: string;
    subtitle?: string;
    description?: string;
    longDescription?: string[];
    type: VersionType;
    possibleDate?: string;
    icon?: string;
    learnMore?: string;
    mainFeatures?: { text: string }[];
    minorFeatures?: { text: string }[];
    funFact?: string;
};

export type Version = NaiveVersion & { date: string };

export type Edition = {
    id: string,
    title: string;
    firstMessage: string;
    versions: Version[];
    upcomings: NaiveVersion[];
};

export function readableType(type: VersionType): string {
    switch (type) {
        case "major":
            return "major update";
        case "minor":
            return "minor update";
        case "drop":
            return "game drop";
        case "event":
            return "event";
    }
}