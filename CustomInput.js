import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
const TextInput = styled.TextInput(props => ({
    height: props.multiline ? props.numberOfLines * 40 : 40,
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    textAlignVertical: 'top',



}))
const ErrorText = styled.Text({
    fontSize: 10,
    color: "red",

})
const CustomInput = (props) => {
    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props

    const hasError = errors[name] && touched[name];
    return (
        <>
            <TextInput
                value={value}
                onChangeText={(text) => onChange(name)(text)}
                onBlur={() => {
                    setFieldTouched(name)
                    onBlur(name)
                }}
                {...inputProps}
            />
            {hasError && <ErrorText>{errors[name]}</ErrorText>}
        </>
    )
}
export default CustomInput;
