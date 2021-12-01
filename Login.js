import React from "react";
import styled from "styled-components/native";
import { Formik } from "formik";
import { Button, StyleSheet } from "react-native";
import * as yup from "yup";

const loginValdationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is a required Field"),
    password: yup.string().required("Password is a required field").min(8, ({ min }) => `Password must be minimum ${min} characters`)
})

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
export default Login = () => {
    return (
        <Container>
            <View style={{ width: "80%", alignItems: "flex-start", marginBottom: 20 }}>
                <Heading>Login</Heading>
                <Formik
                    validationSchema={loginValdationSchema}
                    initialValues={{ email: '', password: "" }}
                    onSubmit={values => console.log("values are here", values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                        <>
                            <TextInput name="email"
                                placeholder="Email Address"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType={"email-address"}
                            />
                            {errors.email && touched.email &&
                                <ErrorText>{errors.email}</ErrorText>
                            }
                            <TextInput name="password"
                                placeholder="Password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={true}
                            />
                            {errors.password && touched.password &&
                                <ErrorText>{errors.password}</ErrorText>
                            }
                            <View>
                                <Button color="#686170" disabled={!isValid} title="Login" onPress={handleSubmit} />
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </Container>
    )
}