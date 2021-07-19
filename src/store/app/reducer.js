import { DEFAULT_LANG, LANG, SUPPORT_LANGS } from "../../constants";
import { ACT_CHANGE_LANG } from "./actions";

export function getLang() {
  return SUPPORT_LANGS.includes(localStorage.getItem(LANG)) ? localStorage.getItem(LANG) : DEFAULT_LANG
}

export function setLang(lang) {
  localStorage.setItem(LANG, lang)
}

const initLang = getLang()
const initState = {
  lang: initLang
}

setLang(initLang)

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_CHANGE_LANG:
      localStorage.setItem(LANG, action.payload.lang)
      return {
        ...state,
        lang: action.payload.lang
      }
    default:
      return state
  }
}