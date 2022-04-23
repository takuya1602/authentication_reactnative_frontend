import { useState } from "react"
import { View, TextInput, Button } from "react-native"
import { signup } from "../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc"

const SignUpScreen = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();

    const dispatch = useDispatch();

    return (
        <View style={tw`justify-center items-center mt-5`}>
            <TextInput
                placeholder="user name"
                autoCapitalize="none"
                onChangeText={setUsername}
                style={tw`border w-50 p-1`}
            />
            <TextInput
                placeholder="E-mail"
                autoCapitalize="none"
                onChangeText={setEmail}
                style={tw`border w-50 p-1 mt-2`}
            />
            <TextInput
                placeholder="password"
                onChangeText={setPassword1}
                secureTextEntry
                style={tw`border w-50 p-1 mt-2`}
            />
            <TextInput
                placeholder="Retype a password"
                onChangeText={setPassword2}
                secureTextEntry
                style={tw`border w-50 p-1 mt-2`}
            />
            <Button
                title="Sign up"
                onPress={() => {
                    console.log(username, email, password1, password2);
                    dispatch(signup(username, email, password1, password2));
                }}
            />
        </View>

    );
}

export default SignUpScreen;