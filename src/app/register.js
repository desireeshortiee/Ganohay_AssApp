import { View, StyleSheet } from "react-native";
import { Avatar, Text, TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { useRouter } from "expo-router";

const Register = () => {
  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={registrationStyle.container}>
      
      <View style={registrationStyle.avatarSection}>
        <Avatar.Image
          style={{
            backgroundColor: "transparent",
            
            borderColor: "#db0000", 
          }}
          source={require("../assets/avatar.jpg")}
          size={120} 
        />
      </View>

     
      <View style={{ ...registrationStyle.section }}>
        <TextInput
          textContentType="name"
          label="First Name"
          mode="outlined"
          placeholder="First Name"
          style={registrationStyle.input}
          placeholderTextColor="#564d4d"
          theme={{ colors: { text: "#db7093", primary: "#db7093" } }}
          left={<TextInput.Icon icon="account" size={18} />}
        />
        <TextInput
          textContentType="name"
          label="Last Name"
          mode="outlined"
          placeholder="Last Name"
          style={registrationStyle.input}
          placeholderTextColor="#564d4d"
          theme={{ colors: { text: "#db7093", primary: "#db7093" } }}
          left={<TextInput.Icon icon="account" size={18} />}
        />
        <TextInput
          textContentType="emailAddress"
          label="Email"
          mode="outlined"
          placeholder="Email"
          style={registrationStyle.input}
          placeholderTextColor="#564d4d"
          theme={{ colors: { text: "#db7093", primary: "#db7093" } }}
          left={<TextInput.Icon icon="email" size={18} />}
        />
        <TextInput
          label="Password"
          mode="outlined"
          placeholder="Password"
          style={registrationStyle.input}
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

     
      <View style={{ ...registrationStyle.section }}>
        <Button
          onPress={() => console.log("register")}
          mode="contained"
          style={registrationStyle.button}
          buttonColor="#db7093" 
          textColor="#ffffff"
        >
          Register
        </Button>
        <View
          style={{ alignItems: "center", justifyContent: "center", marginVertical: 10 }}
        >
          <Text style={{ color: "#ffffff" }}>Do you have an account?</Text>
        </View>
        <Button
          onPress={() => router.push("/")}
          mode="contained-tonal"
          style={registrationStyle.button}
          buttonColor="#db7093" 
          textColor="#ffffff"
        >
          Login Here
        </Button>
      </View>
    </View>
  );
};

export default Register;


const registrationStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightpink", 
    justifyContent: "start",
    paddingHorizontal: 15, 
    paddingVertical: 30, 
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 15, 
  },
  section: {
    width: "100%",
  },
  input: {
    marginVertical: 5, 
    width: "100%",
  },
  button: {
    marginVertical: 8, 
    width: "100%",
  },
});
