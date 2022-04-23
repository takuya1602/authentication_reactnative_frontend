import React from "react"
import { View, TextInput, Button } from "react-native"
import { useState } from "react"
import tw from "twrnc"
import { login } from "../../store/actions/auth"
import { useDispatch } from "react-redux"

const SignInScreen = ({ navigation }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();


    return (
        <View style={tw`justify-center items-center mt-5`}>
            <TextInput
                placeholder="username"
                autoCapitalize="none"
                onChangeText={setUsername}
                style={tw`border w-50 p-1`}
            />
            <TextInput
                placeholder="password"
                onChangeText={setPassword}
                secureTextEntry
                style={tw`border w-50 p-1 mt-2`}
            />
            <Button
                title="Log in"
                onPress={() => {
                    dispatch(login(username, password));
                }}
            />
            <Button
                title="Sign up"
                onPress={() => {
                    navigation.navigate("SignUpScreen");
                }}
            />
            <Button
                title="Forget password?"
                onPress={() => {
                    navigation.navigate("ResetPasswordScreen");
                }}
            />
        </View>

    );
}

export default SignInScreen;