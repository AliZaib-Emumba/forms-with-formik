import React from "react";
import { StyleSheet, Button } from "react-native";
import styled from "styled-components/native";
import { Formik, Field } from "formik";
import * as yup from "yup";
import CustomInput from "./CustomInput";
const Container = styled.View({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3B344B"
})
const Heading = styled.Text({
    fontSize: 24,
    color: "white",
})
const TextInput = styled.TextInput({
    height: 40,
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,

})

const View = styled.View({
    width: "80%",
    alignItems: "flex-start",
    marginBottom: 20,
})

const ErrorText = styled.Text({
    fontSize: 10,
    color: "red",

})



const signUpValidationSchema = yup.object().shape({
    fullName: yup.string().matches(/(\w.+\s).+/, "Enter at least 2 names ").required("Full name is required"),
    phone: yup.string().matches(/(051)(\d){7}\b/, 'Enter a valid phone number').required("Phone number is required"),
    email: yup.string().email("Enter a vlid email").required("Email is a required field"),
    password: yup.string()
        .required("Password is a required field")
        .matches(/\w*[a-z]\w*/, "password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .min(8, ({ min }) => `Password must be minimum ${min} characters`),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Password and confirm password do not match")
        .required("Confirm password is a required field"),

})
export default Signup = () => {
    return (
        <Container>
            <View>
                <Heading>Signup</Heading>
                <Formik
                    validationSchema={signUpValidationSchema}
                    initialValues={{
                        fullName: "",
                        email: "",
                        phone: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    onSubmit={values => console.log("Signup values are here", values)}
                >
                    {({ handleSubmit, isValid }) => (
                        <>
                            <Field
                                component={CustomInput}
                                name="fullName"
                                placeholder="Full Name"
                            />
                            <Field
                                component={CustomInput}
                                name="email"
                                placeholder="Email address"
                                keyboardType="email-address"
                            />
                            <Field
                                component={CustomInput}
                                name="phone"
                                placeholder="Phone Number"
                                keyboardType="numeric"
                            />
                            <Field
                                component={CustomInput}
                                name="password"
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                            <Field
                                component={CustomInput}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                secureTextEntry={true}
                            />
                            <Button
                                onPress={handleSubmit}
                                title="Sign up"
                                disabled={!isValid}
                            />
                        </>
                    )}

                </Formik>
            </View>
        </Container>
    )
}