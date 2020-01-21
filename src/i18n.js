import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import { reactI18nextModule } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const options = {
	// order and from where user language should be detected
	order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

	// keys or params to lookup language from
	lookupQuerystring: 'lng',
	lookupCookie: 'i18next',
	lookupLocalStorage: 'Lang',
	lookupFromPathIndex: 0,
	lookupFromSubdomainIndex: 0,

	// cache user language on
	caches: ['localStorage', 'cookie'],
	excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

	// optional expire and domain for set cookie
	cookieMinutes: 10,
	cookieDomain: 'myDomain',

	// optional htmlTag with lang attribute, the default is:
	htmlTag: document.documentElement,

	// only detect languages that are in the whitelist
	checkWhitelist: true
}

i18n
	.use(XHR)
	.use(LanguageDetector)
	.use(reactI18nextModule)
	.init({
		fallbackLng: 'en',
		ns: ['trans'],
		defaultNS: 'trans',
		detection: options,
		
		interpolation: {
			escapeValue: false
		},
		react: {
			wait: true
		}
	})

export default i18n