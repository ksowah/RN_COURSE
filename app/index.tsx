import LessonTwo from "@/components/lesson-02";
import LessonThree from "@/components/lesson-03";
import LessonFour from "@/components/lesson-04";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <LessonTwo /> */}
      {/* <LessonThree /> */}
      <LessonFour />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },

});
