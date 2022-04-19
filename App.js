import { View, Text, TextInput, Button } from "react-native"
import { useState } from "react"
import { SafeArea } from "./components/SafeArea"
import tw from "twrnc"
import { API_URL } from "@env"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")

  const login = async () => {
    try {
      const config = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
      const res = await fetch(`${API_URL}/api/v1/dj-rest-auth/login/`, config)
      const data = await res.json()
      setToken(data.key)
      setIsLoggedIn(true)
    } catch (err) {

    }
  }

  return (
    <SafeArea>
      {isLoggedIn ? (
        <View>
          <Text>{`Hello, ${username}`}</Text>
          <Button
            title="Log out"
            onPress={() => {
              setIsLoggedIn(false)
              setUsername("")
              setPassword("")
              setToken("")
            }}
          />
        </View>
      ) : (
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
              login()
            }}
          />
        </View>
      )}
    </SafeArea>
  )
}