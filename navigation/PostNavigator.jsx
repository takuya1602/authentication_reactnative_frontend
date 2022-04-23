import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "../screens/post/PostScreen";
import PostDetailScreen from "../screens/post/PostDetailScreen";

const Stack = createStackNavigator();

const PostNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PostScreen"
                component={PostScreen}
                options={{
                    headerTitle: "記事一覧",
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
                name="PostDetailScreen"
                component={PostDetailScreen}
                options={{
                    headerTitle: "記事詳細",
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

export default PostNavigator;