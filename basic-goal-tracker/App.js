import { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
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
            return <GoalItem item={itemData.item} />;
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
