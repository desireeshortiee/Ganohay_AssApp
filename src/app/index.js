import { View, StyleSheet } from "react-native";
import { Avatar, Text, TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { useRouter } from "expo-router";

const Main = () => {
  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={loginStyle.container}>
      
      <View style={{ ...loginStyle.section, ...loginStyle.logoBox }}>
        <Avatar.Image
          style={{
            backgroundColor: "transparent",
            
            borderColor: "#db0000", 
          }}
          source={require("../../../AppAss/assets/avatar.jpg")}
          size={180}
        />
      <Text
          variant="headlineMedium"
          style={{
            marginTop: 10,
            color: "#db7093", 
            fontWeight: "bold", 
          }}
        >
          Maria's Flower Shop
      </Text>
      </View>

     
      <View style={{ ...loginStyle.section, marginTop: 20 }}>
        <TextInput
          textContentType="emailAddress"
          label="Email"
          mode="outlined"
          placeholder="Email"
          style={loginStyle.input}
          placeholderTextColor="#564d4d"
          theme={{ colors: { text: "#db7093", primary: "#db7093" } }} 
          left={<TextInput.Icon icon="email" size={18} />}
        />
        <TextInput
          label="Password"
          mode="outlined"
          placeholder="Password"
          style={loginStyle.input}
          placeholderTextColor="#564d4d"
          theme={{ colors: { text: "#db7093", primary: "#db7093" } }}
          left={<TextInput.Icon icon="key" size={18} />}
          right={
            <TextInput.Icon
              onPress={() => setTogglePassword(!togglePassword)}
              icon={togglePassword ? "eye" : "eye-off"}
              size={18}
            />
          }
          secureTextEntry={!togglePassword}
        />
      </View>

     
      <View style={{ ...loginStyle.section, marginTop: 20 }}>
        <Button
          onPress={() => router.replace("dashboard")}
          mode="contained"
          style={loginStyle.button}
          buttonColor="#db7093" 
          textColor="#ffffff"
        >
          Login
        </Button>
        <View
          style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}
        >
          <Text style={{ color: "#ffff" }}>Don't have an account yet?</Text>
        </View>
        <Button
          onPress={() => router.push("register")}
          mode="contained-tonal"
          style={loginStyle.button}
          buttonColor="#db7093" 
          textColor="#ffffff"
        >
          Register Here
        </Button>
        <Button
          onPress={() => router.push("forgot")}
          style={{ ...loginStyle.button, marginTop: 20 }}
          textColor="#ffff"
        >
          Forgot Password?
        </Button>
      </View>
    </View>
  );
};

export default Main;


const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcccb",
    justifyContent: "center",
    padding: 20,
  },
  section: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    marginBottom: 20,
  },
  input: {
    marginVertical: 10,
    width: "100%",
    backgroundColor: "#ffffff", 
    borderRadius: 10,
  },
  button: {
    marginVertical: 10,
    width: "100%",
    borderRadius: 20, 
  },
});

