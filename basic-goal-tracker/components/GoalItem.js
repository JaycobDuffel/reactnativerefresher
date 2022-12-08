import { StyleSheet, Text, View } from "react-native";

export default function GoalItem({ item }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    marginVertical: 8,
    backgroundColor: "rebeccapurple",
    borderRadius: 5,
  },
  goalText: {
    color: "#ffd800",
  },
});
