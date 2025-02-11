import { useAtom } from "jotai";

import { Language } from "../store/lang/globalLanguageState";
import { globalLanguageState } from "../store/lang/globalLanguageState";

export const useChangeLanguage = () => {
	const [languageStateValue, setLanguageStateValue] = useAtom(globalLanguageState);
	const handleChangeLanguage = (lang: Language) => {
		setLanguageStateValue(() => {
			return lang;
		});
	};

	return { languageStateValue, handleChangeLanguage };
};

export default useChangeLanguage;
