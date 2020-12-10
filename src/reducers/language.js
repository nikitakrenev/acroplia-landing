import {CHANGE_LANGUAGE} from '../constants/types.js';

const storage = window.localStorage;
const initialLang = loadLang()
const language = (state = initialLang, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return action.payload
        default:
            return state;
    }
};


export default language;

function loadLang() {
    return storage.getItem("lang") || "en";
}

function saveLang(val) {
    return storage.setItem("lang", val);
}
export const SaveLangToStorage = store => next => action => {
    action.type === CHANGE_LANGUAGE && saveLang(action.payload)
    return next(action)
}