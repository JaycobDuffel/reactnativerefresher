import { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: enteredGoal + currentGoals.length.toString() },
    ]);
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onGoalAdd={addGoalHandler} />
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
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 5,
  },
});
