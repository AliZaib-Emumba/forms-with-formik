import React from "react";
import { Formik, Field } from "formik";
import styled from "styled-components/native";
import { StyleSheet, Button } from "react-native";
import CustomInput from "./CustomInput";
import * as yup from "yup";

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

const blogsValidationSchema = yup.object().shape({
    title: yup.string().required("Title is a required field"),
    post: yup.string().min(25, ({ min }) => `Posts should be ${min} characters max`)
})

const submitBlogs = (values) => {
    console.log("Title of the post is" + values.title)
    console.log("Description of the post is" + values.post)
}
export default function Blog() {
    return (
        <Container>
            <View>
                <Heading>New Blog</Heading>
                <Formik
                    validationSchema={blogsValidationSchema}
                    initialValues={{
                        title: "",
                        post: "",

                    }}
                    onSubmit={values => submitBlogs(values)}
                >
                    {({ handleSubmit, isValid, values }) => (
                        <>
                            <Field
                                component={CustomInput}
                                name="title"
                                placeholder="Title of the post"
                            />
                            <Field
                                component={CustomInput}
                                name="post"
                                placeholder="description"
                                multiline={true}
                                numberOfLines={3}
                            />
                            <Button
                                title="Post"
                                disabled={!isValid}
                                onPress={handleSubmit}
                            />
                        </>
                    )}

                </Formik>
            </View>
        </Container>
    )
}