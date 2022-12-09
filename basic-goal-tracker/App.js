import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [addGoalModalVisible, setAddGoalModalVisible] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: enteredGoal + currentGoals.length.toString() },
    ]);
    toggleAddGoalModal();
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const toggleAddGoalModal = () => {
    setAddGoalModalVisible((currentModalState) => !currentModalState);
  };

  return (
    <View style={styles.appContainer}>
      {!addGoalModalVisible && (
        <Button
          title="Add New Goal"
          color="rebeccapurple"
          onPress={toggleAddGoalModal}
        />
      )}
      <GoalInput visible={addGoalModalVisible} setVisible={toggleAddGoalModal} onGoalAdd={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={(itemData) => {
            return (
              <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 1,
  },
});
