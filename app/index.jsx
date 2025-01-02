import { Link } from "expo-router";
import { ImageBackground, Pressable, TextInput, Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <>
      <ImageBackground
        source={require("../assets/images/Grid.png")}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
            <Text style={{
                fontSize:40,
                fontWeight:700,
                marginTop:-10,
                marginBottom:10
                // marginRight:"auto"
            }}>
                Login
            </Text>
          {/* Label and TextInput for Username */}
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Enter your username"
          />

          {/* Label and TextInput for Password */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter your password"
          />
<Link style={{
    textAlign:"left",
    width:300,
    marginVertical:5,
    // borderColor:"black",
    // borderWidth:2,
}} href={"/signup"}>
<Text >
    Dont have account
    <Text style={{
        color:"#FF6700"
    }}>
        {" "}Already{" "}
    </Text>
    ?
</Text>
</Link>

          {/* Pressable Button */}
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </>
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
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  label: {
    width: 300,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    lineHeight:16,
    color: "#333",
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
    // marginTop: 10,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 45,
    backgroundColor: "#FF6700",
    // borderColor: "black",
    // borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: "auto",
    // marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
