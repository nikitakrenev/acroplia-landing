import {EnLang} from "./en";

const LangStore = {
    en: EnLang,
}

export const GetWords = (lang) => LangStore[lang] || LangStore.en;
