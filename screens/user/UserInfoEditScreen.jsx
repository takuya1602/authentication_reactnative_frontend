import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserInfo } from "../../store/actions/user";
import tw from "twrnc";

const UserInfoEditScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [username, email, token] = useSelector((state) => [
        state.user.username,
        state.user.email,
        state.auth.token,
    ])
    const [editedUsername, setEditedUsername] = useState(username);
    const [editedEmail, setEditedEmail] = useState(email);

    return (
        <View style={tw`justify-center items-center mt-5`}>
            <TextInput
                placeholder="username"
                defaultValue={username}
                autoCapitalize="none"
                onChangeText={setEditedUsername}
                style={tw`border w-50 p-1`}
            />
            <TextInput
                placeholder="E-mail"
                defaultValue={email}
                onChangeText={setEditedEmail}
                secureTextEntry
                style={tw`border w-50 p-1 mt-2`}
            />
            <Button
                title="Save"
                onPress={() => {
                    dispatch(editUserInfo(editedUsername, editedEmail, token));
                    navigation.goBack();
                }}
            />
        </View>
    )
}

export default UserInfoEditScreen;