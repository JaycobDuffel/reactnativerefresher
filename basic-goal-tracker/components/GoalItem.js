import { StyleSheet, Text, Pressable, View } from "react-native";

export default function GoalItem({ item, onDeleteItem }) {

  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color: '#dddddd'}} style={({pressed}) => pressed && styles.pressedItem} onPress={onDeleteItem.bind(this, item.id)}>
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    backgroundColor: "rebeccapurple",
    borderRadius: 5,
  },
  pressedItem: {
    backgroundColor: "red",
    opacity: 0.7,
  },
  goalText: {
    color: "#ffd800",
    padding: 8,
  },
});
