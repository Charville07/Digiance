import React from "react"
import { View, Text, Button, Image, Shadows, Spacings} from "react-native-ui-lib"
import { vs, s, ms } from "react-native-size-matters"
import CustomButton from "@components/CustomButton";
import {screens} from "..";
import { ScreenComponent } from "rnn-screens";

const _imageSize = 300;

const Home: ScreenComponent = ({ componentId}) => {
    return <View flex bg-white>
        <View marginB-90 flex center paddingH-20>
            <Image resizeMode="stretch" 
            style={{
                width:s(_imageSize),
                height:s(_imageSize),
            }} assetName="icon"/>
            <Text textColor center 
            style={{
                fontSize: ms(17),
                fontWeight: "600",
                letterSpacing: 1.5
            }}>Digiance React Native Coding Test with Laravel Backend</Text>
        </View>
        <View height={vs(120)} centerV paddingH-20>
            <Text center marginB-15 textColor font12m>by Charville Ubagan</Text>
            <CustomButton onPress={()=>screens.push(componentId,'Register')} 
            title="Get Started"/>
        </View>
        

    </View>
}

export default Home;