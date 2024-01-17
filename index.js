import { Navigation } from "react-native-navigation";
import SplashScreen from 'react-native-splash-screen'
import App from './App';


Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
    SplashScreen.hide();
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'com.myApp.WelcomeScreen'
                        }
                    }
                ]
            }
        }
    });
});
