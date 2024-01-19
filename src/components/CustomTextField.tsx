import React, { forwardRef } from "react"
import { Incubator, TextFieldProps } from "react-native-ui-lib"
import { s, ms, vs } from "react-native-size-matters"
import { styles } from "@utils/customStyles"
import { useController } from "react-hook-form"

const { TextField } = Incubator
interface ICustomTextField {
    name: string;
    control: any;
    textFieldProps?: TextFieldProps
}

const CustomTextField = forwardRef(({ name, control, textFieldProps }: ICustomTextField, ref) => {

    const { field: { onChange, onBlur, value }, formState: { errors } } = useController({
        name,
        control
    })

    const { withFrame, inputContainer } = styles;
    // @ts-ignore
    return <TextField
        style={{
            paddingLeft: s(15),
            fontSize: ms(14),
        }}
        labelStyle={{
            fontSize: ms(13),
            fontWeight: "500"
        }}
        value={value}
        onBlur={onBlur}
        onChangeText={val => onChange(val)}
        fieldStyle={withFrame}
        containerStyle={inputContainer}
        enableErrors
        validationMessage={errors?.[name]?.message}
        validationMessageStyle={{
            fontSize: ms(12),
            fontWeight: "500",
            marginTop: vs(0.5)

        }}
        {...textFieldProps}
    />

})

export default CustomTextField;