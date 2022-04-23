import { View, Text, Button } from "react-native"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth";
import { getUserInfo } from "../../store/actions/user";

const UserInfoScreen = ({ navigation }) => {
    console.log("UserInfoScreen");
    const dispatch = useDispatch();

    const [username, email, token] = useSelector((state) => [
        state.user.username,
        state.user.email,
        state.auth.token,
    ]);

    useEffect(() => {
        dispatch(getUserInfo(token));
    }, [dispatch]);

    return (
        <View>
            <Text>{`Hello, ${username}!`}</Text>
            <Text>{`Your email address is ${email}.`}</Text>
            <Button
                title="Edit profile"
                onPress={() => {
                    navigation.navigate("UserInfoEditScreen");
                }}
            />
            <Button
                title="Log out"
                onPress={() => {
                    dispatch(logout());
                }}
            />
        </View>
    );
}

export default UserInfoScreen;