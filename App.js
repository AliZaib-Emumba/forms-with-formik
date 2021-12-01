import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Login";
import Signup from "./Signup";
import BlogPage from "./Blogs";
export default Form = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Signup" component={Signup} />
                <Tab.Screen name="Blogs" component={BlogPage} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}