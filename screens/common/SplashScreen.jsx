import { View, ActivityIndicator } from "react-native";
import tw from "twrnc"

const SplashScreen = () => {
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <ActivityIndicator size="large" color="orange" />
        </View>
    );
}

export default SplashScreen;