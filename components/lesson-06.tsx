import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useFetch } from "@/services/api";

const LessonSix = () => {
  const {data, error, loading, refetch} = useFetch("https://dummyjson.com/products")

  if (loading) return <ActivityIndicator size={"large"} color={"red"} />
  if (error) return <Text>Error: {error}</Text>

  return (
    <View style={{ flex: 1, padding: 14 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <Text style={{fontWeight: "600", fontSize: 16, marginBottom: 10}}>{item?.title}</Text>
            <Text>{item?.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default LessonSix;

const styles = StyleSheet.create({
  wrapper: {
    padding: 14,
    marginVertical: 10,
    backgroundColor: "violet",
    borderRadius: 10
  },
});
