import { createStackNavigator } from "@react-navigation/stack";
import UserInfoScreen from "../screens/user/UserInfoScreen";
import UserInfoEditScreen from "../screens/user/UserInfoEditScreen";

const Stack = createStackNavigator();

const UserInfoNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="UserInfoScreen"
                component={UserInfoScreen}
                options={{
                    headerTitle: "Your profile",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "##00bfff",
                    },
                    headerTintColor: "black",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            />
            <Stack.Screen
                name="UserInfoEditScreen"
                component={UserInfoEditScreen}
                options={{
                    headerTitle: "Edit profile",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "##00bfff",
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

export default UserInfoNavigator;