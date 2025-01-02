import React from "react";
import {
  ImageBackground,
  Pressable,
  TextInput,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

export default function SignUp() {
  return (
    <ImageBackground
      source={require("../assets/images/Grid.png")}
      style={styles.imageBackground}
    >
      {/* ScrollView to make the form scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Dismiss keyboard when tapping outside input */}
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Sign Up</Text>

              {/* Label and TextInput for Username */}
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="Enter your username"
              />

              {/* Label and TextInput for Email */}
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                placeholder="Enter your email"
              />

              {/* Label and TextInput for Phone Number */}
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                keyboardType="phone-pad"
                placeholder="Enter your phone number"
              />

              {/* Label and TextInput for CNI Number */}
              <Text style={styles.label}>CNI Number</Text>
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="Enter your CNI number"
              />

              {/* Label and TextInput for Date of Birth */}
              <Text style={styles.label}>Date of Birth</Text>
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="Enter your date of birth"
              />

              {/* Label and TextInput for Address */}
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="Enter your address"
              />

              {/* Pressable SignUp Button */}
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    borderColor: "black",
    borderWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    width: "100%",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    marginTop: -10,
    marginBottom: 20,
    color: "#fff",
  },
  label: {
    width: "85%",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
    textAlign: "left",
    marginTop: 10,
  },
  input: {
    width: 300,
    height: 45,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: "auto",
    marginTop: 10,
    paddingLeft: 10,
    color: "#000", // Text color for the input
  },
  button: {
    width: 300,
    height: 45,
    backgroundColor: "#FF6700",
    borderRadius: 10,
    marginHorizontal: "auto",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
