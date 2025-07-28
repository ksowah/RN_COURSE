import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const LessonThree = () => {
  const [name, setName] = useState("Kelvin");
  const [age, setAge] = useState(75);

  const changeName = () => {
    setName("Sowah")
    setAge(85)
  }

  const handleOnMount = () => {
    console.log("App Successfully Mounted")
  }

  useEffect(() => {
    handleOnMount()
  }, [name])
  

  return (
    <View>
      <Text style={{ fontSize: 30 }}>My name is {name}</Text>
      <Text style={{ fontSize: 30 }}>I am {age} years old</Text>

      <Button title="Change Name" onPress={changeName} />
    </View>
  );
};

export default LessonThree;

const styles = StyleSheet.create({});
