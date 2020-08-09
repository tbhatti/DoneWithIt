import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform, // For IOS and Android, because SafeAreaView does not work in Android, you must have to give padding top
} from "react-native";

export default function App() {
  const handlePrss = () => {};
  let x = 1;
  console.log("Text Pressed Here", require("./assets/icon.png"));
  return (
    /*If in style we have array  then secod style will override first style of array*/
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text>Hello World</Text>
      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri:
              "https://tse3-mm.cn.bing.net/th/id/OIP.Cmc_jOu2fMPKu-2xEvxduQHaF4?w=261&h=207&c=7&o=5&dpr=1.5&pid=1.7",
          }}
        />
      </TouchableHighlight>
      <Button
        color="orange"
        title="Click Me!"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
      <Button
        color="red"
        title="Click Me!"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
      />
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 70,
          width: 200,
        }}
      ></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const containerStyle = { backgroundColor: "yellow" };
const styles = StyleSheet.create({
  // Stylesheet.create() 1. Validates the properties used inside container
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
