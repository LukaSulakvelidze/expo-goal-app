import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.UIpressed}
        onPress={props.deleteGoalHandler.bind(this, props.id)}
      >
        <Text style={styles.goalItemText}>{props.goalText}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    backgroundColor: "#000080",
    borderRadius: 10,
  },

  UIpressed: {
    opacity: 0.5,
  },

  goalItemText: {
    padding: 10,
    color: "white",
  },
});
