import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScrollView, FlatList } from "react-native";

const animals = [
  {
    id: 1,
    name: "Cat",
  },
  {
    id: 2,
    name: "Dog",
  },
  {
    id: 3,
    name: "Goat",
  },
  {
    id: 4,
    name: "Cow",
  },
  {
    id: 5,
    name: "Sheep",
  },
  {
    id: 6,
    name: "Mouse",
  },
  {
    id: 7,
    name: "Fowl",
  },
  {
    id: 8,
    name: "Lion",
  },
  {
    id: 9,
    name: "Tiger",
  },
  {
    id: 10,
    name: "Elephant",
  },
  {
    id: 11,
    name: "Snake",
  },
  {
    id: 12,
    name: "Python",
  },
];

const LessonFive = () => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefreshing = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      console.log("refresh complete!!")
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={animals}
        onRefresh={handleRefreshing}
        refreshing={refreshing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.wrapper} key={item.id}>
            <Text>{item.name}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.lineDivider} />}
        ListEmptyComponent={() => <Text>There is no data at the moment</Text>}
        ListFooterComponent={() => <Text>This is the footer</Text>}
        ListHeaderComponent={() => <Text>This is the header</Text>}
      />
      {/* <ScrollView>
        {animals.map((animal, index) => {
          return (
            <View style={styles.wrapper} key={animal.id}>
              <Text>{animal.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

export default LessonFive;

const styles = StyleSheet.create({
  wrapper: {
    padding: 14,
    backgroundColor: "violet",
    borderRadius: 12,
    marginVertical: 14,
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  lineDivider: {
    height: 1,
    width: "100%",
    backgroundColor: "gray",
  },
});
