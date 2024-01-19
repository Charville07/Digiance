import {Color} from 'react-native-navigation';
import {Colors, Typography, Assets} from 'react-native-ui-lib';
import {ms} from 'react-native-size-matters';

const ui: {isSystemAppearance: boolean; appearance: AppearanceMode} = {
  isSystemAppearance: true,
  appearance: 'light', // dark ?
};

const colors: DesignSystemColors = {
  primary: '#ea2a37', // blue
  lightPrimary: '#d04e57',
  darkPrimary: '#e80f1d',
  secondary: '#469c57', // green
  accent: '#fed330', // yellow
  blackish0: Colors.rgba(20, 20, 20, 0.8),
  blackish: Colors.rgba(20, 20, 20, 1),
  blackish2: Colors.rgba(50, 50, 50, 1),
  whitish0: Colors.rgba(250, 250, 250, 0.8),
  whitish: Colors.rgba(250, 250, 250, 1),
  whitish2: Colors.rgba(230, 230, 230, 1),
};

const themes: Record<AppearanceMode, ThemeColors> = {
  light: {
    textColor: colors.blackish,
    textColorLight: colors.blackish0, 
    bgColor: colors.whitish,
    bg2Color: colors.whitish2,
  },
  dark: {
    textColor: colors.whitish,
    textColorLight: colors.whitish0,
    bgColor: colors.blackish,
    bg2Color: colors.blackish2,
  },
};

// for more information - https://wix.github.io/react-native-ui-lib/foundation/style
export const configureDesignSystem = async (): PVoid => {
  

  if (ui.isSystemAppearance) {
    Colors.loadColors(colors);
    Colors.loadSchemes(themes);
  } else {
    Colors.loadColors({...colors, ...themes[ui.appearance]});
    Colors.loadSchemes({dark: {}, light: {}});
  }

  Typography.loadTypographies({
    section: {fontSize: 26, fontWeight: '600'},

    font12: {fontSize: ms(12)},
    font12m: {fontSize: ms(12), fontWeight: '600'},
    font12b: {fontSize: ms(12), fontWeight: 'bold'},

    font13: {fontSize: ms(13)},
    font13m: {fontSize: ms(13), fontWeight: '600'},
    font13b: {fontSize: ms(13), fontWeight: 'bold'},

    font14: {fontSize: ms(14)},
    font14m: {fontSize: ms(14), fontWeight: '600'},
    font14b: {fontSize: ms(14), fontWeight: 'bold'},

    font15: {fontSize: ms(15)},
    font15m: {fontSize: ms(15), fontWeight: '600'},
    font15b: {fontSize: ms(15), fontWeight: 'bold'},
  });

  Assets.loadAssetsGroup('icons', {
    icon: require('@assets/icon.png'),
    logo: require('@assets/logo.png'),
  });

};

export const getThemeColor = (c: keyof ThemeColors): Color => {
  

  if (ui.isSystemAppearance) {
    return {
      dark: themes.dark[c],
      light: themes.light[c],
    };
  } else {
    return themes[ui.appearance][c];
  }
};

export const getThemeStatusBarStyle = (): StatusBarStyle => {
  

  if (ui.isSystemAppearance) {
    return undefined;
  } else {
    switch (ui.appearance) {
      case 'dark':
        return 'light';
      case 'light':
        return 'dark';
    }
  }
};