import {generateRNNScreens} from 'rnn-screens';
import {withServices} from '@services/index';
import { withTitle } from '@services/navigation/options'

const screens = generateRNNScreens({
    Home: {
        component: require('@screens/Home').default,
        options: {
            topBar: {
                visible: false,
            },
        },
    },
    Register: {
        component: require('@screens/Register').default,
        options: {
            topBar: {
                ...withTitle('Register'),
            },
        },
    },
    RegisterOTP: {
        component: require('@screens/RegisterOTP').default,
        options: {
            topBar: {
                ...withTitle('SMS OTP'),
            },
        },
    },


    Login: {
        component: require('@screens/Login').default,
        options: {
            topBar: {
                ...withTitle('Sign In'),
            },
        },
    },
},
[withServices],
);

export {screens};