import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SIgnUpScreen";
import ResetPasswordScreen from "../screens/auth/ResetPasswordScreen";

const Stack = createStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerTitle: "Sign in",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#00bfff",
                    },
                    headerTintColor: "black",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    headerTitle: "Sign up",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#00bfff",
                    },
                    headerTintColor: "black",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            />
            <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
                options={{
                    headerTitle: "Reset password",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#00bfff",
                    },
                    headerTintColor: "black",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthNavigator;