import { StyleSheet, Text, Pressable, View } from "react-native";

export default function GoalItem({ item, onDeleteItem }) {

  return (
    <Pressable onPress={onDeleteItem.bind(this, item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
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
