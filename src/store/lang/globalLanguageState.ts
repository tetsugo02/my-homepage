import { atom } from "jotai";

export type Language = "en" | "ja";

export const globalLanguageState = atom<Language>("en");
