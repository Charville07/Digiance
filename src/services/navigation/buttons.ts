import Ionicons from 'react-native-vector-icons/Ionicons';
import {ButtonsOptions} from './types';

const ICON_SIZE = 30;
const BACKBUTTON_ICON_SIZE = 25;

export type Button = 'inc' | 'dec' | 'settings' | 'backButton';

export const buttons: ButtonsOptions = {
  inc: {
    id: 'inc',
    text: 'Inc',
  },
  dec: {
    id: 'dec',
    text: 'Dec',
  },
  settings: {
    id: 'settings',
    icon: Ionicons.getImageSourceSync('settings-outline', ICON_SIZE),
  },
  backButton: {
    id: 'backButton',
    icon: Ionicons.getImageSourceSync(
      'arrow-back-outline',
      BACKBUTTON_ICON_SIZE,
    ),
  },
};
