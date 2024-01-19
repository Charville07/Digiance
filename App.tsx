import {LogBox} from 'react-native';
import {Screen, Root } from 'rnn-screens';
import SplashScreen from 'react-native-splash-screen';
import {screens} from '@screens/index';
import {configureDesignSystem} from '@utils/designSystem';
import { initServices } from "@services/index";

LogBox.ignoreLogs([
  'RNUILib Picker requires',
  //'EventEmitter.removeListener',
  //'`new NativeEventEmitter()`',
  //'[react-native-gesture-handler] Seems like', // https://github.com/software-mansion/react-native-gesture-handler/issues/1831
]); 

export const beforeStart = async (): PVoid => {
  SplashScreen.hide();
  // 1. hydrate stores
  //await hydrateStores();

  // 2. configure design system
  await configureDesignSystem();

  // 3. init services
  await initServices();
};

export const App = () => Root(Screen(screens.get('Register')));

