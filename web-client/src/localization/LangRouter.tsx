import i18n, { Resource } from 'i18next';
import React from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { PreLangBasenameProvider } from './PreLangBasenameContext';
import { supportedLangsRegexp } from './SupportedLangs';

function getForcedLanguage() {
  const langMatch = window.location.pathname.match(supportedLangsRegexp);
  return langMatch ? langMatch[1] : '';
}

function setupI18n(resources: Resource) {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: 'en',
      keySeparator: '.',
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
}

interface IProps {
  preLangBasename?: string;
  resources: Resource;
}

export const LangRouter: React.FC<IProps> = ({ children, resources, preLangBasename = '' }) => {
  setupI18n(resources);
  const forcedLang = getForcedLanguage();
  let langBaseName = '';
  if (forcedLang) {
    langBaseName = `/${forcedLang}/`;
    if (i18n.language !== forcedLang) {
      i18n.changeLanguage(forcedLang);
    }
  } else {
    const navigatorLang = navigator.language.split('-')[0];
    if (i18n.languages.indexOf(navigatorLang) > -1) {
      if (i18n.language !== navigatorLang) {
        i18n.changeLanguage(navigatorLang);
      }
    }
  }

  return (
    <I18nextProvider i18n={i18n}>
      <PreLangBasenameProvider value={preLangBasename}>
        <BrowserRouter basename={`${preLangBasename}${langBaseName}`}>{children}</BrowserRouter>
      </PreLangBasenameProvider>
    </I18nextProvider>
  );
};
