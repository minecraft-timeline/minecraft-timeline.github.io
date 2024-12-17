import type { NaiveVersion, Version } from "../edition";

export const readingVersion: {
    version: Version | NaiveVersion | undefined
} = $state({ version: undefined });

export function setReadingVersion(version: Version | NaiveVersion) {
    readingVersion.version = version;
}

export function clearReadingVersion() {
    readingVersion.version = undefined;
}