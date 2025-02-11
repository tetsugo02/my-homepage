import { atomWithStorage } from "jotai/utils";

export type Language = "en" | "ja";

export const globalLanguageState = atomWithStorage<Language>("globalLanguage", "en");
