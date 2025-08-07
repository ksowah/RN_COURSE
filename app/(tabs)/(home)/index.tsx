import LessonTwo from "@/components/lesson-02";
import LessonThree from "@/components/lesson-03";
import LessonFour from "@/components/lesson-04";
import LessonFive from "@/components/lesson-05";
import LessonSix from "@/components/lesson-06";
import LessonSeven from "@/components/lesson-07";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <LessonTwo /> */}
      {/* <LessonThree /> */}
      {/* <LessonFour /> */}
      {/* <LessonFive /> */}
      {/* <LessonSix /> */}
      {/* <LessonSeven /> */}

      <Link href={"/details"}>Details Screen</Link>
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
