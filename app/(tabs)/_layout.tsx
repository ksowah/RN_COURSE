import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabGroup = () => {
  return (
    <Tabs>
        <Tabs.Screen name='(home)' options={{headerShown: false, title: "Home"}} />
        <Tabs.Screen name='products' options={{title: "Products"}} />
        <Tabs.Screen name='profile' options={{title: "Profile"}} />
    </Tabs>
  )
}

export default TabGroup

const styles = StyleSheet.create({})