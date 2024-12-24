import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import InputView from "./components/InputView";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (inputValue) => {
    if (inputValue.trim() !== "") {
      setGoals((prev) => [
        ...prev,
        { key: new Date().getTime(), goal: inputValue },
      ]);
      setIsModalVisible(false);
    }
  };

  const deleteGoalHandler = (key) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== key);
    });
  };

  const modalStatHandler = (bool) => {
    setIsModalVisible(bool);
  };

  return (
    <View style={styles.Appcontainer}>
      <Button onPress={() => modalStatHandler(true)} title="Tap to Add" />
      <InputView
        isVisible={isModalVisible}
        addGoal={addGoalHandler}
        modalStatHandler={() => modalStatHandler(false)}
      />
      <View style={styles.goalsList}>
        <FlatList
          data={goals}
          renderItem={(goalData) => {
            return (
              <GoalItem
                deleteGoalHandler={deleteGoalHandler}
                id={goalData.item.key}
                goalText={goalData.item.goal}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    marginTop: 60,
    backgroundColor: "#fff",
  },

  goalsList: {
    flex: 5,
    width: "100%",
    padding: 20,
  },
});
