import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "../components/SafeArea";
import SplashScreen from "../screens/common/SplashScreen";
import AuthNavigator from "./AuthNavigator";
import UserInfoNavigator from "./UserInfoNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { getToken } from "../store/actions/auth";

const AppNavigator = () => {
    console.log("AppNavigator");
    const dispatch = useDispatch();
    const [authLoading, token] = useSelector((state) => [
        state.auth.authLoading,
        state.auth.token,
    ]);
    console.log(token);

    useEffect(() => {
        dispatch(getToken());
    }, [dispatch]);

    if (authLoading) {
        console.log("loading")
        return (
            <SplashScreen />
        );
    }

    return (
        <SafeArea>
            <NavigationContainer>
                {token ? (
                    <UserInfoNavigator />
                ) : (
                    <AuthNavigator />
                )}
            </NavigationContainer>
        </SafeArea>
    );
}

export default AppNavigator;