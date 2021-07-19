import { i18n } from '@lingui/core'

import { messages as messagesVi } from '../locales/vi/messages'
import { messages as messagesFr } from '../locales/fr/messages'
import { messages as messagesEn } from '../locales/en/messages'

const messages = {
  vi: messagesVi,
  en: messagesEn,
  fr: messagesFr
}

export function activateLang(lang = 'vi') {
  i18n.load(lang, messages[lang])
  i18n.activate(lang)
}
