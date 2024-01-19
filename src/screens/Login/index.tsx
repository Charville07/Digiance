import React from "react";
import { View, Text, Incubator } from "react-native-ui-lib"
import { s, ms, } from "react-native-size-matters"
import CustomButton from "@components/CustomButton";
import {screens} from "..";
import { ScreenComponent } from "rnn-screens";
import { styles } from '@utils/customStyles';


const { TextField } = Incubator;
const Login: ScreenComponent<PreviousScreenProps> = ({ componentId, shouldPop }) => {

    const { withFrame, inputContainer} = styles;

    return <View flex bg-bgColor>
        <View marginB-90 flex centerV paddingH-20>

            <Text textColor center 
            style={{
                fontSize: ms(23),
                fontWeight: "bold",
            }}>{'Enter your email and password to Sign In.'}</Text>
            <Text center marginB-15 marginT-8 textColorLight font13>{'Digiance Test App version 0.0.1'}</Text>

            <View centerH marginT-30 marginB-20>

                <TextField
                    
                    placeholder="Enter Username"
                    style={{
                        paddingLeft: s(15),
                        fontSize: ms(14),
                    }}
                    fieldStyle={withFrame}
                    //@ts-ignore
                    containerStyle={inputContainer}
                />

                <TextField
                    secureTextEntry
                    placeholder="Enter password"
                    style={{
                        paddingLeft: s(15),
                        fontSize: ms(14),
                    }}
                    fieldStyle={withFrame}
                    //@ts-ignore
                    containerStyle={inputContainer}
                />

            </View>

            <CustomButton onPress={()=>screens.push(componentId, 'RegisterOTP')} 
            title="Sign In"/>

            <Text marginT-10 font13b center grey20>
                    <Text>{"Don't have an account?  "}</Text>
                    <Text
                    marginL-10
                    onPress={() => {
                        if (shouldPop) {
                            screens.pop(componentId)
                        } else {
                            screens.push(componentId, "Register", { shouldPop: true })
                        }
                    }}>{`Register Now!`}</Text>

            </Text>

        </View>        

    </View>
}

export default Login;