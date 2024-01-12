import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  Button,
  ImageBackground,
  ScrollView,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../assets/css/styles";

export default function LandingScreen() {
  const navigation = useNavigation();
  const handleSignUp = () => {
    navigation.navigate("SignupScreen");
  };
  const handleLogin = () => {
    navigation.navigate("LoginScreen");
  };
  
  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
        <View style={styles.img_view}>
          <Image
            style={styles.img}
            source={require("../assets/images/kcc-logo.png")}
          />
        </View>
        <View style={styles.verse_view}>
          <Text style={styles.verse_text}>
            For I know the plans I have{"\n"}
            for you, declares the{"\n"}
            Lord, plans for welfare and{"\n"}
            not for evil, to give you a{"\n"}
            future and hope.
          </Text>
          <Text style={styles.verse}>Jeremiah 29:11</Text>
        </View>
        <View style={styles.auth_btn}>
          <TouchableOpacity onPress={handleLogin} style={styles.authentication_buttons}>
            <Text style={styles.auth_btn_text}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUp} style={{ ...styles.authentication_buttons, backgroundColor: "transparent", borderColor: "#0A7E8B", borderWidth: 3 }}>
            <Text style={{ ...styles.auth_btn_text, color: "#0A7E8B" }}>Sign up</Text>
          </TouchableOpacity>

          <Pressable >
            <Text style={styles.forgot_password}>Forgot password?</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
