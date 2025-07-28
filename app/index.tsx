import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

 const handlePress = () => {
  console.log("Button Pressed")
 }

 const handleTouchablePress = () => {
  console.log("Touchable Button Pressed")
 }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello welcome to Tek Ocean, make sure you subscribe.</Text>
      <Text>Hello World</Text>

      <Button title="Press Me" onPress={handlePress} />

      <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleTouchablePress} >
        <Text style={{color: "white"}}>Touchable Button</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    color: "green"
  },
  button: {
    padding: 6,
    backgroundColor: "green"
  }
});
