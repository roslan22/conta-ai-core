import { useLocation } from 'react-router';
import React, { useContext } from 'react';
import { PreLangBasenameContext } from './PreLangBasenameContext';
import { supportedLangsRegexp } from './SupportedLangs';

function addLangToCurrentLocation(location, preLangBasename: string, lang: string) {
  return location.pathname.match(supportedLangsRegexp)
    ? location.pathname.replace(supportedLangsRegexp, `/${lang}/`)
    : `${preLangBasename}/${lang}${location.pathname}`;
}

interface IProps {
  lang: string;
}

export const ChangeLangLink: React.FC<IProps> = ({ lang, children }) => {
  const location = useLocation();
  const preLangBasename = useContext(PreLangBasenameContext);
  return <a href={addLangToCurrentLocation(location, preLangBasename, lang)}>{children}</a>;
};
