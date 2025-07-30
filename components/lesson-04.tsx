import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const LessonFour = () => {
  const [name, setName] = useState("Kelvin");
  const [age, setAge] = useState(12);
  return (
    <View style={{ flex: 1, marginVertical: 30 }}>
      <Text>Enter your name:</Text>
      <TextInput
        placeholder="eg. Joe"
        style={styles.textInput}
        
        onChangeText={(text) => setName(text)}
      />

      <Text>Enter your age:</Text>
      <TextInput
        placeholder="eg. 30"
        keyboardType="numeric"
        style={styles.textInput}
        onChangeText={(age) => setAge(Number(age))}
      />

      <Text style={{ fontSize: 25 }}>My name is {name}</Text>
      <Text style={{ fontSize: 25 }}>I am {age} years old</Text>
    </View>
  );
};

export default LessonFour;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#1E1E1E",
    padding: 10,
    width: 250,
  },
});
