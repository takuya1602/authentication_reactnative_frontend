import React from "react"
import { View, Text, Button } from "react-native"
import { logout } from "../../store/actions/auth"
import { useDispatch } from "react-redux"

const PostScreen = () => {
    const dispatch = useDispatch();
    return (
        <View>
            <Text>This is PostScreen.</Text>
            <Button
                title="Sign out"
                onPress={() => {
                    dispatch(logout());
                }}
            />
        </View>
    )
}

export default PostScreen;