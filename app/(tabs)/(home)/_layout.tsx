import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack screenOptions={{headerStyle: {backgroundColor: "#eee"}, headerTintColor: "red"}}>
        <Stack.Screen name='index' options={{title: "Home"}} />
        <Stack.Screen name='details' options={{title: "Details"}} />
    </Stack>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})