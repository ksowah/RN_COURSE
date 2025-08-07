import { StyleSheet, Text, View } from "react-native";

const LessonSeven = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Vanilla CSS</Text>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>KS</Text>
          </View>

          <View>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              Kelvin Sowah
            </Text>
            <Text>Subscribe to Tek OceanOcean 🌊</Text>
          </View>
        </View>

        <View style={{ marginTop: 12 }}>
          <Text style={{ color: "#313131" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam aut
            laborum praesentium sapiente repellendus? Excepturi id fugiat enim
            consequatur perferendis fugit aspernatur perspiciatis, ex iure
            corrupti molestiae inventore officiis aut.
          </Text>
        </View>
      </View>

      {/* TAILWIND CSS BUILD */}

      <Text className="font-bold text-[20px] ">Tailwind CSS</Text>
      <View className="h-[200px] bg-[#D2D2D2] w-[100%] rounded-xl p-[14] animate-bounce mt-[4rem] ">
        <View className="flex flex-row items-center">
          <View className="h-[50px] w-[50px] bg-gray-500 rounded-full items-center justify-center mr-3 ">
            <Text className="font-bold text-[18px]">KS</Text>
          </View>

          <View>
            <Text className="font-medium text-[16px]">Kelvin Sowah</Text>
            <Text>Subscribe to Tek OceanOcean 🌊</Text>
          </View>
        </View>

        <View className="mt-[12px] ">
          <Text className="text-[#313131]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam aut
            laborum praesentium sapiente repellendus? Excepturi id fugiat enim
            consequatur perferendis fugit aspernatur perspiciatis, ex iure
            corrupti molestiae inventore officiis aut.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LessonSeven;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    height: 200,
    width: "100%",
    backgroundColor: "#D2D2D2",
    borderRadius: 14,
    padding: 14,
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    height: 50,
    width: 50,
    backgroundColor: "gray",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
});
