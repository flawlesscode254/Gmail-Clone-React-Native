import React, { useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";
import { auth } from "../firebase";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    await setLoading(!loading);
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        await setEmail("");
        await setPassword("");
        await setLoading(loading);
        await navigation.navigate("Main");
      })
      .catch(async (error) => {
        await setLoading(loading);
        setError(error.message);
      });
  };


  const SignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ width: 300 }}>
        <Text style={styles.greeting}>Welcome Back</Text>

        <View style={styles.errorMessage}>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}> 📧 Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}> 🔑 Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          {loading ? (
            <ActivityIndicator color="#ffffff" size="small" />
          ) : (
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign In 😍</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={SignUp}
          style={{ alignSelf: "center", marginTop: 32 }}
        >
          <Text style={{ color: "#FFF", fontSize: 13 }}>
            New to the App?
            <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E2A47",
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    color: "#FFF",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#FFF",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#FFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#FFF",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "#e9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});