import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native-ui-lib";
import { ms } from "react-native-size-matters";
import CustomButton from "@components/CustomButton";
import {screens} from "..";
import { ScreenComponent } from "rnn-screens";
import CountryPicker, { CountryCode, CallingCode, Country } from 'react-native-country-picker-modal';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomTextField from "@components/CustomTextField";
import { ScrollView } from "react-native";
import useDynamicRef from "use-dynamic-refs";
import generateRef, { IRefKey } from "@utils/generateOnSubmitRef";
import _isEmpty from "lodash/isEmpty";


interface IRegister {
    username: string;
    phone_number: string;
    password: string;
    password_confirmation: string;
}

const schema = yup.object().shape({
    username: yup.string().min(4, 'Username must be at least 4 characters.').required('Please enter your username.'),
    phone_number: yup.number().typeError("Phone number must be a number.").min(8, 'Please enter a valid phone number.').required('Please enter your phone number.'),
    password: yup.string().min(6, 'Password requires at least 6 characters').required('Please enter your password'),
    password_confirmation: yup.string().oneOf([yup.ref('password')], 'Password must be match').required('Please enter a password confirmation.')
});

const refKeys: IRefKey[] = [
    {
        ref: "_usernameRef",
        nextRef: "_phoneNumerRef",
        returnKeyType: "next",
        blurOnSubmit: false
    },
    {
        ref: "_phoneNumerRef",
        nextRef: "_passwordRef",
        returnKeyType: "next",
        blurOnSubmit: false
    },
    {
        ref: "_passwordRef",
        nextRef: "_passwordConfirmationRef",
        returnKeyType: "next",
        blurOnSubmit: false
    },
    {
        ref: "_passwordConfirmationRef",
        returnKeyType: "done",
        blurOnSubmit: true
    },
]


const Register: ScreenComponent<PreviousScreenProps> = ({ componentId, shouldPop }) => {

    const { control, formState, handleSubmit } = useForm<IRegister>({
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const { isValid, dirtyFields, errors } = formState;
    const [countryCode, setCountryCode] = useState<CountryCode>("US")
    const [callingCode, setCallingCode] = useState<CallingCode>("1")


    const [getRef, setRef] = useDynamicRef();
    const generateOnSubmitRef = (index: number): Object => {
        return generateRef(index, refKeys, setRef, getRef)
    }


    const onSubmit = (data: IRegister) => {
        const dataSend = {
            ...data,
            phone_number: `+${callingCode}${data.phone_number}`
        }
        console.warn('dataSend', dataSend);
    }

    const onSelectCountry = (val: Country) => {
        //  console.warn(val)
        setCountryCode(val.cca2)
        setCallingCode(val.callingCode[0]);
    }


    return <ScrollView keyboardShouldPersistTaps="handled">
        <View flex bg-bgColor paddingT-20>
        <View marginB-90 flex centerV paddingH-20>

            <Text textColor center 
            style={{
                fontSize: ms(23),
                fontWeight: "bold",
            }}>{'Enter details to create an account.'}</Text>
            <Text center marginB-15 marginT-8 textColorLight font13>{'Digiance Test App version 0.0.1'}</Text>

            <View centerH marginT-30 marginB-20>
                <CustomTextField 
                    name="username"
                    control={control}
                    textFieldProps={{
                        placeholder : "Adam Bakers",
                        label: "Username",
                        ...generateOnSubmitRef(0),
                    }}
                />

                <CustomTextField 
                    name="phone_number"
                    control={control}
                    textFieldProps={{
                        ...generateOnSubmitRef(1),
                        label : "Phone Number",
                        placeholder : "###-#######",
                        keyboardType : "number-pad",
                        leadingAccessory : (<View>
                            <CountryPicker
                                containerButtonStyle={{
                                    paddingHorizontal: ms(10)
                                }} 
                                onSelect={onSelectCountry}
                                countryCode="US"
                                withFilter
                                withFlag
                                withCallingCode
                                withCallingCodeButton
                                /></View>)



                    }}
                />


                <CustomTextField 
                    name="password"
                    control={control}
                    textFieldProps={{
                        ...generateOnSubmitRef(2),
                        placeholder : "*********",
                        label: "Password",
                        secureTextEntry : true,
                    }}
                />          

                <CustomTextField 
                    name="password_confirmation"
                    control={control}
                    textFieldProps={{
                        ...generateOnSubmitRef(3),
                        placeholder : "*********",
                        label: "Confirm Password",
                        secureTextEntry : true,
                    }}
                />  
            </View>

            <CustomButton onPress={handleSubmit(onSubmit)} 
            title="Register"
            buttonProps={{
                disabled: !isValid || !_isEmpty(errors) || _isEmpty(dirtyFields)
            }} 
            />
            <Text marginT-10 font13b center grey20>
                    <Text>{"Aleady have an account?  "}</Text>
                    <Text
                        marginL-10
                        onPress={() => {
                            if (shouldPop) {
                                screens.pop(componentId)
                            } else {
                                screens.push(componentId, "Login", { shouldPop: true })
                            }
                        }}>{`Sign In Here!`}</Text>

            </Text>
        </View>        

    </View>
    </ScrollView>
}

export default Register;