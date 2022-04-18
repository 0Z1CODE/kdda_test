import React from 'react';
import platform from '../themes/platform';
import Default from '../themes/Default';
import litedms from './../themes/litedms';
import tacim from './../themes/tacim';
import taplatform from './../themes/taplatform';

const Themes = {
  platform,
  litedms,
  tacim,
  taplatform,
  Default,
};

export const ThemeManager = ({ theme = 'Default' } = {}) => {
  const ThemeData = Themes[theme] || Themes.Default;

  const getThemeComponents = () => {
    return ThemeData.Components || {};
  };

  const getThemeAPI = () => {
    return ThemeData.API || {};
  };

  return {
    Components: getThemeComponents(),
    API: getThemeAPI(),
  };
};

export const eulaWelcomeText = (theme, text) => {
  if (theme === undefined) return;
  if (theme === Themes.litedms.Name) return text('WelcomeToKyoceraCloudInformationManager');
  if (theme === Themes.platform.Name) return text('WelcomeToKyoceraCloudInformationManager');
  if (theme === Themes.tacim.Name) return text('WelcomeToTACloudInformationManager');
  if (theme === Themes.taplatform.Name) return text('WelcomeToTACloudInformationManager');
};
