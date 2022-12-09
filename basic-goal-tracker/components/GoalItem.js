import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ item, deleteItemHandler }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleDeleteModal = () => {
    setModalVisible((currentModalState) => !currentModalState);
  };

  const onDeleteItem = () => {
    deleteItemHandler(item.id);
    toggleDeleteModal();
  };

  return (
    <View style={styles.goalItem}>
      <Modal visible={modalVisible}>
        <View style={styles.deleteGoalContainer}>
          <View style={styles.text}>
            <Text>
              Are you sure you want to{" "}
              <Text style={styles.deleteText}>delete</Text> this goal?
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Close"
                color="#ffd800"
                onPress={toggleDeleteModal}
              />
            </View>
            <View style={styles.button}>
              <Button title="Delete" color="#f31282" onPress={onDeleteItem} />
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={toggleDeleteModal}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteGoalContainer: {
    backgroundColor: "#311b6b",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  deleteText: {
    color: "#f31282",
  },
  goalItem: {
    alignItems: "center",
    backgroundColor: "rebeccapurple",
    borderRadius: 6,
    justifyContent: "center",
    minHeight: 50,
    marginVertical: 10,
  },
  goalText: {
    color: "#ffd800",
    padding: 8,
  },
  pressedItem: {
    alignItems: "center",
    borderRadius: 6,
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 16,
  },
});
